import React from "react";
import ant from "../assets/antier.png";
import alp from "../assets/alephium.png";
import singhcoinLogo from "../assets/singhcoin.png";

const experienceData = [
  {
    id: 5,
    company: "Singhcoin Ltd",
    role: "Software Engineer",
    date: "Jan 2025 - Present",
    location: "Remote, London, UK",
    type: "Full Time",
    points: [
      "Built and shipped 10+ production web applications using React, Next.js, TypeScript, and Tailwind CSS.",
      "Designed 50+ reusable components for scalable dashboards, admin panels, landing pages, and SaaS products.",
      "Integrated 25+ REST APIs, secure authentication, RBAC, and blockchain wallet functionality.",
      "Improved performance by 35% using lazy loading, code splitting, and asset optimization.",
      "Mentored 5+ junior developers and interns through code reviews and technical guidance."
    ],
    products: [
      { name: "Nomtree Recipe", url: null },
      { name: "Slay Merchant Panel", url: null },
      { name: "Mintellect", url: "https://mintellect-ten.vercel.app/" },
      { name: "Uthaan RWA", url: "https://uthaan-rwa.vercel.app/" },
      { name: "Bitnautic", url: "https://bitnautic.vercel.app/" },
    ],
    clientSites: [
      { name: "Lagom Chain", url: "https://lagomchain.com/" },
      { name: "Slay Space", url: "https://slayspace.io/" },
      { name: "Mintellect", url: "https://www.mintellect.org/" },
      { name: "BranchOutCo", url: "https://www.branchoutco.com/" },
      { name: "Leivia Salon", url: "https://leivia-salon.vercel.app/" },
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "REST APIs", "Web3", "Ethers.js"],
    image: singhcoinLogo,
    hideDetails: false
  },
  
  {
    id: 1,
    company: "Alephium India",
    role: "DevRel India",
    date: "Aug 2024 - Sept 2024",
    location: "India - Remote",
    type: "Full Time",
    hidden: true,
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
    hidden: true,
    points: [
      "Developed blockchain-based solutions and integrated Web3 functionalities.",
      "Mentored trainees and conducted workshops to upskill developers in blockchain.",
      "Worked on real-world projects involving smart contracts and DApps."
    ],
    skills: ["Solidity", "React", "Node.js", "Ethereum"],
    image: ant,
  },
];

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-8">
        Experience
      </h2>
      
      <div className="space-y-12">
        {experienceData.filter((exp) => !exp.hidden).map((exp, index, arr) => (
          <div
            key={exp.id}
            className="group relative transition-all duration-300"
          >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-50 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className={`relative w-14 h-14 rounded-xl object-cover bg-white border border-gray-100 shadow-sm transition-all duration-300 ${exp.hideDetails ? 'blur-md grayscale opacity-50' : ''}`}
                  />
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`text-xl font-bold text-gray-900 transition-all duration-300 ${exp.hideDetails ? 'blur-sm select-none opacity-40' : ''}`}>
                      {exp.company}
                    </h3>
                    <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500 border border-gray-200 rounded shadow-sm bg-gray-50">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    {exp.role}
                  </p>
                </div>
              </div>

              {/* Date & Location */}
              <div className="mt-3 md:mt-0 md:text-right">
                <p className="text-sm font-semibold text-gray-800 uppercase tracking-tight">
                  {exp.date}
                </p>
                <p className="text-sm text-gray-500">
                  {exp.location}
                </p>
              </div>
            </div>

            {/* Description Points */}
            <ul className="mt-4 space-y-2.5 ml-1 inline-block">
              {exp.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 group/item">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0 group-hover/item:bg-blue-500 transition-colors"></span>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>

            {/* Products & Client Sites */}
            {exp.products && (
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Products & Platforms</p>
                <div className="flex flex-wrap gap-2">
                  {exp.products.map((p) =>
                    p.url ? (
                      <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                        className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors"
                        title={`Visit the live website for ${p.name}`}
                      >
                        ↗ {p.name}
                      </a>
                    ) : (
                      <span key={p.name}
                        className="px-3 py-1 text-xs font-medium text-gray-500 bg-gray-50 border border-gray-200 rounded-md"
                        title="Codebase is private/internal"
                      >
                        🔒 {p.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}
            {exp.clientSites && (
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Landing Pages & UI/UX</p>
                <div className="flex flex-wrap gap-2">
                  {exp.clientSites.map((s) => (
                    <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                      className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-50 border border-purple-200 rounded-md hover:bg-purple-100 transition-colors"
                      title={`Visit the landing page for ${s.name}`}
                    >
                      ↗ {s.name}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:border-blue-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Divider (except for last item) */}
            {index !== arr.length - 1 && (
              <div className="absolute -bottom-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
