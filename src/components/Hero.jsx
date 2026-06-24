import React from "react";
import { Link } from "react-router"; 
import x from "../assets/x.svg";
import linkedin from "../assets/linked.svg";
import discord from "../assets/discord.svg";
import github from "../assets/github.svg";
import email from "../assets/email.svg";

const Hero = () => {
  const socialData = [
    {
      id: 1,
      icon: x,
      link: "https://x.com/rohitisog",
    },
    {
      id: 2,
      icon: linkedin,
      link: "https://www.linkedin.com/in/rohitisog/",
    },
    {
      id: 3,
      icon: github,
      link: "https://www.github.com/RohitSah23",
    },
    {
      id: 4,
      icon: discord,
      link: "https://discord.com/users/RohitSah23",
    },
    {
      id: 5,
      icon: email,
      link: "mailto:rohitisog@gmail.com",
    },
  ];

  return (
    <div className="px-8">
      <div>
        <h2 className="text-xl font-semibold">About</h2>
        <p className="my-4 text-lg text-gray-800">
          Frontend-focused Software Engineer with 1.5+ years of experience
          building and shipping production-grade Web2 and Web3 applications
          using React.js, Next.js, TypeScript, and Tailwind CSS. Proven
          experience delivering scalable user-facing products, integrating APIs
          and blockchain functionality, and contributing across the full
          development lifecycle. Built and deployed multiple production platforms
          spanning social media, SaaS, NFT, and Real World Asset (RWA) domains.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold py-2">Socials</h2>
        <div className="flex items-center justify-start gap-2">
          {socialData.map((social) => (
            <Link
              key={social.id}
              to={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <img src={social.icon} alt="Social Icon" className="w-12 h-12" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
