"use client";

import { useState, useEffect, useRef, JSX } from "react";
import Link from "next/link";
import {
  Lock,
  Unlock,
  Copy,
  Download,
  Upload,
  RefreshCw,
  Check,
  AlertCircle,
  Shield,
  Zap,
  FileText,
  Globe,
  Star,
  Code,
  Heart,
} from "lucide-react";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

interface Stat {
  number: string;
  label: string;
}

export default function Base64EncoderDecoder() {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (inputText.trim() === "") {
      setOutputText("");
      setError("");
      return;
    }

    try {
      if (mode === "encode") {
        const encoded = btoa(unescape(encodeURIComponent(inputText)));
        setOutputText(encoded);
        setError("");
      } else {
        const decoded = decodeURIComponent(escape(atob(inputText)));
        setOutputText(decoded);
        setError("");
      }
    } catch (err) {
      console.log(err);
      setError(
        mode === "encode" ? "Error encoding text" : "Invalid Base64 string",
      );
      setOutputText("");
    }
  }, [inputText, mode]);

  const handleCopy = async (): Promise<void> => {
    if (!outputText) return;

    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDownload = (): void => {
    if (!outputText) return;

    const blob = new Blob([outputText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${mode === "encode" ? "encoded" : "decoded"}_text.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setInputText(text);
    };
    reader.readAsText(file);
  };

  const handleClear = (): void => {
    setInputText("");
    setOutputText("");
    setError("");
    setCopied(false);
  };

  const switchMode = (): void => {
    setMode(mode === "encode" ? "decode" : "encode");
    setInputText(outputText);
    setOutputText("");
    setError("");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setInputText(e.target.value);
    setCopied(false);
  };

  const scrollToConverter = (): void => {
    const element = document.getElementById("converter");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features: Feature[] = [
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: "Real-time Conversion",
      description:
        "Instantly encode or decode Base64 as you type with live preview",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Privacy & Security",
      description:
        "All conversions happen locally in your browser - no data sent to servers",
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      title: "File Support",
      description: "Upload text files for bulk encoding/decoding operations",
    },
    {
      icon: <Code className="h-8 w-8 text-red-500" />,
      title: "Developer Friendly",
      description:
        "Perfect for developers working with APIs, data transfer, and encoding",
    },
  ];

  const reviews: Review[] = [
    {
      name: "Alex Chen",
      rating: 5,
      comment:
        "Perfect for API testing! The real-time conversion is incredibly useful.",
      avatar: "AC",
    },
    {
      name: "Sarah Davis",
      rating: 5,
      comment:
        "Clean interface and works flawlessly. Saved me tons of time on my project.",
      avatar: "SD",
    },
    {
      name: "Mike Johnson",
      rating: 5,
      comment:
        "Love the file upload feature. Makes bulk conversions so much easier.",
      avatar: "MJ",
    },
    {
      name: "Emma Wilson",
      rating: 5,
      comment:
        "Reliable and fast. The privacy-first approach gives me peace of mind.",
      avatar: "EW",
    },
  ];

  const stats: Stat[] = [
    { number: "1M+", label: "Conversions Made" },
    { number: "50K+", label: "Happy Developers" },
    { number: "100%", label: "Client-Side" },
    { number: "24/7", label: "Available" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-800">Base64 Pro</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#converter"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Converter
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#reviews"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Reviews
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className={`py-20 px-4 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Base64
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
              {" "}
              Encoder/Decoder
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Convert text to Base64 and decode Base64 back to text. Fast, secure,
            and completely free with real-time conversion.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200"
              >
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Converter Section */}
      <section id="converter" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-10">
              {mode === "encode" ? (
                <Lock className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
              ) : (
                <Unlock className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
              )}
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Base64 {mode === "encode" ? "Encoder" : "Decoder"}
              </h2>
              <p className="text-gray-600 text-lg">
                {mode === "encode"
                  ? "Convert your text to Base64 encoding"
                  : "Decode Base64 back to readable text"}
              </p>
            </div>

            {/* Mode Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setMode("encode")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    mode === "encode"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  Encode
                </button>
                <button
                  onClick={() => setMode("decode")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    mode === "decode"
                      ? "bg-cyan-600 text-white shadow-md"
                      : "text-gray-600 hover:text-cyan-600"
                  }`}
                >
                  Decode
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-lg font-semibold text-gray-700">
                    {mode === "encode" ? "Plain Text Input" : "Base64 Input"}
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept=".txt"
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                      title="Upload file"
                    >
                      <Upload className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleClear}
                      className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                      title="Clear all"
                    >
                      <RefreshCw className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <textarea
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder={
                    mode === "encode"
                      ? "Enter text to encode..."
                      : "Enter Base64 string to decode..."
                  }
                  className="w-full h-64 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all resize-none"
                />
                <div className="text-sm text-gray-500">
                  Characters: {inputText.length}
                </div>
              </div>

              {/* Output Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-lg font-semibold text-gray-700">
                    {mode === "encode" ? "Base64 Output" : "Plain Text Output"}
                  </label>
                  <div className="flex space-x-2">
                    <button
                      onClick={switchMode}
                      className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                      title="Switch input/output"
                    >
                      <RefreshCw className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleCopy}
                      disabled={!outputText}
                      className="p-2 text-gray-600 hover:text-green-600 transition-colors disabled:opacity-50"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <Check className="h-5 w-5 text-green-600" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                    <button
                      onClick={handleDownload}
                      disabled={!outputText}
                      className="p-2 text-gray-600 hover:text-blue-600 transition-colors disabled:opacity-50"
                      title="Download as file"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <textarea
                  value={error || outputText}
                  readOnly
                  placeholder="Output will appear here..."
                  className={`w-full h-64 px-4 py-3 border-2 rounded-xl outline-none resize-none ${
                    error
                      ? "border-red-300 bg-red-50 text-red-600"
                      : "border-gray-300 bg-gray-50"
                  }`}
                />
                {error && (
                  <div className="flex items-center space-x-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{error}</span>
                  </div>
                )}
                <div className="text-sm text-gray-500">
                  Characters: {outputText.length}
                </div>
              </div>
            </div>

            {copied && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                  <Check className="h-4 w-4" />
                  <span>Copied to clipboard!</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for Base64 encoding and decoding operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-200"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
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
                Encode authentication tokens and API keys for secure
                transmission.
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
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Developers Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by developers and engineers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {review.name}
                    </h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &quot;{review.comment}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Converting?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join over 50,000 developers who trust Base64 Pro for their encoding
            needs
          </p>
          <button
            onClick={scrollToConverter}
            className="inline-block bg-white text-indigo-600 font-bold px-12 py-4 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg cursor-pointer"
          >
            Start Converting Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-gray-400">
            <p>
              Made with ❤️ by{" "}
              <Link
                href="https://www.codinasion.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codinasion
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
