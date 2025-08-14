'use client'
import React, {useState, useEffect, useRef} from 'react'
import {
    Lock,
    Unlock,
    Copy,
    Download,
    Upload,
    RefreshCw,
    Check,
    AlertCircle,
  } from "lucide-react";
import { encodeBase64, decodeBase64 } from '@/utils/base64Utils';
import { downloadTextFile } from '@/utils/fileUtils';

const Base64Converter = () => {
     const [inputText, setInputText] = useState<string>("");
      const [outputText, setOutputText] = useState<string>("");
      const [mode, setMode] = useState<"encode" | "decode">("encode");
      const [error, setError] = useState<string>("");
      const [copied, setCopied] = useState<boolean>(false);
      const fileInputRef = useRef<HTMLInputElement>(null);

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
            const filename = `${mode === "encode" ? "encoded" : "decoded"}_text.txt`;
            downloadTextFile(outputText, filename);
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
        

      useEffect(() => {
        if (inputText.trim() === "") {
          setOutputText("");
          setError("");
          return;
        }
    
        try {
          const result = mode === "encode" 
            ? encodeBase64(inputText)
            : decodeBase64(inputText);
          setOutputText(result);
          setError("");
        } catch (err) {
          console.log(err);
          setError(
            mode === "encode" ? "Error encoding text" : "Invalid Base64 string",
          );
          setOutputText("");
        }
      }, [inputText, mode]);

  return (
    
        <div id="converter" className="py-20 px-4">
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
      </div>

    
  )
}

export default Base64Converter