import { useEffect, useRef, useState } from "react";
import localImage from "../../assets/image.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoReorderFourSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

import { RxCross1 } from "react-icons/rx";

const links = [
  {
  name:"Home",
  path :"/",
  },
  {
    name:"About",
    path:"/about",
  },
  {
    name:"Project",
    path:"/project"
  },
  {
    name:"Services",
    path:"/services"
  },
  {
    name:"Contact",
    path:"/contact"
  },


]

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isMobile, setMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMenu(false); // auto-close menu on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handelMenu = () => {
    if (isMobile) {
      setMenu((prev) => !prev);
    }
  };

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
  const menuClasses = menu
    ? `flex flex-col items-center justify-center fixed top-16 left-0 w-full py-6 space-y-4
     transition-all duration-500 ease-in-out opacity-100 translate-y-0
     ${!scrolled ? "backdrop-blur-[8px]" : "backdrop-blur-none bg-transparent"}`
    : `hidden opacity-0 -translate-y-4 backdrop-blur-none bg-transparent
     transition-[backdrop] duration-500 ease-in-out`;
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
        }
        ${
          menu
            ? "h-[70vh] transition-[height] duration-100 ease-in-out"
            : "h-16 transition-[height] duration-200 ease-in-out"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="flex-shrink-0 flex items-center gap-3"
              onClick={handelMenu}
            >
              <img
                className="h-10 w-10 rounded-full"
                src={localImage}
                alt="Logo"
              />
              <AnimatePresence mode="wait">
                {!isMobile ? (
                  <motion.h1
                    key="title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-bold text-white"
                  >
                    Bhagaban Paul
                  </motion.h1>
                ) : !menu ? (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoReorderFourSharp className="text-3xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RxCross1 className="text-3xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Mobile menu, show/hide based on menu state */}{" "}
            <div
              className={`${menuClasses} lg:flex lg:flex-row lg:static lg:w-auto lg:bg-transparent lg:py-0 lg:space-y-0 lg:translate-y-0 lg:opacity-100 text-white lg:gap-4 transition-all duration-500 ease-in-out`}
            >
              {links.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:text-[#0015FF] px-3 py-2 rounded-md text-md lg:text-lg font-medium transition-colors duration-300 ${
                      isActive ? "text-[#0015FF]" : "text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <Link
                to="/bookACall"
                className="text-white bg-[#0015FF] hover:bg-blue-700 font-medium rounded-lg text-sm lg:text-base px-3 lg:px-5 py-2 lg:py-2.5 text-center transition-colors duration-300 whitespace-nowrap"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
