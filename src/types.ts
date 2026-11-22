export type CEFRLevel = "A1" | "A2" | "B1";
export type LessonLevel = "A1.1" | "A1.2" | "A2.1" | "A2.2" | "B1.1";
export type TabId = "today" | "course" | "vocab" | "skills" | "stats" | "grammar";
export type StatsSubTab = "coverage" | "achievements" | "analytics" | "leaderboard";
export type SkillId =
  | "articles"
  | "builder"
  | "listening"
  | "verbs"
  | "speaking"
  | "reading"
  | "preps"
  | "cases"
  | "dialogs"
  | "idioms"
  | "blitz"
  | "exam";
export type VoiceMode = "auto" | "hd" | "browser" | "offline";
export type LeaderboardSort = "xp" | "minutes" | "coverage" | "streak";

export type VocabTuple = [
  de: string,
  tr: string,
  ru: string,
  category: string,
  level: CEFRLevel,
  exDe: string,
  exRu: string,
  forms: string
];

export type LessonWordTuple = [de: string, tr: string, ru: string];
export type DialogueLineTuple = [de: string, tr: string, ru: string];
export type QuizQuestionTuple = [question: string, answer: string, options: string[]];
export type SentenceHintTuple = [de: string, ru: string, hint: string];
export type SoundExampleTuple = [de: string, ru: string];
export type SoundRuleTuple = [label: string, hint: string, examples: SoundExampleTuple[]];
export type AlphabetTuple = [letter: string, ruName: string, speechText: string];

export interface LessonItem {
  t: string;
  lvl: LessonLevel;
  desc: string;
  g: string;
  e?: string;
  w: LessonWordTuple[];
  d: DialogueLineTuple[];
  f: QuizQuestionTuple[];
  sb?: SentenceHintTuple[];
  r?: [string, string, string];
  wr?: string;
  sn?: SoundRuleTuple[];
}

export type SentenceTuple = [de: string, ru: string, hint: string, level: CEFRLevel];

export interface VerbItem {
  inf: string;
  ru: string;
  pr: [string, string, string, string, string, string];
  pf: string;
  pt: string;
  lvl: CEFRLevel;
}

export interface StoryItem {
  title: string;
  level: CEFRLevel;
  topic: string;
  text_lines: [string, string, string][];
  questions: [string, string, string[]][];
}

export interface GrammarSheet {
  id: string;
  title: string;
  badge: string;
  html: string;
}

export interface SRSItem {
  box: number;
  next: number;
  seen: number;
  ok: number;
}

export interface DayLog {
  sec: number;
  blocks: Record<string, boolean>;
  xp?: number;
  exercises?: number;
}

export interface SkillStats {
  articlesOk: number;
  articlesTotal: number;
  builderOk: number;
  builderTotal: number;
  listeningOk: number;
  listeningTotal: number;
  verbsOk: number;
  verbsTotal: number;
  speakingCount: number;
  storiesCompleted: number[];
  prepsOk: number;
  prepsTotal: number;
  casesOk: number;
  casesTotal: number;
  dialogsCompleted: string[];
  idiomsOk: number;
  idiomsTotal: number;
  blitzBest: number;
  examsPassed: CEFRLevel[];
}

export interface VerbPrepItem {
  verb: string;
  prep: string;
  kasus: "Akkusativ" | "Dativ";
  question: string;
  ru: string;
  exampleDe: string;
  exampleRu: string;
  options: string[];
  lvl: CEFRLevel;
}

export interface CaseDrillItem {
  sentence: string;
  answer: string;
  options: string[];
  kasus: "Nominativ" | "Akkusativ" | "Dativ" | "Genitiv";
  rule: string;
  ru: string;
  lvl: CEFRLevel;
}

export interface RoleplayOption {
  de: string;
  ru: string;
  isBest: boolean;
  feedback: string;
}

export interface RoleplayStep {
  npcDe: string;
  npcRu: string;
  options: RoleplayOption[];
}

export interface RoleplayDialog {
  id: string;
  title: string;
  level: CEFRLevel;
  setting: string;
  steps: RoleplayStep[];
}

export interface IdiomDrillItem {
  phrase: string;
  ru: string;
  literal: string;
  exampleDe: string;
  exampleRu: string;
  options: string[];
  lvl: CEFRLevel;
}

export interface ExamQuestion {
  part: "Lesen" | "Hören" | "Grammatik";
  prompt: string;
  audioScript?: string;
  textBlock?: string;
  answer: string;
  options: string[];
  explain: string;
}

export interface ExamModule {
  level: CEFRLevel;
  title: string;
  desc: string;
  questions: ExamQuestion[];
}

export interface UserProfile {
  name: string;
  avatar: string;
}

export interface VocabFilterState {
  cat: string;
  lvl: string;
  stat: string;
  q: string;
  page: number;
}

export interface AppState {
  tab: TabId;
  statsSubTab: StatsSubTab;
  theme: "light" | "dark";
  lessonScores: Record<string, number>;
  srs: Record<string, SRSItem>;
  studyLog: Record<string, DayLog>;
  skillStats: SkillStats;
  unlockedAchievements: string[];
  bonusXp: number;
  goalMin: number;
  autoTimer: boolean;
  voiceMode: VoiceMode;
  voiceURI: string;
  speed: number;
  pauseArticle: boolean;
  vocabFilter: VocabFilterState;
  vocabMode: "list" | "srs";
  profile: UserProfile;
}

export interface CategoryCoverage {
  name: string;
  learned: number;
  learning: number;
  total: number;
  pct: number;
}

export interface SkillCoverage {
  id: SkillId;
  title: string;
  done: number;
  target: number;
  pct: number;
}

export interface ComputedStats {
  totalXp: number;
  totalSec: number;
  totalMin: number;
  todaySec: number;
  weekMin: number;
  bestDayMin: number;
  avgDayMin: number;
  streak: number;
  bestStreak: number;
  doneLessons: number;
  knownWords: number;
  learningWords: number;
  newWords: number;
  srsBoxes: number[];
  overallCoverage: number;
  levelCoverage: Record<CEFRLevel, { learned: number; total: number; pct: number }>;
  categoryCoverage: CategoryCoverage[];
  skillCoverage: SkillCoverage[];
  totalExercises: number;
  totalCorrect: number;
  accuracyPct: number;
  storiesDone: number;
  unlockedCount: number;
}

export type AchievementCategory =
  | "Таймер и Дисциплина"
  | "Словарь и Память"
  | "Курс и Грамматика"
  | "Мастерство скиллов";

export interface AchievementDef {
  id: string;
  title: string;
  desc: string;
  icon: string;
  category: AchievementCategory;
  xp: number;
  target: number;
  getProgress: (state: AppState, stats: ComputedStats) => number;
}

export interface RankDef {
  level: number;
  title: string;
  ru: string;
  minXp: number;
  badge: string;
}

export interface LeagueDef {
  id: string;
  name: string;
  icon: string;
  minXp: number;
  color: string;
}

export interface LeaderboardPlayer {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  weekMin: number;
  coverage: number;
  streak: number;
  isUser?: boolean;
}

declare global {
  interface Window {
    __OFFLINE_AUD__?: Record<string, string>;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
    SpeechRecognition?: new () => SpeechRecognitionLike;
  }
}

export interface SpeechRecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((ev: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((ev: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
}
