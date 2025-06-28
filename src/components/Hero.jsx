import React from "react";
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
    <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-6 md:p-8 text-white space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-3 text-blue-100">About</h2>
        <p className="text-base md:text-lg text-white/90 leading-relaxed">
          Blockchain Developer from India with expertise in creating, deploying,
          and managing decentralized solutions. Skilled across full-stack development,
          smart contracts, dev training, and community leadership.
        </p>
        <p className="text-base md:text-lg text-white/80 mt-4 leading-relaxed">
          Passionate about building seamless, high-performance user experiences,
          solving real-world problems with clean architecture, and constantly exploring
          new technologies. Always learning. Always shipping.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-blue-100">Socials</h2>
        <div className="flex items-center flex-wrap gap-4">
          {socialData.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={social.icon}
                alt="Social Icon"
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
