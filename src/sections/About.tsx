import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            I am a software engineer with a passion for learning and developing
            new technologies. As a Frontend Web Developer, I thrive on
            transforming creative ideas into functional and visually captivating
            websites. With a strong foundation in HTML, CSS, and JavaScript.
          </p>
          <p className="about-grid-info-text">
            I am committed to delivering seamless user experiences and
            responsive designs. Constantly seeking opportunities to grow and
            evolve, I am driven by my passion for innovation and my love for the
            ever-evolving world of web development. Let's collaborate and bring
            your digital vision to life!
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">Vue.js</li>
            <li className="about-grid-info-list-item">Flutter</li>
            <li className="about-grid-info-list-item">TypeScript</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/profile.jpg" alt="Profile" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
