import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const ComingSoon = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set launch date to 2 weeks from now
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 70);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  return (
    <div className="relative min-h-screen w-full overflow-hidden ">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 " />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex min-h-screen items-center justify-center px-4"
      >
        <div className="text-center">
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="mb-4 sm:mb-6 md:mb-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl text-base sm:text-lg text-gray-400 px-4"
          >
            We're working hard to bring you something amazing. Stay tuned for
            the launch of our new features and experiences.
          </motion.p>

          {/* Countdown */}
          <motion.div
            variants={itemVariants}
            className="mb-8 sm:mb-10 md:mb-12 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 sm:grid-cols-4 px-4 sm:px-6 md:px-8"
          >
            {Object.entries(countdown).map(([key, value]) => (
              <div
                key={key}
                className="rounded-xl bg-gray-800/50 p-3 sm:p-4 md:p-6 backdrop-blur-sm transform hover:scale-105 transition-transform duration-200"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400 capitalize">
                  {key}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-[280px] sm:max-w-md px-4"
          >
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="w-full rounded-full bg-gray-800/50 px-4 sm:px-6 py-2.5 sm:py-3 pr-24 sm:pr-32 text-sm sm:text-base text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-lg">
                Notify Me
              </button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-8 flex justify-center space-x-4 sm:space-x-6 md:space-x-8"
          >
            {["Twitter", "GitHub", "LinkedIn"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-sm sm:text-base text-gray-400 transition-all hover:text-blue-400 hover:scale-105 duration-200"
              >
                {platform}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
