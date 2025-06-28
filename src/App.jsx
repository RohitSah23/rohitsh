import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Layout from "./Layout/Layout.jsx";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Home from "./components/Home";

const App = () => {
  const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVerySmallScreen(window.innerWidth <= 320);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isVerySmallScreen) {
    return (
      <div className="h-screen w-full flex items-center justify-center text-center px-6 bg-gradient-to-br from-orange-600 to-orange-400 text-white">
        <p className="text-lg font-medium leading-relaxed">
          📱 For the best experience, please use a larger screen or landscape mode.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
