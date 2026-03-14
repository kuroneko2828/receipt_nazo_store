import Link from "next/link";

export default function EndingPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-pink-200">
        <h1 className="text-2xl font-bold text-purple-600 mb-6">
          ありがとうございます！
        </h1>
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>ついに赤字の原因を突き止めてくださいました。</p>
          <p>
            「2月28日」に実施した
            <strong>「閉店感謝セール 全品割引」</strong>と
            <strong>「惣菜コーナー タイムセール」</strong>
            のクーポンが同日に大量使用されたことで、大幅な損失が生じていたことが判明しました。
          </p>
          <p>担当者は現在、震える手でパソコンに向かっております。</p>
          <p>
            「なんとか頑張ってみます」と申しております。
            閉店を回避できるかどうかはまだわかりませんが、もう少しだけ応援してください。
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block bg-pink-400 text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-pink-500 transition-colors"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
