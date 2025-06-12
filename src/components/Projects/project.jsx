import { useRef } from "react";
import { AllProjects } from "./AllProjects.jsx";
import { FeaturedProjects } from "./featuredProject";
export const Project = () => {
  const allProjectRef = useRef(null);
  const scrollToAllProjects = () => {
    allProjectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full min-h-screen px-4 py-20 lg:px-8">
      {/* Header Section */}
      {/* <FeaturedProjects
        onMoreProjectClick={scrollToAllProjects}
        isHomePage={false}
      /> */}

      {/* Search and Filter Section */}
      <AllProjects ref={allProjectRef} />
    </div>
  );
};
