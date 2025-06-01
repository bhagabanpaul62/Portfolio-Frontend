import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiTool,
  FiPhone,
  FiCalendar,
  FiClock,
  FiLock,
} from "react-icons/fi";

export const AllRouteLinks = () => {
  // Test data for project routes
  const testProjects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
  ];

  const routes = [
    // Public Routes
    { path: "/", name: "Home", icon: <FiHome /> },
    { path: "/about", name: "About", icon: <FiUser /> },
    { path: "/project", name: "Projects", icon: <FiFolder /> },
    { path: "/services", name: "Services", icon: <FiTool /> },
    { path: "/contact", name: "Contact", icon: <FiPhone /> },
    { path: "/bookacall", name: "Book a Call", icon: <FiCalendar /> },
    { path: "/comingsoon", name: "Coming Soon", icon: <FiClock /> },
    // Admin Routes
    { path: "/admin", name: "Admin Dashboard", icon: <FiLock /> },
    { path: "/admin/editproject", name: "Edit Project", icon: <FiFolder /> },
    {
      path: "/admin/uploadproject",
      name: "Upload Project",
      icon: <FiFolder />,
    },
  ];

  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Route Testing Page
          </span>
        </h1>

        {/* Main Routes */}
        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Main Routes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="flex items-center space-x-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors group"
              >
                <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
                  {route.icon}
                </span>
                <span className="text-gray-200">{route.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Project Detail Routes */}
        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">
            Project Detail Routes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {testProjects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="flex items-center space-x-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors group"
              >
                <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
                  <FiFolder />
                </span>
                <span className="text-gray-200">{project.name} Details</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 404 Test */}
        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">404 Route Test</h2>
          <Link
            to="/non-existent-route"
            className="inline-flex items-center space-x-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors group"
          >
            <span className="text-gray-400 group-hover:text-red-400 transition-colors">
              <FiFolder />
            </span>
            <span className="text-gray-200">Test 404 Page</span>
          </Link>
        </div>

        {/* Route Info Table */}
        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 mt-8">
          <h2 className="text-xl font-bold text-white mb-4">
            Route Information
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800/50">
                  <th className="text-left py-3 text-gray-400">Path</th>
                  <th className="text-left py-3 text-gray-400">Description</th>
                  <th className="text-left py-3 text-gray-400">Access</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800/30">
                  <td className="py-3 text-gray-300">/</td>
                  <td className="py-3 text-gray-300">Home Page</td>
                  <td className="py-3 text-green-400">Public</td>
                </tr>
                <tr className="border-b border-gray-800/30">
                  <td className="py-3 text-gray-300">/project/:id</td>
                  <td className="py-3 text-gray-300">Project Details</td>
                  <td className="py-3 text-green-400">Public</td>
                </tr>
                <tr className="border-b border-gray-800/30">
                  <td className="py-3 text-gray-300">/admin/*</td>
                  <td className="py-3 text-gray-300">Admin Routes</td>
                  <td className="py-3 text-yellow-400">Protected</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-300">*</td>
                  <td className="py-3 text-gray-300">404 Page</td>
                  <td className="py-3 text-green-400">Public</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRouteLinks;
