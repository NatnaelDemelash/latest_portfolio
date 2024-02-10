import Link from "next/link";
import React from "react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const SocialIcons = () => {
  const socilaLinks = [
    {
      name: "GitHub",
      icon: <FiGithub />,
      link: "https://github.com/NatnaelDemelash",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/natnaeldemelash/",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/nati_demelash",
    },
  ];

  return (
    <div className="social-icons">
      <ul className="socila-icons-list">
        {socilaLinks.map(({ name, icon, link }) => {
          return (
            <li key={name} title={name} className="social-icons-list-item">
              <Link
                href={link}
                className="socila-icons-list-item-link"
                target="_blank"
              >
                {icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialIcons;
