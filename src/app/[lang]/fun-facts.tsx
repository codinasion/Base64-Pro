import { dictType } from "@/dictionaries";

export default function FunFacts({ dict }: { dict: dictType }) {
  const funFacts = [
    { number: "1000+", label: dict.fun_facts.text_3 },
    { number: "50+", label: dict.fun_facts.text_4 },
    { number: "99.9%", label: dict.fun_facts.text_5 },
    { number: "0ms", label: dict.fun_facts.text_6 },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            {dict.fun_facts.text_1}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dict.fun_facts.text_2}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {fact.number}
              </div>
              <div className="text-gray-600 font-medium">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
