type WeatherDay = {
  date: string;
  dayOfWeek: string;
  label: string;
  condition: string;
  conditionColor: string;
  tempMax: number;
  tempMin: number;
  precipitation: number;
};

const weatherData: WeatherDay[] = [
  { date: "3/14", dayOfWeek: "金", label: "今日", condition: "晴れ", conditionColor: "text-orange-400", tempMax: 18, tempMin: 10, precipitation: 10 },
  { date: "3/15", dayOfWeek: "土", label: "明日", condition: "曇り", conditionColor: "text-gray-400", tempMax: 16, tempMin: 9, precipitation: 30 },
  { date: "3/16", dayOfWeek: "日", label: "明後日", condition: "雨", conditionColor: "text-blue-400", tempMax: 13, tempMin: 8, precipitation: 70 },
  { date: "3/17", dayOfWeek: "月", label: "", condition: "曇り", conditionColor: "text-gray-400", tempMax: 15, tempMin: 7, precipitation: 20 },
  { date: "3/18", dayOfWeek: "火", label: "", condition: "晴れ", conditionColor: "text-orange-400", tempMax: 19, tempMin: 9, precipitation: 5 },
  { date: "3/19", dayOfWeek: "水", label: "", condition: "晴れ", conditionColor: "text-orange-400", tempMax: 21, tempMin: 11, precipitation: 0 },
  { date: "3/20", dayOfWeek: "木", label: "", condition: "曇り", conditionColor: "text-gray-400", tempMax: 17, tempMin: 10, precipitation: 40 },
];

interface Coupon {
  id: number;
  name: string;
  condition: string;
  content: string;
}

const coupons: Coupon[] = [
  { id: 1, name: "閉店感謝セール 全品割引", condition: "閉店まで期間中いつでも・お一人様何回でも使用可", content: "全品 20% OFF" },
  { id: 2, name: "生鮮食品まとめ買い割引", condition: "生鮮食品を3点以上ご購入の場合", content: "生鮮食品 10% OFF" },
  { id: 3, name: "惣菜コーナー タイムセール", condition: "閉店1時間前（19:00以降）のご来店", content: "惣菜全品 50% OFF" },
  { id: 4, name: "お菓子まとめ買い割引", condition: "お菓子売り場の商品を5個以上ご購入の場合", content: "お菓子 15% OFF" },
  { id: 5, name: "閉店記念 ポイント大増量", condition: "閉店まで期間中・ポイントカード会員限定", content: "ポイント 10倍付与" },
  { id: 6, name: "訳あり野菜 特別割引", condition: "形が不揃いな野菜・果物が対象", content: "訳あり商品 半額" },
  { id: 7, name: "お子様連れ応援クーポン", condition: "お子様（12歳以下）とご来店のお客様", content: "お菓子・飲料 5% OFF" },
  { id: 8, name: "朝市クーポン", condition: "開店〜11:00のご来店（毎日）", content: "全品 5% OFF" },
];

const couponColors = [
  { bg: "bg-pink-50", border: "border-pink-200", badge: "bg-pink-400" },
  { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-400" },
];

export default function CouponPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
        {/* 天気サイドバー */}
        <aside className="w-full lg:w-52 flex-shrink-0 lg:sticky lg:top-4 order-2 lg:order-1">
          <div className="bg-white rounded-2xl shadow-sm border border-pink-200 overflow-hidden">
            <div className="bg-purple-50 border-b border-purple-100 px-4 py-3">
              <h2 className="font-bold text-purple-600 text-sm">お天気情報</h2>
              <p className="text-xs text-gray-400 mt-0.5">東京都謎区</p>
            </div>
            <ul className="divide-y divide-pink-100">
              {weatherData.map((day) => (
                <li
                  key={day.date}
                  className={`px-4 py-2.5 ${day.label === "今日" ? "bg-pink-50" : ""}`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs text-gray-500">
                      {day.date}({day.dayOfWeek})
                      {day.label && (
                        <span className="ml-1 text-pink-400 font-medium">{day.label}</span>
                      )}
                    </span>
                    <span className={`text-xs font-medium ${day.conditionColor}`}>
                      {day.condition}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>
                      <span className="text-red-400">{day.tempMax}°</span>
                      {" / "}
                      <span className="text-blue-400">{day.tempMin}°</span>
                    </span>
                    <span className="text-cyan-500">{day.precipitation}%</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="px-4 py-2 border-t border-pink-100">
              <p className="text-xs text-gray-400">降水確率は右端に表示</p>
            </div>
          </div>
        </aside>

        {/* クーポン一覧 */}
        <div className="flex-1 min-w-0 order-1 lg:order-2">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-pink-600 mb-2">クーポン一覧</h1>
            <p className="text-gray-500 text-sm">お得なクーポンをご利用ください。</p>
          </div>

          <div className="space-y-4">
            {coupons.map((coupon, index) => {
              const color = couponColors[index % 2];
              return (
                <div
                  key={coupon.id}
                  className={`${color.bg} border ${color.border} rounded-3xl p-5 shadow-sm`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h2 className="font-bold text-gray-700 text-base mb-1">
                        {coupon.name}
                      </h2>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="text-gray-400 flex-shrink-0 w-16">使用条件</span>
                        <span className="text-gray-600">{coupon.condition}</span>
                      </div>
                    </div>
                    <div
                      className={`${color.badge} text-white text-sm font-bold px-3 py-1.5 rounded-full flex-shrink-0 text-center whitespace-nowrap`}
                    >
                      {coupon.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-pink-50 border border-pink-200 rounded-3xl p-5 text-center">
            <p className="text-sm text-pink-600 font-medium">
              クーポンの重複使用はご遠慮ください。
            </p>
            <p className="text-xs text-gray-400 mt-1">
              ※ 一部クーポンは在庫状況によりご利用いただけない場合があります
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
