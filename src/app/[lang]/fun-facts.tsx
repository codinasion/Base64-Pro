export default function FunFacts() {
  const funFacts = [
    { number: "1000+", label: "Daily Users Worldwide" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime Reliability" },
    { number: "0ms", label: "Data Processing Delay" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            By The Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by developers across the globe
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
