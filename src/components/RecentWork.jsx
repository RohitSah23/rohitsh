import React from "react";
import { Link } from "react-router";
import swinguilogo from "../assets/UI.webp";
import lagomchainLogo from "../assets/lagomchain.jpeg";
import slayLogo from "../assets/slay.png";


const recentWorkData = [
  {
    id: 1,
    title: "Swing UI",
    description:
      "A modern Tailwind CSS component library for building responsive, accessible interfaces with developer-friendly APIs and polished design defaults.",
    image: swinguilogo,
    link: "https://swingui.com",
  },
  {
    id: 2,
    title: "LagomChain",
    description:
      "An EVM-compatible Layer 1 blockchain for real-world asset tokenization, with white-label Web3 modules and enterprise-grade security for global businesses.",
    image: lagomchainLogo,
    link: "https://lagomchain.com/",
  },
  {
    id: 4,
    title: "SLAY Social",
    description:
      "A blockchain social platform where posts, likes, and comments earn token rewards—giving creators ownership of their content, influence, and community value.",
    image: slayLogo,
    link: "https://slayspace.io/",
  },
];

const RecentWork = () => {
  return (
    <div className="px-8 mt-6">
      <h2 className="text-xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {recentWorkData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full bg-white p-4 rounded-xl border border-neutral-300/50 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-12 h-12 shrink-0 rounded-full object-cover"
              />
              <h3 className="text-lg font-bold">{project.title}</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </a>
        ))}
      </div>
      <div className="mt-6">
        <Link
          to="/projects"
          className="text-blue-600 hover:underline font-semibold"
        >
          Check other work →
        </Link>
      </div>
    </div>
  );
};

export default RecentWork;
