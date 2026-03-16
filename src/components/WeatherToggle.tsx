"use client";

import { useState } from "react";

function weatherCodeToInfo(code: number) {
  if (code <= 1) return { emoji: "☀️", label: "晴れ", bg: "from-amber-50 to-yellow-50" };
  if (code <= 3) return { emoji: "⛅", label: "くもり", bg: "from-gray-50 to-slate-100" };
  if (code <= 48) return { emoji: "🌫️", label: "霧", bg: "from-gray-100 to-gray-200" };
  if (code <= 57) return { emoji: "🌧️", label: "小雨", bg: "from-blue-50 to-cyan-50" };
  if (code <= 67) return { emoji: "🌧️", label: "雨", bg: "from-blue-100 to-indigo-100" };
  if (code <= 77) return { emoji: "❄️", label: "雪", bg: "from-sky-50 to-blue-50" };
  if (code <= 82) return { emoji: "🌧️", label: "にわか雨", bg: "from-blue-100 to-indigo-100" };
  if (code <= 86) return { emoji: "❄️", label: "にわか雪", bg: "from-sky-100 to-blue-100" };
  return { emoji: "⛈️", label: "雷雨", bg: "from-indigo-100 to-purple-100" };
}

const mockDays = [
  { date: "2026-03-08", label: "3日前",  weatherCode: 3,  tempMax: 11, tempMin: 4 },
  { date: "2026-03-09", label: "2日前",  weatherCode: 77,  tempMax: 7, tempMin: 0 },
  { date: "2026-03-10", label: "昨日",   weatherCode: 55,  tempMax: 8, tempMin: 1 },
  { date: "2026-03-11", label: "今日",   weatherCode: 3,  tempMax: 14, tempMin: 5 },
  { date: "2026-03-12", label: "明日",   weatherCode: 55, tempMax: 13, tempMin: 6 },
  { date: "2026-03-13", label: "明後日", weatherCode: 3,  tempMax: 14, tempMin: 4 },
  { date: "2026-03-14", label: "3日後",  weatherCode: 1,  tempMax: 15, tempMin: 5 },
];

const todayIndex = mockDays.findIndex((d) => d.label === "今日");

export default function WeatherToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* トグルボタン */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`fixed top-50 z-50 flex items-center gap-1 px-2 py-3 rounded-r-2xl shadow-lg border-2 border-l-0 transition-all duration-300 cursor-pointer ${
          open
            ? "left-72 bg-purple-500/50 border-purple-400/50 text-white backdrop-blur-sm"
            : "left-0 bg-white/30 border-pink-200/30 text-purple-600 hover:bg-pink-50/50 backdrop-blur-sm"
        }`}
        aria-label="天気情報を開閉"
      >
        <span className="text-lg">🌤️</span>
        <span
          className="text-xs font-bold"
          style={{ writingMode: "vertical-rl" }}
        >
          天気
        </span>
      </button>

      {/* オーバーレイ */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-40 transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* パネル */}
      <div
        className={`fixed left-0 top-0 h-full z-40 w-72 bg-white shadow-2xl border-r-2 border-pink-200 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* ヘッダー */}
          <div className="px-4 py-4 border-b border-pink-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌤️</span>
              <h2 className="text-base font-bold text-purple-600">天気情報</h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600 text-xl leading-none cursor-pointer"
              aria-label="閉じる"
            >
              ✕
            </button>
          </div>

          {/* 天気リスト */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
            {mockDays.map((day, index) => {
              const info = weatherCodeToInfo(day.weatherCode);
              const isToday = index === todayIndex;
              const isPast = index < todayIndex;

              return (
                <div
                  key={day.date}
                  className={`bg-gradient-to-r ${info.bg} rounded-2xl px-3 py-3 border transition-all ${
                    isToday
                      ? "border-pink-400 ring-1 ring-pink-300"
                      : isPast
                      ? "border-gray-200 opacity-60"
                      : "border-purple-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        isToday
                          ? "bg-pink-400 text-white"
                          : isPast
                          ? "bg-gray-300 text-gray-600"
                          : "bg-purple-300 text-white"
                      }`}
                    >
                      {day.label}
                    </span>
                    <span className="text-xs text-gray-400">{day.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{info.emoji}</span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-700">
                        {info.label}
                      </p>
                      <div className="flex gap-3 mt-0.5">
                        <span className="text-xs">
                          <span className="text-red-400">↑</span>
                          <span className="font-bold text-red-500">
                            {day.tempMax}°
                          </span>
                        </span>
                        <span className="text-xs">
                          <span className="text-blue-400">↓</span>
                          <span className="font-bold text-blue-500">
                            {day.tempMin}°
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* フッター */}
          <div className="px-4 py-3 border-t border-pink-100">
          </div>
        </div>
      </div>
    </>
  );
}
