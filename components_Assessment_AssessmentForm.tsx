import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
const fields = [
  "Software Development",
  "Data Science",
  "Engineering",
  "Marketing",
  "Finance",
  "Human Resources",
];
const jobTypes = [
  "Internship",
  "Working Student",
  "Full-time Entry Level",
  "Full-time Experienced",
];
const languages = ["English", "German", "French", "Spanish", "Mandarin"];
const experienceYears = ["0-1", "1-3", "3-5", "5-10", "10+"];
export const AssessmentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    field: "",
    jobType: "",
    languages: [],
    experience: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What is your field of study or expertise?
          </label>
          <div className="relative">
            <select
              value={formData.field}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  field: e.target.value,
                })
              }
              className="block w-full rounded-lg border-gray-300 border py-3 px-4 pr-10 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a field</option>
              {fields.map((field) => (
                <option key={field} value={field}>
                  {field}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What type of job are you looking for?
          </label>
          <div className="relative">
            <select
              value={formData.jobType}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  jobType: e.target.value,
                })
              }
              className="block w-full rounded-lg border-gray-300 border py-3 px-4 pr-10 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select job type</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What languages do you speak?
          </label>
          <div className="space-y-2">
            {languages.map((language) => (
              <label key={language} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.languages.includes(language)}
                  onChange={(e) => {
                    const newLanguages = e.target.checked
                      ? [...formData.languages, language]
                      : formData.languages.filter((l) => l !== language);
                    setFormData({
                      ...formData,
                      languages: newLanguages,
                    });
                  }}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <span className="ml-2 text-gray-700">{language}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How many years of experience do you have?
          </label>
          <div className="relative">
            <select
              value={formData.experience}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  experience: e.target.value,
                })
              }
              className="block w-full rounded-lg border-gray-300 border py-3 px-4 pr-10 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select experience</option>
              {experienceYears.map((years) => (
                <option key={years} value={years}>
                  {years} years
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
      >
        Get Personalized Job Recommendations
      </button>
    </form>
  );
};
