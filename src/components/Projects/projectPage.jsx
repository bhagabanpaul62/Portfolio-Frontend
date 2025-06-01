import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

export const ProjectPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock project data - replace with your actual data fetching logic
  const project = {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive e-commerce analytics dashboard built with React and Node.js. Features include real-time sales tracking, inventory management, and customer behavior analytics.",
    longDescription: `This project was developed to address the growing need for sophisticated e-commerce analytics tools. It provides business owners with real-time insights into their online store's performance, helping them make data-driven decisions.

The dashboard includes advanced features like predictive analytics for inventory management, customer segmentation based on purchase history, and automated report generation. It's built with scalability in mind and can handle large amounts of data efficiently.`,
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
      "WebSocket",
    ],
    images: [
      "/src/assets/IMG_0588.jpeg",
      "/src/assets/IMG_0589.JPG",
      "/src/assets/IMG_0590.JPG",
    ],
    features: [
      "Real-time sales analytics",
      "Inventory management system",
      "Customer behavior tracking",
      "Automated reporting",
      "Mobile responsive design",
      "Dark/Light theme support",
    ],
    challenges:
      "One of the main challenges was implementing real-time data synchronization across multiple clients. This was solved using WebSocket connections and implementing an efficient data caching strategy.",
    githubLink: "https://github.com/username/project",
    liveDemo: "https://project-demo.com",
    duration: "3 months",
    role: "Full Stack Developer",
    impact:
      "Increased client's sales tracking efficiency by 40% and reduced inventory management time by 60%.",
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Back Button */}
        <Link
          to="/project"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <FiChevronLeft className="mr-2" />
          Back to Projects
        </Link>

        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {project.title}
          </span>
        </h1>

        {/* Image Carousel */}
        <div className="relative rounded-xl overflow-hidden mb-12 bg-gray-900/40 border border-gray-800/50">
          <div className="aspect-video relative">
            <img
              src={project.images[currentImageIndex]}
              alt={`Project screenshot ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Project Overview
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-gray-300 whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Challenges & Solutions
              </h2>
              <p className="text-gray-300">{project.challenges}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Info */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Project Info
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-400 text-sm">Role</h3>
                  <p className="text-white">{project.role}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Duration</h3>
                  <p className="text-white">{project.duration}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Impact</h3>
                  <p className="text-white">{project.impact}</p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Project Links
              </h2>
              <div className="space-y-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors"
                >
                  <span>View Source Code</span>
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors"
                >
                  <span>Live Demo</span>
                  <FiExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;
