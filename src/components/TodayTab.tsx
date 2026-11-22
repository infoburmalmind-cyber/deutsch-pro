import React from "react";
import type { AppState, ComputedStats, SkillId, StatsSubTab, TabId } from "../types";
import { ACHIEVEMENTS, getRankInfo, todayKey } from "../data/achievements";
import { LESSONS } from "../data/lessons";
import { VOCAB } from "../data/vocab";
import { fmtHMS } from "../utils";

interface TodayTabProps {
  state: AppState;
  stats: ComputedStats;
  timerRunning: boolean;
  onToggleTimer: () => void;
  onStartTimer: () => void;
  onSetGoalMin: (m: number) => void;
  onToggleAutoTimer: (v: boolean) => void;
  onToggleBlock: (blockId: string, done: boolean) => void;
  onSpeak: (text: string) => void;
  onGoTab: (tab: TabId) => void;
  onOpenStatsSub: (sub: StatsSubTab) => void;
  onOpenNextLesson: () => void;
  onOpenVocabMode: (mode: "list" | "srs") => void;
  onOpenSkill: (skill: SkillId) => void;
}

export const TodayTab: React.FC<TodayTabProps> = ({
  state,
  stats,
  timerRunning,
  onToggleTimer,
  onStartTimer,
  onSetGoalMin,
  onToggleAutoTimer,
  onToggleBlock,
  onSpeak,
  onGoTab,
  onOpenStatsSub,
  onOpenNextLesson,
  onOpenVocabMode,
  onOpenSkill
}) => {
  const goalSec = (state.goalMin || 120) * 60;
  const pct = Math.min(100, (stats.todaySec / goalSec) * 100);
  const rank = getRankInfo(stats.totalXp);
  const tKey = todayKey();
  const blocksDone = state.studyLog[tKey]?.blocks || {};

  const dueCount = VOCAB.filter(v => {
    const s = state.srs[v[0]];
    return !s || (s.next || 0) <= Date.now();
  }).length;

  const dailyBlocks = [
    {
      id: "b1",
      title: "1. Разминка: SRS-карточки слов",
      ratio: 20 / 120,
      desc: "Повторение сложных слов по алгоритму интервального запоминания",
      action: () => onOpenVocabMode("srs")
    },
    {
      id: "b2",
      title: "2. Новый урок курса и грамматика",
      ratio: 30 / 120,
      desc: "Изучение нового правила, таблицы и теста урока",
      action: () => onOpenNextLesson()
    },
    {
      id: "b3",
      title: "3. Словарь: новые слова с артиклями",
      ratio: 30 / 120,
      desc: "Учим 15–20 слов с цветом рода (der/die/das) и озвучкой",
      action: () => onOpenVocabMode("list")
    },
    {
      id: "b4",
      title: "4. Тренажёры скиллов (Фразы, Слух, Род)",
      ratio: 25 / 120,
      desc: "Конструктор предложений, артикли и диктант",
      action: () => onGoTab("skills")
    },
    {
      id: "b5",
      title: "5. Чтение живого текста и итоги дня",
      ratio: 15 / 120,
      desc: "Чтение вслух, диалоги и тест на понимание",
      action: () => onOpenSkill("reading")
    }
  ];

  const bMins = dailyBlocks.map(b => Math.max(5, Math.round(b.ratio * (state.goalMin || 120))));
  let acc = 0;
  let currIdx = bMins.length - 1;
  const minsToday = stats.todaySec / 60;
  for (let i = 0; i < bMins.length; i++) {
    acc += bMins[i];
    if (minsToday < acc) {
      currIdx = i;
      break;
    }
  }

  // Last 7 days
  const days: Array<{ label: string; mins: number; ok: boolean }> = [];
  const dNames = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const dt = new Date(now);
    dt.setDate(now.getDate() - i);
    const k = todayKey(dt);
    const mins = Math.round((state.studyLog[k]?.sec || 0) / 60);
    days.push({ label: dNames[dt.getDay()], mins, ok: mins >= (state.goalMin || 120) });
  }

  // Next 3 closest achievements
  const nextAch = ACHIEVEMENTS.filter(a => !state.unlockedAchievements.includes(a.id))
    .map(a => {
      const cur = Math.min(a.target, a.getProgress(state, stats));
      return { a, cur, pct: Math.round((cur / a.target) * 100) };
    })
    .sort((x, y) => y.pct - x.pct)
    .slice(0, 3);

  return (
    <>
      <div className="card">
        <div className="between">
          <div>
            <span className="badge g-das">План на сегодня</span>
            <h1 style={{ margin: "6px 0 4px" }}>Занятие: {state.goalMin} минут в день</h1>
            <div className="mu">
              Таймер автоматически считается, пока вы учите уроки, карточки или скиллы.
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="timer-clock" style={{ fontSize: 28 }}>
              {fmtHMS(stats.todaySec)}
            </div>
            <div className="mu">
              {stats.todaySec >= goalSec
                ? "🎉 Дневная норма выполнена!"
                : `Осталось: ${fmtHMS(goalSec - stats.todaySec)}`}
            </div>
          </div>
        </div>

        <div className="bar ok" style={{ margin: "12px 0" }}>
          <i style={{ width: `${pct.toFixed(1)}%` }} />
        </div>

        <div className="between">
          <div className="row">
            <button
              type="button"
              className={timerRunning ? "p" : "ok"}
              onClick={onToggleTimer}
            >
              {timerRunning ? "⏸ Пауза таймера" : "▶ Начать занятие (Старт)"}
            </button>
            <button
              type="button"
              className="ghost"
              onClick={() =>
                onSpeak("Guten Tag! Heute lerne ich zwei Stunden Deutsch. Das macht Spaß!")
              }
            >
              🔊 Проверить HD звук
            </button>
          </div>
          <div className="row sm">
            <span className="mu">Цель:</span>
            {[60, 90, 120, 180].map(m => (
              <button
                key={m}
                type="button"
                className={`xs ${state.goalMin === m ? "p" : ""}`}
                onClick={() => onSetGoalMin(m)}
              >
                {m} мин
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 8 }}>
          <label className="row sm mu" style={{ cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={state.autoTimer}
              onChange={e => onToggleAutoTimer(e.target.checked)}
            />
            <span>Автостарт таймера во время уроков и тренажёров</span>
          </label>
        </div>
      </div>

      <div className="grid4">
        <div
          className="card soft kpi-card"
          onClick={() => onOpenStatsSub("analytics")}
        >
          <div className="mu sm">🔥 Серия дней</div>
          <b style={{ fontSize: 20 }}>{stats.streak} дн.</b>
          <div className="sm mu">Рекорд: {stats.bestStreak} дн.</div>
        </div>
        <div
          className="card soft kpi-card"
          onClick={() => onOpenStatsSub("achievements")}
        >
          <div className="mu sm">
            {rank.current.badge} {rank.current.title}
          </div>
          <b style={{ fontSize: 20 }}>{stats.totalXp} XP</b>
          <div className="sm mu">
            Ачивок: {stats.unlockedCount}/{ACHIEVEMENTS.length}
          </div>
        </div>
        <div
          className="card soft kpi-card"
          onClick={() => onOpenStatsSub("coverage")}
        >
          <div className="mu sm">📊 Охват языка</div>
          <b style={{ fontSize: 20 }}>{stats.overallCoverage}%</b>
          <div className="sm mu">
            A1: {stats.levelCoverage.A1.pct}% · A2: {stats.levelCoverage.A2.pct}%
          </div>
        </div>
        <div className="card soft kpi-card" onClick={() => onGoTab("vocab")}>
          <div className="mu sm">🧠 Слова и Курс</div>
          <b style={{ fontSize: 20 }}>
            {stats.knownWords}/{VOCAB.length}
          </b>
          <div className="sm mu">
            Уроки: {stats.doneLessons}/{LESSONS.length} · Повтор: {dueCount}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="between">
          <h2 style={{ margin: 0 }}>🗓️ 5 шагов занятия на {state.goalMin} минут</h2>
          <span className="sm mu">Отмечай выполненные блоки</span>
        </div>
        {dailyBlocks.map((b, idx) => {
          const done = !!blocksDone[b.id];
          const isCurr = idx === currIdx && !done;
          return (
            <div
              key={b.id}
              className={`block-item ${done ? "done" : ""} ${isCurr ? "curr" : ""}`}
            >
              <div style={{ flex: 1 }}>
                <label className="row" style={{ cursor: "pointer", gap: 8 }}>
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={e => onToggleBlock(b.id, e.target.checked)}
                  />
                  <b>{b.title}</b>
                  <span className="badge">{bMins[idx]} мин</span>
                </label>
                <div className="mu sm" style={{ marginLeft: 26 }}>
                  {b.desc}
                </div>
              </div>
              <button
                type="button"
                className={`xs ${isCurr ? "p" : ""}`}
                onClick={() => {
                  onStartTimer();
                  b.action();
                }}
              >
                Открыть →
              </button>
            </div>
          );
        })}
      </div>

      <div className="grid2">
        <div className="card">
          <div className="between">
            <h2 style={{ margin: 0 }}>📊 Активность за 7 дней</h2>
            <span className="sm mu">мин / день</span>
          </div>
          <div className="week-bars">
            {days.map((d, idx) => {
              const h = Math.min(
                100,
                Math.max(6, Math.round((d.mins / (state.goalMin || 120)) * 100))
              );
              return (
                <div key={idx} className="week-col">
                  <span className="sm mu">{d.mins}м</span>
                  <div
                    className={`week-fill ${d.ok ? "ok" : ""}`}
                    style={{ height: `${h}%` }}
                  />
                  <b className="sm">{d.label}</b>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card">
          <div className="between">
            <h2 style={{ margin: 0 }}>🏅 Ближайшие достижения</h2>
            <button
              type="button"
              className="xs"
              onClick={() => onOpenStatsSub("achievements")}
            >
              Все {ACHIEVEMENTS.length} →
            </button>
          </div>
          {nextAch.length === 0 ? (
            <p className="mu">👑 Поздравляем! Все достижения разблокированы!</p>
          ) : (
            nextAch.map(({ a, cur, pct: aPct }) => (
              <div key={a.id} style={{ margin: "10px 0" }}>
                <div className="between sm">
                  <span>
                    {a.icon} <b>{a.title}</b>
                  </span>
                  <span className="mu">
                    {cur}/{a.target} (+{a.xp} XP)
                  </span>
                </div>
                <div className="bar" style={{ marginTop: 4 }}>
                  <i style={{ width: `${aPct}%` }} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
