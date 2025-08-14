"use client";

import { Heart } from "lucide-react";

const CTA = () => {
  const scrollToConverter = (): void => {
    const element = document.getElementById("converter");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-cyan-600">
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
    </div>
  );
};

export default CTA;
