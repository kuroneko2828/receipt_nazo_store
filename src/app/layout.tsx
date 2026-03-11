import type { Metadata } from "next";
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
      <body className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-mint-light font-rounded">
        <Header />
        <main className="pt-4 pb-16">{children}</main>
        <footer className="bg-pink-100 border-t-2 border-pink-200 py-6 text-center text-sm text-pink-400">
          <p>🌸 縺ｻ縺壹ｒ繧ｺ縺ｹ繝医い 🌸</p>
          <p className="mt-1 text-xs">長年のご愛顧ありがとうございました</p>
        </footer>
      </body>
    </html>
  );
}
