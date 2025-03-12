import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import profileimage from './Component/enhanced_profile.png'
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="intro">
        <h1>Hello</h1>
        <h2>I'm Aishwarya Pandey</h2>
        
        <p>
        "Passionate Web Developer & Prompt Engineer ready to bring 
        innovative solutions to your projects—let’s build something amazing together!"
        </p>
        <Link className="nav-link" to="/aboutme">
                    <button className="btn btn-primary">Hire Me</button>
                  </Link>
      </div>
      <div className="image-container">
        <img
          src={profileimage} // Replace with the actual image path
          alt="Aishwarya Pandey"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default LandingPage;