import { dictType } from "@/dictionaries";
import { Coffee } from "lucide-react";
import Link from "next/link";

export default function BuyMeACoffee({ dict }: { dict: dictType }) {
  return (
    <section
      id="support"
      className="py-16 bg-gradient-to-r from-amber-50 to-orange-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
          <Coffee className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            {dict.bmc.text_1} ☕
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            {dict.bmc.text_2} 🌍
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://buymeacoffee.com/codinasion"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
            >
              <Coffee className="w-5 h-5 mr-2" />
              {dict.bmc.text_3} - $1
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            💡 {dict.bmc.text_4}: {dict.bmc.text_5}
          </p>
        </div>
      </div>
    </section>
  );
}
