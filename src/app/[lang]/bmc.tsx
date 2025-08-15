import { Coffee, Heart } from "lucide-react";

export default function BuyMeACoffee() {
  return (
    <section
      id="support"
      className="py-16 bg-gradient-to-r from-amber-50 to-orange-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
          <Coffee className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Fuel Our Coding Sessions! ☕
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            This tool is completely free and always will be! If it saved you
            time and stress, consider buying us a coffee. Every cup helps us
            maintain and improve this tool for everyone! 🌍
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center">
              <Coffee className="w-5 h-5 mr-2" />
              Buy Us a Coffee - $3
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Super Supporter - $10
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            💡 Fun fact: It takes about 47 coffees to keep our servers running
            for a month!
          </p>
        </div>
      </div>
    </section>
  );
}
