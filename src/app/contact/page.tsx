"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const DATES = [
  "1月15日", "2月1日", "2月7日", "2月14日", "2月21日",
  "2月28日", "3月1日", "3月7日", "3月14日",
];

const PRODUCTS = [
  { id: "p1", name: "国産鶏もも肉（100g）" },
  { id: "p2", name: "有機野菜セット" },
  { id: "p3", name: "手作りコロッケ（1個）" },
  { id: "p4", name: "お刺身盛り合わせ" },
  { id: "p5", name: "食パン（6枚切り）" },
];

const COUPONS = [
  { id: "c1", name: "閉店感謝セール 全品割引" },
  { id: "c2", name: "生鮮食品まとめ買い割引" },
  { id: "c3", name: "惣菜コーナー タイムセール" },
  { id: "c4", name: "お菓子まとめ買い割引" },
  { id: "c5", name: "閉店記念 ポイント大増量" },
  { id: "c6", name: "訳あり野菜 特別割引" },
  { id: "c7", name: "お子様連れ応援クーポン" },
  { id: "c8", name: "朝市クーポン" },
];

const CAMPAIGNS = [
  { id: "ca1", name: "あなたのスーパー愛ポエム募集" },
  { id: "ca2", name: "閉店記念スタンプラリー" },
  { id: "ca3", name: "ありがとうフォトコンテスト" },
  { id: "ca4", name: "閉店カウントダウンプレゼント" },
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
      { id: "campaign", label: "キャンペーンについて" },
      { id: "deficit", label: "赤字の理由" },
    ],
  },
];

const CAUSE_CATEGORIES = [
  { id: "product", label: "商品" },
  { id: "coupon", label: "クーポン" },
  { id: "campaign", label: "キャンペーン" },
];

function isCorrectDeficit(
  date: string,
  causeCategory: string,
  causeItems: string[]
): boolean {
  return (
    date === "2月28日" &&
    causeCategory === "coupon" &&
    causeItems.length === 2 &&
    causeItems.includes("c1") &&
    causeItems.includes("c3")
  );
}

export default function ContactPage() {
  const router = useRouter();
  const [mainCat, setMainCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [freeText, setFreeText] = useState("");
  const [deficitDate, setDeficitDate] = useState("");
  const [deficitCauseCategory, setDeficitCauseCategory] = useState("");
  const [deficitCauseItems, setDeficitCauseItems] = useState<string[]>([]);

  const selectedMain = CATEGORIES.find((c) => c.id === mainCat);
  const isDeficit = subCat === "deficit";

  const resetDeficit = () => {
    setDeficitDate("");
    setDeficitCauseCategory("");
    setDeficitCauseItems([]);
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
  };

  const handleItemToggle = (id: string) => {
    setDeficitCauseItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getCauseItems = () => {
    if (deficitCauseCategory === "product") return PRODUCTS;
    if (deficitCauseCategory === "coupon") return COUPONS;
    if (deficitCauseCategory === "campaign") return CAMPAIGNS;
    return [];
  };

  const canSubmit = () => {
    if (!mainCat || !subCat) return false;
    if (isDeficit) {
      return (
        deficitDate !== "" &&
        deficitCauseCategory !== "" &&
        deficitCauseItems.length > 0
      );
    }
    return freeText.trim().length > 0;
  };

  const handleSubmit = () => {
    if (!canSubmit()) return;
    if (isDeficit) {
      if (isCorrectDeficit(deficitDate, deficitCauseCategory, deficitCauseItems)) {
        router.push("/contact/ending");
      } else {
        router.push("/contact/result?type=deficit");
      }
    } else if (mainCat === "praise") {
      router.push("/contact/result?type=praise");
    } else if (mainCat === "claim") {
      router.push("/contact/result?type=claim");
    } else {
      router.push("/contact/result?type=campaign");
    }
  };

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
              <select
                value={deficitDate}
                onChange={(e) => setDeficitDate(e.target.value)}
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-pink-300"
              >
                <option value="">日付を選択してください</option>
                {DATES.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
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

            {/* 具体的な原因 */}
            {deficitCauseCategory && (
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
