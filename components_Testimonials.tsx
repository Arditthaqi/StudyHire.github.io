import React from "react";
import { Star } from "lucide-react";
const testimonials = [
  {
    name: "Sarah Meyer",
    role: "Software Developer",
    company: "TechCorp GmbH",
    text: "Through RecruitPro, I found my dream job in Berlin within weeks. The process was smooth and professional.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120",
  },
  {
    name: "Michael Schmidt",
    role: "HR Director",
    company: "Innovation Labs",
    text: "RecruitPro consistently delivers high-quality candidates who match our requirements perfectly.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120",
  },
];
const companyLogos = [
  {
    name: "Mercedes-Benz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png",
  },
  {
    name: "Boehringer Ingelheim",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Boehringer_Ingelheim_Logo.svg/2560px-Boehringer_Ingelheim_Logo.svg.png",
  },
];
export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Professionals
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands who have found their perfect career match
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 md:p-8">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companyLogos.map((company, index) => (
              <img
                key={index}
                src={company.logo}
                alt={company.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
