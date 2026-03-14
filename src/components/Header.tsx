"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "🏠 ホーム", href: "/" },
  { label: "🎟️ クーポン", href: "/coupon" },
  { label: "🎪 キャンペーン", href: "/campaign" },
  { label: "🏪 店舗情報", href: "/store-info" },
];

export default function Header() {
  const rawPathname = usePathname();
  const pathname =
    rawPathname !== "/" ? rawPathname.replace(/\/$/, "") : rawPathname;

  return (
    <header className="bg-white shadow-sm border-b-2 border-pink-200">
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
                    ? "bg-pink-100 text-pink-600 border-pink-300"
                    : "bg-white text-pink-400 border-pink-200 hover:bg-pink-50"
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
