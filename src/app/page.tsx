import SurveyPopup from "@/components/SurveyPopup";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      <SurveyPopup />
      {/* 謝罪文バナー */}
      <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6">
        <h2 className="text-xl font-bold text-red-600 mb-3">
          大切なお知らせとお詫び
        </h2>
        <div className="space-y-2 text-red-700 text-sm leading-relaxed">
          <p>
            いつもご利用ありがとうございます。
          </p>
          <p>
            この度、原因不明の大幅赤字が発生しました。
            副店長のウシ、No.3のトラと共に原因を調査していますが、なんの成果も得られていません。
            このまま改善ができなければ、閉店する可能性があります。
          </p>
          <p>
            また、ホームページの一部が文字化けしていたり、工事中になっていたりしますが、そんなことにかまっている余力はありません。
            店名を思い出す暇もありません。
            店長が好きな食べ物の名前だったはずですが...
          </p>
          <p>
            あ、一切のクレームは受け付けませんので、ご了承ください。
          </p>
          <p className="text-right mt-3 font-bold">
            No.4 ウサギ
          </p>
        </div>
      </div>

      {/* ウェルカムセクション */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-pink-200 text-center">
        <h2 className="text-2xl font-bold text-purple-600 mb-2">
          いらっしゃいませ！
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          当店は創業3ヶ月の地域密着 (予定) 型スーパーマーケットです。<br />
          もうすぐ閉店するかもしれないですけどね！！
        </p>
      </div>

      {/* 店内写真 */}
      <div className="rounded-3xl overflow-hidden shadow-sm border border-pink-200">
        <Image
          src="/images/super.png"
          alt="店内の様子"
          width={960}
          height={540}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* お知らせカード */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-200 shadow-sm">
          <h3 className="font-bold text-purple-600 mb-1">営業時間</h3>
          <p className="text-sm text-gray-600">
            毎日 9:00 〜 22:00<br />
            ※閉店まで無休
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-200 shadow-sm">
          <h3 className="font-bold text-purple-600 mb-1">アクセス</h3>
          <p className="text-sm text-gray-600">
            〒XXX-XXXX<br />
            遘狗伐逵� 莠募哨蟶� 蜿ｳ谺�逕ｺ 邨ｵ蟆乗焔
          </p>
        </div>
      </div>
    </div>
  );
}
