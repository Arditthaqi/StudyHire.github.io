import React from "react";
import { Briefcase, Users, Compass } from "lucide-react";
export const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
              <Briefcase className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Premium Opportunities
            </h3>
            <p className="text-gray-600">
              Exclusive access to premium job opportunities with leading
              companies across Germany.
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
              <Users className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Precise Matching
            </h3>
            <p className="text-gray-600">
              Fast and precise candidate matching using our advanced recruitment
              technology.
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
              <Compass className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Career Guidance
            </h3>
            <p className="text-gray-600">
              Comprehensive support with applications and professional career
              guidance.
            </p>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
            Learn More About Our Services
          </button>
        </div>
      </div>
    </section>
  );
};
