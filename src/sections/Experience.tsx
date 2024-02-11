import React, { useEffect, useState } from "react";

const Experience = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.6}rem`;
    };

    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: "GoodayOnline",
      role: "Software Engineer",
      start: "Jan 2024",
      end: "Present",
      shortDescription: [
        "Engaged in the development of an office backend tool designed to manage team operations, utilizing a front-end framework (Vue.js)",
      ],
    },
    {
      name: "Addis Ababa University",
      role: "Junior Web Developer",
      start: "May 2019",
      end: "July 2019",
      shortDescription: [
        "Cooperate with designers to create clean interfaces and simple, intuitive interactions and experiences",
        "Develop project concepts and maintain optimal workflow.",
        "Work with senior developers to manage large, complex design projects forcorporate clients",
      ],
    },
  ];

  return (
    <div className="experience" id="experience">
      <div className="title">
        <h2>Where I've worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => {
            return (
              <li
                key={index}
                className={`exp-slider-item ${
                  index == selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
              >
                <span>{experience.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position">
                &nbsp;
                <span className="exp-details-position-company">
                  @ {experiences[selected].name}
                </span>
              </span>
            </h3>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
