"use client";

import { useRouter } from "next/navigation";

export default function EndingPage() {
  const router = useRouter();

  const handleLeave = () => {
    localStorage.setItem("showSurvey", "true");
    router.push("/");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-pink-200">
        <h1 className="text-2xl font-bold text-purple-600 mb-6">
          ありがとうございます！
        </h1>
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>赤字の原因を突き止めていただき、誠にありがとうございます。</p>
          <p>
            「2月28日」は<strong>「まとめ買い割」</strong>（7の倍数の日：日用品が半額）の適用日であると同時に、
            <strong>「不用品買取キャンペーン」</strong>（毎月最終日：当日購入品を定価の60%で買取）の開催日でした。
          </p>
          <p>
            この2つが重なったことで、日用品を半額で購入し、そのまま定価の60%で買い取らせるということが可能になっていました。
            これが大量に悪用され、大幅な赤字が生じていたと思われます。
          </p>
          <p>
            本当にありがとうございました。引き続き運営していけるよう、努めたいと思います。
          </p>
          <br /><br />
          <p>---</p>
          <br /><br />
          <p>さて、ここからは裏話です。</p>
          <p>
            関係のありそうな店員は全員退職しており、データも保存していなかったため、これまで原因を突き止めることができませんでした。
            外部に調査を依頼したくともそんなお金はなく、そんな中思いついたのが、あなたが手にしたレシートです。
          </p>
          <p>
            謎解きにしてしまえば、興味を持った人がタダで調査をしてくれる。
          </p>
          <p>
            期待通り、あなたが来てくれました。
          </p>
          <p>
            あなたを利用したこと、深くお詫び申し上げます。
          </p>
          <br />
          <p>
            それでも、あなたもこれをフィクションだと思って楽しんでいましたよね？
          </p>
          <p>
            その無邪気な好奇心のおかげです。
          </p>
          <br /><br /><br />
          <p>
            ご来店ありがとうございました。
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={handleLeave}
            className="inline-block bg-pink-400 text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-pink-500 transition-colors"
          >
            退店する
          </button>
        </div>
      </div>
    </div>
  );
}
