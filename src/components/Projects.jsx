import React from "react";



const liveProducts = [
  {
    id: 1,
    name: "Swing UI",
    image: null,
    live: "https://swingui.com",
    repo: "https://github.com/RohitSah23/SwingUI",
    description: "Built a reusable Tailwind CSS component library with 30+ responsive components, accessibility-first design patterns, and easy drop-in integrations.",
  },
  {
    id: 2,
    name: "Arbancia",
    image: null,
    live: "https://arbancia.com",
    repo: "",
    description: "Designed and built a luxury branding showcase page, improving initial layout load times by 40% with clean asset loading and premium typography grids.",
  },
];

const productsAndPlatforms = [
  {
    id: 5,
    name: "Mintellect",
    image: null,
    live: "https://mintellect-ten.vercel.app/",
    repo: "",
    description: "Co-developed a secure patent tokenization platform using IP NFTs, allowing users to fractionally license and trade intellectual property on-chain.",
  },
  {
    id: 6,
    name: "Uthaan RWA",
    image: null,
    live: "https://uthaan-rwa.vercel.app/",
    repo: "",
    description: "Engineered a Real World Asset (RWA) fractional tokenization dashboard, enabling yield tracking and direct Web3 wallet-based asset purchases.",
  },
];

const landingPages = [
  {
    id: 2,
    name: "Lagom Chain",
    live: "https://lagomchain.com/",
    repo: "",
    image: null,
    description: "Developed a premium Layer 1 showcase website with responsive layouts and interactive documentation modules for asset tokenization.",
  },
  {
    id: 3,
    name: "Slay Space",
    live: "https://slayspace.io/",
    repo: "",
    image: null,
    description: "Created a Web3 engagement economy interface enabling direct creator rewards and decentralized profile configurations.",
  },
  {
    id: 4,
    name: "Mintellect",
    live: "https://www.mintellect.org/",
    repo: "",
    image: null,
    description: "Shipped a landing portal for IP discovery, integrating custom search filters to connect inventors with global investors.",
  },
  {
    id: 5,
    name: "BranchOutCo",
    live: "https://www.branchoutco.com/",
    repo: "",
    image: null,
    description: "Shipped a lead-generation agency page, boosting form submissions by 25% through optimized layout hierarchy and clean inputs.",
  },
  {
    id: 6,
    name: "Leivia Salon",
    live: "https://leivia-salon.vercel.app/",
    repo: "",
    image: null,
    description: "Developed a high-converting salon booking page featuring interactive service selections and responsive styling.",
  },
  {
    id: 7,
    name: "Bitnautic",
    live: "https://bitnautic.vercel.app/",
    repo: "",
    image: null,
    description: "Created a decentralized logistics portal interface with maritime cargo trackers and shipment status lists.",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition hover:bg-gray-100 hover:shadow-lg w-full flex flex-col justify-between group overflow-hidden">
      <div>
        {project.image && (
          /* Thumbnail Wrapper with Hover Overlay */
          <div className="relative rounded-lg w-full h-40 overflow-hidden mb-2">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Description Overlay appearing on hover */}
            <div className="absolute inset-0 bg-black/85 flex items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none">
              <p className="text-white text-xs leading-relaxed font-normal">
                {project.description}
              </p>
            </div>
          </div>
        )}
        <h4 className="text-lg font-semibold mt-1">{project.name}</h4>
        {!project.image && (
          <p className="text-sm text-gray-600 leading-relaxed font-normal mt-2">
            {project.description}
          </p>
        )}
      </div>
      <div className="mt-4 flex space-x-4">
        {project.locked ? (
          <span className="rounded-2xl sm:text-sm px-3 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 cursor-not-allowed flex items-center gap-1">
            🔒 Locked Code
          </span>
        ) : (
          <>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl sm:text-sm px-3 py-1 transition bg-black text-white hover:bg-white hover:border-black hover:text-black border border-black inline-block text-center"
                title={`Visit the live website for ${project.name}`}
              >
                Live Link
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl sm:text-sm px-3 py-1 transition border border-black bg-white text-black hover:bg-black hover:text-white inline-block text-center"
                title={`View the GitHub repository for ${project.name}`}
              >
                GitHub Repo
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="px-8 pb-16">
      <h2 className="text-xl font-semibold">Projects</h2>

      {/* Featured Projects */}
      <h3 className="text-lg font-bold text-gray-700 mt-4">Featured Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
        {liveProducts.map((product) => (
          <ProjectCard key={product.id} project={product} />
        ))}
      </div>

      {/* Landing Pages & UI/UX */}
      <h3 className="text-lg font-bold text-gray-700 mt-6">Landing Pages & UI/UX</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
        {landingPages.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Products & Platforms */}
      <h3 className="text-lg font-bold text-gray-700 mt-6">Products & Platforms</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
        {productsAndPlatforms.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
