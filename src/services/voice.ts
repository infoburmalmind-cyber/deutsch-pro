import type { VoiceMode } from "../types";

export interface VoiceConfig {
  voiceMode: VoiceMode;
  voiceURI: string;
  speed: number;
  pauseArticle: boolean;
}

let currentAudio: HTMLAudioElement | null = null;
let audioCtx: AudioContext | null = null;

export function scoreVoice(v: SpeechSynthesisVoice): number {
  let s = 0;
  const n = (v.name || "").toLowerCase();
  const l = (v.lang || "").toLowerCase();
  if (l === "de-de") s += 30;
  else if (l.startsWith("de")) s += 15;
  else return -1;

  if (n.includes("natural") || n.includes("neural") || n.includes("online")) s += 100;
  if (n.includes("google deutsch")) s += 90;
  if (
    n.includes("conrad") ||
    n.includes("katja") ||
    n.includes("amala") ||
    n.includes("killian") ||
    n.includes("florian") ||
    n.includes("seraphina")
  ) {
    s += 25;
  }
  if (
    n.includes("anna") ||
    n.includes("martin") ||
    n.includes("petra") ||
    n.includes("viktor") ||
    n.includes("helena")
  ) {
    s += 20;
  }
  if (!v.localService) s += 15;
  if (n.includes("espeak") || n.includes("compact")) s -= 30;
  return s;
}

export function getGermanVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return [];
  const all = window.speechSynthesis.getVoices() || [];
  return all
    .map(v => ({ v, score: scoreVoice(v) }))
    .filter(x => x.score >= 0)
    .sort((a, b) => b.score - a.score)
    .map(x => x.v);
}

export function getBestVoice(voiceURI?: string): SpeechSynthesisVoice | null {
  const list = getGermanVoices();
  if (voiceURI) {
    const found = list.find(v => v.voiceURI === voiceURI);
    if (found) return found;
  }
  return list[0] || null;
}

export function stopAudio(): void {
  if (currentAudio) {
    try {
      currentAudio.pause();
    } catch {}
    currentAudio = null;
  }
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }
}

function playDataAudioWithEQ(b64: string, rate: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const a = new Audio("data:audio/mpeg;base64," + b64);
    a.playbackRate = rate;
    (a as HTMLAudioElement & { preservesPitch?: boolean }).preservesPitch = true;
    currentAudio = a;
    try {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AC) {
        if (!audioCtx) audioCtx = new AC();
        if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
        const src = audioCtx.createMediaElementSource(a);
        const hp = audioCtx.createBiquadFilter();
        hp.type = "highpass";
        hp.frequency.value = 95;
        const pres = audioCtx.createBiquadFilter();
        pres.type = "peaking";
        pres.frequency.value = 3200;
        pres.Q.value = 1.1;
        pres.gain.value = 4.2;
        const air = audioCtx.createBiquadFilter();
        air.type = "highshelf";
        air.frequency.value = 6000;
        air.gain.value = 2.5;
        src.connect(hp);
        hp.connect(pres);
        pres.connect(air);
        air.connect(audioCtx.destination);
      }
    } catch {}
    a.onended = () => resolve();
    a.onerror = () => reject(new Error("Offline audio error"));
    a.play().catch(reject);
  });
}

function splitForTTS(text: string): string[] {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= 160) return [clean];
  const parts = clean.split(/(?<=[.!?,;:])\s+/);
  const chunks: string[] = [];
  let buf = "";
  for (const p of parts) {
    if ((buf + " " + p).trim().length > 160) {
      if (buf) chunks.push(buf.trim());
      buf = p;
    } else {
      buf = (buf + " " + p).trim();
    }
  }
  if (buf) chunks.push(buf.trim());
  return chunks;
}

function playGoogleTTS(text: string, rate: number): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      reject(new Error("Offline"));
      return;
    }
    const chunks = splitForTTS(text);
    let idx = 0;
    const playNext = () => {
      if (idx >= chunks.length) {
        resolve();
        return;
      }
      const q = encodeURIComponent(chunks[idx++]);
      const ttsspeed = rate < 0.7 ? "0.4" : rate < 0.9 ? "0.8" : "1";
      const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&ttsspeed=${ttsspeed}&q=${q}`;
      const a = new Audio(url);
      a.playbackRate = rate < 0.7 ? 0.85 : 1.0;
      (a as HTMLAudioElement & { preservesPitch?: boolean }).preservesPitch = true;
      currentAudio = a;
      a.onended = playNext;
      a.onerror = () => reject(new Error("Google TTS unavailable"));
      a.play().catch(reject);
    };
    playNext();
  });
}

function playBrowserSpeech(text: string, rate: number, voiceURI?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      reject(new Error("No speechSynthesis"));
      return;
    }
    const u = new SpeechSynthesisUtterance(text);
    const v = getBestVoice(voiceURI);
    if (v) u.voice = v;
    u.lang = "de-DE";
    u.rate = rate;
    u.pitch = 1.0;
    u.onend = () => resolve();
    u.onerror = () => reject(new Error("SpeechSynthesis error"));
    window.speechSynthesis.speak(u);
  });
}

export async function sayGerman(
  rawText: string,
  cfg: VoiceConfig,
  onNotify?: (msg: string) => void
): Promise<void> {
  const txt = String(rawText || "").trim();
  if (!txt) return;
  stopAudio();

  const aud = (typeof window !== "undefined" && window.__OFFLINE_AUD__) || {};
  let speakText = txt;
  if (cfg.pauseArticle && /^(der|die|das)\s+\S+$/i.test(txt)) {
    speakText = txt.replace(/^(der|die|das)\s+/i, "$1, ");
  }

  const bestV = getBestVoice(cfg.voiceURI);
  const bestScore = bestV ? scoreVoice(bestV) : -1;
  const rate = cfg.speed || 0.8;

  try {
    if (cfg.voiceMode === "offline") {
      if (aud[txt]) {
        await playDataAudioWithEQ(aud[txt], rate);
        return;
      }
      if ("speechSynthesis" in window) {
        await playBrowserSpeech(speakText, rate, cfg.voiceURI);
        return;
      }
    } else if (cfg.voiceMode === "browser") {
      if ("speechSynthesis" in window) {
        await playBrowserSpeech(speakText, rate, cfg.voiceURI);
        return;
      }
      if (aud[txt]) {
        await playDataAudioWithEQ(aud[txt], rate);
        return;
      }
    } else if (cfg.voiceMode === "hd") {
      try {
        await playGoogleTTS(speakText, rate);
        return;
      } catch {}
      if (bestV) {
        try {
          await playBrowserSpeech(speakText, rate, cfg.voiceURI);
          return;
        } catch {}
      }
      if (aud[txt]) {
        await playDataAudioWithEQ(aud[txt], rate);
        return;
      }
    } else {
      if (bestScore >= 100 && !cfg.pauseArticle) {
        try {
          await playBrowserSpeech(speakText, rate, cfg.voiceURI);
          return;
        } catch {}
      }
      if (typeof navigator === "undefined" || navigator.onLine !== false) {
        try {
          await playGoogleTTS(speakText, rate);
          return;
        } catch {}
      }
      if (bestV) {
        try {
          await playBrowserSpeech(speakText, rate, cfg.voiceURI);
          return;
        } catch {}
      }
      if (aud[txt]) {
        await playDataAudioWithEQ(aud[txt], rate);
        return;
      }
    }
    onNotify?.("Нажмите ещё раз или выберите другой голос в настройках 🔊");
  } catch {
    if (aud[txt]) {
      try {
        await playDataAudioWithEQ(aud[txt], rate);
        return;
      } catch {}
    }
    if ("speechSynthesis" in window) {
      try {
        await playBrowserSpeech(speakText, rate, cfg.voiceURI);
        return;
      } catch {}
    }
    onNotify?.("Озвучка недоступна в этом браузере");
  }
}
