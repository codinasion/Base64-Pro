import { dictType } from "@/dictionaries";
import { Sparkles } from "lucide-react";

export default function Sponsor({ dict }: { dict: dictType }) {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
          <Sparkles className="w-16 h-16 text-purple-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            {dict.sponsor.text_1} 👑
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            {dict.sponsor.text_2}
          </p>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 mb-8">
            <h4 className="text-xl font-bold text-purple-800 mb-2">
              {dict.sponsor.text_3}:
            </h4>
            <ul className="text-left text-gray-700 max-w-md mx-auto space-y-2">
              <li>✨ {dict.sponsor.text_4}</li>
              <li>🔗 {dict.sponsor.text_5}</li>
              <li>📈 {dict.sponsor.text_6}</li>
              <li>💎 {dict.sponsor.text_7}</li>
              <li>🌍 {dict.sponsor.text_8}</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">$100</div>
            <div className="text-gray-500 mb-6">{dict.sponsor.text_9}</div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center mx-auto">
              <Sparkles className="w-5 h-5 mr-2" />
              {dict.sponsor.text_10}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
