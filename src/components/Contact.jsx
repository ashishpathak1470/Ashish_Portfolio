import React, { useState, useEffect } from "react";

function Contact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="contact" className="p-4 mt-24">
      <div>
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 text-cyan-500">
          Contact
        </p>
        <hr className="w-3/4 sm:w-1/2 mx-auto border-t-2 border-cyan-500 mb-4" />
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() =>
            (window.location.href = "mailto:ashishpathak1470@gmail.com")
          }
          className="bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-110 hover:bg-indigo-900"
        >
          Send Email
        </button>
      </div>
      <div>
        <p className="text-center text-cyan-500 mt-2 text-base sm:text-lg">
          Feel free to reach out!
        </p>
      </div>
      <div className="text-cyan-500 mt-24 text-center">
        <p className="font-bold text-base sm:text-lg">Made by Ashish</p>
      </div>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-cyan-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-cyan-600"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Contact;
