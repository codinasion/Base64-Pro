import { Globe, Code, FileText } from "lucide-react";

const UseCases = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Use Cases
          </h2>
          <p className="text-xl text-gray-600">
            Common scenarios where Base64 encoding is essential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <Globe className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Web Development
            </h3>
            <p className="text-gray-600">
              Encode images, fonts, and other assets for embedding in CSS or
              HTML.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <Code className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              API Integration
            </h3>
            <p className="text-gray-600">
              Encode authentication tokens and API keys for secure transmission.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <FileText className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Data Transfer
            </h3>
            <p className="text-gray-600">
              Safely transmit binary data over text-based protocols like JSON.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
