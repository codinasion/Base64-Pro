"use client";

import { dictType } from "@/dictionaries";
import Link from "next/link";

export default function Navbar({
  dict,
  lang,
}: {
  dict: dictType;
  lang: string;
}) {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B64</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {dict.navbar.text_1}
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {dict.navbar.text_2}
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {dict.navbar.text_3}
            </a>
            <button
              onClick={() =>
                document
                  .querySelector("#component")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              {dict.navbar.text_4}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
