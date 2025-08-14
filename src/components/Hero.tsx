'use client'
import React, { useState, useEffect } from 'react'

interface Stat {
    number: string;
    label: string;
  }

const stats: Stat[] = [
    { number: "1M+", label: "Conversions Made" },
    { number: "50K+", label: "Happy Developers" },
    { number: "100%", label: "Client-Side" },
    { number: "24/7", label: "Available" },
  ];

const Hero = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
      }, []);
  return (
    <div
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
      </div>
  )
}

export default Hero