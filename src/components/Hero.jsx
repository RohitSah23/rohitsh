import React from "react";
import { Link } from "react-router"; 
import x from "../assets/x.svg";
import linkedin from "../assets/linked.svg";
import discord from "../assets/discord.svg";
import github from "../assets/github.svg";
import email from "../assets/email.svg";
import resumePDF from "../assets/Rohit_Kumar_CV.pdf";

const Hero = () => {
  const socialData = [
    {
      id: 1,
      name: "X (Twitter)",
      icon: x,
      link: "https://x.com/rohitisog",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/in/rohitisog/",
    },
    {
      id: 3,
      name: "GitHub",
      icon: github,
      link: "https://www.github.com/RohitSah23",
    },
    {
      id: 4,
      name: "Discord",
      icon: discord,
      link: "https://discord.com/users/RohitSah23",
    },
    {
      id: 5,
      name: "Email",
      icon: email,
      link: "mailto:rohitisog@gmail.com",
    },
  ];

  return (
    <div className="px-8">
      <div>
        <h2 className="text-xl font-semibold">About</h2>
        <p className="my-4 text-lg text-gray-800">
          Frontend-focused Software Engineer with 1.5+ years of experience building scalable
          React, Next.js, and TypeScript applications. Delivered production-ready
          Web2 and Web3 products used across Social, SaaS, RWA, and Blockchain
          domains. Passionate about creating fast, accessible, and user-centric
          experiences.
        </p>
        <div className="flex gap-4 my-6">
          <a
            href={resumePDF}
            download="Rohit_Kumar_CV.pdf"
            className="rounded-2xl px-4 py-2 transition border border-black bg-white text-black hover:bg-black hover:text-white text-sm font-semibold inline-block text-center shadow-sm"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold py-2">Socials</h2>
        <div className="flex items-center justify-start gap-3 mt-1">
          {socialData.map((social) => (
            <div key={social.id} className="relative group">
              <Link
                to={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-110 transition"
              >
                <img src={social.icon} alt={social.name} className="w-12 h-12" />
              </Link>
              {/* Tooltip */}
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[11px] font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                {social.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
