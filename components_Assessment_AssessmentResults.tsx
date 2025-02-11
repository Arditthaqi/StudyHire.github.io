import React from "react";
import { CheckCircle } from "lucide-react";
export const AssessmentResults = ({ data }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-6 space-y-4">
      <div className="flex items-center space-x-2 text-blue-900">
        <CheckCircle className="w-6 h-6" />
        <h3 className="text-xl font-semibold">Perfect Match!</h3>
      </div>
      <p className="text-gray-700">
        Based on your profile, you're an excellent candidate for{" "}
        {data.jobType.toLowerCase()} positions in {data.field.toLowerCase()}.
        Your {data.experience} years of experience and
        {data.languages.length > 0
          ? ` proficiency in ${data.languages.join(", ")}`
          : " language skills"}
        are in high demand!
      </p>
      <button className="w-full bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
        Register Now & Get Job Recommendations
      </button>
    </div>
  );
};
