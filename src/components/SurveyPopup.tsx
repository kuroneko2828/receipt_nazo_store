"use client";

import { useEffect, useState } from "react";

const SURVEY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdg_EO7H89d38kH00iNEWeuuOh05ZW29EzQWTbk_-0Sfz0gZA/viewform";

export default function SurveyPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("showSurvey") === "true") {
      localStorage.removeItem("showSurvey");
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl border border-pink-200 text-center">
        <div className="text-4xl mb-4">📝</div>
        <h2 className="text-xl font-bold text-purple-600 mb-3">
          アンケートのお願い
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          謎解きをクリアしていただき、ありがとうございました！
          <br />
          よろしければ、簡単なアンケートにご協力ください。
        </p>
        <div className="space-y-3">
          <a
            href={SURVEY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 rounded-full text-sm font-bold bg-pink-400 text-white hover:bg-pink-500 transition-colors"
          >
            アンケートに回答する
          </a>
          <button
            onClick={() => setVisible(false)}
            className="block w-full py-3 rounded-full text-sm font-bold bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}
