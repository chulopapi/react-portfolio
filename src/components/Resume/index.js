//Written by MG
import React from 'react';

import './Resume.css';

function Resume() {
    return (
        <section className="my-4 container">
            <h2 id="about">Resume</h2>
            <a href="https://drive.google.com/file/d/1W0muK2z61Zg-Z3VSWjc9x_b1qdN9nG1c/view?usp=sharing">Download my Resume</a>
            <h4>SUMMARY</h4>
Information Security Engineer, Full-Stack Web Developer

            <h4>TECHNICAL SKILLS</h4>
             
            <p>Languages:<br />
             Tools: GitHub, VScode, 
      </p>

            <h4>PROJECTS</h4>
            <h5>SafeTravels</h5> <p>GitHub: chulopapi /explore | Deployed: chulopapi.github.io/SafeTravels/</p>
            <ul className="browser-default" >
                <li>  Need to add more stuff</li>
                <li>  Need to add more stuff</li>
            </ul>
            <h5>Safr</h5> <p>GitHub: NGDino/safety-first | Deployed: ssafr.herokuapp.com/login</p>
            <ul className="browser-default" >
                <li>  Need to add more stuff</li>
                <li>  Need to add more stuff</li>
            </ul>

            <h4>WORK EXPERIENCE</h4>
            <h5>Information Security Engineer</h5>
		        Apple, Corp - April 2011 – Present
            <ul className="browser-default" >
                <li>  Need to add more stuff</li>
                <li>  Need to add more stuff</li>
            </ul>
            <h5>Network and Security Engineer</h5>
                Navisite - San Jose, CA   October 2008 – April 2011
            <ul className="browser-default" >
                <li>  Need to add more stuff</li>
                <li>  Need to add more stuff</li>
            </ul>
            <h4>EDUCATION</h4>
            <p>Certificate in Full Stack Web Development  <br />
University of California, Berkeley| May 2020 – November 2020<br />
            </p>
            <p>
                Bachelor of Arts in Spanish Linguistics/Emphasis in Information Technology<br />
University of California, Berkeley| May 1995 – June 1998   <br />
            </p>

        </section>
    );
}

export default Resume;