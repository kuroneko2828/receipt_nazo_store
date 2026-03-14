import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "縺ｻ縺壹ｒ繧ｺ縺ｹ繝医い | ｽ繝ｰ繧ｺ繝医い",
  description: "縺ｪ縺壹ｒ繧ｺ縺ｹ繝医い - 地域密着型スーパーマーケット",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-rounded">
        <Header />
        <main className="pt-4 pb-16">{children}</main>
        <footer className="bg-white border-t border-pink-200 py-3">
          <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <nav className="flex flex-wrap items-center gap-x-1 text-[10px] text-gray-400">
              <Link href="/privacy" className="hover:text-pink-400 transition-colors px-1.5">
                個人情報の取り扱いについて
              </Link>
              <span className="text-pink-200">|</span>
              <Link href="/terms" className="hover:text-pink-400 transition-colors px-1.5">
                サイトご利用規約
              </Link>
              <span className="text-pink-200">|</span>
              <Link href="/contact" className="hover:text-pink-400 transition-colors px-1.5">
                お問い合わせ
              </Link>
            </nav>
            <p className="text-[10px] text-gray-400 whitespace-nowrap">
              Copyright © 縺ｻ縺壹ｒ繧ｺ縺ｹ繝医い All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
