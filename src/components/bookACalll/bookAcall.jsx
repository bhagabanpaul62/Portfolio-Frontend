import { motion } from "framer-motion";
import { useState } from "react";

export const BookACall = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web Development",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  const projectTypes = [
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "Machine Learning",
    "Consulting",
    "Other",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full min-h-screen px-4 py-20 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="text-4xl lg:text-5xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Schedule a Consultation
          </span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto origin-left"
        />
        <p className="text-gray-400 max-w-2xl mx-auto">
          Let's discuss your project and explore how we can work together to
          bring your ideas to life.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-4">
                  Personal Information
                </h3>

                <div>
                  <label className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg
                             focus:outline-none focus:border-blue-500/50 text-gray-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg
                             focus:outline-none focus:border-blue-500/50 text-gray-300"
                    required
                  />
                </div>
              </div>

              {/* Project Details Section */}
              <div className="space-y-6 pt-6 border-t border-gray-700/50">
                <h3 className="text-xl font-semibold text-gray-200 mb-4">
                  Project Details
                </h3>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg
                             focus:outline-none focus:border-blue-500/50 text-gray-300"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg
                             focus:outline-none focus:border-blue-500/50 text-gray-300"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Schedule Section */}
              <div className="space-y-6 pt-6 border-t border-gray-700/50">
                <h3 className="text-xl font-semibold text-gray-200 mb-4">
                  Schedule Meeting
                </h3>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg
                             focus:outline-none focus:border-blue-500/50 text-gray-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() =>
                          handleChange({
                            target: { name: "preferredTime", value: time },
                          })
                        }
                        className={`px-4 py-3 rounded-lg text-sm font-medium 
                                  ${
                                    formData.preferredTime === time
                                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                                      : "bg-gray-900/50 text-gray-400 border border-gray-700/50 hover:border-gray-600/50"
                                  }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white
                           rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Schedule Consultation
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Side - What to Expect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Consultation Overview */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 sticky top-24 space-y-8">
              {/* Meeting Format */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-6 flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Meeting Format
                </h3>
                <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/30">
                  <p className="text-gray-300 mb-3">
                    30-Minute Free Consultation includes:
                  </p>
                  <ul className="space-y-4 text-gray-400">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>In-depth project discussion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Technical requirements analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Initial solution proposal</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* What to Prepare */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-6 flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  What to Prepare
                </h3>
                <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/30">
                  <ul className="space-y-4 text-gray-400">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Project goals and objectives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Timeline expectations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Budget considerations</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* After the Call */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-6 flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Next Steps
                </h3>
                <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/30">
                  <ul className="space-y-4 text-gray-400">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Detailed proposal within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Project timeline and milestones</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Development plan and next actions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
