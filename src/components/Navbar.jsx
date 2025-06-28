import React from "react";
import { NavLink } from "react-router";

const navLinks = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/projects", label: "Projects" },
  // { id: 3, path: "/blogs", label: "Blogs" },
];

const Navbar = () => {
  return (
    <header className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl shadow-md p-4 md:p-6 mb-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left: Logo/Name */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-white tracking-tight hover:text-white/90 transition"
        >
          Rohit Kumar
        </NavLink>

        {/* Right: Navigation Links */}
        <nav className="flex gap-3 md:gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white/10 text-white shadow-inner border border-white/20"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
