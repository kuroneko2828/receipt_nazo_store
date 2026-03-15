"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const MESSAGES: Record<string, { title: string; body: string }> = {
  praise: {
    title: "ありがとうございます",
    body: "温かいお言葉をいただき、誠にありがとうございます。担当者に伝えます。少しは元気が出るかもしれません。",
  },
  claim: {
    title: "申し訳ございません",
    body: "申し訳ありませんが、お客様からのクレームは一切受け付けておりません。閉店の可能性が高いので、改善は諦めてください。",
  },
  poem: {
    title: "ポエム投稿は締め切りました",
    body: "ポエム投稿は不評のため、締め切りました。問い合わせも受け付けておりません。",
  },
  deficit: {
    title: "ご協力ありがとうございます",
    body: "残念ながら、ご指摘いただいた点は原因ではなさそうでした。もし原因がわかったら、またご連絡ください。",
  },
};

function ResultContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "deficit";
  const message = MESSAGES[type] ?? MESSAGES.deficit;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-pink-200">
        <h1 className="text-2xl font-bold text-purple-600 mb-4">
          {message.title}
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">{message.body}</p>
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

export default function ResultPage() {
  return (
    <Suspense>
      <ResultContent />
    </Suspense>
  );
}
