export function shuffle<T>(arr: readonly T[]): T[] {
  const c = [...arr];
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [c[i], c[j]] = [c[j], c[i]];
  }
  return c;
}

export function norm(s: string): string {
  return String(s || "")
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function normStrict(s: string): string {
  return String(s || "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function matchAns(input: string, target: string): boolean {
  return norm(input) === norm(target) || normStrict(input) === normStrict(target);
}

export function fmtHMS(sec: number): string {
  const s = Math.max(0, Math.floor(sec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  return [h, m, ss].map(v => String(v).padStart(2, "0")).join(":");
}

export interface GenderMeta {
  art: "der" | "die" | "das" | "";
  cls: "g-der" | "g-die" | "g-das" | "g-oth";
  noun: string;
}

export function genderInfo(word: string): GenderMeta {
  const w = String(word || "").trim();
  if (/^der\s/i.test(w)) return { art: "der", cls: "g-der", noun: w.slice(4) };
  if (/^die\s/i.test(w)) return { art: "die", cls: "g-die", noun: w.slice(4) };
  if (/^das\s/i.test(w)) return { art: "das", cls: "g-das", noun: w.slice(4) };
  return { art: "", cls: "g-oth", noun: w };
}
