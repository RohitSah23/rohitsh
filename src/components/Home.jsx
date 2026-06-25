import React from "react";
import Hero from "../components/Hero";
import RecentWork from "../components/RecentWork";
import Skills from "./Skills";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Education from "./Education";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

const Home = () => {
  useDocumentMetadata({
    title: "Rohit Kumar - Frontend focused Full stack developer",
    description: "Frontend focused Full stack developer with 1.5+ years of experience building React, Next.js, and TypeScript Web2/Web3 apps.",
    url: "https://www.rohitisog.com/",
    keywords: "Frontend focused Full stack developer, Frontend Engineer, Frontend Developer, React, Next.js, TypeScript, Redux, Tailwind CSS, Web3, JavaScript, HTML, CSS"
  });

  return (
    <div>
      <Hero />
      <RecentWork />
      <Skills />
      <Experience />
      <Certifications />
      <Education />
    </div>
  );
};

export default Home;
