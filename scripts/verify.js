const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");
const { execFileSync } = require("child_process");
const esbuild = require("C:/Users/user/AppData/Local/npm-cache/_npx/fd45a72a545557e9/node_modules/esbuild");

const root = path.resolve(__dirname, "..");

// 1. TypeScript check
execFileSync(
  process.execPath,
  [
    "C:/Users/user/AppData/Local/npm-cache/_npx/83f51bd5dfda7e85/node_modules/typescript/bin/tsc",
    "-p",
    path.join(root, "tsconfig.json"),
    "--noEmit"
  ],
  { stdio: "inherit" }
);
console.log("TSC typecheck: OK");

// 2. Verify built HTML, split bundles, PWA files & offline audio integrity
const outIndex = path.join(root, "index.html");
const outOffline = path.join(root, "Немецкий_с_нуля_офлайн (1).html");
const outManifest = path.join(root, "manifest.json");
const outSw = path.join(root, "sw.js");
const bundlePath = path.join(root, "dist", "bundle.js");
const audBundlePath = path.join(root, "dist", "aud.js");

assert(fs.existsSync(outIndex), "index.html missing");
assert(fs.existsSync(outOffline), "offline html missing");
assert(fs.existsSync(outManifest), "manifest.json missing");
assert(fs.existsSync(outSw), "sw.js missing");
assert(fs.existsSync(bundlePath), "dist/bundle.js missing");
assert(fs.existsSync(audBundlePath), "dist/aud.js missing");

const htmlIndex = fs.readFileSync(outIndex, "utf8");
const htmlOffline = fs.readFileSync(outOffline, "utf8");
assert(htmlIndex.includes("dist/bundle.js"), "index.html missing dist/bundle.js reference");
assert(htmlIndex.includes("dist/aud.js"), "index.html missing dist/aud.js lazy reference");
assert(htmlIndex.includes("manifest.json"), "index.html missing manifest.json link");
assert(Buffer.byteLength(htmlIndex, "utf8") < 32768, `Expected lightweight index.html < 32KB, got ${Buffer.byteLength(htmlIndex, "utf8")}`);

JSON.parse(fs.readFileSync(outManifest, "utf8"));
const swCode = fs.readFileSync(outSw, "utf8");
new vm.Script(swCode, { filename: "sw.js" });

const bundleCode = fs.readFileSync(bundlePath, "utf8");
new vm.Script(bundleCode, { filename: "dist/bundle.js" });

const audCode = fs.readFileSync(audBundlePath, "utf8");
const audSandbox = { window: {} };
vm.runInNewContext(audCode, audSandbox, { filename: "dist/aud.js" });
const splitAudObj = audSandbox.window.__OFFLINE_AUD__;
assert(splitAudObj && typeof splitAudObj === "object", "dist/aud.js did not set window.__OFFLINE_AUD__");
assert.strictEqual(Object.keys(splitAudObj).length, 188, "Expected 188 offline audio keys in dist/aud.js");

const audMatch = htmlOffline.match(/window\.__OFFLINE_AUD__=(\{[\s\S]*?\});<\/script>/);
assert(audMatch && audMatch[1], "Offline AUD missing in standalone offline HTML");
const audObj = JSON.parse(audMatch[1].replace(/<\\\//g, "</"));
assert.strictEqual(Object.keys(audObj).length, 188, "Expected 188 offline audio keys in standalone offline HTML");

// 3. Server-render React components & verify data integrity
const verifyEntry = `
  import React from "react";
  import { renderToStaticMarkup } from "react-dom/server";
  import { VOCAB, CATEGORIES } from "./src/data/vocab";
  import { LESSONS, ALPHABET, SOUND_RULES } from "./src/data/lessons";
  import { SENTENCES, VERBS, STORIES, GRAMMAR_REF } from "./src/data/skills";
  import { ACHIEVEMENTS, RANKS, LEAGUES, computeStats, buildLeaderboard } from "./src/data/achievements";
  import { App } from "./src/App";
  import { StatsTab } from "./src/components/StatsTab";
  import { CourseTab } from "./src/components/CourseTab";
  import { VocabTab } from "./src/components/VocabTab";
  import { SkillsTab } from "./src/components/SkillsTab";
  import { GrammarTab } from "./src/components/GrammarTab";

  export {
    React, renderToStaticMarkup,
    VOCAB, CATEGORIES, LESSONS, ALPHABET, SOUND_RULES,
    SENTENCES, VERBS, STORIES, GRAMMAR_REF,
    ACHIEVEMENTS, RANKS, LEAGUES, computeStats, buildLeaderboard,
    App, StatsTab, CourseTab, VocabTab, SkillsTab, GrammarTab
  };
`;

const built = esbuild.buildSync({
  stdin: {
    contents: verifyEntry,
    resolveDir: root,
    loader: "tsx"
  },
  bundle: true,
  platform: "node",
  format: "cjs",
  write: false
});

const mod = { exports: {} };
const fn = new Function("exports", "require", "module", "__filename", "__dirname", built.outputFiles[0].text);
fn(mod.exports, require, mod, path.join(root, "_verify.cjs"), root);

const m = mod.exports;

assert(m.VOCAB.length >= 1500, `VOCAB length ${m.VOCAB.length}`);
assert.strictEqual(m.CATEGORIES.length, 28, "Expected 28 categories");
assert.strictEqual(m.LESSONS.length, 25, "Expected 25 lessons");
assert(m.SENTENCES.length >= 100, `SENTENCES length ${m.SENTENCES.length}`);
assert(m.VERBS.length >= 50, `VERBS length ${m.VERBS.length}`);
assert.strictEqual(m.STORIES.length, 15, "Expected 15 stories");
assert.strictEqual(m.GRAMMAR_REF.length, 6, "Expected 6 grammar sheets");
assert.strictEqual(m.ACHIEVEMENTS.length, 30, "Expected 30 achievements");
assert.strictEqual(m.RANKS.length, 10, "Expected 10 ranks");
assert.strictEqual(m.LEAGUES.length, 4, "Expected 4 leagues");

// Render App root
const appHtml = m.renderToStaticMarkup(m.React.createElement(m.App));
assert(appHtml.includes("Deutsch Pro"), "App header missing");
assert(appHtml.includes("00:00:00 / 02:00:00"), "2-hour timer missing");
assert(appHtml.includes("Anfänger"), "Rank badge missing");

// Simulate populated state and test StatsTab subviews
const sampleState = {
  tab: "stats",
  statsSubTab: "coverage",
  theme: "light",
  lessonScores: { "0": 100, "1": 85 },
  srs: {
    "der Tisch": { box: 4, next: Date.now() + 99999, seen: 2, ok: 2 },
    "die Schule": { box: 3, next: Date.now() + 99999, seen: 1, ok: 1 }
  },
  studyLog: { "2026-11-23": { sec: 7200, blocks: { b1: true } } },
  skillStats: {
    articlesOk: 32,
    articlesTotal: 35,
    builderOk: 10,
    builderTotal: 12,
    listeningOk: 8,
    listeningTotal: 10,
    verbsOk: 12,
    verbsTotal: 15,
    speakingCount: 5,
    storiesCompleted: [0, 1],
    prepsOk: 15,
    prepsTotal: 18,
    casesOk: 14,
    casesTotal: 16,
    dialogsCompleted: ["cafe"],
    idiomsOk: 10,
    idiomsTotal: 12,
    blitzBest: 18,
    examsPassed: ["A1"]
  },
  unlockedAchievements: ["first_step", "two_hour_hero", "lesson_1"],
  bonusXp: 400,
  goalMin: 120,
  autoTimer: true,
  voiceMode: "auto",
  voiceURI: "",
  speed: 0.8,
  pauseArticle: false,
  vocabFilter: { cat: "ALL", lvl: "ALL", stat: "ALL", q: "", page: 0 },
  vocabMode: "list",
  profile: { name: "Тест Игрок", avatar: "🦊" }
};

const stats = m.computeStats(sampleState);
assert(stats.totalXp > 1500, "Expected computed XP > 1500");
assert(stats.overallCoverage > 0, "Expected positive overallCoverage");
assert.strictEqual(stats.skillCoverage.length, 12, "Expected 12 skills in coverage");

const lb = m.buildLeaderboard(sampleState, stats, "xp");
assert.strictEqual(lb.length, 15, "Expected 15 leaderboard participants");
assert(lb.some(p => p.isUser && p.name === "Тест Игрок"), "User missing from leaderboard");

for (const sub of ["coverage", "achievements", "analytics", "leaderboard"]) {
  const html = m.renderToStaticMarkup(
    m.React.createElement(m.StatsTab, {
      state: sampleState,
      stats,
      subTab: sub,
      onSetSubTab: () => {},
      onUpdateProfile: () => {},
      onPracticeCategory: () => {},
      onOpenSkill: () => {},
      onImportState: () => {}
    })
  );
  assert(html.length > 500, `StatsTab ${sub} rendered empty`);
}

// Render CourseTab, VocabTab, SkillsTab, GrammarTab
const courseHtml = m.renderToStaticMarkup(
  m.React.createElement(m.CourseTab, {
    lessonScores: sampleState.lessonScores,
    activeLesson: null,
    onSetActiveLesson: () => {},
    onSaveScore: () => {},
    onSpeak: () => {},
    onActivity: () => {}
  })
);
assert(courseHtml.includes("25 уроков"), "CourseTab 25 lessons missing");

const vocabHtml = m.renderToStaticMarkup(
  m.React.createElement(m.VocabTab, {
    srs: sampleState.srs,
    vocabMode: "list",
    filter: sampleState.vocabFilter,
    onSetMode: () => {},
    onUpdateFilter: () => {},
    onToggleKnown: () => {},
    onRateSRS: () => {},
    onSpeak: () => {},
    onActivity: () => {}
  })
);
assert(vocabHtml.includes("1514 слов"), "VocabTab 1514 words missing");

const allSkills = [
  null,
  "articles",
  "builder",
  "listening",
  "verbs",
  "speaking",
  "reading",
  "preps",
  "cases",
  "dialogs",
  "idioms",
  "blitz",
  "exam"
];
for (const sk of allSkills) {
  const skHtml = m.renderToStaticMarkup(
    m.React.createElement(m.SkillsTab, {
      activeSkill: sk,
      skillStats: sampleState.skillStats,
      onSelectSkill: () => {},
      onRecordSkill: () => {},
      onMarkStoryDone: () => {},
      onMarkDialogDone: () => {},
      onUpdateBlitzBest: () => {},
      onPassExam: () => {},
      onSpeak: () => {},
      onActivity: () => {}
    })
  );
  assert(skHtml.length > 200, `SkillsTab ${sk} failed`);
}

const gramHtml = m.renderToStaticMarkup(m.React.createElement(m.GrammarTab));
assert(gramHtml.includes("справочник грамматики"), "GrammarTab missing");

console.log("REACT_VERSION:", m.React.version);
console.log("VOCAB:", m.VOCAB.length, "CATEGORIES:", m.CATEGORIES.length);
console.log("LESSONS:", m.LESSONS.length, "SENTENCES:", m.SENTENCES.length);
console.log("VERBS:", m.VERBS.length, "STORIES:", m.STORIES.length);
console.log("ACHIEVEMENTS:", m.ACHIEVEMENTS.length, "RANKS:", m.RANKS.length, "LEAGUES:", m.LEAGUES.length);
console.log("LEADERBOARD_SIZE:", lb.length, "SAMPLE_XP:", stats.totalXp, "SAMPLE_COVERAGE:", stats.overallCoverage + "%");
console.log("AUD_KEYS:", Object.keys(audObj).length);
console.log("ALL REACT + TS CHECKS PASSED");
