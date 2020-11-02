//Projects - Portfolio
import React from 'react';
import Project from '../Project';
import SafeTravels from "../../assets/images/SafeTravels.png";
import safr from "../../assets/images/safr-2.png";
import colossalcloser from "../../assets/images/colossal-closer.png"
import '../../App.css';


function Portfolio() {
  const projects = [
    {
        name: 'SafeTravels',
        languages: "HTML, CSS, Javascript, API, Materialize ",
        description: "A website that keeps you safe while traveling during COVID-19.",
        src: SafeTravels,
        deployed: "https://chulopapi.github.io/safeTravels",
        github: "https://github.com/chulopapi/safeTravels"
      },
    {
      name: 'Safr',
      languages: "HTML, CSS, Javascript, SQL, Materialize",
      description: "CMS blog site where you can posts, reviews, and review businesses that are keeping you safe during COVID-19. Mobile app is a must",
      src: safr,
      deployed: "https://ssafr.herokuapp.com/login",
      github: "https://github.com/NGDino/safety-first"
    },
    {
      name: 'Colossal Closer',
      languages: "HTML, CSS, Javascript, MongoDB, Mongoose,ChakraUI, Materialize, IndexedDB, ",
      description: "Colossal Closer is a Customer Relationship Management application that allows a company to track employee-customer interactions and provide relevant data for the company to view progress",
      src: colossalcloser,
      deployed: "https://colossal-closer.herokuapp.com",
      github: "https://github.com/nmcanall/colossal-closer"
    },
    
  ]

  return (
    <section className="container bg-text">
      <h2 id="portfolio">Portfolio</h2> {
        projects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            project={project}
          />
        ))}
    </section>
  );
}

export default Portfolio;