import { motion } from "framer-motion";

const styles = `
  @keyframes progressFill {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }

  .progress-bar-fill {
    transform-origin: left;
    animation: progressFill 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
`;

export const TechnicalExpertise = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", progress: 90 },
        { name: "Python", progress: 85 },
        { name: "JavaScript", progress: 95 },
        { name: "C & C++", progress: 75 },
        { name: "TypeScript", progress: 85 },
      ],
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML5/CSS3", progress: 95 },
        { name: "React.js", progress: 90 },
        { name: "Node.js", progress: 85 },
        { name: "Express.js", progress: 85 },
        { name: "Next.js", progress: 80 },
        { name: "MongoDB", progress: 85 },
        { name: "Tailwind CSS", progress: 90 },
      ],
      color: "from-indigo-400 to-indigo-600",
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "LSTM", progress: 75 },
        { name: "ResNet", progress: 70 },
        { name: "CNN", progress: 80 },
        { name: "TensorFlow", progress: 75 },
        { name: "PyTorch", progress: 70 },
      ],
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", progress: 90 },
        { name: "AWS", progress: 80 },
        { name: "Docker", progress: 85 },
        { name: "Computer Vision", progress: 75 },
        { name: "REST APIs", progress: 90 },
      ],
      color: "from-cyan-400 to-cyan-600",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      <style>{styles}</style>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full p-4 lg:p-12 mb-20"
      >
        <div
          className="relative p-8 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden
                    "
        >
          {/* Ambient Light Effect */}
        
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative space-y-12"
          >
            {/* Header Section */}
            <motion.div variants={item} className="space-y-6 max-w-2xl">
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                    Technical Expertise
                  </span>
                </h1>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full origin-left"
                ></motion.div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Full-stack developer with expertise in modern web technologies
                and machine learning. Passionate about building scalable
                applications and exploring cutting-edge technologies.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div variants={container} className="grid gap-12">
              {skillCategories.map((category, index) => (
                <motion.div key={index} variants={item} className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={item}
                        whileHover={{
                          scale: 1.02,
                          y: -2,
                          transition: { type: "spring", stiffness: 400 },
                        }}
                        className="relative px-4 py-3 bg-gray-800/40 backdrop-blur-sm rounded-lg
                                 border border-white/5 transition-all duration-300
                                 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5
                                 group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        <div className="relative flex flex-col space-y-2 w-full">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-200 font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-400">
                              {skill.progress}%
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-gray-700/30 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full progress-bar-fill`}
                              style={{
                                width: `${skill.progress}%`,
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
