import React from "react";

const educationData = [
  {
    id: 4,
    college: "Chandigarh University, Mohali",
    stream: "MCA - Master of Computer Applications",
    date: "June 2025 - May 2027",
    cgpa: "9",
    collegeLogo: "https://cdn.theorg.com/310dcd3f-46f1-495e-801a-258eea62e72e_thumb.jpg",
  },
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
    <div className="p-6">
      <h2 className="text-xl font-semibold">Education</h2>
      <div className="mt-4 space-y-4">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-white p-4 rounded-lg shadow-md transition duration-300 hover:bg-gray-100 hover:shadow-lg"
          >
            {/* Mobile Layout */}
            <div className="flex flex-col sm:hidden">
              <div className="flex items-center">
                <img
                  src={edu.collegeLogo}
                  alt={`${edu.college} logo`}
                  className="h-12 w-12 rounded-full shadow-sm"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{edu.college}</h3>
                  <p className="text-sm text-gray-600">{edu.stream}</p>
                  <p className="text-sm text-gray-500">{edu.date}</p>
                  {edu.cgpa ? (
                    <p className="text-sm text-gray-700 font-semibold">CGPA: {edu.cgpa}</p>
                  ) : (
                    <p className="text-sm text-gray-700 font-semibold">Percentage: {edu.percentage}</p>
                  )}
                </div>
              </div>
            </div>

            {/* MD & LG Layout (Unchanged) */}
            <div className="hidden sm:flex items-center">
              <img
                src={edu.collegeLogo}
                alt={`${edu.college} logo`}
                className="h-12 w-12 rounded-full shadow-sm transition-transform duration-300 hover:scale-110"
              />
              <div className="w-full px-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{edu.college}</h3>
                    <p className="text-sm text-gray-600">{edu.stream}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{edu.date}</p>
                    {edu.cgpa ? (
                      <p className="text-sm mt-1 text-gray-700">
                        <span className="font-semibold">CGPA:</span> {edu.cgpa}
                      </p>
                    ) : (
                      <p className="text-sm mt-1 text-gray-700">
                        <span className="font-semibold">Percentage:</span> {edu.percentage}
                      </p>
                    )}
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
