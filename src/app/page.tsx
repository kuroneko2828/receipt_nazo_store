export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {/* 謝罪文バナー */}
      <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6">
        <h2 className="text-xl font-bold text-red-600 mb-3">
          大切なお知らせとお詫び
        </h2>
        <div className="space-y-2 text-red-700 text-sm leading-relaxed">
          <p>
            平素より当店をご愛顧いただき、誠にありがとうございます。
          </p>
          <p>
            このたび、<strong>経営状況の悪化（赤字の拡大）</strong>により、
            誠に残念ながら当店は近日中に<strong>閉店</strong>する運びとなりました。
            長年ご支援いただいた皆様には、心よりお詫び申し上げます。
          </p>
          <p>
            また、ホームページの店舗名が<strong>文字化け</strong>してしまっております。
            担当者がやる気を失っており、修正できておりません。
            大変見苦しく、誠に申し訳ございません。
          </p>
          <p className="text-xs text-red-400 mt-2">
            ※ ホームページの多くのページも「工事中」のままとなっております。
            　閉店までこのままとなる見込みです。ご容赦ください。
          </p>
        </div>
      </div>

      {/* ウェルカムセクション */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-pink-200 text-center">
        <h2 className="text-2xl font-bold text-purple-600 mb-2">
          いらっしゃいませ！
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          当店は創業35年の地域密着型スーパーマーケットです。<br />
          閉店セール開催中！ぜひクーポンをご利用ください。
        </p>
      </div>

      {/* お知らせカード */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-200 shadow-sm">
          <h3 className="font-bold text-pink-600 mb-1">閉店セール実施中！</h3>
          <p className="text-sm text-gray-600">
            全品最大50%OFF！在庫限りとなります。
            お見逃しなく！
          </p>
        </div>

        <div className="bg-pink-50 rounded-2xl p-5 border border-pink-200 shadow-sm">
          <h3 className="font-bold text-pink-600 mb-1">クーポン配布中</h3>
          <p className="text-sm text-gray-600">
            お得なクーポンを多数ご用意しています。
            クーポンページをご確認ください。
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-200 shadow-sm">
          <h3 className="font-bold text-purple-600 mb-1">営業時間</h3>
          <p className="text-sm text-gray-600">
            毎日 9:00 〜 20:00<br />
            ※閉店まで無休で営業します
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-200 shadow-sm">
          <h3 className="font-bold text-purple-600 mb-1">アクセス</h3>
          <p className="text-sm text-gray-600">
            〒123-4567<br />
            東京都謎区ストア町1-2-3
          </p>
        </div>
      </div>
    </div>
  );
}
