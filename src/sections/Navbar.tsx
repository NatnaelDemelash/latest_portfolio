import Link from "next/link";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

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
        <motion.div
          className="brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <Link href="/">
            <Image src={Logo} alt="Logo" width={30} height={30} />
          </Link>
        </motion.div>

        {/* mob-nav */}
        <motion.div
          className="nav-responsive-toggle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
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
        </motion.div>

        <div
          className={`${responsiveNavVisible && "nav-responsive"} nav-items `}
        >
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }, index) => {
              return (
                <motion.li
                  key={name}
                  className="nav-items-list-item"
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: 0.6 + index * 0.1,
                  }}
                >
                  <Link href={link} className="nav-items-list-item-link">
                    {name}
                  </Link>
                </motion.li>
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
