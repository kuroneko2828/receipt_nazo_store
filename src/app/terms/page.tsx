export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-pink-200">
        <h1 className="text-2xl font-bold text-purple-600 mb-6">
          サイトご利用規約
        </h1>

        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            利用規約作っていないことに今更ながら気づきましたが、ただいま書く気力が残っておりません。
          </p>
          <p>
            つきましては、倫理的に考えてよくないことは、どうかご自身の判断でお控えください。
            人として「それはまずいな」と思うことをしなければ、大体大丈夫です。
          </p>
          <p>
            細かい規約が必要な場面があるとすれば、それはもう閉店後のことですので、当店には関係ありません。
          </p>
          <p className="text-xs text-gray-400 mt-6">
            ※ 本規約は法的効力を持たない可能性が高いですが、そもそも争う体力がありません。
          </p>
        </div>
      </div>
    </div>
  );
}
