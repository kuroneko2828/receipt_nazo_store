interface Coupon {
  id: number;
  emoji: string;
  name: string;
  condition: string;
  content: string;
  color: string;
  borderColor: string;
  badgeColor: string;
}

const coupons: Coupon[] = [
  {
    id: 1,
    emoji: "🎉",
    name: "閉店感謝セール 全品割引",
    condition: "閉店まで期間中いつでも・お一人様何回でも使用可",
    content: "全品 20% OFF",
    color: "from-red-50 to-pink-50",
    borderColor: "border-red-300",
    badgeColor: "bg-red-400",
  },
  {
    id: 2,
    emoji: "🥬",
    name: "生鮮食品まとめ買い割引",
    condition: "生鮮食品を3点以上ご購入の場合",
    content: "生鮮食品 10% OFF",
    color: "from-green-50 to-mint-light",
    borderColor: "border-green-300",
    badgeColor: "bg-green-400",
  },
  {
    id: 3,
    emoji: "🍱",
    name: "惣菜コーナー タイムセール",
    condition: "閉店1時間前（19:00以降）のご来店",
    content: "惣菜全品 50% OFF",
    color: "from-orange-50 to-yellow-50",
    borderColor: "border-orange-300",
    badgeColor: "bg-orange-400",
  },
  {
    id: 4,
    emoji: "🍬",
    name: "お菓子まとめ買い割引",
    condition: "お菓子売り場の商品を5個以上ご購入の場合",
    content: "お菓子 15% OFF",
    color: "from-purple-50 to-lavender-light",
    borderColor: "border-purple-300",
    badgeColor: "bg-purple-400",
  },
  {
    id: 5,
    emoji: "⭐",
    name: "閉店記念 ポイント大増量",
    condition: "閉店まで期間中・ポイントカード会員限定",
    content: "ポイント 10倍付与",
    color: "from-yellow-50 to-cream",
    borderColor: "border-yellow-300",
    badgeColor: "bg-yellow-400",
  },
  {
    id: 6,
    emoji: "🥒",
    name: "訳あり野菜 特別割引",
    condition: "形が不揃いな野菜・果物が対象",
    content: "訳あり商品 半額",
    color: "from-lime-50 to-green-50",
    borderColor: "border-lime-300",
    badgeColor: "bg-lime-500",
  },
  {
    id: 7,
    emoji: "👶",
    name: "お子様連れ応援クーポン",
    condition: "お子様（12歳以下）とご来店のお客様",
    content: "お菓子・飲料 5% OFF",
    color: "from-pink-50 to-rose-50",
    borderColor: "border-pink-300",
    badgeColor: "bg-pink-400",
  },
  {
    id: 8,
    emoji: "🌅",
    name: "朝市クーポン",
    condition: "開店〜11:00のご来店（毎日）",
    content: "全品 5% OFF",
    color: "from-amber-50 to-orange-50",
    borderColor: "border-amber-300",
    badgeColor: "bg-amber-400",
  },
];

export default function CouponPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🎟️</div>
        <h1 className="text-3xl font-bold text-pink-600 mb-2">クーポン一覧</h1>
        <p className="text-gray-500 text-sm">
          お得なクーポンをご利用ください 🌸
        </p>
        <div className="mt-3 bg-yellow-50 border-2 border-yellow-200 rounded-2xl px-4 py-2 inline-block">
          <p className="text-xs text-yellow-700">
            ⚠️ クーポンシステムに不具合が多いため、ご使用の際は店員にお申し付けください。
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className={`bg-gradient-to-r ${coupon.color} border-2 ${coupon.borderColor} rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200`}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">{coupon.emoji}</div>
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-gray-700 text-base mb-1">
                  {coupon.name}
                </h2>
                <div className="space-y-1">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-gray-400 flex-shrink-0 w-16">使用条件</span>
                    <span className="text-gray-600">{coupon.condition}</span>
                  </div>
                </div>
              </div>
              <div
                className={`${coupon.badgeColor} text-white text-sm font-bold px-3 py-1.5 rounded-full flex-shrink-0 text-center whitespace-nowrap shadow-sm`}
              >
                {coupon.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-pink-50 border-2 border-pink-200 rounded-3xl p-5 text-center">
        <p className="text-sm text-pink-600 font-medium">
          🌸 クーポンの重複使用はご遠慮ください 🌸
        </p>
        <p className="text-xs text-gray-400 mt-1">
          ※ 一部クーポンは在庫状況によりご利用いただけない場合があります
        </p>
      </div>
    </div>
  );
}
