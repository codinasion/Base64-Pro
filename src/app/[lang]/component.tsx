"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { dictType } from "@/dictionaries";

export default function Base64EncoderDecoderComponent({
  dict,
}: {
  dict: dictType;
}) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleProcess = () => {
    setError("");
    try {
      if (mode === "encode") {
        const encoded = btoa(unescape(encodeURIComponent(input)));
        setOutput(encoded);
      } else {
        const decoded = decodeURIComponent(escape(atob(input)));
        setOutput(decoded);
      }
    } catch (err) {
      console.log(err);
      setError("Invalid input for decoding. Please check your Base64 string.");
      setOutput("");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log(err);
      console.error("Failed to copy text");
    }
  };

  return (
    <section className="pb-20" id="component">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-2xl font-bold text-white">
                {dict.component.text_1}
              </h2>
              <div className="flex bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => setMode("encode")}
                  className={`px-4 py-2 rounded-md font-medium transition-all ${
                    mode === "encode"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {dict.component.text_2}
                </button>
                <button
                  onClick={() => setMode("decode")}
                  className={`px-4 py-2 rounded-md font-medium transition-all ${
                    mode === "decode"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {dict.component.text_3}
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {mode === "encode"
                    ? dict.component.text_4
                    : dict.component.text_5}
                </label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    mode === "encode"
                      ? `${dict.component.text_6} 🌍 ${dict.component.text_7} 🎉`
                      : dict.component.text_8
                  }
                  className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none text-sm"
                />
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleProcess}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  {mode === "encode"
                    ? `🔒 ${dict.component.text_2}`
                    : `🔓 ${dict.component.text_3}`}
                </button>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {mode === "encode"
                      ? dict.component.text_9
                      : dict.component.text_10}
                  </label>
                  {output && (
                    <button
                      onClick={handleCopy}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span className="text-sm">
                        {copied
                          ? dict.component.text_11
                          : dict.component.text_12}
                      </span>
                    </button>
                  )}
                </div>
                <textarea
                  value={output}
                  readOnly
                  placeholder={dict.component.text_13}
                  className="w-full h-32 p-4 bg-gray-50 border-2 border-gray-200 rounded-xl resize-none text-sm"
                />
                {error && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {error}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
