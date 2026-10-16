import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[#c2dfcb] shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold text-green-700">
            Parth Jadhav
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-medium text-gray-700">

            <li>
              <a
                href="#home"
                className="hover:text-green-700 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-green-700 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-green-700 transition"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-green-700 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className="hover:text-green-700 transition"
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#certifications"
                className="hover:text-green-700 transition"
              >
                Certifications
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-green-700 transition"
              >
                Contact
              </a>
            </li>

          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl text-green-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#c2dfcb] shadow-lg">

            <ul className="flex flex-col items-center gap-4 py-6 text-gray-700">

              <li>
                <a href="#home" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </li>

              <li>
                <a href="#about" onClick={() => setIsOpen(false)}>
                  About
                </a>
              </li>

              <li>
                <a href="#skills" onClick={() => setIsOpen(false)}>
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" onClick={() => setIsOpen(false)}>
                  Projects
                </a>
              </li>

              <li>
                <a href="#experience" onClick={() => setIsOpen(false)}>
                  Experience
                </a>
              </li>

              <li>
                <a href="#education" onClick={() => setIsOpen(false)}>
                  Education
                </a>
              </li>

              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </li>

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;