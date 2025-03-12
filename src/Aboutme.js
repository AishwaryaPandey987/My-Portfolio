import React from "react";
import "./Aboutme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import myphoto from "./Component/Myphoto.jpeg";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-md-4">
          <img src={myphoto} alt="Aishwarya Pandey" className="img-fluid " />
        </div>
        <div className="col-md-6">
          <h2>Hello Everybody, I am</h2>
          <h1>Aishwarya Pandey</h1>

          <p>
            Self-motivated and adaptable developer with applicable database
            knowledge and coding skills. Organized programmer looking for an
            opportunity to grow as a developer and support an ambitious startup
            technology company. Collaborative communicator with relationship
            building skills.
          </p>
          <ul className="list-unstyled">
            <li>
              <strong>Date of Birth:</strong> 3 July, 2002
            </li>
            <li>
              <strong>Phone:</strong> +91 6387533948
            </li>
            <li>
              <strong>Email:</strong> aishwaryapandey987@gmail.com
            </li>
          </ul>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/aishwarya-pandey-187a61230/"
              className="me-2"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
