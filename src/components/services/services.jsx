import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and modern web applications using React, Next.js, and the MERN stack.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      gradient: "from-blue-400 to-blue-600",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "RESTful APIs",
        "Database Integration",
      ],
    },
    {
      title: "Machine Learning",
      description:
        "Implementing AI solutions using TensorFlow, PyTorch, and deep learning architectures.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
          />
        </svg>
      ),
      gradient: "from-purple-400 to-purple-600",
      features: [
        "Deep Learning Models",
        "Computer Vision",
        "Data Analysis",
        "Model Deployment",
      ],
    },
    {
      title: "Full Stack Development",
      description:
        "End-to-end development with modern technologies and best practices.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      gradient: "from-indigo-400 to-indigo-600",
      features: [
        "MERN Stack",
        "Cloud Deployment",
        "Authentication",
        "Performance Optimization",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Creating beautiful and intuitive user interfaces with modern design principles.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V17a4 4 0 01-4 4h-4zm2-16H5v16a2 2 0 002 2h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707L14.586 4H9z"
          />
        </svg>
      ),
      gradient: "from-cyan-400 to-cyan-600",
      features: [
        "Modern UI Design",
        "Interactive Animations",
        "Responsive Layouts",
        "Design Systems",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-full py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
              My Services
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering high-quality solutions across web development, machine
            learning, and design.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative p-8 backdrop-blur-xl bg-gray-900/80 shadow-2xl rounded-2xl border border-gray-700/50 group"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 rounded-2xl transition-opacity duration-300 group-hover:opacity-10`}
              />

              {/* Content */}
              <div className="relative space-y-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 text-white shadow-lg`}
                >
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>{" "}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * featureIndex }}
                      className="flex items-center text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 mr-3 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                {/* Service Button */}
                <motion.a
                  href="#contact"
                  className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-medium 
                    shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group w-full justify-center mt-4`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center">
                    Book {service.title}
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient
                      .replace("400", "600")
                      .replace(
                        "600",
                        "800"
                      )} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    initial={false}
                  />
                </motion.a>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:ring-2 group-hover:ring-blue-500/20" />
            </motion.div>
          ))}
        </motion.div>

        {/* Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="relative p-8 backdrop-blur-xl bg-gray-900/80 shadow-2xl rounded-2xl border border-gray-700/50 max-w-3xl mx-auto overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl" />
            <motion.div
              className="absolute -left-20 -top-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -right-20 -bottom-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Content */}
            <div className="relative space-y-4">
              <h2 className="text-3xl font-bold text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Book a free 30-minute consultation to discuss your project needs
                and how I can help bring your vision to life.
              </p>
              <motion.a
                href="#contact" // You can change this to your calendly link or contact form
                className="inline-flex items-center px-8 py-4 mt-6 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-medium 
                  shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Book Free Consultation
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
