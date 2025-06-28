import React from "react";
import ant from "../assets/antier.png";
import alp from "../assets/alephium.png";

const experienceData = [
  {
    id: 1,
    company: "Alephium India",
    role: "DevRel India",
    date: "Aug 2024 - Sept 2024",
    description:
      "Driving developer relations, fostering a strong blockchain community, and creating educational content to enhance Alephium’s adoption across India.",
    image: alp,
  },
  {
    id: 2,
    company: "Antier Solutions",
    role: "Software Developer & Trainer Intern",
    date: "Jan 2024 - May 2024",
    description:
      "Developed blockchain-based solutions, mentored trainees, and conducted workshops to upskill developers in blockchain and Web3 technologies.",
    image: ant,
  },
  {
    id: 3,
    company: "Antier Solutions",
    role: "Blockchain Developer Trainee",
    date: "June 2023 - Dec 2023",
    description:
      "Gained hands-on experience in smart contract development, DeFi, and NFTs while contributing to real-world blockchain projects.",
    image: ant,
  },
];

const Experience = () => {
  return (
    <div className="py-6">
      <h2 className="text-xl font-semibold text-white">Experience</h2>
      <div className="mt-4 space-y-4">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-md hover:shadow-lg transition duration-300 text-white"
          >
            {/* MOBILE VIEW */}
            <div className="flex flex-col sm:hidden">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-1 flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-full p-2 flex items-center justify-center">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-10 h-10 object-contain rounded-full"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-sm text-white/80">{exp.role}</p>
                  <p className="text-sm text-white/50">{exp.date}</p>
                </div>
              </div>
              <p className="text-sm text-white/80 mt-2">{exp.description}</p>
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden sm:flex items-center">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-1 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-full p-2 flex items-center justify-center">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-10 h-10 object-contain rounded-full"
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <p className="text-sm text-white/80">{exp.role}</p>
                  </div>
                  <p className="text-sm text-white/50">{exp.date}</p>
                </div>
                <p className="text-sm mt-2 text-white/80">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
