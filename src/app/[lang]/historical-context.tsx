import { dictType } from "@/dictionaries";

export default function HistoricalContext({ dict }: { dict: dictType }) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent mb-6">
            {dict.historical_context.text_1}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {dict.historical_context.text_2}
            </p>
            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1987
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">
                  {dict.historical_context.text_3}
                </h4>
                <p className="text-gray-600">
                  {dict.historical_context.text_4}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  64
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">
                  {dict.historical_context.text_5}
                </h4>
                <p className="text-gray-600">
                  {dict.historical_context.text_6}: A-Z, a-z, 0-9, +, /
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  ∞
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">
                  {dict.historical_context.text_7}
                </h4>
                <p className="text-gray-600">
                  {dict.historical_context.text_8}
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              {dict.historical_context.text_9} 🌍
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
