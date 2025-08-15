import { dictType } from "@/dictionaries";
import { Star } from "lucide-react";

export default function Testimonials({ dict }: { dict: dictType }) {
  const testimonials = [
    {
      name: dict.testimonials.text_3,
      role: dict.testimonials.text_4,
      country: dict.testimonials.text_5,
      text: dict.testimonials.text_6,
      rating: 5,
    },
    {
      name: dict.testimonials.text_7,
      role: dict.testimonials.text_8,
      country: dict.testimonials.text_9,
      text: dict.testimonials.text_10,
      rating: 5,
    },
    {
      name: dict.testimonials.text_11,
      role: dict.testimonials.text_12,
      country: dict.testimonials.text_13,
      text: dict.testimonials.text_14,
      rating: 5,
    },
    {
      name: dict.testimonials.text_15,
      role: dict.testimonials.text_16,
      country: dict.testimonials.text_17,
      text: dict.testimonials.text_18,
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            {dict.testimonials.text_1}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dict.testimonials.text_2}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-800">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
                <div className="text-sm text-blue-600 font-medium">
                  {testimonial.country}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
