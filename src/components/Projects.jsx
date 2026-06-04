import React from "react";
import virtual from "../assets/virtual.png";
import swinguilogo from "../assets/UI.webp";
import arbanciaLogo from "../assets/arbancia.png";
import bitnauticLogo from "../assets/bitnautic.jpeg";
import lagomchainLogo from "../assets/lagomchain.jpeg";
import nirvairLogo from "../assets/nirvair.png";
import slayLogo from "../assets/slay.png";

const liveProducts = [
  {
    id: 1,
    name: "Swing UI",
    image: swinguilogo,
    live: "https://swingui.com",
    repo: "https://github.com/RohitSah23/SwingUI",
  },
  {
    id: 2,
    name: "Arbancia",
    image: arbanciaLogo,
    live: "https://arbancia.com",
    repo: "",
  },
];

const landingPages = [
  {
    id: 1,
    name: "VirtualR Landing Page",
    live: "https://virtualr-pro.vercel.app/",
    repo: "https://github.com/RohitSah23/virtualR",
    image: virtual,
  },
  {
    id: 2,
    name: "Amplificable",
    live: "https://www.amplificable.com/",
    repo: "",
    image: "https://www.amplificable.com/assets/Time-CfSiAhqv.svg",
  },
  {
    id: 3,
    name: "Nirvair Ethereal",
    live: "https://nirvairethereal.vercel.app/",
    repo: "",
    image: nirvairLogo,
  },
];

const otherProjects = [
  {
    id: 1,
    name: "LagomChain",
    live: "https://lagomchain.com/",
    repo: "",
    image: lagomchainLogo,
  },
  {
    id: 2,
    name: "BitNautic",
    live: "https://bitnautic.com/",
    repo: "",
    image: bitnauticLogo,
  },
  {
    id: 3,
    name: "SLAY Social",
    live: "https://slayspace.io/",
    repo: "",
    image: slayLogo,
  },
];

const Projects = () => {
  return (
    <div className="px-8">
      <h2 className="text-xl font-semibold ">Projects</h2>

      {/* Live Products Section */}
      <h3 className="text-lg font-bold text-gray-700 mt-4">Live Products</h3>
      <div className="flex flex-wrap justify-between gap-4 mt-2">
        {liveProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md transition hover:bg-gray-100 hover:shadow-lg w-full sm:w-[48%] md:w-[48%] lg:w-[48%]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg w-full h-40 object-cover mb-2"
            />
            <h4 className="text-lg font-semibold">{product.name}</h4>
            <div className="mt-2 flex space-x-4">
              <a
                href={product.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl sm:text-sm px-3 py-1 transition bg-black text-white hover:bg-white hover:border-black hover:text-black"
              >
                Live Demo
              </a>
              {product.repo && (
                <a
                  href={product.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl sm:text-sm px-3 py-1 transition border border-black bg-white text-black hover:bg-black hover:text-white"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects */}
      <h3 className="text-lg font-bold text-gray-700 mt-6">Web3 Projects</h3>
      <div className="flex flex-wrap justify-between gap-4 mt-2">
        {otherProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-lg shadow-md transition hover:bg-gray-100 hover:shadow-lg w-full sm:w-[48%] md:w-[48%] lg:w-[48%]"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg w-full h-40 object-cover mb-2"
            />
            <h4 className="text-lg font-semibold">{project.name}</h4>
            <div className="mt-2 flex space-x-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl sm:text-sm px-3 py-1 transition bg-black text-white hover:bg-white hover:border-black hover:text-black"
              >
                Live Demo
              </a>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl sm:text-sm px-3 py-1 transition border border-black bg-white text-black hover:bg-black hover:text-white"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Landing Pages */}
      <h3 className="text-lg font-bold text-gray-700 mt-6">Landing Pages</h3>
      <div className="flex flex-wrap justify-between gap-4 mt-2">
        {landingPages.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-lg shadow-md transition hover:bg-gray-100 hover:shadow-lg w-full sm:w-[48%] md:w-[48%] lg:w-[48%]"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg w-full h-40 object-cover mb-2"
            />
            <h4 className="text-lg font-semibold">{project.name}</h4>
            <div className="mt-2 flex space-x-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl sm:text-sm px-3 py-1 transition bg-black text-white hover:bg-white hover:border-black hover:text-black"
              >
                Live Demo
              </a>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl sm:text-sm px-3 py-1 transition border border-black bg-white text-black hover:bg-black hover:text-white"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
