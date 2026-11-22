import React from "react";
import type { ComputedStats, TabId } from "../types";
import { getRankInfo } from "../data/achievements";
import { VOCAB } from "../data/vocab";
import { fmtHMS } from "../utils";

interface HeaderProps {
  tab: TabId;
  onSelectTab: (tab: TabId) => void;
  stats: ComputedStats;
  goalMin: number;
  timerRunning: boolean;
  onToggleTimer: () => void;
  speed: number;
  onCycleSpeed: () => void;
  onOpenVoice: () => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  tab,
  onSelectTab,
  stats,
  goalMin,
  timerRunning,
  onToggleTimer,
  speed,
  onCycleSpeed,
  onOpenVoice,
  theme,
  onToggleTheme
}) => {
  const rank = getRankInfo(stats.totalXp);
  const goalSec = (goalMin || 120) * 60;
  const pct = Math.min(100, (stats.todaySec / goalSec) * 100);
  const speedLbl = speed >= 0.95 ? "⚡ 1.0x" : speed >= 0.7 ? "🐢 0.8x" : "🐌 0.55x";

  const navItems: Array<{ id: TabId; label: string }> = [
    { id: "today", label: "🏠 Сегодня (2ч)" },
    { id: "course", label: "📚 Курс (25)" },
    { id: "vocab", label: `🗂️ Словарь (${VOCAB.length})` },
    { id: "skills", label: "🎯 Скиллы (12)" },
    { id: "stats", label: `🏆 Охват и Топ (${Math.round(stats.overallCoverage)}%)` },
    { id: "grammar", label: "📐 Справочник" }
  ];

  return (
    <>
      <header className="topbar">
        <div className="topbar-in">
          <div className="brand">
            <span>🇩🇪 Deutsch Pro</span>
            <button
              type="button"
              className="xs rank-chip"
              onClick={() => onSelectTab("stats")}
              title="Открыть статистику, достижения и рейтинг"
            >
              {rank.current.badge} {rank.current.title} · {stats.totalXp} XP
            </button>
          </div>

          <div
            className={`timer-pill ${timerRunning ? "running" : ""}`}
            title="Ежедневный таймер занятий (цель 2 часа)"
          >
            <span className="timer-clock">
              {fmtHMS(stats.todaySec)} / {fmtHMS(goalSec)}
            </span>
            <div className="tbar-mini">
              <i style={{ width: `${pct.toFixed(1)}%` }} />
            </div>
            <button
              type="button"
              className={`xs ${timerRunning ? "p" : "ok"}`}
              onClick={onToggleTimer}
            >
              {timerRunning ? "⏸ Пауза" : "▶ Старт"}
            </button>
          </div>

          <div className="top-acts">
            <button
              type="button"
              className="xs"
              onClick={onCycleSpeed}
              title="Переключить чёткость/скорость речи"
            >
              {speedLbl}
            </button>
            <button
              type="button"
              className="xs"
              onClick={onOpenVoice}
              title="Настройки HD голоса"
            >
              🔊 Голос
            </button>
            <button
              type="button"
              className="xs"
              onClick={onToggleTheme}
              title="Светлая / тёмная тема"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </header>

      <nav className="nav">
        {navItems.map(item => (
          <button
            key={item.id}
            type="button"
            className={tab === item.id ? "active" : ""}
            onClick={() => onSelectTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
};
