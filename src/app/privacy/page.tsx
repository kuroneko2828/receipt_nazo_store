export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-pink-200">
        <h1 className="text-2xl font-bold text-purple-600 mb-6">
          個人情報の取り扱いについて
        </h1>

        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            当店は、お客様の個人情報を一切収集しておりません。
          </p>
          <p>
            収集する仕組みもなければ、収集する気力もございません。
            担当者はただいま閉店準備と落ち込みで手がいっぱいです。
          </p>
          <p>
            少なくともデータを抜くような高度な機能は実装されておりません。安心してご利用ください。
          </p>
          <p className="text-xs text-gray-400 mt-6">
            ※ 閉店後は本ページも消える予定です。それもそれで個人情報保護かもしれません。
          </p>
        </div>
      </div>
    </div>
  );
}
