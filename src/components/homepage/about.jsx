import localImage from "../../assets/Untitled-2.png";

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

export const About = () => {
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
      <div className="w-full min-h-screen flex flex-col gap-8 px-4 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row  gap-8 mt-40">
          {/* Left Section - About Me */}
          <div className="w-full lg:w-1/2 p-4 lg:p-12">
            <div className="relative p-8 backdrop-blur-xl bg-gray-900/80 shadow-2xl rounded-2xl border border-gray-700/50 overflow-hidden h-full">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>

              <div className="relative space-y-8">
                {/* Header Section */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                      <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
                        About Me
                      </span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
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
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Personal Profile */}
          <div className="w-full lg:w-1/2 p-4 lg:p-12">
            <div className="p-8 backdrop-blur-xl bg-gray-900/80 shadow-2xl rounded-2xl border border-gray-700/50">
              {/* Profile Image */}
              <div className="relative w-full flex justify-center mb-10">
                <div className="relative group">
                  <div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
                rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  ></div>
                  <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                    <img
                      src={localImage}
                      alt="Profile"
                      className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover 
                  transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="text-center space-y-4 mb-10">
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Bhagaban Paul
                </h1>
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-300">
                  Full Stack Developer
                </h2>
                <p className="text-gray-400 text-lg">
                  Building the future through code and innovation
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <button className="group relative px-6 py-3 rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300
                group-hover:scale-105"
                  ></div>
                  <span className="relative text-white font-medium text-lg">
                    Download Resume
                  </span>
                </button>
                <button className="group relative px-6 py-3 rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-0 border-2 border-blue-500 transition-all duration-300
                group-hover:bg-blue-500/20"
                  ></div>
                  <span className="relative text-white font-medium text-lg">
                    Contact Me
                  </span>
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex justify-center gap-6">
                {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <span>{platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Technical Expertise */}
        <div className="w-full p-4 lg:p-12 mb-20">
          <div className="relative p-8 backdrop-blur-xl shadow-2xl rounded-2xl border-gray-700/50 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>

            <div className="relative space-y-12">
              {/* Header Section */}
              <div className="space-y-6 max-w-2xl">
                <div className="space-y-2">
                  <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
                      Technical Expertise
                    </span>
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Full-stack developer with expertise in modern web technologies
                  and machine learning. Passionate about building scalable
                  applications and exploring cutting-edge technologies.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid gap-12">
                {skillCategories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="relative px-4 py-3 bg-gray-800/40 backdrop-blur-sm rounded-lg
                          border border-gray-700/50 transition-all duration-300
                          hover:border-blue-500/50 hover:scale-[1.02] hover:shadow-lg"
                        >
                          <div className="flex flex-col space-y-2 w-full">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-200">
                                {skill.name}
                              </span>
                              <span className="text-sm text-gray-400">
                                {skill.progress}%
                              </span>
                            </div>
                            <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-500 ease-out progress-bar-fill`}
                                style={{
                                  "--progress": `${skill.progress}%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
