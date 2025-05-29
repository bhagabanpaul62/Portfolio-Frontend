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

  return (
    <>
      <style>{styles}</style>
      <div className="w-full p-4 lg:p-12 mb-20">
        <div className="relative p-8 backdrop-blur-xl  shadow-2xl rounded-2xl border border-gray-700/50 overflow-hidden">
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
                            <span className="text-gray-200">{skill.name}</span>
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
    </>
  );
};
