import Link from "next/link";

export default function CampaignPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">✍️</div>
        <h1 className="text-3xl font-bold text-rose-600 mb-2">ポエム投稿
        </h1>
        <p className="text-gray-500 text-sm">
          たくさんのご応募、ありがとうございました 🌸
        </p>
      </div>

      <div className="bg-pink-50 border border-pink-200 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-pink-600 mb-3">
          「ポエムの募集」は締め切りました
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          自分が書いたポエムを晒されるのが恥ずかしいのか、お客様からのポエム投稿は一切寄せられませんでした。<br />
          レシートに記載のポエムは全て、担当者が書いたものです。<br />
          ポエムを考える余裕がなくなったため、ポエムの募集は締め切りました。
        </p>
        <p className="text-xs text-gray-500 mt-3">
          ※ 閉店が決定次第、当店への感謝の言葉を収集予定です。
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="bg-pink-400 text-white font-bold px-6 py-3 rounded-full hover:bg-pink-500 transition-colors duration-200 shadow-sm"
        >
          🏠 ホームに戻る
        </Link>
      </div>
    </div>
  );
}
