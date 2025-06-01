import { useRef } from "react";
import { About } from "../aboutPage/about";

import { LandingHero } from "./landing-hero";
import { FeaturedProjects } from "../Projects/featuredProject";
export const Home = () => {
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative z-10">
      <main className="relative">
        <LandingHero onAboutClick={scrollToAbout} />
        <About ref={aboutRef} />
        <FeaturedProjects isHomePage={true}/>
      </main>
    </div>
  );
};
