import { Shield, Globe, Zap, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Privacy",
      description:
        "All processing happens in your browser. Your data never leaves your device.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Universal Support",
      description:
        "Perfect handling of UTF-8, emojis, and international characters.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Instant encoding and decoding with real-time processing.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Developer Friendly",
      description: "Clean interface designed by developers, for developers.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Why Developers Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with modern web standards and designed for global
            accessibility
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
