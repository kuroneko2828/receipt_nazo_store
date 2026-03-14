"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const MESSAGES: Record<string, { title: string; body: string }> = {
  praise: {
    title: "ありがとうございます",
    body: "温かいお言葉をいただき、誠にありがとうございます。担当者に伝えます。担当者はやる気を失っておりましたが、このメッセージを見て少し元気が出たかもしれません。残り少ない営業日も精いっぱい営業いたします。",
  },
  claim: {
    title: "ご意見をいただきありがとうございます",
    body: "貴重なご意見をお寄せいただきありがとうございます。改善に向けて取り組みたいところですが、閉店準備で手がいっぱいです。ご不便をおかけして申し訳ございません。",
  },
  campaign: {
    title: "お問い合わせありがとうございます",
    body: "キャンペーンに関するお問い合わせをありがとうございます。担当者が「ポエムを読んで感情が揺れすぎる」と言って作業を止めているため、回答までしばらくお待ちください。",
  },
  deficit: {
    title: "ご回答ありがとうございます",
    body: "残念ながら、今回のご回答では赤字の原因の特定には至りませんでした。引き続き調査を続けたいところですが、閉店のほうが先になりそうです。",
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
