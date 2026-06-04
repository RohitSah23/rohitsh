import React from "react";
import { Link } from "react-router";
import swinguilogo from "../assets/UI.webp";
import bitnauticLogo from "../assets/bitnautic.jpeg";
import lagomchainLogo from "../assets/lagomchain.jpeg";
import slayLogo from "../assets/slay.png";

const recentWorkData = [
  {
    id: 1,
    title: "Swing UI Library",
    description:
      "Swing UI is a modern, developer-friendly Tailwind CSS component library crafted to help you build beautiful, responsive, and accessible UIs — effortlessly.",
    image:
      swinguilogo,
    link: "https://swingui.com",
  },
  {
    id: 2,
    title: "Amplificable",
    description:
      "Amplificable helps businesses integrate blockchain seamlessly and scale smarter through expert outsourcing services. From consulting to deployment, we provide end-to-end blockchain support across multiple industries",
    image:
      "https://www.amplificable.com/assets/Time-CfSiAhqv.svg",
    link: "https://www.amplificable.com/",
  },

  {
    id: 3,
    title: "LagomChain",
    description:
      "LagomChain is an EVM-compatible Layer 1 blockchain for real-world asset tokenization, helping Web2 enterprises adopt Web3 through white-label modules, enterprise-grade security, and end-to-end integration support.",
    image: lagomchainLogo,
    link: "https://lagomchain.com/",
  },
  {
    id: 4,
    title: "SLAY Social",
    description:
      "SLAY (Singh's Loyalty & Asset Yield) is a blockchain-based social platform where every post, like, and comment earns measurable token value—returning ownership and rewards to creators instead of opaque algorithms.",
    image: slayLogo,
    link: "https://slayspace.io/",
  },
  {
    id: 5,
    title: "BitNautic",
    description:
      "BitNautic is a supply chain platform enabling producers, retailers, shippers, and carriers to manage global logistics securely—via BTNT Enterprise, BTNT Transport, and BTNT Docs, with sustainability, traceability, and transparency at every step.",
    image: bitnauticLogo,
    link: "https://bitnautic.com/",
  },
  {
    id: 4,
    title: "VirtualR",
    description:
      "VirtualR is a next-gen VR landing page with immersive visuals, sleek design, and interactive elements to showcase futuristic virtual reality experiences effortlessly.",
    image: "https://virtualr-pro.vercel.app/assets/logo-6TE5HpCe.png",
    link: "https://virtualr-pro.vercel.app/",
  },

  // {
  //   id: 5,
  //   title: "Tea Assam RPC",
  //   description:
  //     "Tea Assam RPC provides a seamless one-click RPC setup for developers interacting with the Tea Protocol’s Assam Test Network blockchain infrastructure efficiently.",
  //   image: "https://avatars.githubusercontent.com/u/94703010?s=200&v=4",
  //   link: "https://assam-rpc.vercel.app/",
  // },
];

const RecentWork = () => {
  return (
    <div className="px-8 mt-6">
      <h2 className="text-xl font-semibold">Recent Work</h2>
      <div className="flex flex-wrap gap-6 mt-4">
        {recentWorkData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-xl border border-neutral-300/50 hover:shadow-lg transition md:w-[48%] min-w-[250px]"
          >
            <div className="flex items-center gap-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="text-lg font-bold">{project.title}</h3>
            </div>
            <p className="mt-2 text-gray-600">{project.description}</p>
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
