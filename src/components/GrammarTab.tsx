import React from "react";
import { GRAMMAR_REF } from "../data/skills";

export const GrammarTab: React.FC = () => (
  <>
    <div className="card">
      <h1 style={{ margin: 0 }}>📐 Наглядный справочник грамматики</h1>
      <div className="mu">
        Все главные правила немецкого языка (род, падежи, времена, порядок слов, письма) в
        понятных таблицах.
      </div>
    </div>
    {GRAMMAR_REF.map(g => (
      <div key={g.id} className="card">
        <div className="between">
          <h2 style={{ margin: 0 }}>{g.title}</h2>
          <span className="badge">{g.badge}</span>
        </div>
        <div style={{ marginTop: 10 }} dangerouslySetInnerHTML={{ __html: g.html }} />
      </div>
    ))}
  </>
);
