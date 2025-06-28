import React from "react";

const educationData = [
  {
    id: 1,
    college: "DAV College Jalandhar, Punjab",
    stream: "BCA - Bachelors of Computer Applications",
    date: "Aug 2020 - May 2023",
    percentage: "79.79%",
    collegeLogo: "https://www.davjalandhar.com/wp-content/uploads/2022/07/logo-512x512-1.png",
  },
  {
    id: 2,
    college: "Doaba College Jalandhar, Punjab",
    stream: "10 + 2 Non-Medical",
    date: "Apr 2019 - Mar 2020",
    percentage: "85.33%",
    collegeLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47pokGLAsB1K3NwUtPCSW7uAk6lMiJRvURg&s",
  },
  {
    id: 3,
    college: "Jullundur Model Sr. Sec. School, Jalandhar",
    stream: "10th - Matric",
    date: "Apr 2017 - Mar 2018",
    percentage: "83.69%",
    collegeLogo: "https://static.vecteezy.com/system/resources/thumbnails/008/040/410/small_2x/school-logo-design-template-free-vector.jpg",
  },
];

const Education = () => {
  return (
    <div className="py-6">
      <h2 className="text-xl font-semibold text-white">Education</h2>
      <div className="mt-4 space-y-4">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-md hover:shadow-lg transition text-white"
          >
            {/* Mobile Layout */}
            <div className="flex flex-col sm:hidden">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-1 flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-full p-2 flex items-center justify-center">
                    <img
                      src={edu.collegeLogo}
                      alt={`${edu.college} logo`}
                      className="w-10 h-10 object-contain rounded-full"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{edu.college}</h3>
                  <p className="text-sm text-white/80">{edu.stream}</p>
                  <p className="text-sm text-white/50">{edu.date}</p>
                  <p className="text-sm font-semibold text-white mt-1">
                    Percentage: {edu.percentage}
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-1 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-full p-2 flex items-center justify-center">
                  <img
                    src={edu.collegeLogo}
                    alt={`${edu.college} logo`}
                    className="w-10 h-10 object-contain rounded-full"
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{edu.college}</h3>
                    <p className="text-sm text-white/80">{edu.stream}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white/50">{edu.date}</p>
                    <p className="text-sm mt-1 text-white/80 font-semibold">
                      Percentage: {edu.percentage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
