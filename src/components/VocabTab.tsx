import React, { useEffect, useState } from "react";
import type { SRSItem, VocabFilterState, VocabTuple } from "../types";
import { CATEGORIES, VOCAB } from "../data/vocab";
import { shuffle } from "../utils";
import { WordBadge } from "./UmlautPad";

interface VocabTabProps {
  srs: Record<string, SRSItem>;
  vocabMode: "list" | "srs";
  filter: VocabFilterState;
  onSetMode: (m: "list" | "srs") => void;
  onUpdateFilter: (patch: Partial<VocabFilterState>) => void;
  onToggleKnown: (word: string) => void;
  onRateSRS: (word: string, rating: 0 | 1 | 2 | 3) => void;
  onSpeak: (text: string) => void;
  onActivity: () => void;
}

function getWordStatus(srs: Record<string, SRSItem>, de: string): "new" | "learning" | "known" {
  const s = srs[de];
  if (!s) return "new";
  if (s.box >= 3) return "known";
  return "learning";
}

export const VocabTab: React.FC<VocabTabProps> = ({
  srs,
  vocabMode,
  filter,
  onSetMode,
  onUpdateFilter,
  onToggleKnown,
  onRateSRS,
  onSpeak,
  onActivity
}) => {
  const learned = VOCAB.filter(v => getWordStatus(srs, v[0]) === "known").length;
  const learning = VOCAB.filter(v => getWordStatus(srs, v[0]) === "learning").length;
  const due = VOCAB.filter(v => {
    const s = srs[v[0]];
    return !s || (s.next || 0) <= Date.now();
  }).length;

  return (
    <>
      <div className="card">
        <div className="between">
          <div>
            <h1 style={{ margin: 0 }}>🗂️ База слов ({VOCAB.length} слов)</h1>
            <div className="mu">
              Выучено: <b style={{ color: "var(--ok)" }}>{learned}</b> · Учу сейчас:{" "}
              <b>{learning}</b> · К повтору сегодня: <b>{due}</b>
            </div>
          </div>
          <div className="row">
            <button
              type="button"
              className={vocabMode === "list" ? "p" : ""}
              onClick={() => onSetMode("list")}
            >
              📖 Каталог слов
            </button>
            <button
              type="button"
              className={vocabMode === "srs" ? "p" : ""}
              onClick={() => onSetMode("srs")}
            >
              🧠 Карточки (SRS)
            </button>
            <button
              type="button"
              className="ghost"
              title="Скачать весь словарь для импорта в Anki (.tsv)"
              onClick={() => {
                const tsv = VOCAB.map(v =>
                  [v[0], `${v[2]} [${v[1]}]`, v[5], v[6], v[3], v[4]]
                    .map(s => String(s || "").replace(/[\t\r\n]+/g, " "))
                    .join("\t")
                ).join("\n");
                const blob = new Blob(["\uFEFF" + tsv], { type: "text/tab-separated-values;charset=utf-8" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "deutsch-pro-anki.tsv";
                a.click();
                setTimeout(() => URL.revokeObjectURL(url), 1000);
              }}
            >
              📥 Anki (.tsv)
            </button>
          </div>
        </div>
      </div>

      {vocabMode === "list" ? (
        <VocabCatalog
          srs={srs}
          filter={filter}
          onUpdateFilter={onUpdateFilter}
          onToggleKnown={onToggleKnown}
          onSpeak={onSpeak}
        />
      ) : (
        <SRSDeck
          srs={srs}
          cat={filter.cat}
          onChangeCat={cat => onUpdateFilter({ cat, page: 0 })}
          onRateSRS={onRateSRS}
          onBackToList={() => onSetMode("list")}
          onSpeak={onSpeak}
          onActivity={onActivity}
        />
      )}
    </>
  );
};

interface VocabCatalogProps {
  srs: Record<string, SRSItem>;
  filter: VocabFilterState;
  onUpdateFilter: (patch: Partial<VocabFilterState>) => void;
  onToggleKnown: (word: string) => void;
  onSpeak: (text: string) => void;
}

const VocabCatalog: React.FC<VocabCatalogProps> = ({
  srs,
  filter,
  onUpdateFilter,
  onToggleKnown,
  onSpeak
}) => {
  const q = (filter.q || "").trim().toLowerCase();
  const filtered = VOCAB.filter(v => {
    if (filter.cat !== "ALL" && v[3] !== filter.cat) return false;
    if (filter.lvl !== "ALL" && v[4] !== filter.lvl) return false;
    if (filter.stat !== "ALL" && getWordStatus(srs, v[0]) !== filter.stat) return false;
    if (
      q &&
      !(
        v[0].toLowerCase().includes(q) ||
        v[2].toLowerCase().includes(q) ||
        v[5].toLowerCase().includes(q)
      )
    ) {
      return false;
    }
    return true;
  });

  const perPage = 40;
  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = filter.page >= pages ? 0 : filter.page;
  const slice = filtered.slice(safePage * perPage, (safePage + 1) * perPage);

  return (
    <>
      <div className="card soft">
        <div className="grid2">
          <input
            placeholder="🔍 Поиск слова (немецкий или русский)..."
            value={filter.q}
            onChange={e => onUpdateFilter({ q: e.target.value, page: 0 })}
          />
          <select
            value={filter.cat}
            onChange={e => onUpdateFilter({ cat: e.target.value, page: 0 })}
          >
            <option value="ALL">Все категории ({CATEGORIES.length})</option>
            {CATEGORIES.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="between" style={{ marginTop: 8 }}>
          <div className="row">
            {["ALL", "A1", "A2", "B1"].map(l => (
              <button
                key={l}
                type="button"
                className={`xs ${filter.lvl === l ? "p" : ""}`}
                onClick={() => onUpdateFilter({ lvl: l, page: 0 })}
              >
                {l === "ALL" ? "Все уровни" : l}
              </button>
            ))}
          </div>
          <div className="row">
            {[
              ["ALL", "Все"],
              ["new", "Новые"],
              ["learning", "Учу"],
              ["known", "Знаю ✓"]
            ].map(([val, lbl]) => (
              <button
                key={val}
                type="button"
                className={`xs ${filter.stat === val ? "p" : ""}`}
                onClick={() => onUpdateFilter({ stat: val, page: 0 })}
              >
                {lbl}
              </button>
            ))}
          </div>
        </div>

        <div className="mu sm" style={{ marginTop: 6 }}>
          Найдено: <b>{filtered.length}</b> · Легенда:{" "}
          <span className="badge g-der">der</span> м.р.{" "}
          <span className="badge g-die">die</span> ж.р.{" "}
          <span className="badge g-das">das</span> ср.р.
        </div>
      </div>

      <div className="card">
        {slice.length === 0 ? (
          <p className="mu">Ничего не найдено по этим фильтрам.</p>
        ) : (
          slice.map(v => {
            const st = getWordStatus(srs, v[0]);
            return (
              <div key={v[0]} className="w">
                <div>
                  <div style={{ cursor: "pointer" }} onClick={() => onSpeak(v[0])}>
                    <WordBadge word={v[0]} /> <span className="s">🔊</span>
                  </div>
                  <div className="sm mu">
                    {v[4]} · {v[7]}
                  </div>
                </div>
                <div>
                  <div className="tr">{v[1]}</div>
                  <div className="sm mu">{v[3]}</div>
                </div>
                <div className="between">
                  <div>
                    <div>
                      <b>{v[2]}</b>
                    </div>
                    <div
                      className="sm mu"
                      style={{ cursor: "pointer" }}
                      onClick={() => onSpeak(v[5])}
                    >
                      «{v[5]}» 🔊
                    </div>
                  </div>
                  <button
                    type="button"
                    className={`xs ${st === "known" ? "ok" : ""}`}
                    title="Отметить как выученное"
                    onClick={() => onToggleKnown(v[0])}
                  >
                    {st === "known" ? "✓" : "Учить"}
                  </button>
                </div>
              </div>
            );
          })
        )}

        <div className="between" style={{ marginTop: 12 }}>
          <button
            type="button"
            className="xs"
            disabled={safePage === 0}
            onClick={() => onUpdateFilter({ page: Math.max(0, safePage - 1) })}
          >
            ← Назад
          </button>
          <span className="sm mu">
            Страница {safePage + 1} из {pages}
          </span>
          <button
            type="button"
            className="xs"
            disabled={safePage + 1 >= pages}
            onClick={() => onUpdateFilter({ page: Math.min(pages - 1, safePage + 1) })}
          >
            Вперёд →
          </button>
        </div>
      </div>
    </>
  );
};

interface SRSDeckProps {
  srs: Record<string, SRSItem>;
  cat: string;
  onChangeCat: (cat: string) => void;
  onRateSRS: (word: string, rating: 0 | 1 | 2 | 3) => void;
  onBackToList: () => void;
  onSpeak: (text: string) => void;
  onActivity: () => void;
}

const SRSDeck: React.FC<SRSDeckProps> = ({
  srs,
  cat,
  onChangeCat,
  onRateSRS,
  onBackToList,
  onSpeak,
  onActivity
}) => {
  const buildDeck = (category: string, forceRandom = false): VocabTuple[] => {
    const pool = VOCAB.filter(
      v =>
        (category === "ALL" || v[3] === category) &&
        (forceRandom || !srs[v[0]] || (srs[v[0]].next || 0) <= Date.now())
    );
    return shuffle(pool).slice(0, 20);
  };

  const [deck, setDeck] = useState<VocabTuple[]>(() => buildDeck(cat));
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const nextDeck = buildDeck(cat);
    setDeck(nextDeck);
    setIdx(0);
    setFlipped(false);
    if (nextDeck[0]) onSpeak(nextDeck[0][0]);
  }, [cat]);

  const current = deck[idx];

  const handleRate = (r: 0 | 1 | 2 | 3) => {
    if (!current) return;
    onActivity();
    onRateSRS(current[0], r);
    const updatedDeck = r === 0 ? [...deck, current] : deck;
    if (r === 0) setDeck(updatedDeck);
    const nextIdx = idx + 1;
    setIdx(nextIdx);
    setFlipped(false);
    if (updatedDeck[nextIdx]) onSpeak(updatedDeck[nextIdx][0]);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "SELECT")) return;
      if (!current) return;
      if (e.code === "Space") {
        e.preventDefault();
        setFlipped(f => !f);
      } else if (e.key === "s" || e.key === "S" || e.key === "ы" || e.key === "Ы") {
        onSpeak(current[0]);
      } else if (flipped && ["1", "2", "3", "4"].includes(e.key)) {
        handleRate((parseInt(e.key, 10) - 1) as 0 | 1 | 2 | 3);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, flipped, idx, deck]);

  if (!current) {
    return (
      <div className="card" style={{ textAlign: "center" }}>
        <h2>🎉 Сессия карточек завершена!</h2>
        <p className="mu">
          {deck.length === 0
            ? "В выбранной категории все слова на сегодня уже повторены."
            : "Отличная работа! Все карточки отработаны."}
        </p>
        <div className="row" style={{ justifyContent: "center" }}>
          <button
            type="button"
            className="p"
            onClick={() => {
              const rand = buildDeck(cat, true);
              setDeck(rand);
              setIdx(0);
              setFlipped(false);
              if (rand[0]) onSpeak(rand[0][0]);
            }}
          >
            Учить случайные 20 слов
          </button>
          <button type="button" onClick={onBackToList}>
            Открыть словарь
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="card soft between">
        <span className="sm mu">
          Карточка {idx + 1} из {deck.length} · {current[3]} ({current[4]})
        </span>
        <select
          className="xs"
          value={cat}
          onChange={e => onChangeCat(e.target.value)}
        >
          <option value="ALL">Все темы</option>
          {CATEGORIES.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div
        className="flashcard"
        onClick={e => {
          if ((e.target as HTMLElement).closest("[data-noswap]")) return;
          setFlipped(f => !f);
        }}
      >
        <div className="sm mu">
          {flipped ? "Перевод и пример" : "Нажми на карточку, чтобы перевернуть"}
        </div>
        <div className="big">
          <WordBadge word={current[0]} large />
        </div>
        <div className="tr">{current[1]}</div>
        <div style={{ marginTop: 8 }} data-noswap="1">
          <button
            type="button"
            className="xs"
            onClick={() => onSpeak(current[0])}
          >
            🔊 Произнести
          </button>
        </div>

        {flipped && (
          <>
            <hr
              style={{
                width: "80%",
                border: "none",
                borderTop: "1px solid var(--bd)",
                margin: "14px 0"
              }}
            />
            <div style={{ fontSize: 22, fontWeight: 700 }}>{current[2]}</div>
            <div className="sm mu" style={{ marginTop: 4 }}>
              {current[7]}
            </div>
            <div
              className="card soft"
              style={{ marginTop: 12, width: "100%", maxWidth: 460 }}
              data-noswap="1"
            >
              <b>{current[5]}</b>{" "}
              <span className="s" onClick={() => onSpeak(current[5])}>
                🔊
              </span>
              <br />
              <span className="sm mu">{current[6]}</span>
            </div>
          </>
        )}
      </div>

      {flipped ? (
        <div className="grid2" style={{ marginTop: 10 }}>
          <button type="button" className="bad" onClick={() => handleRate(0)}>
            1 · 🔁 Снова (сейчас)
          </button>
          <button type="button" onClick={() => handleRate(1)}>
            2 · 😓 Трудно (10 мин)
          </button>
          <button type="button" className="good" onClick={() => handleRate(2)}>
            3 · 👍 Хорошо (1 день)
          </button>
          <button type="button" className="ok" onClick={() => handleRate(3)}>
            4 · 🚀 Легко (4 дня)
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <button type="button" className="p" onClick={() => setFlipped(true)}>
            Показать перевод (Пробел)
          </button>
        </div>
      )}

      <div className="sm mu" style={{ textAlign: "center", marginTop: 8 }}>
        Клавиши: Пробел — перевернуть · S — озвучить · 1–4 — оценить
      </div>
    </>
  );
};
