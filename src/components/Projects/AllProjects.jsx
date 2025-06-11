import { motion } from "framer-motion";
import { forwardRef, useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContetx";
import { Link } from "react-router-dom";

export const AllProjects = forwardRef((props, ref) => {
  const { projects, loading, fetcProject } = useContext(DataContext);
  console.log("Projects:", projects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    console.log("Fetching projects...");
    fetcProject();
  }, []);

  const categories = [
    "All",
    ...new Set(
      Array.isArray(projects) ? projects.map((project) => project.category) : []
    ),
  ];

  const filteredProjects = Array.isArray(projects)
    ? projects.filter((project) => {
        const matchesSearch =
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          );
        const matchesCategory =
          selectedCategory === "All" || project.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
    : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };
  if (loading) {
    return (
      <div className="text-center py-20 text-gray-400">Loading projects...</div>
    );
  } else {
    return (
      <>
        {/* Modern Header Section */}
        <div
          ref={ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Project Showcase
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto origin-left"
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my portfolio of innovative projects spanning various
              technologies and domains
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg
                       focus:outline-none focus:border-blue-500/50 text-gray-300 placeholder-gray-500"
              />
              <svg
                className="absolute right-3 top-2.5 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                          ${
                            selectedCategory === category
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                              : "bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-gray-600/50"
                          }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50
                     hover:border-blue-500/20 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                <Link to={`/project/${project.id}`}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={
                      project.images && project.images.length > 0
                        ? project.images[0]
                        : "/placeholder.jpg"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </Link>
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4 cursor-pointer">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <Link to={`/project/${project.id}`}>
                      <h3 className="text-xl font-semibold text-gray-100">
                        {project.title}
                      </h3>
                    </Link>
                    <span className="px-2 py-1 text-xs font-medium text-gray-400 bg-gray-700/50 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium text-gray-300 bg-gray-700/50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.live_demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Live Demo</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <span>Source Code</span>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </>
    );
  }
});
