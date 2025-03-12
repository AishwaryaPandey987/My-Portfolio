import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./LandingPage";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Education from "./Education";
import Experience from "./Experience";
import Aboutme from "./Aboutme";
import "./App.css";
import ScrollToTop from "./ScrollToTop"; // Adjust the path accordingly

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            Web Wonders
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item">
                  <Link className="nav-link" to="/">
                  Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/skills">
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/certificates">
                    Certificates
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/education">
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/experience">
                    Trainings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutme">
                    About Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/aboutme" element={<Aboutme />} />
          </Routes>
          <ScrollToTop />
        </div>
      </div>
    </Router>
  );
};

export default App;
