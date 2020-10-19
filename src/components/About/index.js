// Written by MG
import React from 'react';
import profileImage from "../../assets/images/mypicture.jpg";
import '../../App.css';

function About(props) {
  return (
    <section className="container">
      <h2 id="about">About Me</h2>
      <img src={profileImage} className="my-2" style={{ maxWidth: "65%", width: "50%" }} alt="Marlon Guandique" />
      <p id="about-me"> I am a Information Security Engineer and a Full-Stack Web developer. Obtaining the full stack development certificate from the University of California, Berkeley, I have added tremendous skills to my existing vast experience in the Security Field. The following are the tools I have learned: Javascript, HTML5, CSS, NodeJS, and MySQL, React, MongoDB and others.  With more than 20 years of experience as a Security and Network Engineer, I will be able to contribute to a development team.
</p>
    </section>
  );
}

export default About;