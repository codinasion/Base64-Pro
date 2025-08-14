'use client'
import React, { JSX } from 'react'
import {
    Shield,
    Zap,
    FileText,
    Code,
  } from "lucide-react";

interface Feature {
    icon: JSX.Element;
    title: string;
    description: string;
  }

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

const Features = () => {
  return (
    <div id="features" className="py-20 px-4 bg-gray-50">
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
      </div>
  )
}

export default Features