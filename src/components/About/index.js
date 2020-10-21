// Written by MG
import React from 'react';
import profileImage from "../../assets/images/mypicture.jpg";
import '../../App.css';

function About(props) {
    return (
        <section className="container">
            <h3 id="about">About Me</h3>
            <img src={profileImage} className="my-2" style={{ maxWidth: "80%", width: "50%" }} alt="Marlon Guandique" />
            <p id="about-me"> I am an Information Security Engineer and I am Full-Stack Web developer. Obtaining the full stack development certificate from the University of California, Berkeley, I have added tremendous skills to my existing vast experience in the Security Field. I gained proficiency in the theory and application of web development.  Computer Science applied to Javascript, server side development (user authentication, PWAs (Progressive Web Applications), and MERN Stack (MongoDB, Express.js, React.js, Node.js), browser based technologies such as HTML/CSS, JavaScript/jQuery, Boostrap, Handlebars, Local storage, session storage, IndexedDB and Reac.js, databases such as MySQL and MongoDB as well as API interaction with API, JSON and AJAX. With more than 20 years of experience as a Security and Network Engineer, I will be able to contribute to a development team.
</p>
        </section>
    );
}

export default About;