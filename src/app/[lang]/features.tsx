import { dictType } from "@/dictionaries";
import { Shield, Globe, Zap, Users } from "lucide-react";

export default function Features({ dict }: { dict: dictType }) {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: dict.features.text_3,
      description: dict.features.text_4,
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: dict.features.text_5,
      description: dict.features.text_6,
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: dict.features.text_7,
      description: dict.features.text_8,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: dict.features.text_9,
      description: dict.features.text_10,
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            {dict.features.text_1}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dict.features.text_2}
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
