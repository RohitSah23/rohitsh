import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";

const Layout = () => {
  return (
    <div className="min-h-screen w-full  flex justify-center items-start py-6 px-4">
      <div className="w-full max-w-4xl md:max-w-3xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-xl p-4 sm:p-6">
        <Navbar />
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
