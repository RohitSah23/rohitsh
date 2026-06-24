import React from "react";
import ethersLogo from "../assets/ethers.svg";

const skillCategories = [
  {
    category: "Core",
    skills: [
      { id: 1,  name: "JavaScript",   image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      { id: 2,  name: "TypeScript",   image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
      { id: 3,  name: "React",        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { id: 4,  name: "Next.js",      image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
      { id: 19, name: "Redux Toolkit",image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" },
      { id: 11, name: "shadcn/ui",    image: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { id: 5,  name: "Tailwind CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { id: 16, name: "HTML & CSS",   image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
      { id: 24, name: "CSS3",         image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
      { id: 17, name: "Sass CSS",     image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" },
    ],
  },
  {
    category: "Backend & API",
    skills: [
      { id: 9,  name: "Node.js",      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
      { id: 21, name: "NestJS",       image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" },
      { id: 10, name: "Express.js",   image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
      { id: 23, name: "JWT Auth",     image: "https://jwt.io/img/pic_logo.svg" },
      { id: 20, name: "MongoDB",      image: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
      { id: 13, name: "Postman",      image: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { id: 25, name: "GitHub",       image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
      { id: 12, name: "Git",          image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
    ],
  },
  {
    category: "Blockchain & Web3 (Secondary)",
    skills: [
      { id: 6,  name: "Solidity",     image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg" },
      { id: 7,  name: "Ethers.js",    image: ethersLogo },
      { id: 8,  name: "Hardhat",      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/hardhat/hardhat-original.svg" },
      { id: 15, name: "Ethereum",     image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" },
    ],
  },
];

const SkillIcon = ({ skill }) => (
  <div className="relative group flex flex-col items-center rounded-2xl p-1 bg-white shadow hover:scale-110 hover:shadow-lg transition">
    <img
      src={skill.image}
      alt={skill.name}
      className="w-12 h-12 object-contain rounded-2xl"
    />
    {/* Tooltip */}
    <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[11px] font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
      {skill.name}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">skills</h2>
      <div className="flex gap-2 flex-wrap">
        {skillCategories.map(({ category, skills }) => (
          skills.map((skill) => (
            <SkillIcon key={skill.id} skill={skill} />
          ))
        ))}
      </div>
    </div>
  );
};

export default Skills;
