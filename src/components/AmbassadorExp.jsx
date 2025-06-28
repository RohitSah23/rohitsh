import React from "react";

const experienceData = [
  {
    id: 1,
    company: "Spheron Foundation",
    role: "Ambassador (Officer Level - 2)",
    date: "Nov 2024 - May 2025",
    description:
      "Building and growing the developer community, advocating Spheron's decentralized infrastructure solutions, and creating educational content to drive adoption.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E0BAQEAfZLwUVEd6Q/company-logo_200_200/company-logo_200_200/0/1722249662798/spheron_logo?e=2147483647&v=beta&t=2PGqbZwQ2M2Vowmc0b2FNbb5Q5Qfk61upeou4V61v7A",
  },
];

const AmbassadorExp = () => {
  return (
    <div className="py-6">
      <h2 className="text-xl font-semibold text-white">Ambassador Experience</h2>
      <div className="mt-4 space-y-4">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-md hover:shadow-lg transition duration-300 text-white"
          >
            {/* Mobile View */}
            <div className="flex flex-col sm:hidden">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-1 flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-full p-2 flex items-center justify-center">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-10 h-10 object-cover rounded-full"
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

            {/* Desktop View */}
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

export default AmbassadorExp;
