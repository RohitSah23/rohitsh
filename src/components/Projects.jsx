import React from "react";
import tea from "../assets/tea.png";
import zerodha from "../assets/zerodha.png";
import npm from "../assets/npm.png";
import cointok from "../assets/cointok.png";
import virtual from "../assets/virtual.png";
import nftg from "../assets/nftg.png";
import swinguilogo from "../assets/UI.webp";

const liveProducts = [
  {
    id: 1,
    name: "Swing UI",
    image: swinguilogo,
    live: "https://swingui.com",
    repo: "https://github.com/RohitSah23/SwingUI",
  },
];

const landingPages = [
  {
    id: 3,
    name: "NPM Landing Page",
    live: "https://npm-og.vercel.app/",
    repo: "https://github.com/RohitSah23/npm-landing-page",
    image: npm,
  },
  {
    id: 4,
    name: "VirtualR Landing Page",
    live: "https://virtualr-pro.vercel.app/",
    repo: "https://github.com/RohitSah23/virtualR",
    image: virtual,
  },
];

const otherProjects = [
  {
    id: 6,
    name: "NFTGalaxy Marketplace",
    live: "https://nftgalaxy.vercel.app/",
    repo: "https://github.com/RohitSah23/nftgalaxy",
    image: nftg,
  },
  {
    id: 5,
    name: "Play teadice",
    live: "https://teadice.vercel.app/",
    repo: "https://github.com/RohitSah23/teadice",
    image:
      "https://pbs.twimg.com/profile_images/1708838507957882880/SsQYN3T6_400x400.jpg",
  },
];

const ProjectCard = ({ image, name, live, repo }) => (
  <div className="backdrop-blur-xl bg-white/10 border border-white/20 text-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-[48%]">
    <div className="overflow-hidden rounded-lg bg-white p-1">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
    </div>
    <h4 className="text-lg font-semibold mt-2">{name}</h4>
    <div className="mt-3 flex space-x-3">
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl text-sm px-3 py-1 bg-white/10 border border-white/20 hover:backdrop-blur-sm hover:bg-white/20 transition"
      >
        Live Demo
      </a>
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl text-sm px-3 py-1 bg-white/10 border border-white/20 hover:backdrop-blur-sm hover:bg-white/20 transition"
      >
        GitHub Repo
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="py-8 ">
      <h2 className="text-2xl font-semibold text-white">Projects</h2>

      {/* Live Products Section */}
      <h3 className="text-lg font-bold text-white/80 mt-6">Live Products</h3>
      <div className="flex flex-wrap gap-6 mt-4">
        {liveProducts.map((product) => (
          <ProjectCard key={product.id} {...product} />
        ))}
      </div>

      {/* Web3 Projects Section */}
      <h3 className="text-lg font-bold text-white/80 mt-10">Web3 Projects</h3>
      <div className="flex flex-wrap gap-6 mt-4">
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* Landing Pages Section */}
      <h3 className="text-lg font-bold text-white/80 mt-10">Landing Pages</h3>
      <div className="flex flex-wrap gap-6 mt-4">
        {landingPages.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
