"use client";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Encode & Decode?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of developers who trust our tool for their Base64
          needs. Fast, secure, and always free!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
          // @ts-expect-error ignore
            onClick={() => document.querySelector("textarea").focus()}
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Start Converting Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
            Share with Team
          </button>
        </div>
      </div>
    </section>
  );
}
