import { motion } from "framer-motion";
import localImage from "../../assets/Untitled-2.png";
import { TechnicalExpertise } from "./technical-expertise";

const styles = `
  @keyframes progressFill {
    from { width: 0; }
    to { width: var(--progress); }
  }

  .progress-bar-fill {
    animation: progressFill 1.5s ease-out forwards;
    animation-delay: 0.5s;
    width: 0;
  }
`;

export const About = ({ ref }) => {
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
  return (
    <>
      <style>{styles}</style>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full min-h-screen flex flex-col gap-8 px-4 lg:px-8"
      >
        <div className="flex flex-col-reverse lg:flex-row gap-8 mt-10">
          {/* Left Section - About Me */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 p-4 lg:p-12"
          >
            <div className="relative p-8 backdrop-blur-xl bg-gray-900/80 shadow-2xl rounded-2xl border border-gray-700/50 overflow-hidden h-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"
              ></motion.div>

              <div className="relative space-y-8">
                {/* Header Section */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-4xl lg:text-5xl font-bold tracking-tight"
                    >
                      <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
                        About Me
                      </span>
                    </motion.h1>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left"
                    ></motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="space-y-4"
                  >
                    <p className="text-gray-300 text-lg leading-relaxed">
                      I am a passionate Full Stack Developer with a deep love
                      for creating innovative digital solutions. My journey in
                      technology has been driven by curiosity and a constant
                      desire to learn and grow.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      With expertise in both front-end and back-end development,
                      I specialize in building responsive, user-friendly
                      applications that solve real-world problems. My experience
                      spans from crafting elegant user interfaces to designing
                      robust server architectures.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      I thrive in collaborative environments and am always
                      excited to take on new challenges that push the boundaries
                      of what's possible in web development.
                    </p>
                  </motion.div>
                </div>

                {/* Key Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="p-4 bg-gray-800/40 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">
                      Experience
                    </h3>
                    <p className="text-gray-300">
                      3+ years of professional development experience in web
                      technologies
                    </p>
                  </div>
                  <div className="p-4 bg-gray-800/40 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">
                      Education
                    </h3>
                    <p className="text-gray-300">
                      Bachelor's in Computer Science with focus on Software
                      Engineering
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Personal Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 p-4 lg:p-12"
          >
            <div className="p-8 backdrop-blur-xl bg-gray-900/80 shadow-2xl rounded-2xl border border-gray-700/50">
              {/* Profile Image */}
              <div className="relative w-full flex justify-center mb-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative group"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 0.8, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
                    rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  ></motion.div>
                  <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={localImage}
                      alt="Profile"
                      className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Profile Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center space-y-4 mb-10"
              >
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Bhagaban Paul
                </h1>
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-300">
                  Full Stack Developer
                </h2>
                <p className="text-gray-400 text-lg">
                  Building the future through code and innovation
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-6 py-3 rounded-lg overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300
                    group-hover:scale-105"
                  ></div>
                  <span className="relative text-white font-medium text-lg">
                    Download Resume
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-6 py-3 rounded-lg overflow-hidden"
                >
                  <div
                    className="absolute inset-0 border-2 border-blue-500 transition-all duration-300
                    group-hover:bg-blue-500/20"
                  ></div>
                  <span className="relative text-white font-medium text-lg">
                    Contact Me
                  </span>
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-8 flex justify-center gap-6"
              >
                {["GitHub", "LinkedIn", "Twitter"].map((platform, index) => (
                  <motion.a
                    key={platform}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <span>{platform}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Technical Expertise Section */}
        
      </motion.div>
    </>
  );
};
