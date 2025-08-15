import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      country: "Singapore",
      text: "This tool saved me hours of debugging. The interface is so clean and intuitive!",
      rating: 5,
    },
    {
      name: "Ahmed Al-Rashid",
      role: "DevOps Engineer",
      country: "UAE",
      text: "Perfect for API testing. Works flawlessly with international characters.",
      rating: 5,
    },
    {
      name: "María González",
      role: "Security Analyst",
      country: "Mexico",
      text: "Love the privacy-first approach. Everything happens in the browser!",
      rating: 5,
    },
    {
      name: "Raj Patel",
      role: "Data Scientist",
      country: "India",
      text: "Super fast and reliable. I use it daily for data preprocessing.",
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
            Loved by Developers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied developers from every corner of the
            globe
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
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
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
