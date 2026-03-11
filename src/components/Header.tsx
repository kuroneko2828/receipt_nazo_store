"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "🏠 ホーム", href: "/" },
  { label: "🛒 商品", href: "/products" },
  { label: "📰 チラシ", href: "/flyer" },
  { label: "🎟️ クーポン", href: "/coupon" },
  { label: "🌤️ 天気", href: "/weather" },
  { label: "🏪 店舗情報", href: "/store-info" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-r from-pink-300 via-purple-200 to-pink-300 shadow-lg border-b-4 border-pink-300">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="text-center mb-3">
          <h1 className="text-2xl font-bold text-purple-700 tracking-wider garbled">
            縺ｻ縺壹ｒ繧ｺ縺ｹ繝医い
          </h1>
          <p className="text-xs text-pink-500 mt-0.5">✨ 地域のみなさまに愛されたお店 ✨</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-200 border-2 ${
                  isActive
                    ? "bg-pink-400 text-white border-pink-400 shadow-md scale-105"
                    : "bg-white text-pink-500 border-pink-300 hover:bg-pink-100 hover:scale-105"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
