'use client'
import React from 'react'
import { Star } from "lucide-react";

interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}


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

const Reviews = () => {
  return (
    <div id="reviews" className="py-20 px-4 bg-gray-50">
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
      </div>
  )
}

export default Reviews