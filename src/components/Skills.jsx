import React from "react";

const skills = [
  {
    name: "C/C++",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png",
  },
  {
    name: "Javascript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png",
  },
  {
    name: "HTML",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "Python",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png",
  },
  {
    name: "CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    name: "React JS",
    icon: "https://static-00.iconduck.com/assets.00/react-icon-1024x1024-wwxwlds8.png",
  },
  {
    name: "Node JS",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJbZnC5drwG8xBczuFg005-nD9KfJoN8idw&s",
  },
  {
    name: "Tailwind CSS",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKPw4CK4jcH7udsFHZdiB3iIOuI3fUCsxUZosXy4Y1yd25NA-dzCBPrSDIhg1BwObl3w&usqp=CAU",
  },
  {
    name: "Express JS",
    icon: "https://www.manektech.com/storage/developer/1646733543.webp",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
  },
  {
    name: "React Native",
    icon: "https://static-00.iconduck.com/assets.00/react-icon-1024x1024-wwxwlds8.png",
  },
  {
    name: "Redis",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-redis-3521673-2945117.png",
  },
];

function Skills() {
  return (
    <div id="skills" className="p-4 mt-24">
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-cyan-500">
        Skills
      </p>
      <hr className="w-3/4 sm:w-1/2 mx-auto border-t-2 border-cyan-500 mb-8" />
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {skills.map((skill, index) => (
          <div key={index} className="relative group">
            <div className="w-full py-4 px-6 bg-indigo-900 text-cyan-400 rounded-lg shadow-2xl flex justify-center items-center relative transform transition-transform duration-300 hover:scale-110">
              {skill.name}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={`Icon of ${skill.name}`}
                  className="w-16 h-16 md:w-24 md:h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
