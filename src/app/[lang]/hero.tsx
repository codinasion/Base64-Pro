export default function Hero() {
  return (
    <section className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Base64 Encoder
            <br />
            <span className="text-4xl md:text-6xl">& Decoder</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The world's most trusted Base64 tool. Fast, secure, and globally
            accessible.
            <span className="text-blue-600 font-semibold">
              {" "}
              Used by 10,000+ developers worldwide.
            </span>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            🌍 Global UTF-8 Support
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            🔒 100% Private
          </span>
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
            ⚡ Instant Results
          </span>
        </div>
      </div>
    </section>
  );
}
