import React from "react";
import { Link } from "react-router";
import swinguilogo from "../assets/UI.webp";
import lagomchainLogo from "../assets/lagomchain.jpeg";
import slayLogo from "../assets/slay.png";
import arbanciaLogo from "../assets/arbancia.png";
import nirvairLogo from "../assets/nirvair.png";

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
    id: 3,
    title: "Amplificable",
    description:
      "Blockchain consulting and outsourcing from strategy to deployment—helping teams adopt Web3, scale faster, and ship production-ready solutions across industries.",
    image: "https://www.amplificable.com/assets/Time-CfSiAhqv.svg",
    link: "https://www.amplificable.com/",
  },
  {
    id: 4,
    title: "SLAY Social",
    description:
      "A blockchain social platform where posts, likes, and comments earn token rewards—giving creators ownership of their content, influence, and community value.",
    image: slayLogo,
    link: "https://slayspace.io/",
  },
  {
    id: 5,
    title: "Arbancia",
    description:
      "A premium lifestyle brand offering curated fragrance and jewelry—defined by elegance, timeless design, and a secure luxury shopping experience for every customer.",
    image: arbanciaLogo,
    link: "https://arbancia.com",
  },
  {
    id: 6,
    title: "Nirvair Ethereal",
    description:
      "Faith-driven streetwear and luxury accessories—premium oversized apparel, jewellery, and watches with custom printing and pan-India delivery nationwide.",
    image: nirvairLogo,
    link: "https://nirvairethereal.vercel.app/",
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
            <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3 min-h-[4.5rem]">
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
