import React from "react";
import ant from "../assets/antier.png";
import alp from "../assets/alephium.png";

const experienceData = [
  {
    id: 5,
    company: "Ariabatix Labs",
    role: "Full Stack Blockchain Developer",
    date: "Sept 2025 - Present",
    location: "Remote, UK",
    type: "Full Time",
    points: [
      "Leading development of core blockchain infrastructure and decentralized applications.",
      "Architecting scalable full-stack solutions with a focus on performance and security.",
      "Collaborating with global teams to push boundaries in Web3 and AI integration."
    ],
    skills: ["Full Stack", "Blockchain", "Next.js", "Ethereum"],
    image: "https://via.placeholder.com/150", 
    hideDetails: true
  },
  {
    id: 4,
    company: "Lagom Chain",
    role: "Full Stack Blockchain Developer",
    date: "March 2025 - August 2025",
    location: "Remote, UK",
    type: "Full Time",
    points: [
      "Designed and implemented high-throughput blockchain layers for optimized transactions.",
      "Built end-to-end dApps integrating complex smart contract logic with modern frontends.",
      "Ensured system reliability through rigorous testing and security audits."
    ],
    skills: ["Blockchain Lore", "Solidity", "React", "Node.js"],
    image: "https://www.lagomchain.com/assets/FavLogo-uw-Nyzdm.png",
  },
  {
    id: 1,
    company: "Alephium India",
    role: "DevRel India",
    date: "Aug 2024 - Sept 2024",
    location: "India - Remote",
    type: "Full Time",
    points: [
      "Driving developer relations, fostering a strong blockchain community.",
      "Creating educational content to enhance Alephium’s adoption across India.",
      "Coordinating with local developers to build on Alephium ecosystem."
    ],
    skills: ["Blockchain", "Web3", "Technical Writing", "Community Building"],
    image: alp,
  },
  {
    id: 2,
    company: "Antier Solutions",
    role: "Software Developer & Trainer Intern",
    date: "Jan 2024 - May 2024",
    location: "Mohali, India",
    type: "Internship",
    points: [
      "Developed blockchain-based solutions and integrated Web3 functionalities.",
      "Mentored trainees and conducted workshops to upskill developers in blockchain.",
      "Worked on real-world projects involving smart contracts and DApps."
    ],
    skills: ["Solidity", "React", "Node.js", "Ethereum"],
    image: ant,
  },
  {
    id: 3,
    company: "Antier Solutions",
    role: "Blockchain Developer Trainee",
    date: "June 2023 - Dec 2023",
    location: "Mohali, India",
    type: "Trainee",
    points: [
      "Gained hands-on experience in smart contract development and DeFi protocols.",
      "Contributed to NFT marketplace development and internal blockchain tools.",
      "Learned industry best practices for secure smart contract coding."
    ],
    skills: ["Smart Contracts", "DeFi", "Web3.js", "Truffle"],
    image: ant,
  },
];

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-8">
        Experience
      </h2>
      
      <div className="space-y-12">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="group relative transition-all duration-300"
          >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className={`relative w-14 h-14 rounded-xl object-cover bg-white border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300 ${exp.hideDetails ? 'blur-md grayscale opacity-50' : ''}`}
                  />
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`text-xl font-bold text-gray-900 dark:text-gray-100 transition-all duration-300 ${exp.hideDetails ? 'blur-sm select-none opacity-40' : ''}`}>
                      {exp.company}
                    </h3>
                    <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded shadow-sm bg-gray-50 dark:bg-gray-800/50">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {exp.role}
                  </p>
                </div>
              </div>

              {/* Date & Location */}
              <div className="mt-3 md:mt-0 md:text-right">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-tight">
                  {exp.date}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {exp.location}
                </p>
              </div>
            </div>

            {/* Description Points */}
            <ul className="mt-4 space-y-2.5 ml-1 inline-block">
              {exp.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 group/item">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0 group-hover/item:bg-blue-500 transition-colors"></span>
                  <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>

            {/* Tech Stack Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Divider (except for last item) */}
            {exp.id !== experienceData[experienceData.length - 1].id && (
              <div className="absolute -bottom-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
