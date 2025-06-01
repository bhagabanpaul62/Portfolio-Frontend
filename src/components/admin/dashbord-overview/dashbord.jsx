import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiActivity, FiFolder, FiMail } from "react-icons/fi";
import { MdEdit, MdDelete } from "react-icons/md";

const Dashboard = () => {
  const stats = [
    {
      id: 1,
      title: "Total Projects",
      value: "12",
      icon: <FiFolder className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Total Views",
      value: "2.4K",
      icon: <FiUsers className="w-6 h-6" />,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Active Tasks",
      value: "8",
      icon: <FiActivity className="w-6 h-6" />,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Messages",
      value: "15",
      icon: <FiMail className="w-6 h-6" />,
      color: "bg-yellow-500",
    },
  ];

  const recentProjects = [
    {
      id: 1,
      title: "E-commerce Website",
      status: "Completed",
      date: "2025-05-28",
    },
    {
      id: 2,
      title: "Mobile App UI",
      status: "In Progress",
      date: "2025-05-30",
    },
    {
      id: 3,
      title: "Dashboard Design",
      status: "In Review",
      date: "2025-06-01",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm p-4 sm:p-6 lg:p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome back, Admin!
            </span>
          </h1>
          <p className="text-gray-400 mt-2">
            Here's what's happening with your projects today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`${stat.color} bg-opacity-20 p-3 rounded-lg text-white`}
                >
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Projects */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Recent Projects</h2>
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300">
              Add New Project
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-800/50">
                  <th className="pb-4 text-sm font-semibold text-gray-400">
                    Project Name
                  </th>
                  <th className="pb-4 text-sm font-semibold text-gray-400">
                    Status
                  </th>
                  <th className="pb-4 text-sm font-semibold text-gray-400">
                    Date
                  </th>
                  <th className="pb-4 text-sm font-semibold text-gray-400">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentProjects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-gray-800/30 last:border-0"
                  >
                    <td className="py-4">
                      <p className="text-white font-medium">{project.title}</p>
                    </td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === "Completed"
                            ? "bg-green-900/50 text-green-400"
                            : project.status === "In Progress"
                            ? "bg-blue-900/50 text-blue-400"
                            : "bg-yellow-900/50 text-yellow-400"
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <p className="text-gray-400 text-sm">{project.date}</p>
                    </td>
                    <td className="py-4">
                      <div className="flex space-x-2">
                        <button className="p-1.5 hover:bg-gray-800/50 rounded-lg transition-colors">
                          <MdEdit className="w-5 h-5 text-blue-400" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-800/50 rounded-lg transition-colors">
                          <MdDelete className="w-5 h-5 text-red-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-gray-800/50 hover:bg-gray-700/50 p-4 rounded-lg flex items-center justify-between transition-colors text-gray-300 hover:text-white">
                <span>Upload New Project</span>
                <FiFolder className="w-5 h-5" />
              </button>
              <button className="w-full bg-gray-800/50 hover:bg-gray-700/50 p-4 rounded-lg flex items-center justify-between transition-colors text-gray-300 hover:text-white">
                <span>View Messages</span>
                <FiMail className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">System Status</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Storage Used</span>
                  <span className="text-gray-300 font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Memory Usage</span>
                  <span className="text-gray-300 font-medium">45%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-5/12"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
