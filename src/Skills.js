// Skills.js
import React from 'react';
import './Skills.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const skillsData = [
    {
        description: "HTML, CSS and Bootstrap",
        icon: "bi bi-file-earmark-code" // HTML/CSS icon
    },
    {
        description: "Node js, SQL, PHP and API’s",
        icon: "bi bi-server" // Server icon for backend technologies
    },
    {
        description: "React and JavaScript",
        icon: "bi bi-braces" // Braces icon for JavaScript
    },
    {
        description: "Natural Language Processing (NLP) and AI-Powered Content Creation",
        icon: "bi bi-robot" // Brain icon for AI and NLP
    },
    {
        description: "Generative AI Understanding and Prompt Engineering",
        icon: "bi bi-lightbulb" // Lightbulb icon for ideas and creativity
    },
    {
        description: "C Programming and Problem Solving",
        icon: "bi bi-code-slash" // Code slash icon for programming
    },
];

const Skills = () => {
    return (
        <div className="skills-section">
           <div className='skills-heading'> <h2>MY SKILLS</h2>
           <p>I do all kinds of neat stuff</p></div>
            <div className="container skills-container">
                <div className="row">
                    {skillsData.map((skill, index) => (
                        <div className="col-md-4 skill-card-box" key={index}>
                            <div className="card skill-card">
                                <div className="card-body text-center">
                                    <i className={skill.icon + " skill-icon"}></i>
                                    <h5 className="card-title">{skill.title}</h5>
                                    <p className="card-text">{skill.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;