export default function HistoricalContext() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent mb-6">
            The Story of Base64
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Base64 encoding was developed in the early days of the internet to
              solve a fundamental problem: how to safely transmit binary data
              over text-based protocols like email and HTTP.
            </p>
            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1987
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">
                  RFC 1421
                </h4>
                <p className="text-gray-600">
                  Base64 was first standardized for Privacy Enhanced Mail
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  64
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">
                  Characters
                </h4>
                <p className="text-gray-600">
                  Uses 64 ASCII characters: A-Z, a-z, 0-9, +, /
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  ∞
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">
                  Universal
                </h4>
                <p className="text-gray-600">
                  Now used everywhere from web APIs to data URLs
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Today, Base64 is an essential part of modern web development,
              enabling everything from JWT tokens to inline images. Our tool
              continues this legacy by making Base64 accessible to developers
              worldwide! 🌍
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
