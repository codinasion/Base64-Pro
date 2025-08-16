import { dictType } from "@/dictionaries";

export default function UseCases({ dict }: { dict: dictType }) {
  const useCases = [
    dict.use_cases.text_3,
    dict.use_cases.text_4,
    dict.use_cases.text_5,
    dict.use_cases.text_6,
    dict.use_cases.text_7,
    dict.use_cases.text_8,
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {dict.use_cases.text_1}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dict.use_cases.text_2}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {useCase}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
