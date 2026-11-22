import React from "react";
import { genderInfo } from "../utils";

const UMLAUTS = ["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"] as const;

interface UmlautPadProps {
  onInsert: (ch: string) => void;
}

export const UmlautPad: React.FC<UmlautPadProps> = ({ onInsert }) => (
  <div className="umlaut-bar">
    {UMLAUTS.map(c => (
      <button key={c} type="button" onClick={() => onInsert(c)}>
        {c}
      </button>
    ))}
  </div>
);

interface WordBadgeProps {
  word: string;
  large?: boolean;
}

export const WordBadge: React.FC<WordBadgeProps> = ({ word, large }) => {
  const g = genderInfo(word);
  if (!g.art) {
    return <b className={large ? "big-word" : undefined}>{word}</b>;
  }
  return (
    <span>
      <span className={`badge ${g.cls}`}>{g.art}</span>{" "}
      <b className={large ? "big-word" : undefined}>{g.noun}</b>
    </span>
  );
};
