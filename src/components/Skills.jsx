import React from "react";

const skillsData = [
  {
    id: 1,
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 2,
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 3,
    name: "Solidity",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    id: 5,
    name: "GitHub",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    id: 6,
    name: "Git & GitHub",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
  },
  {
    id: 7,
    name: "Node.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    id: 8,
    name: "Express.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    id: 9,
    name: "Ethers.js",
    image:
      "https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png",
  },
  {
    id: 10,
    name: "Hardhat",
    image:
      "https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png",
  },
  {
    id: 11,
    name: "Ethereum",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg",
  },
  {
    id: 12,
    name: "Sass CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  },
  {
    id: 13,
    name: "CSS 3",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },
  {
    id: 14,
    name: "HTML & CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
];

const Skills = () => {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="flex gap-4 flex-wrap">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="rounded-2xl p-2 bg-white/20 backdrop-blur-md border border-white/30 shadow-md transition hover:scale-105"
          >
            <div className="bg-white p-2 rounded-xl flex items-center justify-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-8 h-8 object-contain rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
