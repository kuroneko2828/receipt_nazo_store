import Link from "next/link";

const allowedUnderConstructionPaths = ["products", "flyer", "store-info"] as const;

export function generateStaticParams() {
  return allowedUnderConstructionPaths.map((slug) => ({ slug: [slug] }));
}

export const dynamicParams = false;

export default function UnderConstructionPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-3xl p-10 shadow-lg border-4 border-yellow-300">
        {/* 工事中アイコン */}
        <div className="text-8xl mb-6 animate-bounce">🚧</div>

        <h1 className="text-3xl font-bold text-yellow-600 mb-2">工事中</h1>
        <p className="text-yellow-500 font-medium mb-6 text-lg">UNDER CONSTRUCTION</p>

        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4 mb-6 text-left">
          <p className="text-sm text-gray-600 leading-relaxed">
            申し訳ございません。このページはまだ準備中です。
            <br />
            <br />
            担当者がやる気を失っているため、しばらくこのままになります。
            そもそも店も閉まるので、完成しない可能性が高いです。
          </p>
        </div>

        {/* 工事イラスト的なもの */}
        <div className="flex justify-center gap-3 mb-6 text-3xl">
          <span>👷</span>
          <span>🔨</span>
          <span>⛑️</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-pink-400 text-white font-bold px-6 py-3 rounded-full hover:bg-pink-500 transition-colors duration-200 shadow-sm"
          >
            🏠 ホームに戻る
          </Link>
          <Link
            href="/coupon"
            className="bg-purple-400 text-white font-bold px-6 py-3 rounded-full hover:bg-purple-500 transition-colors duration-200 shadow-sm"
          >
            🎟️ クーポンを見る
          </Link>
        </div>
      </div>
    </div>
  );
}
