import React, { useEffect, useState } from "react";
import type { LessonLevel } from "../types";
import { ALPHABET, LESSONS } from "../data/lessons";
import { matchAns, shuffle } from "../utils";
import { UmlautPad, WordBadge } from "./UmlautPad";

interface QuizItem {
  q: string;
  o?: string[];
  a: string;
  s?: string;
  ty?: boolean;
  auto?: boolean;
}

interface CourseTabProps {
  lessonScores: Record<string, number>;
  activeLesson: number | null;
  onSetActiveLesson: (idx: number | null) => void;
  onSaveScore: (lessonIdx: number, pct: number) => void;
  onSpeak: (text: string) => void;
  onActivity: () => void;
}

const ALL_LESSON_WORDS = LESSONS.flatMap(u => u.w);

function buildQuiz(idx: number): QuizItem[] {
  const u =
    idx < 0
      ? {
          w: ALL_LESSON_WORDS,
          f: shuffle(LESSONS.flatMap(x => x.f)).slice(0, 5)
        }
      : LESSONS[idx];

  const qs: QuizItem[] = [];
  shuffle(u.w)
    .slice(0, 8)
    .forEach((w, k) => {
      const op = (fIdx: 0 | 1 | 2) =>
        shuffle([
          w[fIdx],
          ...shuffle(
            Array.from(new Set(ALL_LESSON_WORDS.map(x => x[fIdx]))).filter(x => x !== w[fIdx])
          ).slice(0, 3)
        ]);
      const t = k % 5;
      if (t === 0) qs.push({ q: `Что значит «${w[0]}»?`, o: op(2), a: w[2], s: w[0] });
      if (t === 1) qs.push({ q: `Как по-немецки «${w[2]}»?`, o: op(0), a: w[0] });
      if (t === 2) qs.push({ q: `Как читается «${w[0]}»?`, o: op(1), a: w[1], s: w[0] });
      if (t === 3) qs.push({ q: `Напиши по-немецки: «${w[2]}»`, a: w[0], ty: true });
      if (t === 4)
        qs.push({ q: "Послушай и выбери слово", o: op(0), a: w[0], s: w[0], auto: true });
    });

  (u.f || []).forEach(f => qs.push({ q: f[0], o: shuffle(f[2]), a: f[1] }));
  const dw = shuffle(u.w)[0];
  if (dw) {
    qs.push({
      q: "Послушай и напиши по-немецки",
      a: dw[0],
      ty: true,
      s: dw[0],
      auto: true
    });
  }
  return shuffle(qs);
}

export const CourseTab: React.FC<CourseTabProps> = ({
  lessonScores,
  activeLesson,
  onSetActiveLesson,
  onSaveScore,
  onSpeak,
  onActivity
}) => {
  const [lvlFilter, setLvlFilter] = useState<"ALL" | LessonLevel>("ALL");
  const [subTab, setSubTab] = useState<number>(0);

  // Quiz state
  const [qs, setQs] = useState<QuizItem[]>([]);
  const [qIdx, setQIdx] = useState(0);
  const [qOk, setQOk] = useState(0);
  const [typed, setTyped] = useState("");
  const [picked, setPicked] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [isGood, setIsGood] = useState(false);
  const [quizDone, setQuizDone] = useState(false);

  const startQuiz = (lessonIdx: number) => {
    onActivity();
    setQs(buildQuiz(lessonIdx));
    setQIdx(0);
    setQOk(0);
    setTyped("");
    setPicked(null);
    setAnswered(false);
    setIsGood(false);
    setQuizDone(false);
    setSubTab(3);
    onSetActiveLesson(lessonIdx);
  };

  const openLesson = (lessonIdx: number, tab = 0) => {
    onActivity();
    if (tab === 3) {
      startQuiz(lessonIdx);
      return;
    }
    setSubTab(tab);
    onSetActiveLesson(lessonIdx);
  };

  useEffect(() => {
    if (activeLesson !== null && subTab === 3 && !quizDone && qs[qIdx]?.auto && qs[qIdx]?.s) {
      onSpeak(qs[qIdx].s!);
    }
  }, [activeLesson, subTab, qIdx, quizDone, qs]);

  if (activeLesson !== null && subTab === 3) {
    const q = qs[qIdx];
    const submitAnswer = (good: boolean, choice: string | null) => {
      if (answered || !q) return;
      onActivity();
      setAnswered(true);
      setIsGood(good);
      setPicked(choice);
      const nextOk = good ? qOk + 1 : qOk;
      if (good) setQOk(nextOk);
      if (!q.s && /^[a-zA-ZäöüßÄÖÜ\s!?.,-]+$/.test(q.a)) {
        onSpeak(q.a);
      }
      if (qIdx + 1 >= qs.length) {
        // Defer saving until user clicks "Дальше" or compute when quizDone
      }
    };

    const nextQuestion = () => {
      if (qIdx + 1 >= qs.length) {
        const pct = qs.length ? Math.round((qOk / qs.length) * 100) : 0;
        if (activeLesson >= 0) {
          onSaveScore(activeLesson, pct);
        }
        setQuizDone(true);
        return;
      }
      setQIdx(qIdx + 1);
      setTyped("");
      setPicked(null);
      setAnswered(false);
      setIsGood(false);
    };

    if (quizDone) {
      const pct = qs.length ? Math.round((qOk / qs.length) * 100) : 0;
      return (
        <div className="card">
          <h1>
            Результат: {pct}% ({qOk} из {qs.length})
          </h1>
          <p>
            {pct >= 70
              ? activeLesson < 0
                ? "Отлично! Слова хорошо закрепляются."
                : "🎉 Урок пройден! Начислены XP и обновлён охват курса."
              : "Нужно хотя бы 70%. Перечитай правило и попробуй ещё раз."}
          </p>
          <div className="row">
            <button type="button" onClick={() => startQuiz(activeLesson)}>
              Ещё раз
            </button>
            <button
              type="button"
              onClick={() =>
                activeLesson < 0 ? onSetActiveLesson(null) : openLesson(activeLesson, 0)
              }
            >
              {activeLesson < 0 ? "К курсу" : "К уроку"}
            </button>
            {activeLesson >= 0 && activeLesson + 1 < LESSONS.length && pct >= 70 ? (
              <button
                type="button"
                className="p"
                onClick={() => openLesson(activeLesson + 1, 0)}
              >
                Следующий урок →
              </button>
            ) : (
              <button type="button" className="p" onClick={() => onSetActiveLesson(null)}>
                Список уроков
              </button>
            )}
          </div>
        </div>
      );
    }

    if (!q) return null;

    return (
      <>
        <div className="between">
          <button
            type="button"
            className="xs"
            onClick={() =>
              activeLesson < 0 ? onSetActiveLesson(null) : openLesson(activeLesson, 0)
            }
          >
            ← Выйти
          </button>
          <span className="mu">
            Вопрос {qIdx + 1} из {qs.length}
          </span>
        </div>
        <div className="bar" style={{ margin: "8px 0" }}>
          <i style={{ width: `${(qIdx / Math.max(1, qs.length)) * 100}%` }} />
        </div>
        <div className="card">
          <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>
            {q.q}{" "}
            {q.s && (
              <span className="s" onClick={() => onSpeak(q.s!)}>
                🔊 Слушать
              </span>
            )}
          </div>

          {q.ty ? (
            <div>
              <input
                className="full"
                value={typed}
                disabled={answered}
                autoComplete="off"
                placeholder="Введи ответ на немецком..."
                onChange={e => setTyped(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter" && !answered) submitAnswer(matchAns(typed, q.a), null);
                }}
              />
              <UmlautPad onInsert={ch => !answered && setTyped(prev => prev + ch)} />
              {!answered && (
                <button
                  type="button"
                  className="p"
                  onClick={() => submitAnswer(matchAns(typed, q.a), null)}
                >
                  Проверить
                </button>
              )}
            </div>
          ) : (
            <div>
              {(q.o || []).map(opt => {
                let cls = "opt";
                if (answered) {
                  if (opt === q.a) cls += " good";
                  else if (opt === picked) cls += " bad";
                }
                return (
                  <button
                    key={opt}
                    type="button"
                    className={cls}
                    disabled={answered}
                    onClick={() => submitAnswer(opt === q.a, opt)}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {answered && (
            <div style={{ marginTop: 12 }}>
              {isGood ? (
                <span className="badge g-das">✓ Верно!</span>
              ) : (
                <>
                  <span className="badge g-die">✗ Правильно:</span> <b>{q.a}</b>{" "}
                  <span className="s" onClick={() => onSpeak(q.a)}>
                    🔊
                  </span>
                </>
              )}
              <div style={{ marginTop: 10 }}>
                <button type="button" className="p" onClick={nextQuestion}>
                  Дальше →
                </button>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  if (activeLesson !== null && activeLesson >= 0) {
    const u = LESSONS[activeLesson];
    const tabs = [
      "1. Правило",
      `2. Слова (${u.w.length})`,
      "3. Диалог и Чтение",
      "4. Тест урока"
    ];

    return (
      <>
        <div className="between">
          <button
            type="button"
            className="xs"
            onClick={() => onSetActiveLesson(null)}
          >
            ← Все уроки
          </button>
          <span className="badge">{u.lvl}</span>
        </div>
        <h1>
          {activeLesson + 1}. {u.t}
        </h1>
        <div className="subtabs">
          {tabs.map((lbl, idx) => (
            <button
              key={lbl}
              type="button"
              className={idx === subTab ? "active" : ""}
              onClick={() => openLesson(activeLesson, idx)}
            >
              {lbl}
            </button>
          ))}
        </div>

        {subTab === 0 && (
          <>
            <div className="card" dangerouslySetInnerHTML={{ __html: u.g }} />
            {u.e && (
              <div className="card">
                <h3>Подробнее</h3>
                <div dangerouslySetInnerHTML={{ __html: u.e }} />
              </div>
            )}
            {u.sn && (
              <div className="card">
                <h3>Звуки (нажми и слушай)</h3>
                <div className="mu sm">
                  Нажми на красную кнопку, чтобы услышать три примера подряд.
                </div>
                {u.sn.map(s => (
                  <div
                    key={s[0]}
                    style={{
                      margin: "10px 0",
                      paddingTop: 8,
                      borderTop: "1px solid var(--bd)"
                    }}
                  >
                    <button
                      type="button"
                      className="xs p"
                      onClick={() =>
                        onSpeak(s[2].map(x => x[0].replace(/^(der|die|das) /, "")).join(". "))
                      }
                    >
                      🔊 {s[0]}
                    </button>{" "}
                    <span className="tr">{s[1]}</span>
                    <div className="sn">
                      {s[2].map(x => (
                        <button
                          key={x[0]}
                          type="button"
                          className="xs"
                          onClick={() => onSpeak(x[0])}
                        >
                          🔊 {x[0]} <span className="mu">{x[1]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <h3>Алфавит (нажми на букву)</h3>
                <div className="al">
                  {ALPHABET.map(a => (
                    <button
                      key={a[0]}
                      type="button"
                      className="xs"
                      onClick={() => onSpeak(a[2])}
                    >
                      <b>{a[0]}</b>
                      <small>{a[1]}</small>
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button type="button" className="p" onClick={() => setSubTab(1)}>
              Дальше: Слова урока →
            </button>
          </>
        )}

        {subTab === 1 && (
          <>
            <div className="card">
              <div className="between" style={{ marginBottom: 8 }}>
                <span className="mu sm">
                  Нажми на строку, чтобы услышать HD произношение
                </span>
                <button
                  type="button"
                  className="xs p"
                  onClick={() => onSpeak(u.w.map(w => w[0]).join(". "))}
                >
                  🔊 Озвучить все
                </button>
              </div>
              {u.w.map(w => (
                <div
                  key={w[0]}
                  className="w"
                  style={{ cursor: "pointer" }}
                  onClick={() => onSpeak(w[0])}
                >
                  <span>
                    <WordBadge word={w[0]} /> <span className="s">🔊</span>
                  </span>
                  <span className="tr">{w[1]}</span>
                  <span>{w[2]}</span>
                </div>
              ))}
            </div>
            <button type="button" className="p" onClick={() => setSubTab(2)}>
              Дальше: Диалог и чтение →
            </button>
          </>
        )}

        {subTab === 2 && (
          <>
            {u.d.length > 0 && (
              <div className="card">
                <div className="between">
                  <h3 style={{ margin: 0 }}>Диалог</h3>
                  <span
                    className="s"
                    onClick={() => onSpeak(u.d.map(l => l[0]).join(" "))}
                  >
                    🔊 Весь диалог
                  </span>
                </div>
                {u.d.map((l, idx) => (
                  <p key={idx}>
                    <b>{l[0]}</b>{" "}
                    <span className="s" onClick={() => onSpeak(l[0])}>
                      🔊
                    </span>
                    <br />
                    <span className="tr">{l[1]}</span>
                    <br />
                    <span className="mu">{l[2]}</span>
                  </p>
                ))}
              </div>
            )}
            {u.r && (
              <div className="card">
                <h3>Читаем вслух</h3>
                <b>{u.r[0]}</b>{" "}
                <span className="s" onClick={() => onSpeak(u.r![0])}>
                  🔊
                </span>
                <br />
                <span className="tr">{u.r[1]}</span>
                <br />
                <span className="mu">{u.r[2]}</span>
              </div>
            )}
            {u.wr && (
              <div className="card">
                <h3>Памятка для письма</h3>
                <div dangerouslySetInnerHTML={{ __html: u.wr }} />
              </div>
            )}
            <button
              type="button"
              className="p"
              onClick={() => startQuiz(activeLesson)}
            >
              Перейти к тесту урока →
            </button>
          </>
        )}
      </>
    );
  }

  const doneCount = LESSONS.filter((_, i) => (lessonScores[String(i)] || 0) >= 70).length;
  const visible = LESSONS.map((u, i) => ({ u, i })).filter(
    x => lvlFilter === "ALL" || x.u.lvl === lvlFilter
  );

  return (
    <>
      <div className="card">
        <div className="between">
          <div>
            <h1 style={{ margin: 0 }}>📚 Пошаговый курс: {LESSONS.length} уроков</h1>
            <div className="mu">
              От чтения с нуля (A1.1) до уровня экзамена B1.1. Пройдено:{" "}
              <b>
                {doneCount} из {LESSONS.length}
              </b>
            </div>
          </div>
          <button type="button" className="p" onClick={() => startQuiz(-1)}>
            🔁 Повторить все слова
          </button>
        </div>
        <div className="bar ok" style={{ margin: "10px 0" }}>
          <i style={{ width: `${(doneCount / LESSONS.length) * 100}%` }} />
        </div>
        <div className="row">
          {(["ALL", "A1.1", "A1.2", "A2.1", "A2.2", "B1.1"] as const).map(l => (
            <button
              key={l}
              type="button"
              className={`xs ${lvlFilter === l ? "p" : ""}`}
              onClick={() => setLvlFilter(l)}
            >
              {l === "ALL" ? "Все уровни" : l}
            </button>
          ))}
        </div>
      </div>

      {visible.map(({ u, i }) => {
        const sc = lessonScores[String(i)];
        const ok = (sc || 0) >= 70;
        return (
          <div
            key={i}
            className="card soft between"
            style={{ cursor: "pointer", margin: "8px 0" }}
            onClick={() => openLesson(i, 0)}
          >
            <div style={{ flex: 1 }}>
              <div className="row">
                <span className={`badge ${ok ? "g-das" : "g-der"}`}>{u.lvl}</span>
                <b>
                  {i + 1}. {u.t}
                </b>
              </div>
              <div className="mu sm" style={{ marginTop: 4 }}>
                {u.desc}
              </div>
            </div>
            <div className="row">
              {sc != null ? (
                <span className={`badge ${ok ? "g-das" : ""}`}>{sc}%</span>
              ) : (
                <span className="mu sm">Новый</span>
              )}
              <button type="button" className="xs p">
                Открыть
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
