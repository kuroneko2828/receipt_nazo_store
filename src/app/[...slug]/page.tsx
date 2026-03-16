import Link from "next/link";

const allowedUnderConstructionPaths = ["products", "flyer", "store-info"] as const;

export function generateStaticParams() {
  return allowedUnderConstructionPaths.map((slug) => ({ slug: [slug] }));
}

export const dynamicParams = false;

export default function UnderConstructionPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-3xl p-10 shadow-lg border-2 border-purple-200">
        {/* 工事中アイコン */}
        <div className="text-8xl mb-6 animate-bounce">🚧</div>

        <h1 className="text-3xl font-bold text-purple-600 mb-2">工事中</h1>
        <p className="text-purple-400 font-medium mb-6 text-lg">UNDER CONSTRUCTION</p>

        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6 text-left">
          <p className="text-sm text-gray-600 leading-relaxed">
            申し訳ございません。このページはまだ準備中です。
            <br />
            <br />
            担当者がやる気を失っているため、しばらくこのままになります。
            そもそも店が閉まって完成しない可能性が高いです。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-pink-400 text-white font-bold px-6 py-3 rounded-full hover:bg-pink-500 transition-colors duration-200 shadow-sm"
          >
            🏠 ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
