import React, { useState } from "react";
import { AssessmentForm } from "./AssessmentForm";
import { AssessmentResults } from "./AssessmentResults";
export const Assessment = () => {
  const [results, setResults] = useState(null);
  const handleSubmit = (formData) => {
    setResults(formData);
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Career Match
          </h2>
          <p className="text-xl text-gray-600">
            Take our quick assessment to discover personalized job
            recommendations
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          {!results ? (
            <AssessmentForm onSubmit={handleSubmit} />
          ) : (
            <AssessmentResults data={results} />
          )}
        </div>
      </div>
    </section>
  );
};
