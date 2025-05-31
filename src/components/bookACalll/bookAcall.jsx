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
              {/* Name Input */}
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

              {/* Email Input */}
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

              {/* Project Type Select */}
              <div>
                <label className="block text-gray-300 mb-2">Project Type</label>
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

              {/* Message Textarea */}
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white
                         rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Schedule Consultation
              </button>
            </form>
          </motion.div>

          {/* Right Side - Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Date Selection */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">
                Select Date & Time
              </h3>

              {/* Date Picker */}
              <div className="mb-6">
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

              {/* Time Slots */}
              <div>
                <label className="block text-gray-300 mb-2">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-2 gap-3">
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

            {/* Additional Information */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">
                What to Expect
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-400 mt-1"
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
                  <span>30-minute initial consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-400 mt-1"
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
                  <span>Project scope discussion</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-400 mt-1"
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
                  <span>Timeline and budget planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-400 mt-1"
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
                  <span>Question and answer session</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
