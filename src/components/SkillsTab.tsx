import React, { useEffect, useMemo, useState } from "react";
import type { CEFRLevel, SkillId, SkillStats, VocabTuple } from "../types";
import { SENTENCES, STORIES, VERBS } from "../data/skills";
import { VOCAB } from "../data/vocab";
import {
  CASE_DRILLS,
  EXAM_MODULES,
  IDIOM_DRILLS,
  ROLEPLAY_DIALOGS,
  VERB_PREPS
} from "../data/extra_skills";
import { genderInfo, matchAns, norm, shuffle } from "../utils";
import { UmlautPad, WordBadge } from "./UmlautPad";

type RecordableSkill =
  | "articles"
  | "builder"
  | "listening"
  | "verbs"
  | "speaking"
  | "preps"
  | "cases"
  | "idioms";

interface SkillsTabProps {
  activeSkill: SkillId | null;
  skillStats: SkillStats;
  onSelectSkill: (skill: SkillId | null) => void;
  onRecordSkill: (skill: RecordableSkill, ok: boolean) => void;
  onMarkStoryDone: (storyIdx: number) => void;
  onMarkDialogDone: (dialogId: string) => void;
  onUpdateBlitzBest: (score: number) => void;
  onPassExam: (level: CEFRLevel) => void;
  onSpeak: (text: string) => void;
  onActivity: () => void;
}

type SkillGroup = "ALL" | "base" | "grammar" | "practice";

export const SkillsTab: React.FC<SkillsTabProps> = ({
  activeSkill,
  skillStats,
  onSelectSkill,
  onRecordSkill,
  onMarkStoryDone,
  onMarkDialogDone,
  onUpdateBlitzBest,
  onPassExam,
  onSpeak,
  onActivity
}) => {
  const [group, setGroup] = useState<SkillGroup>("ALL");

  if (activeSkill === "articles") {
    return (
      <ArticlesTrainer
        onBack={() => onSelectSkill(null)}
        onRecord={ok => onRecordSkill("articles", ok)}
        onSpeak={onSpeak}
        onActivity={onActivity}
      />
    );
  }
  if (activeSkill === "builder") {
    return (
      <BuilderTrainer
        onBack={() => onSelectSkill(null)}
        onRecord={ok => onRecordSkill("builder", ok)}
        onSpeak={onSpeak}
        onActivity={onActivity}
      />
    );
  }
  if (activeSkill === "listening") {
    return (
      <ListeningTrainer
        onBack={() => onSelectSkill(null)}
        onRecord={ok => onRecordSkill("listening", ok)}
        onSpeak={onSpeak}
        onActivity={onActivity}
      />
    );
  }
  if (activeSkill === "verbs") {
    return (
      <VerbsTrainer
        onBack={() => onSelectSkill(null)}
        onRecord={ok => onRecordSkill("verbs", ok)}
        onSpeak={onSpeak}
        onActivity={onActivity}
      />
    );
  }
  if (activeSkill === "speaking") {
    return (
      <SpeakingTrainer
        onBack={() => onSelectSkill(null)}
        onRecord={() => onRecordSkill("speaking", true)}
        onSpeak={onSpeak}
        onActivity={onActivity}
      />
    );
  }
  if (activeSkill === "reading") {
    return (
      <ReadingTrainer
        completed={skillStats.storiesCompleted}
        onBack={() => onSelectSkill(null)}
        onMarkDone={onMarkStoryDone}
        onSpeak={onSpeak}
        onActivity={onActivity}
      />
    );
  }
  if (activeSkill === "preps") {
    return (
      <PrepsTrainer
        onBack={() => onSelectSkill(null)}
        onRecord={ok => onRecordSkill("preps", ok)}
        onSpeak={onSpeak}
        onActivity={onActivity}
      />
    );
  }
  if (activeSkill === "cases") {
    return (
      <CasesTrainer
        onBack={() => onSelectSkill(null)}
        onRecord={ok => onRecordSkill("cases", ok)}
        onSpeak={onSpeak}
        onActivity={onActivity}
      />
    );
  }
  if (activeSkill === "dialogs") {
    return (
      <DialogsTrainer
        completed={skillStats.dialogsCompleted || []}
        onBack={() => onSelectSkill(null)}
        onMarkDone={onMarkDialogDone}
        onSpeak={onSpeak}
        onActivity={onActivity}
      />
    );
  }
  if (activeSkill === "idioms") {
    return (
      <IdiomsTrainer
        onBack={() => onSelectSkill(null)}
        onRecord={ok => onRecordSkill("idioms", ok)}
        onSpeak={onSpeak}
        onActivity={onActivity}
      />
    );
  }
  if (activeSkill === "blitz") {
    return (
      <BlitzTrainer
        bestScore={skillStats.blitzBest || 0}
        onBack={() => onSelectSkill(null)}
        onNewBest={onUpdateBlitzBest}
        onSpeak={onSpeak}
        onActivity={onActivity}
      />
    );
  }
  if (activeSkill === "exam") {
    return (
      <ExamTrainer
        passedLevels={skillStats.examsPassed || []}
        onBack={() => onSelectSkill(null)}
        onPassExam={onPassExam}
        onSpeak={onSpeak}
        onActivity={onActivity}
      />
    );
  }

  const cards: Array<{
    id: SkillId;
    title: string;
    desc: string;
    stat: string;
    grp: Exclude<SkillGroup, "ALL">;
    badge?: string;
  }> = [
    {
      id: "articles",
      title: "🏷️ Артикли: der / die / das",
      desc: "Тренируй род существительных с подсказками по суффиксам и цветным запоминанием.",
      stat: `Верно: ${skillStats.articlesOk}`,
      grp: "base"
    },
    {
      id: "builder",
      title: "🧩 Конструктор предложений",
      desc: `Собирай ${SENTENCES.length} реальных фраз из слов, чтобы чувствовать немецкий порядок слов.`,
      stat: `Собрано: ${skillStats.builderOk}`,
      grp: "grammar"
    },
    {
      id: "listening",
      title: "🎧 Аудирование и диктант",
      desc: "Слушай HD голос и выбирай правильный вариант или печатай с кнопками ä ö ü ß.",
      stat: `Выполнено: ${skillStats.listeningOk}`,
      grp: "base"
    },
    {
      id: "verbs",
      title: "⚡ Тренажёр глаголов",
      desc: `Спряжение ${VERBS.length} главных глаголов в Präsens, Perfekt и Präteritum.`,
      stat: `Верно: ${skillStats.verbsOk}`,
      grp: "grammar"
    },
    {
      id: "preps",
      title: "🔗 Управление глаголов (B1)",
      desc: "50 глаголов с предлогами (warten auf + Akk, denken an, teilnehmen an + Dat).",
      stat: `Верно: ${skillStats.prepsOk || 0}`,
      grp: "grammar",
      badge: "NEW"
    },
    {
      id: "cases",
      title: "🏛️ Падежи и Окончания",
      desc: "50 заданий на Nominativ, Akkusativ, Dativ, Genitiv и склонение прилагательных.",
      stat: `Верно: ${skillStats.casesOk || 0}`,
      grp: "grammar",
      badge: "NEW"
    },
    {
      id: "idioms",
      title: "🦅 Идиомы и связки B1",
      desc: "Живые немецкие идиомы (Redewendungen) и связки Nomen-Verb с дословным разбором.",
      stat: `Верно: ${skillStats.idiomsOk || 0}`,
      grp: "base",
      badge: "NEW"
    },
    {
      id: "speaking",
      title: "🎙️ Произношение (Микрофон)",
      desc: "Произноси немецкие фразы вслух — распознавание речи сразу проверит твою дикцию.",
      stat: `Фраз: ${skillStats.speakingCount}`,
      grp: "practice"
    },
    {
      id: "dialogs",
      title: "💬 Симулятор диалогов",
      desc: "8 живых сцен (кафе, вокзал, врач, собеседование) с выбором реплик и озвучкой.",
      stat: `Пройдено: ${(skillStats.dialogsCompleted || []).length}/8`,
      grp: "practice",
      badge: "NEW"
    },
    {
      id: "reading",
      title: `📖 Чтение текстов (${STORIES.length} историй)`,
      desc: "Адаптированные тексты A1–B1 с озвучкой каждой фразы, переводом и вопросами.",
      stat: `Прочитано: ${skillStats.storiesCompleted.length}/${STORIES.length}`,
      grp: "base"
    },
    {
      id: "blitz",
      title: "⚡ Блиц-Спринт 60 секунд",
      desc: "Скоростная игра на реакцию с комбо-множителем x4 для мгновенного вспоминания слов.",
      stat: `Рекорд: ${skillStats.blitzBest || 0}`,
      grp: "practice",
      badge: "NEW"
    },
    {
      id: "exam",
      title: "🎓 Экзамен Goethe (A1 / A2 / B1)",
      desc: "Симулятор официального экзамена (Lesen, Hören, Grammatik) с оценкой и сертификатом.",
      stat: `Сдано: ${(skillStats.examsPassed || []).length}/3`,
      grp: "practice",
      badge: "NEW"
    }
  ];

  const visibleCards = cards.filter(c => group === "ALL" || c.grp === group);

  return (
    <>
      <div className="card">
        <h1 style={{ margin: 0 }}>🎯 Тренажёры навыков (12 скиллов)</h1>
        <div className="mu">
          Выбери любой из 12 интерактивных тренажёров: от базовых артиклей и спринта до управления
          глаголов B1 и пробного экзамена Goethe!
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          {[
            ["ALL", "Все (12)"],
            ["base", "Словарь и Чтение (4)"],
            ["grammar", "Грамматика A1–B1 (4)"],
            ["practice", "Речь, Диалоги и Экзамен (4)"]
          ].map(([id, lbl]) => (
            <button
              key={id}
              type="button"
              className={`xs ${group === id ? "p" : ""}`}
              onClick={() => setGroup(id as SkillGroup)}
            >
              {lbl}
            </button>
          ))}
        </div>
      </div>

      <div className="grid2">
        {visibleCards.map(c => (
          <div
            key={c.id}
            className="card soft"
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            onClick={() => {
              onActivity();
              onSelectSkill(c.id);
            }}
          >
            <div>
              <div className="between">
                <h2 style={{ margin: "0 0 6px" }}>{c.title}</h2>
                <div className="row">
                  {c.badge && <span className="badge g-das">{c.badge}</span>}
                  <span className="badge">{c.stat}</span>
                </div>
              </div>
              <p className="mu sm">{c.desc}</p>
            </div>
            <div>
              <button type="button" className="p xs">
                Запустить →
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// 1. Articles Trainer
function artHint(noun: string): string {
  const n = noun.toLowerCase();
  if (/(ung|heit|keit|schaft|tion|tät|ei)$/.test(n)) {
    return "Суффиксы -ung, -heit, -keit, -schaft, -tion, -tät, -ei → всегда die!";
  }
  if (/(chen|lein|ment|um)$/.test(n)) {
    return "Суффиксы -chen, -lein, -ment, -um → всегда das!";
  }
  if (/(tag|monat|er|ling|ismus)$/.test(n) && !/(mutter|schwester|tochter|butter)/.test(n)) {
    return "Дни, месяцы или многие слова на -er/-ling → часто der.";
  }
  return "Совет: повторяй слово вслух с цветным артиклем!";
}

const ArticlesTrainer: React.FC<{
  onBack: () => void;
  onRecord: (ok: boolean) => void;
  onSpeak: (t: string) => void;
  onActivity: () => void;
}> = ({ onBack, onRecord, onSpeak, onActivity }) => {
  const nouns = useMemo(() => VOCAB.filter(v => /^(der|die|das)\s/i.test(v[0])), []);
  const [items, setItems] = useState<VocabTuple[]>(() => shuffle(nouns).slice(0, 15));
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);

  const restart = () => {
    setItems(shuffle(nouns).slice(0, 15));
    setIdx(0);
    setOk(0);
    setPicked(null);
  };

  if (idx >= items.length) {
    return (
      <div className="card">
        <h1>
          🏷️ Итог: {ok} из {items.length}
        </h1>
        <p className="mu">Артикли запоминаются через повторение и цвет!</p>
        <div className="row">
          <button type="button" className="p" onClick={restart}>
            Ещё 15 слов
          </button>
          <button type="button" onClick={onBack}>
            К тренажёрам
          </button>
        </div>
      </div>
    );
  }

  const w = items[idx];
  const g = genderInfo(w[0]);
  const answered = picked !== null;
  const good = picked === g.art;

  const choose = (art: "der" | "die" | "das") => {
    if (answered) return;
    onActivity();
    const isOk = art === g.art;
    setPicked(art);
    if (isOk) setOk(x => x + 1);
    onRecord(isOk);
    onSpeak(w[0]);
  };

  return (
    <>
      <div className="between">
        <button type="button" className="xs" onClick={onBack}>
          ← Назад
        </button>
        <span className="mu">
          {idx + 1} / {items.length}
        </span>
      </div>
      <div className="card" style={{ textAlign: "center" }}>
        <div className="sm mu">Выбери правильный артикль для слова:</div>
        <div style={{ fontSize: 32, fontWeight: 800, margin: "10px 0" }}>{g.noun}</div>
        <div className="mu">
          {w[2]} · <span className="tr">{w[1]}</span>
        </div>
        <div className="row" style={{ justifyContent: "center", marginTop: 16 }}>
          {(["der", "die", "das"] as const).map(art => {
            let cls = `g-${art}`;
            if (answered) {
              if (art === g.art) cls += " good";
              else if (art === picked) cls += " bad";
            }
            return (
              <button
                key={art}
                type="button"
                className={cls}
                disabled={answered}
                style={{ minWidth: 90, fontSize: 18, fontWeight: 800 }}
                onClick={() => choose(art)}
              >
                {art}
              </button>
            );
          })}
        </div>

        {answered && (
          <div style={{ marginTop: 14 }}>
            <span className={`badge ${good ? "g-das" : "g-die"}`}>
              {good ? "✓ Верно!" : "✗ Правильно:"}
            </span>{" "}
            <WordBadge word={w[0]} />{" "}
            <span className="s" onClick={() => onSpeak(w[0])}>
              🔊
            </span>
            <div className="sm mu" style={{ marginTop: 6 }}>
              {artHint(g.noun)}
            </div>
            <div style={{ marginTop: 10 }}>
              <button
                type="button"
                className="p"
                onClick={() => {
                  setIdx(idx + 1);
                  setPicked(null);
                }}
              >
                Дальше →
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// 2. Sentence Builder Trainer
interface TokenChip {
  t: string;
  id: number;
}

const BuilderTrainer: React.FC<{
  onBack: () => void;
  onRecord: (ok: boolean) => void;
  onSpeak: (t: string) => void;
  onActivity: () => void;
}> = ({ onBack, onRecord, onSpeak, onActivity }) => {
  const [lvl, setLvl] = useState<"ALL" | CEFRLevel>("ALL");
  const [list, setList] = useState(() => shuffle(SENTENCES).slice(0, 12));
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [bank, setBank] = useState<TokenChip[]>([]);
  const [chosen, setChosen] = useState<TokenChip[]>([]);
  const [checked, setChecked] = useState<boolean | null>(null);

  const loadSentence = (itemDe: string) => {
    const tokens = itemDe.split(" ").map((t, id) => ({ t, id }));
    setBank(shuffle(tokens));
    setChosen([]);
    setChecked(null);
  };

  const resetRound = (level: "ALL" | CEFRLevel) => {
    setLvl(level);
    const pool = SENTENCES.filter(s => level === "ALL" || s[3] === level);
    const next = shuffle(pool).slice(0, 12);
    setList(next);
    setIdx(0);
    setOk(0);
    if (next[0]) loadSentence(next[0][0]);
  };

  useEffect(() => {
    if (list[0]) loadSentence(list[0][0]);
  }, []);

  if (idx >= list.length) {
    return (
      <div className="card">
        <h1>
          🧩 Готово: {ok} из {list.length}
        </h1>
        <div className="row">
          <button type="button" className="p" onClick={() => resetRound(lvl)}>
            Ещё раунд
          </button>
          <button type="button" onClick={onBack}>
            К тренажёрам
          </button>
        </div>
      </div>
    );
  }

  const item = list[idx];

  return (
    <>
      <div className="between">
        <button type="button" className="xs" onClick={onBack}>
          ← Назад
        </button>
        <div className="row">
          {(["ALL", "A1", "A2", "B1"] as const).map(l => (
            <button
              key={l}
              type="button"
              className={`xs ${lvl === l ? "p" : ""}`}
              onClick={() => resetRound(l)}
            >
              {l}
            </button>
          ))}
          <span className="mu sm">
            {idx + 1}/{list.length}
          </span>
        </div>
      </div>

      <div className="card">
        <span className="badge">{item[3]}</span>
        <h2 style={{ margin: "8px 0" }}>«{item[1]}»</h2>
        <div className="sm mu">💡 Подсказка: {item[2]}</div>

        <div className="chip-zone" style={{ margin: "12px 0" }}>
          {chosen.length === 0 ? (
            <span className="mu sm">Нажимай на слова снизу, чтобы собрать предложение...</span>
          ) : (
            chosen.map((c, p) => (
              <span
                key={c.id}
                className="chip"
                onClick={() => {
                  if (checked !== null) return;
                  const nextChosen = [...chosen];
                  const [removed] = nextChosen.splice(p, 1);
                  setChosen(nextChosen);
                  setBank([...bank, removed]);
                }}
              >
                {c.t}
              </span>
            ))
          )}
        </div>

        <div className="row" style={{ margin: "10px 0" }}>
          {bank.map((c, p) => (
            <span
              key={c.id}
              className="chip"
              onClick={() => {
                if (checked !== null) return;
                const nextBank = [...bank];
                const [removed] = nextBank.splice(p, 1);
                setBank(nextBank);
                setChosen([...chosen, removed]);
              }}
            >
              {c.t}
            </span>
          ))}
        </div>

        <div className="row" style={{ marginTop: 12 }}>
          <button
            type="button"
            className="p"
            disabled={checked !== null}
            onClick={() => {
              onActivity();
              const good = chosen.map(x => x.t).join(" ") === item[0];
              setChecked(good);
              if (good) setOk(x => x + 1);
              onRecord(good);
              onSpeak(item[0]);
            }}
          >
            Проверить
          </button>
          <button
            type="button"
            className="xs ghost"
            disabled={checked !== null}
            onClick={() => loadSentence(item[0])}
          >
            Очистить
          </button>
          <button
            type="button"
            className="xs ghost"
            onClick={() => onSpeak(item[0])}
          >
            🔊 Подсказать звук
          </button>
        </div>

        {checked !== null && (
          <div style={{ marginTop: 12 }}>
            {checked ? (
              <span className="badge g-das">✓ Идеально!</span>
            ) : (
              <>
                <span className="badge g-die">✗ Правильно:</span> <b>{item[0]}</b>
              </>
            )}{" "}
            <span className="s" onClick={() => onSpeak(item[0])}>
              🔊 Слушать
            </span>
            <div style={{ marginTop: 10 }}>
              <button
                type="button"
                className="p"
                onClick={() => {
                  const nextIdx = idx + 1;
                  setIdx(nextIdx);
                  if (list[nextIdx]) loadSentence(list[nextIdx][0]);
                }}
              >
                Дальше →
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// 3. Listening & Dictation Trainer
interface ListeningItem {
  de: string;
  ru: string;
  tr: string;
  isType: boolean;
  opts: string[];
}

function buildListeningPool(): ListeningItem[] {
  const raw = shuffle([
    ...VOCAB.map(v => ({ de: v[0], ru: v[2], tr: v[1] })),
    ...SENTENCES.slice(0, 30).map(s => ({ de: s[0], ru: s[1], tr: "" }))
  ]).slice(0, 12);

  return raw.map((item, i) => {
    const isType = i % 2 === 1 && item.de.length < 28;
    const opts = isType
      ? []
      : shuffle([
          item.de,
          ...shuffle(VOCAB.filter(v => v[0] !== item.de))
            .slice(0, 3)
            .map(v => v[0])
        ]);
    return { ...item, isType, opts };
  });
}

const ListeningTrainer: React.FC<{
  onBack: () => void;
  onRecord: (ok: boolean) => void;
  onSpeak: (t: string) => void;
  onActivity: () => void;
}> = ({ onBack, onRecord, onSpeak, onActivity }) => {
  const [pool, setPool] = useState<ListeningItem[]>(() => buildListeningPool());
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [typed, setTyped] = useState("");
  const [picked, setPicked] = useState<string | null>(null);
  const [res, setRes] = useState<boolean | null>(null);

  useEffect(() => {
    if (pool[idx]) onSpeak(pool[idx].de);
  }, [idx, pool]);

  if (idx >= pool.length) {
    return (
      <div className="card">
        <h1>
          🎧 Аудирование: {ok} из {pool.length}
        </h1>
        <div className="row">
          <button
            type="button"
            className="p"
            onClick={() => {
              setPool(buildListeningPool());
              setIdx(0);
              setOk(0);
              setTyped("");
              setPicked(null);
              setRes(null);
            }}
          >
            Новый диктант
          </button>
          <button type="button" onClick={onBack}>
            К тренажёрам
          </button>
        </div>
      </div>
    );
  }

  const item = pool[idx];
  const finish = (good: boolean, choice: string | null) => {
    if (res !== null) return;
    onActivity();
    setRes(good);
    setPicked(choice);
    if (good) setOk(x => x + 1);
    onRecord(good);
  };

  return (
    <>
      <div className="between">
        <button type="button" className="xs" onClick={onBack}>
          ← Назад
        </button>
        <span className="mu">
          {idx + 1} / {pool.length}
        </span>
      </div>

      <div className="card">
        <div className="between">
          <h2 style={{ margin: 0 }}>
            {item.isType ? "Послушай и напиши фразу" : "Послушай и выбери услышанное"}
          </h2>
          <button type="button" className="p" onClick={() => onSpeak(item.de)}>
            🔊 Послушать ещё раз
          </button>
        </div>
        <div className="sm mu" style={{ margin: "6px 0" }}>
          Подсказка перевода: {item.ru}
        </div>

        {item.isType ? (
          <div style={{ marginTop: 12 }}>
            <input
              className="full"
              value={typed}
              disabled={res !== null}
              placeholder="Напиши то, что услышал..."
              onChange={e => setTyped(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && res === null) finish(matchAns(typed, item.de), null);
              }}
            />
            <UmlautPad onInsert={ch => res === null && setTyped(p => p + ch)} />
            {res === null && (
              <button
                type="button"
                className="p"
                onClick={() => finish(matchAns(typed, item.de), null)}
              >
                Проверить
              </button>
            )}
          </div>
        ) : (
          <div style={{ marginTop: 12 }}>
            {item.opts.map(o => {
              let cls = "opt";
              if (res !== null) {
                if (o === item.de) cls += " good";
                else if (o === picked) cls += " bad";
              }
              return (
                <button
                  key={o}
                  type="button"
                  className={cls}
                  disabled={res !== null}
                  onClick={() => finish(o === item.de, o)}
                >
                  {o}
                </button>
              );
            })}
          </div>
        )}

        {res !== null && (
          <div style={{ marginTop: 12 }}>
            <span className={`badge ${res ? "g-das" : "g-die"}`}>
              {res ? "✓ Точно!" : "✗ Правильно:"}
            </span>{" "}
            <b>{item.de}</b>{" "}
            {item.tr && <span className="tr">({item.tr})</span>}
            <div style={{ marginTop: 10 }}>
              <button
                type="button"
                className="p"
                onClick={() => {
                  setIdx(idx + 1);
                  setTyped("");
                  setPicked(null);
                  setRes(null);
                }}
              >
                Дальше →
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// 4. Verb Conjugation Trainer
const PERSONS = ["ich", "du", "er/sie", "wir", "ihr", "sie/Sie"] as const;

interface VerbQuizQ {
  inf: string;
  ru: string;
  lvl: CEFRLevel;
  qText: string;
  ans: string;
  opts: string[];
  pr: [string, string, string, string, string, string];
  pf: string;
  pt: string;
}

function buildVerbRound(): VerbQuizQ[] {
  return shuffle(VERBS)
    .slice(0, 12)
    .map((v, i) => {
      const mode = i % 3;
      if (mode === 0) {
        const pIdx = Math.floor(Math.random() * 6);
        const ans = v.pr[pIdx];
        const opts = shuffle(
          Array.from(
            new Set([ans, ...v.pr, ...shuffle(VERBS).slice(0, 3).map(x => x.pr[pIdx])])
          )
        ).slice(0, 4);
        return {
          ...v,
          qText: `Настоящее время (Präsens): ${PERSONS[pIdx]} + ${v.inf} (${v.ru})`,
          ans,
          opts
        };
      }
      if (mode === 1) {
        const ans = v.pf;
        const opts = shuffle([
          ans,
          ...shuffle(VERBS.filter(x => x.pf !== ans))
            .slice(0, 3)
            .map(x => x.pf)
        ]);
        return {
          ...v,
          qText: `Прошедшее разговорное (Perfekt 3-е лицо): ${v.inf} (${v.ru})`,
          ans,
          opts
        };
      }
      const ans = v.pt;
      const opts = shuffle([
        ans,
        ...shuffle(VERBS.filter(x => x.pt !== ans))
          .slice(0, 3)
          .map(x => x.pt)
      ]);
      return {
        ...v,
        qText: `Прошедшее книжное (Präteritum 1/3-е лицо): ${v.inf} (${v.ru})`,
        ans,
        opts
      };
    });
}

const VerbsTrainer: React.FC<{
  onBack: () => void;
  onRecord: (ok: boolean) => void;
  onSpeak: (t: string) => void;
  onActivity: () => void;
}> = ({ onBack, onRecord, onSpeak, onActivity }) => {
  const [items, setItems] = useState<VerbQuizQ[]>(() => buildVerbRound());
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);

  if (idx >= items.length) {
    return (
      <div className="card">
        <h1>
          ⚡ Глаголы: {ok} из {items.length}
        </h1>
        <div className="row">
          <button
            type="button"
            className="p"
            onClick={() => {
              setItems(buildVerbRound());
              setIdx(0);
              setOk(0);
              setPicked(null);
            }}
          >
            Ещё 12 глаголов
          </button>
          <button type="button" onClick={onBack}>
            К тренажёрам
          </button>
        </div>
      </div>
    );
  }

  const q = items[idx];
  const answered = picked !== null;
  const good = picked === q.ans;

  return (
    <>
      <div className="between">
        <button type="button" className="xs" onClick={onBack}>
          ← Назад
        </button>
        <span className="mu">
          {idx + 1} / {items.length}
        </span>
      </div>
      <div className="card">
        <span className="badge">{q.lvl}</span>
        <h2>{q.qText}</h2>
        {q.opts.map(o => {
          let cls = "opt";
          if (answered) {
            if (o === q.ans) cls += " good";
            else if (o === picked) cls += " bad";
          }
          return (
            <button
              key={o}
              type="button"
              className={cls}
              disabled={answered}
              onClick={() => {
                onActivity();
                setPicked(o);
                const isOk = o === q.ans;
                if (isOk) setOk(x => x + 1);
                onRecord(isOk);
                onSpeak(`${q.inf}. ${q.ans}`);
              }}
            >
              {o}
            </button>
          );
        })}

        {answered && (
          <div style={{ marginTop: 10 }}>
            <span className={`badge ${good ? "g-das" : "g-die"}`}>
              {good ? "✓ Верно!" : "✗ Правильно:"}
            </span>{" "}
            <b>{q.ans}</b>
            <div className="sm mu" style={{ marginTop: 6 }}>
              Таблица: ich {q.pr[0]}, du {q.pr[1]}, er {q.pr[2]} · Perfekt:{" "}
              <b>{q.pf}</b> · Prät.: <b>{q.pt}</b>
            </div>
            <div style={{ marginTop: 10 }}>
              <button
                type="button"
                className="p"
                onClick={() => {
                  setIdx(idx + 1);
                  setPicked(null);
                }}
              >
                Дальше →
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// 5. Speaking Trainer
function wordSim(a: string, b: string): number {
  const wa = norm(a).split(" ").filter(Boolean);
  const wb = norm(b).split(" ").filter(Boolean);
  if (!wb.length) return 0;
  let hit = 0;
  wb.forEach(w => {
    if (wa.includes(w)) hit++;
  });
  return Math.round((hit / wb.length) * 100);
}

const SpeakingTrainer: React.FC<{
  onBack: () => void;
  onRecord: () => void;
  onSpeak: (t: string) => void;
  onActivity: () => void;
}> = ({ onBack, onRecord, onSpeak, onActivity }) => {
  const [list, setList] = useState(() =>
    shuffle(SENTENCES.filter(s => s[3] === "A1" || s[3] === "A2")).slice(0, 12)
  );
  const [idx, setIdx] = useState(0);
  const [listening, setListening] = useState(false);
  const [resultHtml, setResultHtml] = useState<{ said?: string; pct?: number; err?: string } | null>(
    null
  );

  const SR =
    typeof window !== "undefined"
      ? window.SpeechRecognition || window.webkitSpeechRecognition
      : undefined;

  if (idx >= list.length) {
    return (
      <div className="card">
        <h1>🎙️ Тренировка речи завершена!</h1>
        <div className="row">
          <button
            type="button"
            className="p"
            onClick={() => {
              setList(
                shuffle(SENTENCES.filter(s => s[3] === "A1" || s[3] === "A2")).slice(0, 12)
              );
              setIdx(0);
              setResultHtml(null);
            }}
          >
            Ещё 12 фраз
          </button>
          <button type="button" onClick={onBack}>
            К тренажёрам
          </button>
        </div>
      </div>
    );
  }

  const item = list[idx];

  const startMic = () => {
    if (!SR) return;
    onActivity();
    const rec = new SR();
    rec.lang = "de-DE";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    setListening(true);
    rec.onresult = ev => {
      const said = ev.results[0][0].transcript;
      const pct = wordSim(said, item[0]);
      setResultHtml({ said, pct });
    };
    rec.onerror = err => {
      setResultHtml({ err: err.error });
    };
    rec.onend = () => {
      setListening(false);
    };
    rec.start();
  };

  return (
    <>
      <div className="between">
        <button type="button" className="xs" onClick={onBack}>
          ← Назад
        </button>
        <span className="mu">
          {idx + 1} / {list.length}
        </span>
      </div>

      <div className="card" style={{ textAlign: "center" }}>
        <span className="badge">{item[3]}</span>
        <h2 style={{ fontSize: 24, margin: "12px 0" }}>{item[0]}</h2>
        <div className="mu">{item[1]}</div>

        <div className="row" style={{ justifyContent: "center", marginTop: 16 }}>
          <button type="button" className="ghost" onClick={() => onSpeak(item[0])}>
            🔊 Послушать эталон
          </button>
          {SR && (
            <button
              type="button"
              className="p"
              disabled={listening}
              onClick={startMic}
            >
              {listening ? "🎧 Слушаю… говори!" : "🎙️ Нажми и скажи"}
            </button>
          )}
        </div>

        {!SR && (
          <p className="sm mu" style={{ marginTop: 10 }}>
            В этом браузере нет распознавания речи — послушай эталон, повтори вслух и нажми
            «Готово».
          </p>
        )}

        {resultHtml && (
          <div className="card soft" style={{ marginTop: 12 }}>
            {resultHtml.err ? (
              <div className="mu sm">
                Ошибка микрофона ({resultHtml.err}). Проверьте доступ к микрофону.
              </div>
            ) : (
              <>
                Вы сказали: <b>«{resultHtml.said}»</b>
                <br />
                <span
                  className={`badge ${(resultHtml.pct || 0) >= 70 ? "g-das" : "g-die"}`}
                >
                  Совпадение: {resultHtml.pct}%
                </span>
              </>
            )}
          </div>
        )}

        <div className="row" style={{ justifyContent: "center", marginTop: 14 }}>
          <button
            type="button"
            className="ok"
            onClick={() => {
              onRecord();
              setIdx(idx + 1);
              setResultHtml(null);
            }}
          >
            Следующая фраза →
          </button>
        </div>
      </div>
    </>
  );
};

// 6. Reading Trainer (15 Stories)
const ReadingTrainer: React.FC<{
  completed: number[];
  onBack: () => void;
  onMarkDone: (storyIdx: number) => void;
  onSpeak: (t: string) => void;
  onActivity: () => void;
}> = ({ completed, onBack, onMarkDone, onSpeak, onActivity }) => {
  const [storyIdx, setStoryIdx] = useState<number | null>(null);
  const [showTr, setShowTr] = useState(true);
  const [showRu, setShowRu] = useState(true);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  if (storyIdx !== null) {
    const st = STORIES[storyIdx];
    const allAnswered = st.questions.every((_, qi) => !!answers[qi]);

    return (
      <>
        <div className="between">
          <button
            type="button"
            className="xs"
            onClick={() => {
              setStoryIdx(null);
              setAnswers({});
            }}
          >
            ← Все тексты
          </button>
          <div className="row">
            <button
              type="button"
              className={`xs ${showTr ? "p" : ""}`}
              onClick={() => setShowTr(x => !x)}
            >
              Транскрипция
            </button>
            <button
              type="button"
              className={`xs ${showRu ? "p" : ""}`}
              onClick={() => setShowRu(x => !x)}
            >
              Перевод
            </button>
            <button
              type="button"
              className="xs ok"
              onClick={() => onSpeak(st.text_lines.map(l => l[0]).join(" "))}
            >
              🔊 Весь текст
            </button>
          </div>
        </div>

        <div className="card">
          <span className="badge">
            {st.level} · {st.topic}
          </span>
          <h1>{st.title}</h1>
          {st.text_lines.map((l, i) => (
            <div
              key={i}
              style={{ padding: "8px 0", borderBottom: "1px solid var(--bd)" }}
            >
              <div>
                <b>{l[0]}</b>{" "}
                <span className="s" onClick={() => onSpeak(l[0])}>
                  🔊
                </span>
              </div>
              {showTr && <div className="tr sm">{l[1]}</div>}
              {showRu && <div className="mu sm">{l[2]}</div>}
            </div>
          ))}
        </div>

        <div className="card">
          <h2>❓ Проверка понимания текста</h2>
          {st.questions.map((q, qi) => {
            const picked = answers[qi];
            return (
              <div key={qi} style={{ margin: "12px 0" }}>
                <b>
                  {qi + 1}. {q[0]}
                </b>
                <div>
                  {q[2].map(o => {
                    let cls = "opt";
                    if (picked) {
                      if (o === q[1]) cls += " good";
                      else if (o === picked) cls += " bad";
                    }
                    return (
                      <button
                        key={o}
                        type="button"
                        className={cls}
                        disabled={!!picked}
                        onClick={() => {
                          onActivity();
                          const next = { ...answers, [qi]: o };
                          setAnswers(next);
                          if (st.questions.every((_, k) => !!next[k])) {
                            onMarkDone(storyIdx);
                          }
                        }}
                      >
                        {o}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {allAnswered && (
            <div className="badge g-das">✓ Текст отмечен как прочитанный (+40 XP)!</div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="between">
        <button type="button" className="xs" onClick={onBack}>
          ← Тренажёры
        </button>
        <h1 style={{ margin: 0 }}>📖 Чтение: {STORIES.length} текстов</h1>
      </div>

      <div className="grid2" style={{ marginTop: 10 }}>
        {STORIES.map((st, idx) => {
          const isDone = completed.includes(idx);
          return (
            <div
              key={idx}
              className="card soft"
              style={{ cursor: "pointer" }}
              onClick={() => {
                onActivity();
                setAnswers({});
                setStoryIdx(idx);
              }}
            >
              <div className="between">
                <span
                  className={`badge ${
                    st.level === "A1" ? "g-das" : st.level === "A2" ? "g-der" : "g-oth"
                  }`}
                >
                  {st.level}
                </span>
                {isDone && <span className="badge g-das">✓ Прочитано</span>}
              </div>
              <h3 style={{ margin: "8px 0 4px" }}>
                {idx + 1}. {st.title}
              </h3>
              <div className="mu sm">
                {st.topic} · {st.text_lines.length} фраз
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// 7. Verb Prepositions Trainer
const PrepsTrainer: React.FC<{
  onBack: () => void;
  onRecord: (ok: boolean) => void;
  onSpeak: (t: string) => void;
  onActivity: () => void;
}> = ({ onBack, onRecord, onSpeak, onActivity }) => {
  const [items, setItems] = useState(() => shuffle(VERB_PREPS).slice(0, 12));
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);

  if (idx >= items.length) {
    return (
      <div className="card">
        <h1>
          🔗 Управление глаголов: {ok} из {items.length}
        </h1>
        <p className="mu">Предлоги с глаголами — основа грамотной речи на B1!</p>
        <div className="row">
          <button
            type="button"
            className="p"
            onClick={() => {
              setItems(shuffle(VERB_PREPS).slice(0, 12));
              setIdx(0);
              setOk(0);
              setPicked(null);
            }}
          >
            Ещё 12 глаголов
          </button>
          <button type="button" onClick={onBack}>
            К тренажёрам
          </button>
        </div>
      </div>
    );
  }

  const item = items[idx];
  const answered = picked !== null;
  const good = picked === item.prep;

  return (
    <>
      <div className="between">
        <button type="button" className="xs" onClick={onBack}>
          ← Назад
        </button>
        <span className="mu">
          {idx + 1} / {items.length}
        </span>
      </div>
      <div className="card">
        <div className="row">
          <span className="badge">{item.lvl}</span>
          <span className="badge g-der">{item.verb} + ? (+ {item.kasus})</span>
        </div>
        <h2 style={{ margin: "10px 0 4px" }}>{item.question}</h2>
        <div className="mu sm" style={{ marginBottom: 12 }}>
          Значение: {item.ru}
        </div>
        {item.options.map(o => {
          let cls = "opt";
          if (answered) {
            if (o === item.prep) cls += " good";
            else if (o === picked) cls += " bad";
          }
          return (
            <button
              key={o}
              type="button"
              className={cls}
              disabled={answered}
              onClick={() => {
                onActivity();
                setPicked(o);
                const isOk = o === item.prep;
                if (isOk) setOk(x => x + 1);
                onRecord(isOk);
                onSpeak(item.exampleDe);
              }}
            >
              {o}
            </button>
          );
        })}
        {answered && (
          <div style={{ marginTop: 10 }}>
            <span className={`badge ${good ? "g-das" : "g-die"}`}>
              {good ? "✓ Верно!" : "✗ Правильно:"}
            </span>{" "}
            <b>
              {item.verb} {item.prep} (+ {item.kasus})
            </b>
            <div className="card soft" style={{ marginTop: 8 }}>
              <b>{item.exampleDe}</b>{" "}
              <span className="s" onClick={() => onSpeak(item.exampleDe)}>
                🔊
              </span>
              <div className="mu sm">{item.exampleRu}</div>
            </div>
            <button
              type="button"
              className="p"
              style={{ marginTop: 10 }}
              onClick={() => {
                setIdx(idx + 1);
                setPicked(null);
              }}
            >
              Дальше →
            </button>
          </div>
        )}
      </div>
    </>
  );
};

// 8. Cases & Declension Trainer
const CasesTrainer: React.FC<{
  onBack: () => void;
  onRecord: (ok: boolean) => void;
  onSpeak: (t: string) => void;
  onActivity: () => void;
}> = ({ onBack, onRecord, onSpeak, onActivity }) => {
  const [items, setItems] = useState(() => shuffle(CASE_DRILLS).slice(0, 12));
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);

  if (idx >= items.length) {
    return (
      <div className="card">
        <h1>
          🏛️ Падежи и Окончания: {ok} из {items.length}
        </h1>
        <div className="row">
          <button
            type="button"
            className="p"
            onClick={() => {
              setItems(shuffle(CASE_DRILLS).slice(0, 12));
              setIdx(0);
              setOk(0);
              setPicked(null);
            }}
          >
            Ещё 12 заданий
          </button>
          <button type="button" onClick={onBack}>
            К тренажёрам
          </button>
        </div>
      </div>
    );
  }

  const item = items[idx];
  const answered = picked !== null;
  const good = picked === item.answer;
  const fullSentence = item.sentence
    .replace("___", item.answer === "-" ? "" : item.answer)
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <>
      <div className="between">
        <button type="button" className="xs" onClick={onBack}>
          ← Назад
        </button>
        <span className="mu">
          {idx + 1} / {items.length}
        </span>
      </div>
      <div className="card">
        <div className="row">
          <span className="badge">{item.lvl}</span>
          <span className="badge g-oth">{item.kasus}</span>
        </div>
        <h2 style={{ margin: "10px 0 4px" }}>{item.sentence}</h2>
        <div className="mu sm" style={{ marginBottom: 12 }}>
          Перевод: {item.ru}
        </div>
        {item.options.map(o => {
          let cls = "opt";
          if (answered) {
            if (o === item.answer) cls += " good";
            else if (o === picked) cls += " bad";
          }
          return (
            <button
              key={o}
              type="button"
              className={cls}
              disabled={answered}
              onClick={() => {
                onActivity();
                setPicked(o);
                const isOk = o === item.answer;
                if (isOk) setOk(x => x + 1);
                onRecord(isOk);
                onSpeak(fullSentence);
              }}
            >
              {o === "-" ? "(без артикля)" : o}
            </button>
          );
        })}
        {answered && (
          <div style={{ marginTop: 10 }}>
            <span className={`badge ${good ? "g-das" : "g-die"}`}>
              {good ? "✓ Точно!" : "✗ Правильно:"}
            </span>{" "}
            <b>{item.answer === "-" ? "без артикля" : item.answer}</b>{" "}
            <span className="s" onClick={() => onSpeak(fullSentence)}>
              🔊
            </span>
            <div className="card soft sm" style={{ marginTop: 8 }}>
              💡 {item.rule}
            </div>
            <button
              type="button"
              className="p"
              style={{ marginTop: 10 }}
              onClick={() => {
                setIdx(idx + 1);
                setPicked(null);
              }}
            >
              Дальше →
            </button>
          </div>
        )}
      </div>
    </>
  );
};

// 9. Roleplay Dialog Simulator
const DialogsTrainer: React.FC<{
  completed: string[];
  onBack: () => void;
  onMarkDone: (id: string) => void;
  onSpeak: (t: string) => void;
  onActivity: () => void;
}> = ({ completed, onBack, onMarkDone, onSpeak, onActivity }) => {
  const [dlgIdx, setDlgIdx] = useState<number | null>(null);
  const [stepIdx, setStepIdx] = useState(0);
  const [pickedOpt, setPickedOpt] = useState<number | null>(null);

  if (dlgIdx !== null) {
    const dlg = ROLEPLAY_DIALOGS[dlgIdx];
    const done = stepIdx >= dlg.steps.length;

    if (done) {
      return (
        <div className="card" style={{ textAlign: "center" }}>
          <h1>💬 Диалог «{dlg.title}» пройден!</h1>
          <p className="mu">Отличная работа! За прохождение сцены начислено +50 XP.</p>
          <div className="row" style={{ justifyContent: "center" }}>
            <button
              type="button"
              className="p"
              onClick={() => {
                setDlgIdx(null);
                setStepIdx(0);
                setPickedOpt(null);
              }}
            >
              К списку сцен
            </button>
            <button type="button" onClick={onBack}>
              Все тренажёры
            </button>
          </div>
        </div>
      );
    }

    const step = dlg.steps[stepIdx];
    const opts = step.options;
    const chosen = pickedOpt !== null ? opts[pickedOpt] : null;

    return (
      <>
        <div className="between">
          <button
            type="button"
            className="xs"
            onClick={() => {
              setDlgIdx(null);
              setStepIdx(0);
              setPickedOpt(null);
            }}
          >
            ← Все диалоги
          </button>
          <span className="mu">
            Реплика {stepIdx + 1} / {dlg.steps.length}
          </span>
        </div>

        <div className="card">
          <span className="badge">{dlg.level}</span>
          <h2 style={{ margin: "6px 0" }}>{dlg.title}</h2>
          <div className="sm mu">{dlg.setting}</div>

          <div className="card soft" style={{ marginTop: 12 }}>
            <div className="between">
              <b>🗣️ Собеседник:</b>
              <button type="button" className="xs" onClick={() => onSpeak(step.npcDe)}>
                🔊 Прослушать
              </button>
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, marginTop: 6 }}>{step.npcDe}</div>
            <div className="sm mu">{step.npcRu}</div>
          </div>

          <h3>Как ответить?</h3>
          {opts.map((o, i) => {
            let cls = "opt";
            if (chosen) {
              if (o.isBest) cls += " good";
              else if (i === pickedOpt) cls += " bad";
            }
            return (
              <button
                key={i}
                type="button"
                className={cls}
                disabled={!!chosen}
                onClick={() => {
                  onActivity();
                  setPickedOpt(i);
                  onSpeak(o.de);
                }}
              >
                <b>{o.de}</b>
                <div className="sm mu">{o.ru}</div>
              </button>
            );
          })}

          {chosen && (
            <div style={{ marginTop: 10 }}>
              <div className={`card soft ${chosen.isBest ? "good" : "bad"}`}>
                {chosen.feedback}
              </div>
              <button
                type="button"
                className="p"
                style={{ marginTop: 8 }}
                onClick={() => {
                  if (stepIdx + 1 >= dlg.steps.length) {
                    onMarkDone(dlg.id);
                  }
                  setStepIdx(stepIdx + 1);
                  setPickedOpt(null);
                }}
              >
                {stepIdx + 1 >= dlg.steps.length ? "Завершить диалог →" : "Следующая реплика →"}
              </button>
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="between">
        <button type="button" className="xs" onClick={onBack}>
          ← Тренажёры
        </button>
        <h1 style={{ margin: 0 }}>💬 Симулятор диалогов ({ROLEPLAY_DIALOGS.length})</h1>
      </div>
      <div className="grid2" style={{ marginTop: 10 }}>
        {ROLEPLAY_DIALOGS.map((d, idx) => {
          const isDone = completed.includes(d.id);
          return (
            <div
              key={d.id}
              className="card soft"
              style={{ cursor: "pointer" }}
              onClick={() => {
                onActivity();
                setDlgIdx(idx);
                setStepIdx(0);
                setPickedOpt(null);
                if (d.steps[0]) onSpeak(d.steps[0].npcDe);
              }}
            >
              <div className="between">
                <span className="badge g-der">{d.level}</span>
                {isDone && <span className="badge g-das">✓ Пройдено</span>}
              </div>
              <h3 style={{ margin: "8px 0 4px" }}>{d.title}</h3>
              <div className="mu sm">{d.setting}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// 10. Idioms & Nomen-Verb Trainer
const IdiomsTrainer: React.FC<{
  onBack: () => void;
  onRecord: (ok: boolean) => void;
  onSpeak: (t: string) => void;
  onActivity: () => void;
}> = ({ onBack, onRecord, onSpeak, onActivity }) => {
  const [items, setItems] = useState(() => shuffle(IDIOM_DRILLS).slice(0, 10));
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);

  if (idx >= items.length) {
    return (
      <div className="card">
        <h1>
          🦅 Идиомы и связки: {ok} из {items.length}
        </h1>
        <div className="row">
          <button
            type="button"
            className="p"
            onClick={() => {
              setItems(shuffle(IDIOM_DRILLS).slice(0, 10));
              setIdx(0);
              setOk(0);
              setPicked(null);
            }}
          >
            Ещё 10 идиом
          </button>
          <button type="button" onClick={onBack}>
            К тренажёрам
          </button>
        </div>
      </div>
    );
  }

  const item = items[idx];
  const answered = picked !== null;
  const good = picked === item.ru;

  return (
    <>
      <div className="between">
        <button type="button" className="xs" onClick={onBack}>
          ← Назад
        </button>
        <span className="mu">
          {idx + 1} / {items.length}
        </span>
      </div>
      <div className="card">
        <span className="badge">{item.lvl}</span>
        <h2 style={{ fontSize: 24, margin: "10px 0 4px" }}>
          «{item.phrase}»{" "}
          <span className="s" onClick={() => onSpeak(item.phrase)}>
            🔊
          </span>
        </h2>
        <div className="mu sm" style={{ marginBottom: 12 }}>
          {item.literal}
        </div>
        {item.options.map(o => {
          let cls = "opt";
          if (answered) {
            if (o === item.ru) cls += " good";
            else if (o === picked) cls += " bad";
          }
          return (
            <button
              key={o}
              type="button"
              className={cls}
              disabled={answered}
              onClick={() => {
                onActivity();
                setPicked(o);
                const isOk = o === item.ru;
                if (isOk) setOk(x => x + 1);
                onRecord(isOk);
                onSpeak(item.exampleDe);
              }}
            >
              {o}
            </button>
          );
        })}
        {answered && (
          <div style={{ marginTop: 10 }}>
            <span className={`badge ${good ? "g-das" : "g-die"}`}>
              {good ? "✓ Верно!" : "✗ Значение:"}
            </span>{" "}
            <b>{item.ru}</b>
            <div className="card soft" style={{ marginTop: 8 }}>
              <b>{item.exampleDe}</b>{" "}
              <span className="s" onClick={() => onSpeak(item.exampleDe)}>
                🔊
              </span>
              <div className="mu sm">{item.exampleRu}</div>
            </div>
            <button
              type="button"
              className="p"
              style={{ marginTop: 10 }}
              onClick={() => {
                setIdx(idx + 1);
                setPicked(null);
              }}
            >
              Дальше →
            </button>
          </div>
        )}
      </div>
    </>
  );
};

// 11. 60-Second Blitz Sprint Trainer
interface BlitzQ {
  de: string;
  ru: string;
  opts: string[];
}

function nextBlitzQ(): BlitzQ {
  const pool = shuffle(VOCAB).slice(0, 4);
  const target = pool[0];
  return {
    de: target[0],
    ru: target[2],
    opts: shuffle(pool.map(x => x[2]))
  };
}

const BlitzTrainer: React.FC<{
  bestScore: number;
  onBack: () => void;
  onNewBest: (score: number) => void;
  onSpeak: (t: string) => void;
  onActivity: () => void;
}> = ({ bestScore, onBack, onNewBest, onSpeak, onActivity }) => {
  const [phase, setPhase] = useState<"ready" | "play" | "done">("ready");
  const [secLeft, setSecLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [q, setQ] = useState<BlitzQ>(() => nextBlitzQ());

  useEffect(() => {
    if (phase !== "play") return;
    const id = window.setInterval(() => {
      setSecLeft(s => {
        if (s <= 1) {
          setPhase("done");
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase === "done" && score > bestScore) {
      onNewBest(score);
    }
  }, [phase, score, bestScore, onNewBest]);

  if (phase === "ready") {
    return (
      <div className="card" style={{ textAlign: "center" }}>
        <div className="between">
          <button type="button" className="xs" onClick={onBack}>
            ← Назад
          </button>
          <span className="badge">🏆 Ваш рекорд: {bestScore}</span>
        </div>
        <h1>⚡ Блиц-Спринт 60 секунд</h1>
        <p className="mu">
          Как можно быстрее выбирай перевод немецких слов за 1 минуту! Подряд верные ответы дают
          комбо-множитель.
        </p>
        <button
          type="button"
          className="p"
          onClick={() => {
            onActivity();
            setScore(0);
            setCombo(0);
            setSecLeft(60);
            const first = nextBlitzQ();
            setQ(first);
            setPhase("play");
            onSpeak(first.de);
          }}
        >
          🚀 Поехали! (60 сек)
        </button>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="card" style={{ textAlign: "center" }}>
        <h1>⏱️ Время вышло!</h1>
        <div style={{ fontSize: 36, fontWeight: 800, margin: "8px 0" }}>{score} очков</div>
        <p className="mu">
          {score > bestScore ? "🎉 Новый личный рекорд!" : `Ваш лучший результат: ${bestScore}`}
        </p>
        <div className="row" style={{ justifyContent: "center" }}>
          <button
            type="button"
            className="p"
            onClick={() => {
              onActivity();
              setScore(0);
              setCombo(0);
              setSecLeft(60);
              const first = nextBlitzQ();
              setQ(first);
              setPhase("play");
            }}
          >
            Сыграть ещё раз
          </button>
          <button type="button" onClick={onBack}>
            К тренажёрам
          </button>
        </div>
      </div>
    );
  }

  const mult = Math.min(4, 1 + Math.floor(combo / 3));

  return (
    <>
      <div className="between">
        <button type="button" className="xs" onClick={() => setPhase("ready")}>
          ← Стоп
        </button>
        <div className="row">
          <span className="badge g-das">Очки: {score}</span>
          <span className="badge g-der">Комбо: x{mult}</span>
          <span className="badge g-die">⏱️ {secLeft} с</span>
        </div>
      </div>
      <div className="card" style={{ textAlign: "center" }}>
        <div style={{ fontSize: 28, fontWeight: 800, margin: "12px 0" }}>
          <WordBadge word={q.de} large />{" "}
          <span className="s" onClick={() => onSpeak(q.de)}>
            🔊
          </span>
        </div>
        {q.opts.map(o => (
          <button
            key={o}
            type="button"
            className="opt"
            onClick={() => {
              onActivity();
              if (o === q.ru) {
                const nextCombo = combo + 1;
                setCombo(nextCombo);
                setScore(s => s + Math.min(4, 1 + Math.floor(nextCombo / 3)));
              } else {
                setCombo(0);
              }
              const nq = nextBlitzQ();
              setQ(nq);
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </>
  );
};

// 12. Goethe-Zertifikat Exam Simulator (A1 / A2 / B1)
const ExamTrainer: React.FC<{
  passedLevels: CEFRLevel[];
  onBack: () => void;
  onPassExam: (lvl: CEFRLevel) => void;
  onSpeak: (t: string) => void;
  onActivity: () => void;
}> = ({ passedLevels, onBack, onPassExam, onSpeak, onActivity }) => {
  const [modIdx, setModIdx] = useState<number | null>(null);
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [finished, setFinished] = useState(false);

  if (modIdx !== null) {
    const mod = EXAM_MODULES[modIdx];
    const total = mod.questions.length;

    if (finished) {
      const correct = mod.questions.filter((q, i) => answers[i] === q.answer).length;
      const pct = Math.round((correct / total) * 100);
      const passed = pct >= 70;
      return (
        <div className="card">
          <h1>
            🎓 {mod.level}: {pct}% ({correct} из {total})
          </h1>
          <div className={`card soft ${passed ? "good" : "bad"}`}>
            {passed
              ? `🎉 Поздравляем! Экзамен Goethe-Zertifikat ${mod.level} успешно сдан (+150 XP)!`
              : "Для зачёта нужно набрать от 70%. Повтори слабые места и попробуй снова."}
          </div>
          <h3>Разбор ответов:</h3>
          {mod.questions.map((q, i) => {
            const isOk = answers[i] === q.answer;
            return (
              <div key={i} className="card soft sm" style={{ margin: "6px 0" }}>
                <div>
                  <span className={`badge ${isOk ? "g-das" : "g-die"}`}>
                    {isOk ? "✓" : "✗"} {q.part}
                  </span>{" "}
                  <b>{q.prompt}</b>
                </div>
                <div className="mu">
                  Правильно: <b>{q.answer}</b> · {q.explain}
                </div>
              </div>
            );
          })}
          <div className="row" style={{ marginTop: 12 }}>
            <button
              type="button"
              className="p"
              onClick={() => {
                setModIdx(null);
                setFinished(false);
                setAnswers({});
                setQIdx(0);
              }}
            >
              К списку экзаменов
            </button>
          </div>
        </div>
      );
    }

    const q = mod.questions[qIdx];
    const picked = answers[qIdx];

    return (
      <>
        <div className="between">
          <button
            type="button"
            className="xs"
            onClick={() => {
              setModIdx(null);
              setFinished(false);
              setAnswers({});
              setQIdx(0);
            }}
          >
            ← Завершить
          </button>
          <span className="mu">
            {mod.level} · Вопрос {qIdx + 1} / {total} ({q.part})
          </span>
        </div>

        <div className="bar" style={{ margin: "8px 0" }}>
          <i style={{ width: `${((qIdx + 1) / total) * 100}%` }} />
        </div>

        <div className="card">
          <span className="badge g-der">Часть: {q.part}</span>
          {q.textBlock && (
            <div className="card soft" style={{ marginTop: 10 }}>
              {q.textBlock}
            </div>
          )}
          {q.audioScript && (
            <div style={{ marginTop: 10 }}>
              <button
                type="button"
                className="p"
                onClick={() => onSpeak(q.audioScript!)}
              >
                🔊 Прослушать аудиозадание
              </button>
            </div>
          )}
          <h2 style={{ marginTop: 12 }}>{q.prompt}</h2>
          {q.options.map(o => (
            <button
              key={o}
              type="button"
              className={`opt ${picked === o ? "good" : ""}`}
              onClick={() => {
                onActivity();
                setAnswers(prev => ({ ...prev, [qIdx]: o }));
              }}
            >
              {o}
            </button>
          ))}

          <div className="between" style={{ marginTop: 12 }}>
            <button
              type="button"
              className="xs"
              disabled={qIdx === 0}
              onClick={() => setQIdx(qIdx - 1)}
            >
              ← Назад
            </button>
            {qIdx + 1 < total ? (
              <button
                type="button"
                className="p"
                disabled={!picked}
                onClick={() => setQIdx(qIdx + 1)}
              >
                Следующий вопрос →
              </button>
            ) : (
              <button
                type="button"
                className="ok"
                disabled={!picked}
                onClick={() => {
                  const correct = mod.questions.filter(
                    (item, i) => (i === qIdx ? picked : answers[i]) === item.answer
                  ).length;
                  if (Math.round((correct / total) * 100) >= 70) {
                    onPassExam(mod.level);
                  }
                  setFinished(true);
                }}
              >
                Сдать экзамен и узнать результат ✓
              </button>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="between">
        <button type="button" className="xs" onClick={onBack}>
          ← Тренажёры
        </button>
        <h1 style={{ margin: 0 }}>🎓 Пробный экзамен Goethe-Zertifikat</h1>
      </div>
      <div className="grid3" style={{ marginTop: 10 }}>
        {EXAM_MODULES.map((m, idx) => {
          const isPassed = passedLevels.includes(m.level);
          return (
            <div
              key={m.level}
              className={`card soft ${isPassed ? "good" : ""}`}
              style={{ cursor: "pointer" }}
              onClick={() => {
                onActivity();
                setModIdx(idx);
                setQIdx(0);
                setAnswers({});
                setFinished(false);
              }}
            >
              <div className="between">
                <span className="badge g-der">{m.level}</span>
                {isPassed && <span className="badge g-das">✓ Сдан</span>}
              </div>
              <h3 style={{ margin: "8px 0 4px" }}>{m.title}</h3>
              <p className="mu sm">{m.desc}</p>
              <button type="button" className="p xs">
                Начать экзамен →
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
