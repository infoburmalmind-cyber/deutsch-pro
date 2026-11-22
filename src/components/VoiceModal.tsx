import React, { useEffect, useState } from "react";
import type { VoiceMode } from "../types";
import { getBestVoice, getGermanVoices } from "../services/voice";

interface VoiceModalProps {
  open: boolean;
  onClose: () => void;
  voiceMode: VoiceMode;
  voiceURI: string;
  speed: number;
  pauseArticle: boolean;
  onUpdate: (patch: {
    voiceMode?: VoiceMode;
    voiceURI?: string;
    speed?: number;
    pauseArticle?: boolean;
  }) => void;
  onSpeak: (text: string) => void;
}

const MODE_OPTIONS: Array<[VoiceMode, string]> = [
  ["auto", "Авто HD (Лучший Natural/Online голос + резерв)"],
  ["hd", "Онлайн HD (Google Neural TTS + быстрый отклик)"],
  ["browser", "Голос устройства (Edge Natural / Chrome / Apple)"],
  ["offline", "Офлайн записи курса + EQ фильтр чёткости"]
];

export const VoiceModal: React.FC<VoiceModalProps> = ({
  open,
  onClose,
  voiceMode,
  voiceURI,
  speed,
  pauseArticle,
  onUpdate,
  onSpeak
}) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (!open) return;
    const sync = () => setVoices(getGermanVoices());
    sync();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = sync;
    }
  }, [open]);

  if (!open) return null;

  const best = getBestVoice(voiceURI);

  return (
    <div
      className="modal-bg"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <div className="between">
          <h2 style={{ margin: 0 }}>🔊 Настройка HD голоса и дикции</h2>
          <button type="button" className="xs" onClick={onClose}>
            ✕
          </button>
        </div>
        <p className="mu">
          Автоматически выбираются самые чёткие немецкие голоса (Online Natural / Google Deutsch) и
          включается фильтр разборчивости согласных.
        </p>

        <h3>Режим озвучки</h3>
        <select
          style={{ width: "100%" }}
          value={voiceMode}
          onChange={e => onUpdate({ voiceMode: e.target.value as VoiceMode })}
        >
          {MODE_OPTIONS.map(([val, label]) => (
            <option key={val} value={val}>
              {label}
            </option>
          ))}
        </select>

        <h3>Голос системы (для режимов Авто / Браузер)</h3>
        <select
          style={{ width: "100%" }}
          value={voiceURI}
          onChange={e => onUpdate({ voiceURI: e.target.value })}
        >
          <option value="">
            Автовыбор ({best ? best.name : "по умолчанию"})
          </option>
          {voices.map(v => (
            <option key={v.voiceURI} value={v.voiceURI}>
              {v.name} ({v.lang})
            </option>
          ))}
        </select>
        {voices.length === 0 && (
          <p className="sm mu">
            Системных немецких голосов не найдено — используйте режим Онлайн HD или Офлайн.
          </p>
        )}

        <h3>Скорость речи</h3>
        <div className="row">
          <button
            type="button"
            className={`xs ${speed >= 0.95 ? "p" : ""}`}
            onClick={() => onUpdate({ speed: 1.0 })}
          >
            1.0x Нормально
          </button>
          <button
            type="button"
            className={`xs ${speed >= 0.7 && speed < 0.95 ? "p" : ""}`}
            onClick={() => onUpdate({ speed: 0.8 })}
          >
            0.8x Чётко (учебный)
          </button>
          <button
            type="button"
            className={`xs ${speed < 0.7 ? "p" : ""}`}
            onClick={() => onUpdate({ speed: 0.55 })}
          >
            0.55x По слогам
          </button>
        </div>

        <div style={{ margin: "12px 0" }}>
          <label className="row" style={{ cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={pauseArticle}
              onChange={e => onUpdate({ pauseArticle: e.target.checked })}
            />
            <span>Пауза после артикля («der, Tisch» — легче учить род)</span>
          </label>
        </div>

        <div className="row">
          <button
            type="button"
            className="p"
            onClick={() =>
              onSpeak(
                "Guten Tag! Ich lerne jeden Tag zwei Stunden Deutsch. der Tisch, die Lampe, das Buch."
              )
            }
          >
            🔊 Проверить голос
          </button>
          <button type="button" className="ok" onClick={onClose}>
            Готово
          </button>
        </div>
      </div>
    </div>
  );
};
