import Link from "next/link";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);

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

  useEffect(() => {
    const main = document.querySelector("main");

    if (responsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavVisible(false));
    });
    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false);
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

        {/* mob-nav */}
        <div className="nav-responsive-toggle">
          {responsiveNavVisible ? (
            <CgClose
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
            />
          )}
        </div>

        <div
          className={`${responsiveNavVisible && "nav-responsive"} nav-items `}
        >
          <ul className="nav-items-list">
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
          <div className="nav-list-button">
            <Button text="Resume" link="https://localhost:3000/resume.pdf" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
