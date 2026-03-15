"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const PRODUCTS = [
  { id: "p1", name: "お菓子" },
  { id: "p2", name: "飲料" },
  { id: "p3", name: "果物" },
  { id: "p4", name: "野菜" },
  { id: "p5", name: "日用品" },
];

const COUPON_CAMPAIGNS = [
  { id: "cp1", name: "サンキュー割" },
  { id: "cp2", name: "まとめ買い割" },
  { id: "cp3", name: "ゆきまつり割" },
  { id: "cp4", name: "ダイスの日割" },
  { id: "cp5", name: "早起き三文割" },
  { id: "cm1", name: "不用品買取キャンペーン" },
  { id: "cm2", name: "雨の日ご来店感謝デー" },
  { id: "cm3", name: "年末年始 福袋販売" },
  { id: "cm4", name: "バレンタイン チョコレートフェア" },
];

const CATEGORIES = [
  {
    id: "praise",
    label: "称賛コメント",
    subs: [
      { id: "shop_praise", label: "お店・商品への称賛" },
      { id: "staff_praise", label: "店員への称賛" },
    ],
  },
  {
    id: "claim",
    label: "クレーム",
    subs: [
      { id: "shop_claim", label: "店へのクレーム" },
      { id: "product_claim", label: "商品へのクレーム" },
      { id: "staff_claim", label: "店員へのクレーム" },
    ],
  },
  {
    id: "other",
    label: "その他",
    subs: [
      { id: "poem", label: "ポエム投稿" },
      { id: "deficit", label: "赤字の理由" },
    ],
  },
];

const CAUSE_CATEGORIES = [
  { id: "product", label: "商品" },
  { id: "coupon_campaign", label: "クーポン・キャンペーン" },
  { id: "staff", label: "店員" },
];

function isCorrectDeficit(
  month: string,
  day: string,
  causeCategory: string,
  causeItems: string[]
): boolean {
  return (
    month === "2" &&
    day === "28" &&
    causeCategory === "coupon_campaign" &&
    causeItems.length === 2 &&
    causeItems.includes("cp2") &&
    causeItems.includes("cm1")
  );
}

export default function ContactPage() {
  const router = useRouter();
  const [mainCat, setMainCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [freeText, setFreeText] = useState("");
  const [deficitMonth, setDeficitMonth] = useState("");
  const [deficitDay, setDeficitDay] = useState("");
  const [deficitCauseCategory, setDeficitCauseCategory] = useState("");
  const [deficitCauseItems, setDeficitCauseItems] = useState<string[]>([]);
  const [deficitStaffNo, setDeficitStaffNo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [deficitDestination, setDeficitDestination] = useState("");

  useEffect(() => {
    if (!isLoading || !deficitDestination) return;
    const timer = setTimeout(() => {
      router.push(deficitDestination);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isLoading, deficitDestination, router]);

  const selectedMain = CATEGORIES.find((c) => c.id === mainCat);
  const isDeficit = subCat === "deficit";

  const resetDeficit = () => {
    setDeficitMonth("");
    setDeficitDay("");
    setDeficitCauseCategory("");
    setDeficitCauseItems([]);
    setDeficitStaffNo("");
  };

  const handleMainCatChange = (id: string) => {
    setMainCat(id);
    setSubCat("");
    setFreeText("");
    resetDeficit();
  };

  const handleSubCatChange = (id: string) => {
    setSubCat(id);
    setFreeText("");
    resetDeficit();
  };

  const handleDeficitCauseCategoryChange = (id: string) => {
    setDeficitCauseCategory(id);
    setDeficitCauseItems([]);
    setDeficitStaffNo("");
  };

  const handleItemToggle = (id: string) => {
    setDeficitCauseItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getCauseItems = () => {
    if (deficitCauseCategory === "product") return PRODUCTS;
    if (deficitCauseCategory === "coupon_campaign") return COUPON_CAMPAIGNS;
    return [];
  };

  const canSubmit = () => {
    if (!mainCat || !subCat) return false;
    if (isDeficit) {
      if (deficitMonth === "" || deficitDay === "") return false;
      if (deficitCauseCategory === "") return false;
      if (deficitCauseCategory === "staff") return deficitStaffNo.trim() !== "";
      return deficitCauseItems.length > 0;
    }
    return freeText.trim().length > 0;
  };

  const handleSubmit = () => {
    if (!canSubmit()) return;
    if (isDeficit) {
      const dest = isCorrectDeficit(deficitMonth, deficitDay, deficitCauseCategory, deficitCauseItems)
        ? "/contact/ending"
        : "/contact/result?type=deficit";
      setDeficitDestination(dest);
      setIsLoading(true);
    } else if (mainCat === "praise") {
      router.push("/contact/result?type=praise");
    } else if (mainCat === "claim") {
      router.push("/contact/result?type=claim");
    } else {
      router.push("/contact/result?type=poem");
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-pink-200 flex flex-col items-center justify-center min-h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-200 border-t-pink-500 mb-6" />
          <p className="text-lg font-bold text-purple-600">調査中...</p>
          <p className="text-sm text-gray-500 mt-2">
            ただいま原因を調べています。少々お待ちください。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-pink-200">
        <h1 className="text-2xl font-bold text-purple-600 mb-2">お問い合わせ</h1>
        <p className="text-sm text-gray-500 mb-8">
          ご意見・ご要望をお聞かせください。
        </p>

        {/* 大カテゴリ */}
        <div className="mb-6">
          <p className="text-sm font-bold text-gray-700 mb-3">カテゴリを選択</p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleMainCatChange(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  mainCat === cat.id
                    ? "bg-pink-400 text-white border-pink-400"
                    : "bg-white text-gray-500 border-gray-200 hover:border-pink-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 小カテゴリ */}
        {selectedMain && (
          <div className="mb-6">
            <p className="text-sm font-bold text-gray-700 mb-3">詳細を選択</p>
            <div className="flex flex-wrap gap-2">
              {selectedMain.subs.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => handleSubCatChange(sub.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    subCat === sub.id
                      ? "bg-purple-400 text-white border-purple-400"
                      : "bg-white text-gray-500 border-gray-200 hover:border-purple-300"
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 自由記述フォーム */}
        {subCat && !isDeficit && (
          <div className="mb-6">
            <label className="text-sm font-bold text-gray-700 block mb-2">
              内容
            </label>
            <textarea
              value={freeText}
              onChange={(e) => setFreeText(e.target.value)}
              rows={5}
              placeholder="こちらにご記入ください"
              className="w-full border border-gray-200 rounded-2xl p-4 text-sm text-gray-700 resize-none focus:outline-none focus:border-pink-300"
            />
          </div>
        )}

        {/* 赤字の理由フォーム */}
        {isDeficit && (
          <div className="space-y-6 mb-6">
            {/* 日付 */}
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">
                赤字の原因となった日付
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  max={12}
                  value={deficitMonth}
                  onChange={(e) => setDeficitMonth(e.target.value)}
                  placeholder="月"
                  className="w-20 border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700 text-center focus:outline-none focus:border-pink-300"
                />
                <span className="text-sm text-gray-500">月</span>
                <input
                  type="number"
                  min={1}
                  max={31}
                  value={deficitDay}
                  onChange={(e) => setDeficitDay(e.target.value)}
                  placeholder="日"
                  className="w-20 border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700 text-center focus:outline-none focus:border-pink-300"
                />
                <span className="text-sm text-gray-500">日</span>
              </div>
            </div>

            {/* 原因カテゴリ */}
            <div>
              <p className="text-sm font-bold text-gray-700 mb-3">赤字の原因</p>
              <div className="flex flex-wrap gap-2">
                {CAUSE_CATEGORIES.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleDeficitCauseCategoryChange(item.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      deficitCauseCategory === item.id
                        ? "bg-purple-400 text-white border-purple-400"
                        : "bg-white text-gray-500 border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 具体的な原因（商品 / クーポン・キャンペーン） */}
            {deficitCauseCategory && deficitCauseCategory !== "staff" && (
              <div>
                <p className="text-sm font-bold text-gray-700 mb-3">
                  具体的な原因（複数選択可）
                </p>
                <div className="space-y-2">
                  {getCauseItems().map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl border cursor-pointer transition-colors ${
                        deficitCauseItems.includes(item.id)
                          ? "bg-pink-50 border-pink-300"
                          : "bg-white border-gray-200 hover:border-pink-200"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={deficitCauseItems.includes(item.id)}
                        onChange={() => handleItemToggle(item.id)}
                        className="accent-pink-400"
                      />
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* 店員No入力 */}
            {deficitCauseCategory === "staff" && (
              <div>
                <label className="text-sm font-bold text-gray-700 block mb-2">
                  店員No.
                </label>
                <input
                  type="number"
                  min={1}
                  value={deficitStaffNo}
                  onChange={(e) => setDeficitStaffNo(e.target.value)}
                  placeholder="店員の番号を入力"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-pink-300"
                />
              </div>
            )}
          </div>
        )}

        {/* 送信ボタン */}
        {subCat && (
          <button
            onClick={handleSubmit}
            disabled={!canSubmit()}
            className={`w-full py-3 rounded-full text-sm font-bold transition-colors ${
              canSubmit()
                ? "bg-pink-400 text-white hover:bg-pink-500"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            送信する
          </button>
        )}
      </div>
    </div>
  );
}
