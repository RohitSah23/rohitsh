import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import Closing from "./Closing";
import useDocumentMetadata from "../hooks/useDocumentMetadata";
import { SITE_METADATA } from "../lib/data";

export default function Home() {
  useDocumentMetadata({
    title: "KR ROHIT | AI Strategist · Founder @ Sarg Studio",
    description: SITE_METADATA.description,
    url: "https://www.rohitisog.com/",
    keywords:
      "KR ROHIT, Loud Labs, AI Strategist, Generative AI, Agentic Workflows, Full Stack Developer, React, Next.js, TypeScript, NestJS, Web3, Solidity",
  });

  return (
    <main className="mt-4 flex w-full flex-col gap-4">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Closing />
    </main>
  );
}
