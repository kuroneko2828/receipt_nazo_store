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

const days = [
  { date: "2026-03-12", label: "3日前",  weatherCode: 3,  tempMax: 11, tempMin: 4, precipitationProbability: 10 },
  { date: "2026-03-13", label: "2日前",  weatherCode: 3,  tempMax: 10, tempMin: 3, precipitationProbability: 20 },
  { date: "2026-03-14", label: "昨日",   weatherCode: 3,  tempMax: 14, tempMin: 4, precipitationProbability: 10 },
  { date: "2026-03-15", label: "今日",   weatherCode: 3,  tempMax: 14, tempMin: 5, precipitationProbability: 10 },
  { date: "2026-03-16", label: "明日",   weatherCode: 55, tempMax: 13, tempMin: 6, precipitationProbability: 80 },
  { date: "2026-03-17", label: "明後日", weatherCode: 3,  tempMax: 14, tempMin: 4, precipitationProbability: 20 },
  { date: "2026-03-18", label: "3日後",  weatherCode: 3,  tempMax: 15, tempMin: 5, precipitationProbability: 10 },
];

const todayIndex = days.findIndex((d) => d.label === "今日");

export default function WeatherPage() {

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🌤️</div>
        <h1 className="text-3xl font-bold text-purple-600 mb-2">お天気情報</h1>
        <p className="text-gray-500 text-sm">
          店舗周辺（東京都謎区）の天気予報 🌸
        </p>
        <p className="text-xs text-gray-400 mt-1">
          ※ 雨の日でも元気に営業しています！
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {days.map((day, index) => {
          const info = weatherCodeToInfo(day.weatherCode);
          const isToday = index === todayIndex;
          const isPast = index < todayIndex;

          return (
            <div
              key={day.date}
              className={`bg-gradient-to-br ${info.bg} rounded-3xl p-5 border-2 shadow-sm transition-all duration-200 hover:shadow-md ${
                isToday
                  ? "border-pink-400 ring-2 ring-pink-300 ring-offset-2"
                  : isPast
                  ? "border-gray-200 opacity-70"
                  : "border-purple-200"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span
                    className={`text-sm font-bold px-3 py-1 rounded-full ${
                      isToday
                        ? "bg-pink-400 text-white"
                        : isPast
                        ? "bg-gray-300 text-gray-600"
                        : "bg-purple-300 text-white"
                    }`}
                  >
                    {day.label}
                  </span>
                  <p className="text-xs text-gray-400 mt-1 pl-1">{day.date}</p>
                </div>
                <div className="text-5xl">{info.emoji}</div>
              </div>

              <p className="text-center font-bold text-gray-700 mb-3 text-lg">
                {info.label}
              </p>

              <div className="flex justify-around items-center">
                <div className="text-center">
                  <p className="text-xs text-red-400 font-medium">最高気温</p>
                  <p className="text-2xl font-bold text-red-500">
                    {day.tempMax}°
                  </p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-xs text-blue-400 font-medium">最低気温</p>
                  <p className="text-2xl font-bold text-blue-500">
                    {day.tempMin}°
                  </p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-xs text-cyan-400 font-medium">降水確率</p>
                  <p className="text-2xl font-bold text-cyan-600">
                    {day.precipitationProbability}%
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-purple-50 border-2 border-purple-200 rounded-3xl p-5 text-center">
        <p className="text-sm text-purple-600 font-medium">
          ☔ 雨の日は惣菜コーナーのタイムセールをお見逃しなく！
        </p>
        <p className="text-xs text-gray-400 mt-1">
          ※ 天気情報はイメージです
        </p>
      </div>
    </div>
  );
}
