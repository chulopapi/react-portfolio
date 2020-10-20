//Project - card content for to be use with portfolio
import React from 'react';

const Project = ({ project }) => {

  return (
    
      <div className="row">
      <div className="col s12 m7">
        <div className="card">
        <a href={project.deployed}>
          <div className="card-image">
            <img src={project.src} alt='{project.name} project' />
            
          </div>
        </a>
          <div className="card-content black-text">
          <span className="card-title black-text">{project.name}</span>
            <p>{project.languages}</p> <br />
            <p>{project.description}</p> <br />
            <a href={project.deployed}>Deployed application</a> <br />
            <a href={project.github}>GitHub repository</a>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Project;