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
      link: "https://www.x.com/RohitSah23",
    },
    {
      id: 2,
      icon: linkedin,
      link: "https://www.linkedin.com/in/RohitSah23",
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
          Blockchain Developer from India with expertise in creating, deploying,
          and managing blockchain solutions. Skilled in frontend & backend 
          development, developer training, and community engagement.
        </p>
        <p className="text-lg text-gray-800">
          Passionate about building high-performance products with seamless user
          experiences, solving complex problems, and pushing the boundaries of
          technology. Always learning, always innovating.
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
