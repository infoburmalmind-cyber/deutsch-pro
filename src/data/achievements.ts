import type {
  AchievementDef,
  AppState,
  CEFRLevel,
  ComputedStats,
  LeaderboardPlayer,
  LeaderboardSort,
  LeagueDef,
  RankDef
} from "../types";
import { CATEGORIES, VOCAB } from "./vocab";
import { LESSONS } from "./lessons";
import { STORIES } from "./skills";

export function todayKey(d: Date = new Date()): string {
  return (
    d.getFullYear() +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0")
  );
}

export const RANKS: RankDef[] = [
  { level: 1, title: "Anfänger", ru: "Новичок с нуля", minXp: 0, badge: "🌱" },
  { level: 2, title: "Entdecker", ru: "Исследователь", minXp: 250, badge: "🧭" },
  { level: 3, title: "Lehrling", ru: "Ученик грамматики", minXp: 700, badge: "📘" },
  { level: 4, title: "Wortsammler", ru: "Собиратель слов", minXp: 1400, badge: "🗂️" },
  { level: 5, title: "Sprachfreund", ru: "Собеседник A1", minXp: 2400, badge: "💬" },
  { level: 6, title: "Grammatiker", ru: "Знаток падежей", minXp: 3800, badge: "📐" },
  { level: 7, title: "Routinier", ru: "Мастер A2", minXp: 5600, badge: "⚡" },
  { level: 8, title: "Berliner", ru: "Житель Берлина", minXp: 8000, badge: "🐻" },
  { level: 9, title: "Polyglott", ru: "Уверенный B1", minXp: 11200, badge: "🦅" },
  { level: 10, title: "Goethe-Legende", ru: "Легенда Гёте", minXp: 15000, badge: "👑" }
];

export const LEAGUES: LeagueDef[] = [
  { id: "bronze", name: "Бронзовая лига A1", icon: "🥉", minXp: 0, color: "#b45309" },
  { id: "silver", name: "Серебряная лига A2", icon: "🥈", minXp: 1500, color: "#64748b" },
  { id: "gold", name: "Золотая лига B1", icon: "🥇", minXp: 5000, color: "#d97706" },
  { id: "diamond", name: "Бриллиантовая лига Гёте", icon: "💎", minXp: 10000, color: "#2563eb" }
];

export function getRankInfo(xp: number): {
  current: RankDef;
  next: RankDef | null;
  progressPct: number;
} {
  let current = RANKS[0];
  let next: RankDef | null = RANKS[1] || null;
  for (let i = 0; i < RANKS.length; i++) {
    if (xp >= RANKS[i].minXp) {
      current = RANKS[i];
      next = RANKS[i + 1] || null;
    }
  }
  if (!next) return { current, next: null, progressPct: 100 };
  const span = next.minXp - current.minXp;
  const pct = span > 0 ? Math.min(100, Math.max(0, Math.round(((xp - current.minXp) / span) * 100))) : 100;
  return { current, next, progressPct: pct };
}

export function getLeagueInfo(xp: number): { current: LeagueDef; next: LeagueDef | null } {
  let current = LEAGUES[0];
  let next: LeagueDef | null = LEAGUES[1] || null;
  for (let i = 0; i < LEAGUES.length; i++) {
    if (xp >= LEAGUES[i].minXp) {
      current = LEAGUES[i];
      next = LEAGUES[i + 1] || null;
    }
  }
  return { current, next };
}

function calcStreaks(studyLog: Record<string, { sec: number }>): { streak: number; bestStreak: number } {
  const keys = Object.keys(studyLog).filter(k => (studyLog[k]?.sec || 0) >= 60).sort();
  let best = 0;
  let run = 0;
  let prevTime = 0;
  for (const k of keys) {
    const t = new Date(k + "T00:00:00").getTime();
    if (prevTime && Math.round((t - prevTime) / 86400000) === 1) {
      run++;
    } else {
      run = 1;
    }
    if (run > best) best = run;
    prevTime = t;
  }

  let streak = 0;
  const d = new Date();
  const tKey = todayKey(d);
  if ((studyLog[tKey]?.sec || 0) >= 60) streak++;
  for (let i = 1; i < 365; i++) {
    const p = new Date(d);
    p.setDate(d.getDate() - i);
    const k = todayKey(p);
    if ((studyLog[k]?.sec || 0) >= 60) streak++;
    else break;
  }
  return { streak, bestStreak: Math.max(best, streak) };
}

export function computeStats(state: AppState): ComputedStats {
  const tKey = todayKey();
  const todaySec = state.studyLog[tKey]?.sec || 0;
  let totalSec = 0;
  let bestDayMin = 0;
  const activeDays = Object.values(state.studyLog).filter(d => (d?.sec || 0) >= 60);
  for (const d of Object.values(state.studyLog)) {
    const s = d?.sec || 0;
    totalSec += s;
    const m = Math.round(s / 60);
    if (m > bestDayMin) bestDayMin = m;
  }
  const totalMin = Math.round(totalSec / 60);
  const avgDayMin = activeDays.length ? Math.round(totalMin / activeDays.length) : 0;

  let weekMin = 0;
  const now = new Date();
  for (let i = 0; i < 7; i++) {
    const dt = new Date(now);
    dt.setDate(now.getDate() - i);
    weekMin += Math.round((state.studyLog[todayKey(dt)]?.sec || 0) / 60);
  }

  const { streak, bestStreak } = calcStreaks(state.studyLog);

  const doneLessons = LESSONS.filter((_, i) => (state.lessonScores[String(i)] || 0) >= 70).length;

  let knownWords = 0;
  let learningWords = 0;
  const srsBoxes = [0, 0, 0, 0, 0, 0];
  const levelMap: Record<CEFRLevel, { learned: number; total: number }> = {
    A1: { learned: 0, total: 0 },
    A2: { learned: 0, total: 0 },
    B1: { learned: 0, total: 0 }
  };
  const catMap = new Map<string, { learned: number; learning: number; total: number }>();
  for (const c of CATEGORIES) catMap.set(c, { learned: 0, learning: 0, total: 0 });

  for (const v of VOCAB) {
    const word = v[0];
    const cat = v[3];
    const lvl = v[4];
    levelMap[lvl].total++;
    const cObj = catMap.get(cat)!;
    cObj.total++;

    const rec = state.srs[word];
    if (!rec || rec.box === 0) {
      if (rec && rec.seen > 0) {
        learningWords++;
        cObj.learning++;
      }
      srsBoxes[0]++;
    } else if (rec.box >= 3) {
      knownWords++;
      levelMap[lvl].learned++;
      cObj.learned++;
      srsBoxes[Math.min(5, rec.box)]++;
    } else {
      learningWords++;
      cObj.learning++;
      srsBoxes[Math.min(5, rec.box)]++;
    }
  }

  const newWords = Math.max(0, VOCAB.length - knownWords - learningWords);

  const levelCoverage = {
    A1: {
      ...levelMap.A1,
      pct: levelMap.A1.total ? Math.round((levelMap.A1.learned / levelMap.A1.total) * 100) : 0
    },
    A2: {
      ...levelMap.A2,
      pct: levelMap.A2.total ? Math.round((levelMap.A2.learned / levelMap.A2.total) * 100) : 0
    },
    B1: {
      ...levelMap.B1,
      pct: levelMap.B1.total ? Math.round((levelMap.B1.learned / levelMap.B1.total) * 100) : 0
    }
  };

  const categoryCoverage = CATEGORIES.map(name => {
    const c = catMap.get(name)!;
    return {
      name,
      learned: c.learned,
      learning: c.learning,
      total: c.total,
      pct: c.total ? Math.round((c.learned / c.total) * 100) : 0
    };
  });

  const sk = state.skillStats;
  const storiesDone = Array.isArray(sk.storiesCompleted) ? sk.storiesCompleted.length : 0;
  const dialogsDone = Array.isArray(sk.dialogsCompleted) ? sk.dialogsCompleted.length : 0;
  const examsDone = Array.isArray(sk.examsPassed) ? sk.examsPassed.length : 0;

  const skillCoverage = [
    {
      id: "articles" as const,
      title: "Артикли der/die/das",
      done: sk.articlesOk,
      target: 100,
      pct: Math.min(100, Math.round((sk.articlesOk / 100) * 100))
    },
    {
      id: "builder" as const,
      title: "Конструктор предложений",
      done: sk.builderOk,
      target: 60,
      pct: Math.min(100, Math.round((sk.builderOk / 60) * 100))
    },
    {
      id: "listening" as const,
      title: "Аудирование и диктант",
      done: sk.listeningOk,
      target: 60,
      pct: Math.min(100, Math.round((sk.listeningOk / 60) * 100))
    },
    {
      id: "verbs" as const,
      title: "Спряжение глаголов",
      done: sk.verbsOk,
      target: 52,
      pct: Math.min(100, Math.round((sk.verbsOk / 52) * 100))
    },
    {
      id: "speaking" as const,
      title: "Произношение (Речь)",
      done: sk.speakingCount,
      target: 40,
      pct: Math.min(100, Math.round((sk.speakingCount / 40) * 100))
    },
    {
      id: "reading" as const,
      title: "Чтение историй",
      done: storiesDone,
      target: STORIES.length,
      pct: Math.min(100, Math.round((storiesDone / STORIES.length) * 100))
    },
    {
      id: "preps" as const,
      title: "Управление глаголов",
      done: sk.prepsOk || 0,
      target: 50,
      pct: Math.min(100, Math.round(((sk.prepsOk || 0) / 50) * 100))
    },
    {
      id: "cases" as const,
      title: "Падежи (Nom/Akk/Dat/Gen)",
      done: sk.casesOk || 0,
      target: 50,
      pct: Math.min(100, Math.round(((sk.casesOk || 0) / 50) * 100))
    },
    {
      id: "dialogs" as const,
      title: "Симулятор диалогов",
      done: dialogsDone,
      target: 8,
      pct: Math.min(100, Math.round((dialogsDone / 8) * 100))
    },
    {
      id: "idioms" as const,
      title: "Идиомы и связки B1",
      done: sk.idiomsOk || 0,
      target: 30,
      pct: Math.min(100, Math.round(((sk.idiomsOk || 0) / 30) * 100))
    },
    {
      id: "blitz" as const,
      title: "Блиц-Спринт 60 сек",
      done: sk.blitzBest || 0,
      target: 20,
      pct: Math.min(100, Math.round(((sk.blitzBest || 0) / 20) * 100))
    },
    {
      id: "exam" as const,
      title: "Экзамены Goethe (A1–B1)",
      done: examsDone,
      target: 3,
      pct: Math.min(100, Math.round((examsDone / 3) * 100))
    }
  ];

  const vocabRatio = (knownWords + learningWords * 0.35) / Math.max(1, VOCAB.length);
  const courseRatio = doneLessons / Math.max(1, LESSONS.length);
  const storyRatio = storiesDone / Math.max(1, STORIES.length);
  const skillAvgRatio =
    skillCoverage.reduce((acc, s) => acc + s.pct / 100, 0) / Math.max(1, skillCoverage.length);

  const overallCoverage = Math.min(
    100,
    Math.round((vocabRatio * 0.45 + courseRatio * 0.3 + storyRatio * 0.1 + skillAvgRatio * 0.15) * 1000) / 10
  );

  const totalExercises =
    sk.articlesTotal +
    sk.builderTotal +
    sk.listeningTotal +
    sk.verbsTotal +
    sk.speakingCount +
    (sk.prepsTotal || 0) +
    (sk.casesTotal || 0) +
    (sk.idiomsTotal || 0);
  const totalCorrect =
    sk.articlesOk +
    sk.builderOk +
    sk.listeningOk +
    sk.verbsOk +
    sk.speakingCount +
    (sk.prepsOk || 0) +
    (sk.casesOk || 0) +
    (sk.idiomsOk || 0);
  const accuracyPct = totalExercises > 0 ? Math.round((totalCorrect / totalExercises) * 100) : 100;

  const totalXp =
    (state.bonusXp || 0) +
    doneLessons * 120 +
    knownWords * 15 +
    learningWords * 5 +
    sk.articlesOk * 8 +
    sk.builderOk * 15 +
    sk.listeningOk * 10 +
    sk.verbsOk * 10 +
    sk.speakingCount * 12 +
    storiesDone * 40 +
    (sk.prepsOk || 0) * 10 +
    (sk.casesOk || 0) * 12 +
    dialogsDone * 50 +
    (sk.idiomsOk || 0) * 12 +
    (sk.blitzBest || 0) * 8 +
    examsDone * 150 +
    Math.floor(totalMin * 2);

  return {
    totalXp,
    totalSec,
    totalMin,
    todaySec,
    weekMin,
    bestDayMin,
    avgDayMin,
    streak,
    bestStreak,
    doneLessons,
    knownWords,
    learningWords,
    newWords,
    srsBoxes,
    overallCoverage,
    levelCoverage,
    categoryCoverage,
    skillCoverage,
    totalExercises,
    totalCorrect,
    accuracyPct,
    storiesDone,
    unlockedCount: state.unlockedAchievements.length
  };
}

export const ACHIEVEMENTS: AchievementDef[] = [
  // Таймер и Дисциплина (6)
  {
    id: "first_step",
    title: "Первый шаг",
    desc: "Позанимайтесь первые 5 минут по таймеру",
    icon: "⏱️",
    category: "Таймер и Дисциплина",
    xp: 50,
    target: 5,
    getProgress: (_s, st) => st.totalMin
  },
  {
    id: "hour_focus",
    title: "Час фокуса",
    desc: "Наберите 60 минут общего времени занятий",
    icon: "🎯",
    category: "Таймер и Дисциплина",
    xp: 120,
    target: 60,
    getProgress: (_s, st) => st.totalMin
  },
  {
    id: "two_hour_hero",
    title: "Герой 2 часов",
    desc: "Выполните дневную цель 120 минут за один день",
    icon: "🔥",
    category: "Таймер и Дисциплина",
    xp: 250,
    target: 120,
    getProgress: (_s, st) => Math.max(st.bestDayMin, Math.floor(st.todaySec / 60))
  },
  {
    id: "streak_3",
    title: "Трёхдневный ритм",
    desc: "Занимайтесь 3 дня подряд",
    icon: "📅",
    category: "Таймер и Дисциплина",
    xp: 180,
    target: 3,
    getProgress: (_s, st) => st.bestStreak
  },
  {
    id: "streak_7",
    title: "Железная неделя",
    desc: "Занимайтесь 7 дней подряд без пропусков",
    icon: "🗓️",
    category: "Таймер и Дисциплина",
    xp: 450,
    target: 7,
    getProgress: (_s, st) => st.bestStreak
  },
  {
    id: "marathon_20h",
    title: "Марафонец 20 часов",
    desc: "Накопите 1200 минут (20 часов) изучения немецкого",
    icon: "🏅",
    category: "Таймер и Дисциплина",
    xp: 800,
    target: 1200,
    getProgress: (_s, st) => st.totalMin
  },

  // Словарь и Память (6)
  {
    id: "words_10",
    title: "Первая десятка",
    desc: "Выучите 10 немецких слов (Статус «Знаю»)",
    icon: "📝",
    category: "Словарь и Память",
    xp: 60,
    target: 10,
    getProgress: (_s, st) => st.knownWords
  },
  {
    id: "words_50",
    title: "Уверенный старт",
    desc: "Выучите 50 слов в базе словаря",
    icon: "🗂️",
    category: "Словарь и Память",
    xp: 150,
    target: 50,
    getProgress: (_s, st) => st.knownWords
  },
  {
    id: "words_150",
    title: "Словарный запас A1",
    desc: "Выучите 150 слов",
    icon: "📚",
    category: "Словарь и Память",
    xp: 350,
    target: 150,
    getProgress: (_s, st) => st.knownWords
  },
  {
    id: "words_400",
    title: "Коллекционер слов",
    desc: "Выучите 400 слов из базы",
    icon: "🧠",
    category: "Словарь и Память",
    xp: 700,
    target: 400,
    getProgress: (_s, st) => st.knownWords
  },
  {
    id: "words_800",
    title: "Живой словарь",
    desc: "Выучите 800 слов (уровень B1)",
    icon: "💎",
    category: "Словарь и Память",
    xp: 1200,
    target: 800,
    getProgress: (_s, st) => st.knownWords
  },
  {
    id: "cats_5",
    title: "Тематический охват",
    desc: "Освойте минимум 5 слов в каждой из 5 разных тем",
    icon: "🌈",
    category: "Словарь и Память",
    xp: 220,
    target: 5,
    getProgress: (_s, st) => st.categoryCoverage.filter(c => c.learned >= 5).length
  },

  // Курс и Грамматика (6)
  {
    id: "lesson_1",
    title: "Старт курса",
    desc: "Пройдите первый урок курса на 70%+",
    icon: "🎓",
    category: "Курс и Грамматика",
    xp: 100,
    target: 1,
    getProgress: (_s, st) => st.doneLessons
  },
  {
    id: "lesson_5",
    title: "Пятёрка A1.1",
    desc: "Пройдите 5 уроков курса",
    icon: "⭐",
    category: "Курс и Грамматика",
    xp: 240,
    target: 5,
    getProgress: (_s, st) => st.doneLessons
  },
  {
    id: "lesson_10",
    title: "Половина пути",
    desc: "Пройдите 10 уроков курса",
    icon: "🚀",
    category: "Курс и Грамматика",
    xp: 450,
    target: 10,
    getProgress: (_s, st) => st.doneLessons
  },
  {
    id: "lesson_20",
    title: "Выпускник курса",
    desc: "Пройдите все 20 уроков курса!",
    icon: "👑",
    category: "Курс и Грамматика",
    xp: 1000,
    target: 20,
    getProgress: (_s, st) => st.doneLessons
  },
  {
    id: "perfectionist",
    title: "Перфекционист",
    desc: "Сдайте любой урок на 100%",
    icon: "💯",
    category: "Курс и Грамматика",
    xp: 200,
    target: 1,
    getProgress: s => Object.values(s.lessonScores).filter(v => v >= 100).length
  },
  {
    id: "cov_50",
    title: "Половина языка",
    desc: "Достигните 50% общего охвата программы",
    icon: "📊",
    category: "Курс и Грамматика",
    xp: 650,
    target: 50,
    getProgress: (_s, st) => Math.floor(st.overallCoverage)
  },

  // Мастерство скиллов (6)
  {
    id: "art_30",
    title: "Мастер Der/Die/Das",
    desc: "Дайте 30 верных ответов в тренажёре артиклей",
    icon: "🏷️",
    category: "Мастерство скиллов",
    xp: 160,
    target: 30,
    getProgress: s => s.skillStats.articlesOk
  },
  {
    id: "builder_25",
    title: "Архитектор фраз",
    desc: "Соберите 25 предложений в конструкторе",
    icon: "🧩",
    category: "Мастерство скиллов",
    xp: 220,
    target: 25,
    getProgress: s => s.skillStats.builderOk
  },
  {
    id: "listen_25",
    title: "Острый слух",
    desc: "Выполните 25 заданий по аудированию",
    icon: "🎧",
    category: "Мастерство скиллов",
    xp: 200,
    target: 25,
    getProgress: s => s.skillStats.listeningOk
  },
  {
    id: "verbs_25",
    title: "Повелитель глаголов",
    desc: "Ответьте правильно 25 раз в тренажёре глаголов",
    icon: "⚡",
    category: "Мастерство скиллов",
    xp: 200,
    target: 25,
    getProgress: s => s.skillStats.verbsOk
  },
  {
    id: "speak_15",
    title: "Голос Берлина",
    desc: "Отработайте произношение 15 фраз",
    icon: "🎙️",
    category: "Мастерство скиллов",
    xp: 180,
    target: 15,
    getProgress: s => s.skillStats.speakingCount
  },
  {
    id: "stories_all",
    title: "Книжный червь",
    desc: "Прочитайте и разберите все 15 текстов",
    icon: "📖",
    category: "Мастерство скиллов",
    xp: 500,
    target: STORIES.length,
    getProgress: (_s, st) => st.storiesDone
  },
  {
    id: "preps_25",
    title: "Мастер предлогов",
    desc: "Решите 25 заданий по управлению глаголов (auf/an/für/mit)",
    icon: "🔗",
    category: "Мастерство скиллов",
    xp: 240,
    target: 25,
    getProgress: s => s.skillStats.prepsOk || 0
  },
  {
    id: "cases_25",
    title: "Страж падежей",
    desc: "Решите 25 заданий по падежам (Nom/Akk/Dat/Gen)",
    icon: "🏛️",
    category: "Мастерство скиллов",
    xp: 260,
    target: 25,
    getProgress: s => s.skillStats.casesOk || 0
  },
  {
    id: "dialogs_4",
    title: "Собеседник на практике",
    desc: "Пройдите 4 реальных диалога-ситуации без подсказок",
    icon: "💬",
    category: "Мастерство скиллов",
    xp: 250,
    target: 4,
    getProgress: s => (s.skillStats.dialogsCompleted || []).length
  },
  {
    id: "idioms_20",
    title: "Живая речь B1",
    desc: "Освойте 20 немецких идиом и устойчивых связок",
    icon: "🦅",
    category: "Мастерство скиллов",
    xp: 280,
    target: 20,
    getProgress: s => s.skillStats.idiomsOk || 0
  },
  {
    id: "blitz_15",
    title: "Молния 60 секунд",
    desc: "Наберите 15+ верных ответов в Блиц-Спринте за минуту",
    icon: "⚡",
    category: "Мастерство скиллов",
    xp: 220,
    target: 15,
    getProgress: s => s.skillStats.blitzBest || 0
  },
  {
    id: "exam_pass",
    title: "Диплом Goethe",
    desc: "Сдайте пробный экзамен Goethe-Zertifikat (A1, A2 или B1) на 70%+",
    icon: "🎓",
    category: "Курс и Грамматика",
    xp: 600,
    target: 1,
    getProgress: s => (s.skillStats.examsPassed || []).length
  }
];

export const BASE_LEADERBOARD: LeaderboardPlayer[] = [
  { id: "p1", name: "Максим (Берлин)", avatar: "🦊", xp: 14250, weekMin: 840, coverage: 89, streak: 28 },
  { id: "p2", name: "Алина К.", avatar: "🦉", xp: 11600, weekMin: 760, coverage: 78, streak: 21 },
  { id: "p3", name: "Тимур А.", avatar: "🦁", xp: 9400, weekMin: 690, coverage: 66, streak: 16 },
  { id: "p4", name: "София М.", avatar: "🦋", xp: 7850, weekMin: 610, coverage: 58, streak: 14 },
  { id: "p5", name: "Даниэль В.", avatar: "🐻", xp: 6200, weekMin: 520, coverage: 49, streak: 11 },
  { id: "p6", name: "Елена Н.", avatar: "🌸", xp: 4900, weekMin: 460, coverage: 41, streak: 9 },
  { id: "p7", name: "Артём Р.", avatar: "🚀", xp: 3750, weekMin: 390, coverage: 34, streak: 7 },
  { id: "p8", name: "Камила С.", avatar: "🐼", xp: 2800, weekMin: 340, coverage: 27, streak: 6 },
  { id: "p9", name: "Никита П.", avatar: "⚡", xp: 1950, weekMin: 260, coverage: 21, streak: 5 },
  { id: "p10", name: "Мария Д.", avatar: "🎨", xp: 1320, weekMin: 210, coverage: 15, streak: 4 },
  { id: "p11", name: "Ислам Б.", avatar: "🏔️", xp: 840, weekMin: 150, coverage: 11, streak: 3 },
  { id: "p12", name: "Дарья Т.", avatar: "🎧", xp: 460, weekMin: 110, coverage: 7, streak: 2 },
  { id: "p13", name: "Олег Г.", avatar: "📘", xp: 210, weekMin: 65, coverage: 4, streak: 1 },
  { id: "p14", name: "Анна Л.", avatar: "🌱", xp: 90, weekMin: 30, coverage: 2, streak: 1 }
];

export function buildLeaderboard(
  state: AppState,
  stats: ComputedStats,
  sortBy: LeaderboardSort
): LeaderboardPlayer[] {
  const me: LeaderboardPlayer = {
    id: "me",
    name: (state.profile?.name || "Вы").trim() || "Вы",
    avatar: state.profile?.avatar || "🇩🇪",
    xp: stats.totalXp,
    weekMin: stats.weekMin,
    coverage: Math.round(stats.overallCoverage),
    streak: stats.streak,
    isUser: true
  };
  const all = [...BASE_LEADERBOARD, me];
  all.sort((a, b) => {
    if (sortBy === "minutes") return b.weekMin - a.weekMin || b.xp - a.xp;
    if (sortBy === "coverage") return b.coverage - a.coverage || b.xp - a.xp;
    if (sortBy === "streak") return b.streak - a.streak || b.xp - a.xp;
    return b.xp - a.xp;
  });
  return all;
}
