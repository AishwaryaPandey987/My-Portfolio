import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'PGLife',
        year: 'Oct 2022 - Feb 2023',
        description: 'PG Life is a website that can search PG rooms for guest or for students. ',
        link :'https://github.com/AishwaryaPandey987/PGLife',
        techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React'],
    },
    {
        title: 'Box Office app',
        year: 'Jan 2022 - Mar 2022',
        description: 'Create a Box Office app that displays data about movies, shows and actors.',
        link :  ' https://aishwaryapandey987.github.io/Box-office-app/#/',
        techStack: ['HTML', 'CSS', 'Javascript','React'],
    },
    {
        title: 'Chat app',
        year: 'Feb 2022 - May 2022',
        description: 'Create a chat app with features like dashboard, social media accounts sync, send & receive files. Etc.',
        link : 'https://github.com/AishwaryaPandey987/Chat-app',
        techStack: ['WordPress', 'CSS', 'JavaScript'],
    },
    {
        title: 'Pathfinder',
        year: 'Sep 2022 - Oct 2022',
        description: 'Using React concepts, created a pathfinder that follows dikstra’s algorithm and returns the shortest path between the two nodes',
        link :' https://aishwaryapandey987.github.io/pathfinding-visualizer-pathfinder/' ,
        techStack: ['HTML', 'CSS', 'Javascript'],
    },
    {
        title: 'Tic Tac Toe game',
        year: 'Jan 2022 - Feb 2022',
        description: 'Using basic React concepts, created a Tic Tac Toe game with animations and game history',
        link:'https://github.com/AishwaryaPandey987/tictactoe',
        techStack: ['WordPress', 'CSS', 'JavaScript'],
    },
 
];

const Projects = () => {
    return (
        <div className="container projects-container">
            <h2 className="text-center">Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-4 project-card">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{project.title} <span className="text-muted">({project.year})</span></h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                                <div className="tech-stack">
                                    {project.techStack.map((tech, i) => (
                                        <div key={i} className="tech-item">{tech}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;