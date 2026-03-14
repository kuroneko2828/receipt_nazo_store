export default function CampaignPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🎪</div>
        <h1 className="text-3xl font-bold text-rose-600 mb-2">キャンペーン情報</h1>
        <p className="text-gray-500 text-sm">
          たくさんのご応募、ありがとうございました 🌸
        </p>
      </div>

      <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-rose-600 mb-3">
          「ポエムの募集」は締め切りました
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          閉店記念キャンペーンとして実施していた「あなたのスーパー愛ポエム募集」は、
          予定どおり締め切りとなりました。
          予想を超える投稿をいただき、心より感謝申し上げます。
        </p>
        <p className="text-xs text-gray-500 mt-3">
          ※ 入賞作品は店内掲示板と、更新が止まりがちなこのホームページで順次ご紹介予定です。
        </p>
      </div>

      <div className="mt-6 bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-5">
        <p className="text-sm text-yellow-700 leading-relaxed">
          担当者が「ポエムを読んで感情が揺れすぎる」と言って作業を止めているため、
          結果発表のタイミングはわりとふんわりしています。店の閉店より先に出せるよう努力します。
        </p>
      </div>
    </div>
  );
}
