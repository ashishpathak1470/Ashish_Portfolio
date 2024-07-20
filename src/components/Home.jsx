import React from "react";

function Home() {
  return (
    <div id="home" className="flex flex-col items-center justify-center text-cyan-400 min-h-screen px-4 md:px-0">
      <div className="text-center">
        <p className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-teal-500">
          Hi, I am Ashish Pathak
        </p>
      </div>
      <div className="mt-6 md:mt-10 text-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-teal-500">
          A Software Developer
        </p>
      </div>
      <div className="mt-6 md:mt-8 max-w-xl md:max-w-2xl lg:max-w-3xl text-center">
        <p className="text-sm md:text-base lg:text-lg">
          As a dedicated developer, my passion lies in creating seamless digital experiences. My fascination with technology began with the realization of how software can transform ideas into reality. Over the years, I have delved deep into both{" "}
          <span className="mx-1 text-lg md:text-xl font-bold text-cyan-200">software</span>{" "}
          and{" "}
          <span className="mx-1 text-lg md:text-xl font-bold text-cyan-200">web development</span>, always eager to learn and innovate. With a knack for{" "}
          <span className="mx-1 text-lg md:text-xl font-bold text-cyan-200">full-stack development</span>, I have crafted numerous quality projects, driven by a strong love for design and a commitment to excellence.
        </p>
      </div>
      <div className="mt-6 md:mt-8 text-center">
        <p className="text-lg md:text-xl lg:text-2xl font-bold mt-5">Let's Connect</p>
        <p className="text-sm md:text-base lg:text-lg">
          I'm always eager to connect, collaborate, and explore new opportunities.
        </p>
      </div>
      <div className="flex flex-row mt-4">
        <a href="https://www.linkedin.com/in/ashish-pathak-61500a233/" target="_blank" rel="noopener noreferrer">
          <img
            className="mx-2 w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 hover:scale-110 shadow-2xl"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/ashishpathak1470" target="_blank" rel="noopener noreferrer">
          <img
            className="mx-2 w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 hover:scale-110 shadow-2xl"
            src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
