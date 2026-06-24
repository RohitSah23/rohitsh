import React from "react";
import ant from "../assets/antier.png";

const certificationsData = [
  {
    id: 1,
    title: "Certified Blockchain Associate",
    issuer: "Antier School of Blocktech (ASB)",
    date: "Jul 2023 – Dec 2023",
    location: "Mohali, India",
    points: [
      "Completed intensive blockchain development training covering Solidity, Smart Contracts, Hardhat, IPFS, ERC20, ERC721, ERC1155, and DeFi fundamentals.",
      "Developed decentralized application prototypes and smart contract implementations on Ethereum.",
    ],
    skills: ["Solidity", "Smart Contracts", "Hardhat", "IPFS", "ERC20", "ERC721", "DeFi", "Ethereum"],
    image: ant,
  },
];

const Certifications = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-8">
        Certifications
      </h2>

      <div className="space-y-12">
        {certificationsData.map((cert) => (
          <div key={cert.id} className="group relative transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <img
                    src={cert.image}
                    alt={cert.issuer}
                    className="relative w-14 h-14 rounded-xl object-cover bg-white border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {cert.title}
                    </h3>
                    <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded shadow-sm bg-gray-50 dark:bg-gray-800/50">
                      Certificate
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{cert.issuer}</p>
                </div>
              </div>

              {/* Date & Location */}
              <div className="mt-3 md:mt-0 md:text-right">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-tight">
                  {cert.date}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{cert.location}</p>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="mt-4 space-y-2.5 ml-1 inline-block">
              {cert.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 group/item">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0 group-hover/item:bg-blue-500 transition-colors"></span>
                  <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>

            {/* Skill Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
