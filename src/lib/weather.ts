export interface DayWeather {
  date: string;
  weatherCode: number;
  tempMax: number;
  tempMin: number;
  precipitationProbability: number;
  label: string;
}

interface OpenMeteoResponse {
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
  };
}

// WMO天気コードを日本語と絵文字に変換
export function weatherCodeToInfo(code: number): { emoji: string; label: string; bg: string } {
  if (code === 0) return { emoji: "☀️", label: "快晴", bg: "from-yellow-50 to-orange-50" };
  if (code <= 2) return { emoji: "🌤️", label: "晴れ時々曇り", bg: "from-yellow-50 to-blue-50" };
  if (code === 3) return { emoji: "☁️", label: "曇り", bg: "from-gray-50 to-slate-100" };
  if (code <= 48) return { emoji: "🌫️", label: "霧", bg: "from-gray-100 to-slate-200" };
  if (code <= 57) return { emoji: "🌦️", label: "霧雨", bg: "from-blue-50 to-cyan-50" };
  if (code <= 67) return { emoji: "🌧️", label: "雨", bg: "from-blue-100 to-indigo-100" };
  if (code <= 77) return { emoji: "❄️", label: "雪", bg: "from-sky-50 to-blue-100" };
  if (code <= 82) return { emoji: "🌦️", label: "にわか雨", bg: "from-cyan-50 to-blue-100" };
  if (code <= 86) return { emoji: "🌨️", label: "にわか雪", bg: "from-sky-100 to-indigo-100" };
  if (code <= 99) return { emoji: "⛈️", label: "雷雨", bg: "from-slate-200 to-gray-300" };
  return { emoji: "🌈", label: "不明", bg: "from-purple-50 to-pink-50" };
}

// 日付を「3日前」「昨日」「今日」「明日」「3日後」に変換
export function dateToRelativeLabel(dateStr: string, todayStr: string): string {
  const date = new Date(dateStr);
  const today = new Date(todayStr);
  const diffMs = date.getTime() - today.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  const labels: Record<number, string> = {
    [-3]: "3日前",
    [-2]: "2日前",
    [-1]: "昨日",
    [0]: "今日",
    [1]: "明日",
    [2]: "明後日",
    [3]: "3日後",
  };
  return labels[diffDays] ?? dateStr;
}

export async function fetchWeather(): Promise<DayWeather[]> {
  const url =
    "https://api.open-meteo.com/v1/forecast" +
    "?latitude=35.6762&longitude=139.6503" +
    "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max" +
    "&timezone=Asia/Tokyo" +
    "&past_days=3" +
    "&forecast_days=4";

  const res = await fetch(url, { next: { revalidate: 3600 } });
  const data: OpenMeteoResponse = await res.json();

  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  return data.daily.time.map((dateStr, i) => ({
    date: dateStr,
    weatherCode: data.daily.weather_code[i],
    tempMax: Math.round(data.daily.temperature_2m_max[i]),
    tempMin: Math.round(data.daily.temperature_2m_min[i]),
    precipitationProbability: data.daily.precipitation_probability_max[i] ?? 0,
    label: dateToRelativeLabel(dateStr, todayStr),
  }));
}
