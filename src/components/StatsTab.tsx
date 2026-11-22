import React, { useState } from "react";
import type {
  AchievementCategory,
  AppState,
  CEFRLevel,
  ComputedStats,
  LeaderboardSort,
  SkillId,
  StatsSubTab,
  UserProfile
} from "../types";
import {
  ACHIEVEMENTS,
  LEAGUES,
  RANKS,
  buildLeaderboard,
  getLeagueInfo,
  getRankInfo,
  todayKey
} from "../data/achievements";
import { CATEGORIES, VOCAB } from "../data/vocab";
import { LESSONS } from "../data/lessons";
import { STORIES } from "../data/skills";

interface StatsTabProps {
  state: AppState;
  stats: ComputedStats;
  subTab: StatsSubTab;
  onSetSubTab: (sub: StatsSubTab) => void;
  onUpdateProfile: (patch: Partial<UserProfile>) => void;
  onPracticeCategory: (catName: string) => void;
  onOpenSkill: (skill: SkillId) => void;
  onImportState?: (imported: Partial<AppState>) => void;
}

const AVATARS = ["🇩🇪", "🦊", "🦉", "🦁", "🚀", "👑", "⚡", "🎓", "🐻", "💎"] as const;

export const StatsTab: React.FC<StatsTabProps> = ({
  state,
  stats,
  subTab,
  onSetSubTab,
  onUpdateProfile,
  onPracticeCategory,
  onOpenSkill,
  onImportState
}) => {
  const rank = getRankInfo(stats.totalXp);
  const league = getLeagueInfo(stats.totalXp);

  const subTabs: Array<{ id: StatsSubTab; label: string }> = [
    { id: "coverage", label: `📊 Охват (${stats.overallCoverage}%)` },
    { id: "achievements", label: `🏅 Достижения (${stats.unlockedCount}/${ACHIEVEMENTS.length})` },
    { id: "analytics", label: "📈 Статистика" },
    { id: "leaderboard", label: "🏆 Топ-Рейтинг" }
  ];

  return (
    <>
      <div className="card">
        <div className="between">
          <div>
            <div className="row">
              <span className="badge g-das">
                {rank.current.badge} Ранг {rank.current.level}: {rank.current.title}
              </span>
              <span className="badge g-der">
                {league.current.icon} {league.current.name}
              </span>
            </div>
            <h1 style={{ margin: "8px 0 4px" }}>
              Прогресс, Охват и Рейтинг
            </h1>
            <div className="mu">
              {rank.current.ru} · Накоплено <b>{stats.totalXp} XP</b>
              {rank.next ? ` · До «${rank.next.title}» ещё ${rank.next.minXp - stats.totalXp} XP` : " · Максимальный ранг!"}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <b style={{ fontSize: 28 }}>{stats.overallCoverage}%</b>
            <div className="mu sm">общий охват</div>
          </div>
        </div>
        <div className="bar ok" style={{ marginTop: 10 }}>
          <i style={{ width: `${rank.progressPct}%` }} />
        </div>
        <div className="subtabs" style={{ marginBottom: 0 }}>
          {subTabs.map(t => (
            <button
              key={t.id}
              type="button"
              className={subTab === t.id ? "active" : ""}
              onClick={() => onSetSubTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {subTab === "coverage" && (
        <CoverageSection
          stats={stats}
          onPracticeCategory={onPracticeCategory}
          onOpenSkill={onOpenSkill}
        />
      )}
      {subTab === "achievements" && <AchievementsSection state={state} stats={stats} />}
      {subTab === "analytics" && (
        <AnalyticsSection state={state} stats={stats} onImportState={onImportState} />
      )}
      {subTab === "leaderboard" && (
        <LeaderboardSection state={state} stats={stats} onUpdateProfile={onUpdateProfile} />
      )}
    </>
  );
};

// 1. Coverage % Section
const CoverageSection: React.FC<{
  stats: ComputedStats;
  onPracticeCategory: (catName: string) => void;
  onOpenSkill: (skill: SkillId) => void;
}> = ({ stats, onPracticeCategory, onOpenSkill }) => {
  const radius = 52;
  const circ = 2 * Math.PI * radius;
  const dashOffset = circ - (Math.min(100, stats.overallCoverage) / 100) * circ;

  const cefrInfo: Array<{ lvl: CEFRLevel; label: string; desc: string }> = [
    { lvl: "A1", label: "Goethe A1 (Базовый)", desc: "Повседневное общение и базовый словарь" },
    { lvl: "A2", label: "Goethe A2 (Уверенный)", desc: "Свободные бытовые темы, Perfekt, придаточные" },
    { lvl: "B1", label: "Goethe B1 (Продвинутый)", desc: "Сложные союзы, дискуссии, статьи и работа" }
  ];

  return (
    <>
      <div className="card">
        <div className="row" style={{ gap: 20, alignItems: "center" }}>
          <div style={{ position: "relative", width: 126, height: 126, flexShrink: 0 }}>
            <svg width="126" height="126" viewBox="0 0 126 126">
              <circle
                cx="63"
                cy="63"
                r={radius}
                fill="none"
                stroke="var(--bd)"
                strokeWidth="12"
              />
              <circle
                cx="63"
                cy="63"
                r={radius}
                fill="none"
                stroke="var(--ok)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={dashOffset}
                transform="rotate(-90 63 63)"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <b style={{ fontSize: 22 }}>{stats.overallCoverage}%</b>
              <span className="mu sm">охват</span>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 220 }}>
            <h2 style={{ margin: "0 0 8px" }}>Индекс владения немецким</h2>
            <p className="mu sm" style={{ marginTop: 0 }}>
              Охват рассчитывается из 4 компонентов: выученные слова ({stats.knownWords}/
              {VOCAB.length}), пройденные уроки ({stats.doneLessons}/{LESSONS.length}), прочитанные
              тексты ({stats.storiesDone}/{STORIES.length}) и тренировка всех{" "}
              {stats.skillCoverage.length} скиллов.
            </p>
            <div className="grid3">
              {cefrInfo.map(c => {
                const lv = stats.levelCoverage[c.lvl];
                return (
                  <div key={c.lvl} className="card soft" style={{ margin: 0, padding: 10 }}>
                    <div className="between sm">
                      <b>{c.label}</b>
                      <span className="badge g-der">{lv.pct}%</span>
                    </div>
                    <div className="bar" style={{ margin: "6px 0" }}>
                      <i style={{ width: `${lv.pct}%` }} />
                    </div>
                    <div className="mu sm">
                      {lv.learned} из {lv.total} слов
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>🎯 Охват по {stats.skillCoverage.length} ключевым навыкам</h2>
        <div className="grid2">
          {stats.skillCoverage.map(sk => (
            <div key={sk.id} className="card soft" style={{ margin: 0 }}>
              <div className="between">
                <b>{sk.title}</b>
                <span className="badge">{sk.pct}%</span>
              </div>
              <div className="bar ok" style={{ margin: "8px 0" }}>
                <i style={{ width: `${sk.pct}%` }} />
              </div>
              <div className="between sm">
                <span className="mu">
                  Прогресс: {sk.done} / {sk.target}
                </span>
                <button
                  type="button"
                  className="xs p"
                  onClick={() => onOpenSkill(sk.id)}
                >
                  Тренировать →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="between">
          <h2 style={{ margin: 0 }}>🗂️ Охват по {CATEGORIES.length} темам словаря</h2>
          <span className="mu sm">Нажми «Учить», чтобы сразу открыть карточки этой темы</span>
        </div>
        <div className="grid2" style={{ marginTop: 10 }}>
          {stats.categoryCoverage.map(cat => (
            <div key={cat.name} className="card soft" style={{ margin: 0, padding: 12 }}>
              <div className="between">
                <b className="sm">{cat.name}</b>
                <span className={`badge ${cat.pct >= 70 ? "g-das" : ""}`}>{cat.pct}%</span>
              </div>
              <div className="bar ok" style={{ margin: "7px 0" }}>
                <i style={{ width: `${cat.pct}%` }} />
              </div>
              <div className="between sm">
                <span className="mu">
                  Знаю: {cat.learned} · Учу: {cat.learning} · Всего: {cat.total}
                </span>
                <button
                  type="button"
                  className="xs"
                  onClick={() => onPracticeCategory(cat.name)}
                >
                  Учить →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// 2. Achievements & Ranks Section
const AchievementsSection: React.FC<{ state: AppState; stats: ComputedStats }> = ({
  state,
  stats
}) => {
  const [catFilter, setCatFilter] = useState<"ALL" | AchievementCategory>("ALL");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "unlocked" | "locked">("ALL");

  const cats: Array<"ALL" | AchievementCategory> = [
    "ALL",
    "Таймер и Дисциплина",
    "Словарь и Память",
    "Курс и Грамматика",
    "Мастерство скиллов"
  ];

  const items = ACHIEVEMENTS.filter(a => {
    const unlocked = state.unlockedAchievements.includes(a.id);
    if (catFilter !== "ALL" && a.category !== catFilter) return false;
    if (statusFilter === "unlocked" && !unlocked) return false;
    if (statusFilter === "locked" && unlocked) return false;
    return true;
  });

  return (
    <>
      <div className="card">
        <h2 style={{ marginTop: 0 }}>🎖️ Путь из 10 рангов (от Anfänger до Goethe-Legende)</h2>
        <div className="rank-strip">
          {RANKS.map(r => {
            const reached = stats.totalXp >= r.minXp;
            return (
              <div
                key={r.level}
                className={`rank-item ${reached ? "reached" : ""}`}
                title={`${r.ru} (${r.minXp} XP)`}
              >
                <div style={{ fontSize: 22 }}>{r.badge}</div>
                <b className="sm">{r.title}</b>
                <span className="mu sm">{r.minXp} XP</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card soft">
        <div className="between">
          <div className="row">
            {cats.map(c => (
              <button
                key={c}
                type="button"
                className={`xs ${catFilter === c ? "p" : ""}`}
                onClick={() => setCatFilter(c)}
              >
                {c === "ALL" ? "Все темы" : c}
              </button>
            ))}
          </div>
          <div className="row">
            {[
              ["ALL", "Все"],
              ["unlocked", "Открытые ✓"],
              ["locked", "В процессе"]
            ].map(([val, lbl]) => (
              <button
                key={val}
                type="button"
                className={`xs ${statusFilter === val ? "p" : ""}`}
                onClick={() => setStatusFilter(val as "ALL" | "unlocked" | "locked")}
              >
                {lbl}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid2">
        {items.map(a => {
          const unlocked = state.unlockedAchievements.includes(a.id);
          const cur = Math.min(a.target, a.getProgress(state, stats));
          const pct = Math.min(100, Math.round((cur / a.target) * 100));
          return (
            <div key={a.id} className={`card ${unlocked ? "good" : "soft"}`} style={{ margin: 0 }}>
              <div className="between">
                <div className="row">
                  <span style={{ fontSize: 26 }}>{a.icon}</span>
                  <div>
                    <b>{a.title}</b>
                    <div className="mu sm">{a.category}</div>
                  </div>
                </div>
                <span className={`badge ${unlocked ? "g-das" : ""}`}>
                  {unlocked ? `✓ +${a.xp} XP` : `+${a.xp} XP`}
                </span>
              </div>
              <p className="sm mu" style={{ margin: "8px 0" }}>
                {a.desc}
              </p>
              <div className="bar ok">
                <i style={{ width: `${unlocked ? 100 : pct}%` }} />
              </div>
              <div className="between sm mu" style={{ marginTop: 4 }}>
                <span>
                  {unlocked ? "Выполнено!" : `Прогресс: ${cur} / ${a.target}`}
                </span>
                <span>{unlocked ? "100%" : `${pct}%`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// 3. Detailed Analytics Section
const AnalyticsSection: React.FC<{
  state: AppState;
  stats: ComputedStats;
  onImportState?: (imported: Partial<AppState>) => void;
}> = ({ state, stats, onImportState }) => {
  const days14: Array<{ dateLabel: string; mins: number; ok: boolean }> = [];
  const now = new Date();
  for (let i = 13; i >= 0; i--) {
    const dt = new Date(now);
    dt.setDate(now.getDate() - i);
    const k = todayKey(dt);
    const mins = Math.round((state.studyLog[k]?.sec || 0) / 60);
    days14.push({
      dateLabel: `${String(dt.getDate()).padStart(2, "0")}.${String(dt.getMonth() + 1).padStart(
        2,
        "0"
      )}`,
      mins,
      ok: mins >= (state.goalMin || 120)
    });
  }

  const boxLabels = [
    "Новые (не начато)",
    "Коробка 1 (10 мин)",
    "Коробка 2 (1 день)",
    "Коробка 3 (4 дня)",
    "Коробка 4 (10 дней)",
    "Коробка 5 (Навсегда)"
  ];

  const totalHours = (stats.totalSec / 3600).toFixed(1);

  return (
    <>
      <div className="grid4">
        <div className="card soft">
          <div className="mu sm">⏱️ Всего времени</div>
          <b style={{ fontSize: 22 }}>{totalHours} ч</b>
          <div className="mu sm">{stats.totalMin} минут</div>
        </div>
        <div className="card soft">
          <div className="mu sm">📈 В среднем в день</div>
          <b style={{ fontSize: 22 }}>{stats.avgDayMin} мин</b>
          <div className="mu sm">Рекорд дня: {stats.bestDayMin} мин</div>
        </div>
        <div className="card soft">
          <div className="mu sm">🎯 Точность ответов</div>
          <b style={{ fontSize: 22 }}>{stats.accuracyPct}%</b>
          <div className="mu sm">
            {stats.totalCorrect} из {stats.totalExercises} заданий
          </div>
        </div>
        <div className="card soft">
          <div className="mu sm">🔥 Текущая серия</div>
          <b style={{ fontSize: 22 }}>{stats.streak} дн.</b>
          <div className="mu sm">Лучшая серия: {stats.bestStreak} дн.</div>
        </div>
      </div>

      <div className="card">
        <div className="between">
          <h2 style={{ margin: 0 }}>📆 График занятий за 14 дней</h2>
          <span className="sm mu">Зелёный = цель {state.goalMin} мин выполнена</span>
        </div>
        <div className="chart-14">
          {days14.map((d, idx) => {
            const h = Math.min(
              100,
              Math.max(5, Math.round((d.mins / (state.goalMin || 120)) * 100))
            );
            return (
              <div key={idx} className="week-col">
                <span className="sm mu" style={{ fontSize: 11 }}>
                  {d.mins}
                </span>
                <div
                  className={`week-fill ${d.ok ? "ok" : ""}`}
                  style={{ height: `${h}%` }}
                />
                <span className="mu" style={{ fontSize: 10 }}>
                  {d.dateLabel}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>🧠 Распределение слов по коробкам памяти (SRS)</h2>
        {stats.srsBoxes.map((cnt, bIdx) => {
          const pct = Math.round((cnt / Math.max(1, VOCAB.length)) * 100);
          return (
            <div key={bIdx} style={{ margin: "10px 0" }}>
              <div className="between sm">
                <b>{boxLabels[bIdx]}</b>
                <span className="mu">
                  {cnt} слов ({pct}%)
                </span>
              </div>
              <div className={`bar ${bIdx >= 3 ? "ok" : ""}`} style={{ marginTop: 4 }}>
                <i style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="card soft">
        <h2 style={{ marginTop: 0 }}>💾 Резервная копия прогресса (JSON)</h2>
        <p className="mu sm">
          Сохраняйте весь прогресс (опыт, уроки, SRS-карточки, время таймера, достижения) в файл или
          переносите между устройствами.
        </p>
        <div className="row">
          <button
            type="button"
            className="p xs"
            onClick={() => {
              const json = JSON.stringify(state, null, 2);
              const blob = new Blob([json], { type: "application/json;charset=utf-8" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `deutsch-pro-backup-${todayKey()}.json`;
              a.click();
              setTimeout(() => URL.revokeObjectURL(url), 1000);
            }}
          >
            💾 Скачать бэкап (.json)
          </button>
          {onImportState && (
            <label className="xs" style={{ border: "1px solid var(--bd)", padding: "5px 9px", borderRadius: 8, cursor: "pointer", background: "var(--card)" }}>
              📂 Восстановить из файла
              <input
                type="file"
                accept="application/json,.json"
                style={{ display: "none" }}
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = () => {
                    try {
                      const parsed = JSON.parse(String(reader.result || "{}"));
                      if (parsed && typeof parsed === "object") {
                        onImportState(parsed as Partial<AppState>);
                      }
                    } catch {}
                  };
                  reader.readAsText(file);
                }}
              />
            </label>
          )}
        </div>
      </div>
    </>
  );
};

// 4. Leaderboard & Leagues Section
const LeaderboardSection: React.FC<{
  state: AppState;
  stats: ComputedStats;
  onUpdateProfile: (patch: Partial<UserProfile>) => void;
}> = ({ state, stats, onUpdateProfile }) => {
  const [sortBy, setSortBy] = useState<LeaderboardSort>("xp");
  const rows = buildLeaderboard(state, stats, sortBy);
  const myRank = rows.findIndex(r => r.isUser) + 1;
  const above = myRank > 1 ? rows[myRank - 2] : null;
  const leagueInfo = getLeagueInfo(stats.totalXp);

  return (
    <>
      <div className="card">
        <h2 style={{ marginTop: 0 }}>🏟️ Лиги обучения</h2>
        <div className="grid4">
          {LEAGUES.map(lg => {
            const active = lg.id === leagueInfo.current.id;
            return (
              <div
                key={lg.id}
                className={`card soft ${active ? "good" : ""}`}
                style={{ margin: 0, textAlign: "center" }}
              >
                <div style={{ fontSize: 26 }}>{lg.icon}</div>
                <b className="sm">{lg.name}</b>
                <div className="mu sm">от {lg.minXp} XP</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card soft">
        <div className="between">
          <div>
            <h3 style={{ margin: "0 0 6px" }}>👤 Ваш профиль в рейтинге</h3>
            <div className="row">
              <input
                value={state.profile.name}
                maxLength={22}
                placeholder="Ваше имя..."
                onChange={e => onUpdateProfile({ name: e.target.value })}
              />
              <div className="row">
                {AVATARS.map(av => (
                  <button
                    key={av}
                    type="button"
                    className={`xs ${state.profile.avatar === av ? "p" : ""}`}
                    onClick={() => onUpdateProfile({ avatar: av })}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="mu sm">Ваше место</div>
            <b style={{ fontSize: 26 }}>
              #{myRank} из {rows.length}
            </b>
            {above && sortBy === "xp" && (
              <div className="mu sm">
                До #{myRank - 1} ({above.name}): +{Math.max(1, above.xp - stats.totalXp)} XP
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="between" style={{ marginBottom: 10 }}>
          <h2 style={{ margin: 0 }}>🏆 Топ-15 учеников курса</h2>
          <div className="row">
            {[
              ["xp", "По XP"],
              ["minutes", "По времени"],
              ["coverage", "По охвату %"],
              ["streak", "По серии 🔥"]
            ].map(([id, lbl]) => (
              <button
                key={id}
                type="button"
                className={`xs ${sortBy === id ? "p" : ""}`}
                onClick={() => setSortBy(id as LeaderboardSort)}
              >
                {lbl}
              </button>
            ))}
          </div>
        </div>

        {rows.map((p, idx) => {
          const pos = idx + 1;
          const medal = pos === 1 ? "🥇" : pos === 2 ? "🥈" : pos === 3 ? "🥉" : `#${pos}`;
          return (
            <div
              key={p.id}
              className={`lb-row ${p.isUser ? "me" : ""}`}
            >
              <div className="row" style={{ gap: 10 }}>
                <b style={{ minWidth: 32, textAlign: "center" }}>{medal}</b>
                <span style={{ fontSize: 22 }}>{p.avatar}</span>
                <div>
                  <b>
                    {p.name} {p.isUser ? "(Вы)" : ""}
                  </b>
                  <div className="mu sm">
                    Охват: {p.coverage}% · Серия: {p.streak} дн.
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <b>{p.xp.toLocaleString("ru-RU")} XP</b>
                <div className="mu sm">{p.weekMin} мин / нед.</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
