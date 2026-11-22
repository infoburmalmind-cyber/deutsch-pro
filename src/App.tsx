import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
  AppState,
  SkillId,
  StatsSubTab,
  TabId,
  UserProfile,
  VocabFilterState
} from "./types";
import { ACHIEVEMENTS, computeStats, todayKey } from "./data/achievements";
import { LESSONS } from "./data/lessons";
import { sayGerman } from "./services/voice";
import { Header } from "./components/Header";
import { TodayTab } from "./components/TodayTab";
import { CourseTab } from "./components/CourseTab";
import { VocabTab } from "./components/VocabTab";
import { SkillsTab } from "./components/SkillsTab";
import { StatsTab } from "./components/StatsTab";
import { GrammarTab } from "./components/GrammarTab";
import { VoiceModal } from "./components/VoiceModal";

const DEFAULT_STATE: AppState = {
  tab: "today",
  statsSubTab: "coverage",
  theme: "light",
  lessonScores: {},
  srs: {},
  studyLog: {},
  skillStats: {
    articlesOk: 0,
    articlesTotal: 0,
    builderOk: 0,
    builderTotal: 0,
    listeningOk: 0,
    listeningTotal: 0,
    verbsOk: 0,
    verbsTotal: 0,
    speakingCount: 0,
    storiesCompleted: [],
    prepsOk: 0,
    prepsTotal: 0,
    casesOk: 0,
    casesTotal: 0,
    dialogsCompleted: [],
    idiomsOk: 0,
    idiomsTotal: 0,
    blitzBest: 0,
    examsPassed: []
  },
  unlockedAchievements: [],
  bonusXp: 0,
  goalMin: 120,
  autoTimer: true,
  voiceMode: "auto",
  voiceURI: "",
  speed: 0.8,
  pauseArticle: false,
  vocabFilter: { cat: "ALL", lvl: "ALL", stat: "ALL", q: "", page: 0 },
  vocabMode: "list",
  profile: { name: "Ученик", avatar: "🇩🇪" }
};

function loadInitialState(): AppState {
  try {
    const legacy = JSON.parse(localStorage.getItem("kurs") || "{}");
    const saved = JSON.parse(localStorage.getItem("deutsch_pro_v2") || "null");
    const base: AppState = {
      ...DEFAULT_STATE,
      ...(saved && typeof saved === "object" ? saved : {}),
      skillStats: {
        ...DEFAULT_STATE.skillStats,
        ...(saved?.skillStats || {})
      },
      vocabFilter: {
        ...DEFAULT_STATE.vocabFilter,
        ...(saved?.vocabFilter || {})
      },
      profile: {
        ...DEFAULT_STATE.profile,
        ...(saved?.profile || {})
      },
      unlockedAchievements: Array.isArray(saved?.unlockedAchievements)
        ? saved.unlockedAchievements
        : []
    };

    const mergedScores: Record<string, number> = { ...(base.lessonScores || {}) };
    if (legacy && typeof legacy === "object") {
      Object.keys(legacy).forEach(k => {
        mergedScores[k] = Math.max(mergedScores[k] || 0, Number(legacy[k]) || 0);
      });
    }
    base.lessonScores = mergedScores;

    if (
      !saved &&
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      base.theme = "dark";
    }
    return base;
  } catch {
    return DEFAULT_STATE;
  }
}

export const App: React.FC = () => {
  const [state, setState] = useState<AppState>(() => loadInitialState());
  const [timerRunning, setTimerRunning] = useState(false);
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState<number | null>(null);
  const [activeSkill, setActiveSkill] = useState<SkillId | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const lastActivityRef = useRef<number>(Date.now());
  const toastTimerRef = useRef<number | null>(null);

  const notify = useCallback((msg: string) => {
    setToastMsg(msg);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToastMsg(null), 3500);
  }, []);

  // Theme sync
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", state.theme);
  }, [state.theme]);

  // Persist state
  useEffect(() => {
    try {
      localStorage.setItem("deutsch_pro_v2", JSON.stringify(state));
      localStorage.setItem("kurs", JSON.stringify(state.lessonScores));
    } catch {}
  }, [state]);

  const stats = useMemo(() => computeStats(state), [state]);

  // Achievement unlock watcher
  useEffect(() => {
    const newlyUnlocked = ACHIEVEMENTS.filter(
      a =>
        !state.unlockedAchievements.includes(a.id) &&
        a.getProgress(state, stats) >= a.target
    );
    if (newlyUnlocked.length > 0) {
      const gainedXp = newlyUnlocked.reduce((sum, a) => sum + a.xp, 0);
      setState(prev => ({
        ...prev,
        unlockedAchievements: [
          ...prev.unlockedAchievements,
          ...newlyUnlocked.map(a => a.id)
        ],
        bonusXp: (prev.bonusXp || 0) + gainedXp
      }));
      const first = newlyUnlocked[0];
      notify(
        `🏅 Новое достижение: ${first.icon} ${first.title} (+${gainedXp} XP)!`
      );
    }
  }, [state, stats, notify]);

  // 1-second timer tick
  useEffect(() => {
    if (!timerRunning) return;
    const id = window.setInterval(() => {
      if (Date.now() - lastActivityRef.current > 180000) {
        setTimerRunning(false);
        notify("Таймер поставлен на паузу из-за 3 минут неактивности");
        return;
      }
      setState(prev => {
        const k = todayKey();
        const curDay = prev.studyLog[k] || { sec: 0, blocks: {} };
        const nextSec = curDay.sec + 1;
        if (nextSec === (prev.goalMin || 120) * 60) {
          notify(`🎉 Поздравляем! Цель дня (${prev.goalMin} мин) выполнена!`);
        }
        return {
          ...prev,
          studyLog: {
            ...prev.studyLog,
            [k]: { ...curDay, sec: nextSec }
          }
        };
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [timerRunning, notify]);

  const markActivity = useCallback(() => {
    lastActivityRef.current = Date.now();
    if (state.autoTimer && !timerRunning && state.tab !== "today") {
      setTimerRunning(true);
    }
  }, [state.autoTimer, state.tab, timerRunning]);

  const speak = useCallback(
    (text: string) => {
      markActivity();
      void sayGerman(
        text,
        {
          voiceMode: state.voiceMode,
          voiceURI: state.voiceURI,
          speed: state.speed,
          pauseArticle: state.pauseArticle
        },
        notify
      );
    },
    [markActivity, state.voiceMode, state.voiceURI, state.speed, state.pauseArticle, notify]
  );

  const selectTab = (tab: TabId) => {
    setState(prev => ({ ...prev, tab }));
    if (typeof window !== "undefined" && window.scrollTo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const cycleSpeed = () => {
    setState(prev => ({
      ...prev,
      speed: prev.speed >= 0.95 ? 0.8 : prev.speed >= 0.7 ? 0.55 : 1.0
    }));
  };

  const openNextLesson = () => {
    const nextIdx = LESSONS.findIndex((_, i) => (state.lessonScores[String(i)] || 0) < 70);
    setActiveLesson(nextIdx >= 0 ? nextIdx : 0);
    selectTab("course");
  };

  return (
    <>
      <Header
        tab={state.tab}
        onSelectTab={selectTab}
        stats={stats}
        goalMin={state.goalMin}
        timerRunning={timerRunning}
        onToggleTimer={() => {
          lastActivityRef.current = Date.now();
          setTimerRunning(r => !r);
        }}
        speed={state.speed}
        onCycleSpeed={cycleSpeed}
        onOpenVoice={() => setVoiceModalOpen(true)}
        theme={state.theme}
        onToggleTheme={() =>
          setState(prev => ({ ...prev, theme: prev.theme === "dark" ? "light" : "dark" }))
        }
      />

      <main>
        {state.tab === "today" && (
          <TodayTab
            state={state}
            stats={stats}
            timerRunning={timerRunning}
            onToggleTimer={() => {
              lastActivityRef.current = Date.now();
              setTimerRunning(r => !r);
            }}
            onStartTimer={() => {
              lastActivityRef.current = Date.now();
              setTimerRunning(true);
            }}
            onSetGoalMin={m => setState(prev => ({ ...prev, goalMin: m }))}
            onToggleAutoTimer={v => setState(prev => ({ ...prev, autoTimer: v }))}
            onToggleBlock={(blockId, done) =>
              setState(prev => {
                const k = todayKey();
                const day = prev.studyLog[k] || { sec: 0, blocks: {} };
                return {
                  ...prev,
                  studyLog: {
                    ...prev.studyLog,
                    [k]: { ...day, blocks: { ...day.blocks, [blockId]: done } }
                  }
                };
              })
            }
            onSpeak={speak}
            onGoTab={selectTab}
            onOpenStatsSub={sub => {
              setState(prev => ({ ...prev, statsSubTab: sub, tab: "stats" }));
            }}
            onOpenNextLesson={openNextLesson}
            onOpenVocabMode={mode =>
              setState(prev => ({ ...prev, vocabMode: mode, tab: "vocab" }))
            }
            onOpenSkill={sk => {
              setActiveSkill(sk);
              selectTab("skills");
            }}
          />
        )}

        {state.tab === "course" && (
          <CourseTab
            lessonScores={state.lessonScores}
            activeLesson={activeLesson}
            onSetActiveLesson={setActiveLesson}
            onSaveScore={(idx, pct) =>
              setState(prev => ({
                ...prev,
                lessonScores: {
                  ...prev.lessonScores,
                  [String(idx)]: Math.max(prev.lessonScores[String(idx)] || 0, pct)
                }
              }))
            }
            onSpeak={speak}
            onActivity={markActivity}
          />
        )}

        {state.tab === "vocab" && (
          <VocabTab
            srs={state.srs}
            vocabMode={state.vocabMode}
            filter={state.vocabFilter}
            onSetMode={m => setState(prev => ({ ...prev, vocabMode: m }))}
            onUpdateFilter={(patch: Partial<VocabFilterState>) =>
              setState(prev => ({
                ...prev,
                vocabFilter: { ...prev.vocabFilter, ...patch }
              }))
            }
            onToggleKnown={word => {
              markActivity();
              setState(prev => {
                const nextSrs = { ...prev.srs };
                if (nextSrs[word] && nextSrs[word].box >= 3) {
                  delete nextSrs[word];
                } else {
                  nextSrs[word] = {
                    box: 4,
                    next: Date.now() + 7 * 86400000,
                    seen: (nextSrs[word]?.seen || 0) + 1,
                    ok: (nextSrs[word]?.ok || 0) + 1
                  };
                }
                return { ...prev, srs: nextSrs };
              });
            }}
            onRateSRS={(word, rating) => {
              markActivity();
              setState(prev => {
                const cur = prev.srs[word] || { box: 0, next: 0, seen: 0, ok: 0 };
                let box = cur.box;
                let ok = cur.ok;
                let next = Date.now();
                if (rating === 0) {
                  box = 0;
                } else {
                  ok++;
                  box = Math.min(5, cur.box + rating);
                  const days = [0, 0.01, 1, 4, 10, 25][box] || 1;
                  next = Date.now() + days * 86400000;
                }
                return {
                  ...prev,
                  srs: {
                    ...prev.srs,
                    [word]: { box, next, seen: cur.seen + 1, ok }
                  }
                };
              });
            }}
            onSpeak={speak}
            onActivity={markActivity}
          />
        )}

        {state.tab === "skills" && (
          <SkillsTab
            activeSkill={activeSkill}
            skillStats={state.skillStats}
            onSelectSkill={setActiveSkill}
            onRecordSkill={(sk, ok) => {
              markActivity();
              setState(prev => {
                const st = { ...prev.skillStats };
                if (sk === "articles") {
                  st.articlesTotal++;
                  if (ok) st.articlesOk++;
                } else if (sk === "builder") {
                  st.builderTotal++;
                  if (ok) st.builderOk++;
                } else if (sk === "listening") {
                  st.listeningTotal++;
                  if (ok) st.listeningOk++;
                } else if (sk === "verbs") {
                  st.verbsTotal++;
                  if (ok) st.verbsOk++;
                } else if (sk === "speaking") {
                  st.speakingCount++;
                } else if (sk === "preps") {
                  st.prepsTotal = (st.prepsTotal || 0) + 1;
                  if (ok) st.prepsOk = (st.prepsOk || 0) + 1;
                } else if (sk === "cases") {
                  st.casesTotal = (st.casesTotal || 0) + 1;
                  if (ok) st.casesOk = (st.casesOk || 0) + 1;
                } else if (sk === "idioms") {
                  st.idiomsTotal = (st.idiomsTotal || 0) + 1;
                  if (ok) st.idiomsOk = (st.idiomsOk || 0) + 1;
                }
                return { ...prev, skillStats: st };
              });
            }}
            onMarkStoryDone={storyIdx => {
              markActivity();
              setState(prev => {
                const list = prev.skillStats.storiesCompleted || [];
                if (list.includes(storyIdx)) return prev;
                return {
                  ...prev,
                  skillStats: {
                    ...prev.skillStats,
                    storiesCompleted: [...list, storyIdx]
                  }
                };
              });
            }}
            onMarkDialogDone={dlgId => {
              markActivity();
              setState(prev => {
                const list = prev.skillStats.dialogsCompleted || [];
                if (list.includes(dlgId)) return prev;
                return {
                  ...prev,
                  skillStats: {
                    ...prev.skillStats,
                    dialogsCompleted: [...list, dlgId]
                  }
                };
              });
            }}
            onUpdateBlitzBest={score => {
              setState(prev => ({
                ...prev,
                skillStats: {
                  ...prev.skillStats,
                  blitzBest: Math.max(prev.skillStats.blitzBest || 0, score)
                }
              }));
            }}
            onPassExam={lvl => {
              markActivity();
              setState(prev => {
                const list = prev.skillStats.examsPassed || [];
                if (list.includes(lvl)) return prev;
                return {
                  ...prev,
                  skillStats: {
                    ...prev.skillStats,
                    examsPassed: [...list, lvl]
                  }
                };
              });
            }}
            onSpeak={speak}
            onActivity={markActivity}
          />
        )}

        {state.tab === "stats" && (
          <StatsTab
            state={state}
            stats={stats}
            subTab={state.statsSubTab || "coverage"}
            onSetSubTab={(sub: StatsSubTab) =>
              setState(prev => ({ ...prev, statsSubTab: sub }))
            }
            onUpdateProfile={(patch: Partial<UserProfile>) =>
              setState(prev => ({
                ...prev,
                profile: { ...prev.profile, ...patch }
              }))
            }
            onPracticeCategory={catName => {
              setState(prev => ({
                ...prev,
                tab: "vocab",
                vocabMode: "srs",
                vocabFilter: { ...prev.vocabFilter, cat: catName, page: 0 }
              }));
            }}
            onOpenSkill={sk => {
              setActiveSkill(sk);
              selectTab("skills");
            }}
            onImportState={imported => {
              setState(prev => ({
                ...prev,
                ...imported,
                skillStats: {
                  ...DEFAULT_STATE.skillStats,
                  ...(imported.skillStats || {})
                },
                profile: {
                  ...DEFAULT_STATE.profile,
                  ...(imported.profile || {})
                }
              }));
              notify("✓ Прогресс успешно восстановлен из файла!");
            }}
          />
        )}

        {state.tab === "grammar" && <GrammarTab />}
      </main>

      <VoiceModal
        open={voiceModalOpen}
        onClose={() => setVoiceModalOpen(false)}
        voiceMode={state.voiceMode}
        voiceURI={state.voiceURI}
        speed={state.speed}
        pauseArticle={state.pauseArticle}
        onUpdate={patch => setState(prev => ({ ...prev, ...patch }))}
        onSpeak={speak}
      />

      {toastMsg && <div className="toast">{toastMsg}</div>}
    </>
  );
};
