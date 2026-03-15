import Link from "next/link";
import WeatherToggle from "@/components/WeatherToggle";

interface Coupon {
  id: number;
  name: string;
  condition: string;
  content: string;
}

const coupons: Coupon[] = [
  { id: 1, name: "サンキュー割", condition: "3月9日にご来店", content: "対象商品が最大 70% OFF!" },
  { id: 2, name: "まとめ買い割", condition: "7の倍数の日", content: "対象の日用品が半額!" },
  { id: 3, name: "ゆきまつり割", condition: "雪の日にご来店", content: "果物が50円引き" },
  { id: 4, name: "ダイスの日割", condition: "月と日の合計が6の倍数の日", content: "50円引き" },
  { id: 5, name: "早起き三文割", condition: "開店から1時間以内のご来店", content: "50円引き" },
];

const couponColors = [
  { bg: "bg-pink-50", border: "border-pink-200", badge: "bg-pink-400" },
  { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-400" },
];

interface Campaign {
  id: number;
  name: string;
  schedule: string;
  details: string[];
  ended?: boolean;
}

const campaigns: Campaign[] = [
  {
    id: 1,
    name: "不用品買取キャンペーン",
    schedule: "毎月最終日",
    details: [
      "日用品を定価の40%で買い取ります",
      "当日の購入品は定価の60%で買い取ります",
    ],
  },
  {
    id: 2,
    name: "雨の日ご来店感謝デー",
    schedule: "雨天時に随時開催",
    details: [
      "雨の日にご来店いただくと惣菜コーナー全品 30% OFF",
      "クーポンの使用不可",
      "傘の無料貸し出しサービスあり (数に限りあり)",
    ],
  },
  {
    id: 3,
    name: "年末年始 福袋販売",
    schedule: "2025/12/28〜2026/1/3",
    details: [
      "食品福袋（3,000円相当）を1,000円で販売",
      "お菓子福袋 (2,000円相当) を800円で販売",
    ],
    ended: true,
  },
  {
    id: 4,
    name: "バレンタイン チョコレートフェア",
    schedule: "2026/2/1〜2026/2/14",
    details: [
      "当店オリジナルチョコレート菓子を販売",
      "ラッピング無料",
      "告白相談会を 2/8 に開催 (※結果の責任は負いかねます)",
    ],
    ended: true,
  },
];

export default function OtokuPage() {
  return (
    <>
      <WeatherToggle />
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">
        {/* クーポン一覧 */}
        <section>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-pink-600 mb-2">🎟️ クーポン一覧</h1>
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

          <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-amber-500 text-base">⚠️</span>
              <h3 className="text-sm font-bold text-amber-700">ご利用上の注意</h3>
            </div>
            <ul className="space-y-1 text-sm text-amber-800 ml-6 list-disc">
              <li>クーポンの重複使用はご遠慮ください。</li>
              <li>一部クーポンは在庫状況によりご利用いただけない場合があります。</li>
            </ul>
          </div>
        </section>

        {/* キャンペーン一覧 */}
        <section>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-purple-600 mb-2">🎪 キャンペーン</h1>
            <p className="text-gray-500 text-sm">開催中・過去のキャンペーン情報です。</p>
          </div>

          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className={`rounded-3xl p-6 shadow-sm border-2 ${
                  campaign.ended
                    ? "bg-gray-50 border-gray-200 opacity-60"
                    : "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className={`font-bold text-lg ${campaign.ended ? "text-gray-400" : "text-gray-700"}`}>
                    {campaign.name}
                  </h2>
                  {campaign.ended && (
                    <span className="text-white text-sm font-bold px-3 py-1.5 rounded-full flex-shrink-0 bg-gray-400">
                      終了
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm mb-3">
                  <span className="text-gray-400 flex-shrink-0 w-16">開催日</span>
                  <span className={`font-medium ${campaign.ended ? "text-gray-400" : "text-gray-700"}`}>
                    {campaign.schedule}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {campaign.details.map((detail, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 text-sm ${
                        campaign.ended ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <span className={`flex-shrink-0 mt-0.5 ${campaign.ended ? "text-gray-300" : "text-purple-400"}`}>
                        ●
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/"
            className="bg-pink-400 text-white font-bold px-6 py-3 rounded-full hover:bg-pink-500 transition-colors duration-200 shadow-sm"
          >
            🏠 ホームに戻る
          </Link>
        </div>
      </div>
    </>
  );
}
