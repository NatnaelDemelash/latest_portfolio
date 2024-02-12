import Link from "next/link";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Button from "@/components/Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Experiance", link: "/#experience" },
    { name: "Work", link: "/#work" },
    { name: "Contact", link: "/#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setNavbarVisible(true) : setNavbarVisible(false);
    });
  }, []);

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <div className="brand">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={30} height={30} />
          </Link>
        </div>

        <div className="nav-items">
          <ul className="nav-item-lists">
            {sectionLinks.map(({ name, link }) => {
              return (
                <li key={name} className="nav-items-list-item">
                  <Link href={link} className="nav-items-list-item-link">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="nav-lists-button">
            <Button text="Resume" link="https://localhost:3000/resume.pdf" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
