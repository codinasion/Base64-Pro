"use client";

import { dictType } from "@/dictionaries";

export default function CTA({ dict }: { dict: dictType }) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {dict.cta.text_1}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {dict.cta.text_2}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document
                .querySelector("#component")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            {dict.cta.text_3}
          </button>
        </div>
      </div>
    </section>
  );
}
