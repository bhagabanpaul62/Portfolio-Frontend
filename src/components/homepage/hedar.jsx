import { useEffect, useRef, useState } from "react";
import localImage from "../../assets/image.jpg";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // console.log(offset);
      if (offset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "transform-none opacity-100 flex justify-center items-center"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div
        className={`w-full transition-all duration-500 ease-in-out transform ${
          scrolled
            ? "backdrop-blur-md bg-gray-700/70 shadow-lg mx-auto max-w-[93vw] rounded-2xl m-2 scale-100"
            : "scale-105"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img
                className="h-10 w-10 rounded-full"
                src={localImage}
                alt="Logo"
              />
              <h1 className="text-lg font-bold text-white">Bhagaban Paul</h1>
            </div>
            <div className="hidden sm:flex text-white">
              {["Home", "About", "Project", "Services", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-[#0015FF] px-3 py-2 rounded-md text-lg font-medium"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            <div className="flex justify-center items-center">
              <button className="text-white bg-[#0015FF] hover:bg-blue-700 font-medium rounded-lg text-lg px-5 py-2.5 text-center">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
