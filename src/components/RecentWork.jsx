import React from "react";
import { Link } from "react-router";
import swinguilogo from "../assets/UI.webp";

const recentWorkData = [
  {
    id: 1,
    title: "Swing UI Library",
    description:
      "Swing UI is a modern, developer-friendly Tailwind CSS component library crafted to help you build beautiful, responsive, and accessible UIs — effortlessly.",
    image: swinguilogo,
    link: "https://swingui.com",
  },
  {
    id: 2,
    title: "Amplificable",
    description:
      "Amplificable helps businesses integrate blockchain seamlessly and scale smarter through expert outsourcing services. From consulting to deployment, we provide end-to-end blockchain support across multiple industries",
    image: "https://www.amplificable.com/assets/Time-CfSiAhqv.svg",
    link: "https://www.amplificable.com/",
  },
  {
    id: 3,
    title: "CoinTok",
    description:
      "CoinTok is a TikTok-style crypto price tracker with infinite scrolling and real-time market updates, powered by the CoinGecko API for accurate data.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
    link: "https://cointok.vercel.app/",
  },
  {
    id: 4,
    title: "VirtualR",
    description:
      "VirtualR is a next-gen VR landing page with immersive visuals, sleek design, and interactive elements to showcase futuristic virtual reality experiences effortlessly.",
    image: "https://virtualr-pro.vercel.app/assets/logo-6TE5HpCe.png",
    link: "https://virtualr-pro.vercel.app/",
  },
];

const RecentWork = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-white">Recent Work</h2>
      <div className="flex flex-wrap gap-6 mt-4">
        {recentWorkData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 md:w-[48%] min-w-[250px] text-white"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
            <p className="mt-3 text-white/80 text-sm leading-snug">
              {project.description}
            </p>
          </a>
        ))}
      </div>
      <div className="mt-6">
        <Link
          to="/projects"
          className="inline-block px-6 py-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
        >
          Check other work →
        </Link>
      </div>
    </div>
  );
};

export default RecentWork;
