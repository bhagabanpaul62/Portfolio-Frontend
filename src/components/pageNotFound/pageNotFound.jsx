import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* 404 Number */}
          <motion.h1
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text"
            animate={{
              scale: [1, 1.02, 1],
              rotateZ: [0, -1, 1, -1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.h1>

          {/* Error Message */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              The page you're looking for seems to have wandered off into the
              digital void.
            </p>
          </div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/">
              <motion.button
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-medium 
                  hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Back to Home</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
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
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};
