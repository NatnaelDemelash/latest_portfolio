import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
    {
      image: "/Project 1.png",
      projectName: "OmniFood Landing page",
      projectLink: "",
      projectDescription:
        "An AI based tech company which majorly focuses on consumer well-being through a healthy diet.",
      projectTech: ["HTML", "CSS", "JavaScript"],
      projectExternalLinks: {
        github: "https://github.com/NatnaelDemelash/OmniFood",
        externalLink: "https://loquacious-haupia-108385.netlify.app/",
      },
    },
    {
      image: "/Project 3.png",
      projectName: "Aurora Aisel- Shopping Mart",
      projectLink: "",
      projectDescription:
        "An Ecommerce app built with React.js using react context -( FakeStore API) for data fetching/backend",
      projectTech: ["React", "TailwindCSS", "Context API"],
      projectExternalLinks: {
        github: "https://github.com/NatnaelDemelash/aurora_aisel_shop",
        externalLink: "https://aurora-aisel-shop.vercel.app/",
      },
    },
    {
      image: "/Project 2.png",
      projectName: "Pizzeria Pizza",
      projectLink: "",
      projectDescription:
        "Pizza ordering website .Users can browse through a variety of pizza options, select their preferred menu",
      projectTech: ["React", "Redux", "TailwindCSS"],
      projectExternalLinks: {
        github: "https://github.com/NatnaelDemelash/pizzeria_pizza",
        externalLink: "https://pizzeria101.netlify.app/",
      },
    },
    {
      image: "/Project 4.png",
      projectName: "Rotten Apple",
      projectLink: "",
      projectDescription:
        "A simple React and TypeScript app to search popular movies and TvShows with additional user custom rating feature.",
      projectTech: ["React", "ChakraUI", "TypeScript"],
      projectExternalLinks: {
        github: "https://github.com/NatnaelDemelash/rottenApple",
        externalLink: "https://rottenapple.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            // projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
