import React from "react";
import Hero from "../components/Hero";
import RecentWork from "../components/RecentWork";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

const Home = () => {
  return (
    <div>
      <Hero />
      <RecentWork />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};

export default Home;
