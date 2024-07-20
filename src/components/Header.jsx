import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-row justify-between font-sans text-xl mt-3 px-4 text-cyan-400">
        <div className="flex items-center">
          <p
            className="font-mono font-bold text-4xl leading-none cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Ashish.
          </p>
        </div>
        <div className="hidden md:flex flex-row space-x-7 items-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="menu-item"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="menu-item"
          >
            Skills
          </button>
          <a
            href="https://drive.google.com/file/d/1v9qTb9Iebbm0hpjyXX7nS959cK7DCsmh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="menu-item">Resume</button>
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="menu-item"
          >
            Contact
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-violet-950 bg-opacity-95 text-cyan-400 z-50">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button
            className="py-2 text-2xl menu-item"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="py-2 text-2xl menu-item"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <a
            href="https://drive.google.com/file/d/1v9qTb9Iebbm0hpjyXX7nS959cK7DCsmh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="py-2 text-2xl menu-item">Resume</button>
          </a>
          <button
            className="py-2 text-2xl menu-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
      )}
    </>
  );
}

export default Header;
