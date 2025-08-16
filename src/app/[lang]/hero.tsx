import { dictType } from "@/dictionaries";

export default function Hero({ dict }: { dict: dictType }) {
  return (
    <section className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            {dict.hero.text_1}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {dict.hero.text_2}
            <span className="text-blue-600 font-semibold">
              {" "}
              {dict.hero.text_3}
            </span>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            🌍 {dict.hero.text_4}
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            🔒 {dict.hero.text_5}
          </span>
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
            ⚡ {dict.hero.text_6}
          </span>
        </div>
      </div>
    </section>
  );
}
