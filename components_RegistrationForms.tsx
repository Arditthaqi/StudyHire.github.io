import React, { useState } from "react";
import { Upload } from "lucide-react";
export const RegistrationForms = () => {
  const [activeTab, setActiveTab] = useState("jobseeker");
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600">
            Choose your path and join our growing community
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex mb-8">
            <button
              className={`flex-1 py-4 text-center font-semibold ${activeTab === "jobseeker" ? "bg-blue-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              onClick={() => setActiveTab("jobseeker")}
            >
              Job Seeker
            </button>
            <button
              className={`flex-1 py-4 text-center font-semibold ${activeTab === "employer" ? "bg-blue-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              onClick={() => setActiveTab("employer")}
            >
              Employer
            </button>
          </div>
          <div className="p-6 md:p-8">
            {activeTab === "jobseeker" ? (
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded-lg border-gray-300 border py-3 px-4"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="block w-full rounded-lg border-gray-300 border py-3 px-4"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Field of Study/Expertise
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded-lg border-gray-300 border py-3 px-4"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Desired Job Type
                  </label>
                  <select className="block w-full rounded-lg border-gray-300 border py-3 px-4">
                    <option value="">Select job type</option>
                    <option>Internship</option>
                    <option>Working Student</option>
                    <option>Full-time</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload CV (optional)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-900 hover:text-blue-800">
                          <span>Upload a file</span>
                          <input type="file" className="sr-only" />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">PDF up to 10MB</p>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Register for Free
                </button>
              </form>
            ) : (
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded-lg border-gray-300 border py-3 px-4"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded-lg border-gray-300 border py-3 px-4"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="block w-full rounded-lg border-gray-300 border py-3 px-4"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Talent Needed
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded-lg border-gray-300 border py-3 px-4"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    rows={4}
                    className="block w-full rounded-lg border-gray-300 border py-3 px-4"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Find Talent Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
