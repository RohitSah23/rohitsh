import React from "react";

const experienceData = [
  {
    id: 1,
    company: "Spheron Foundation",
    role: "Ambassador (Officer Level - 2)",
    date: "Dec 2024 - May 2025",
    description:
      "Building and growing the developer community, advocating Spheron's decentralized infrastructure solutions, and creating educational content to drive adoption.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E0BAQEAfZLwUVEd6Q/company-logo_200_200/company-logo_200_200/0/1722249662798/spheron_logo?e=2147483647&v=beta&t=2PGqbZwQ2M2Vowmc0b2FNbb5Q5Qfk61upeou4V61v7A",
  },
];

const AmbassadorExp = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Ambassador Experience</h2>
      <div className="mt-4 space-y-4">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="bg-white p-4 rounded-lg shadow-md transition duration-300 hover:bg-gray-100 hover:shadow-lg"
          >
            {/* Mobile Layout */}
            <div className="flex flex-col sm:hidden">
              <div className="flex items-center">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="h-12 w-12 rounded-full shadow-sm"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gray-600">{exp.role}</p>
                  <p className="text-sm text-gray-500">{exp.date}</p>
                </div>
              </div>

              {/* Description - Full Width */}
              <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
            </div>

            {/* MD & LG Layout (Unchanged) */}
            <div className="hidden sm:flex items-center">
              <img
                src={exp.image}
                alt={exp.company}
                className="h-12 w-12 rounded-full shadow-sm transition-transform duration-300 hover:scale-105"
              />
              <div className="w-full px-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <p className="text-sm text-gray-600">{exp.role}</p>
                  </div>
                  <p className="text-sm text-gray-500">{exp.date}</p>
                </div>
                <p className="text-sm mt-2 text-gray-700">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmbassadorExp;
