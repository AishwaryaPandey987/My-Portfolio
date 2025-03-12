import React from "react";
import "./Experience.css"; // Importing the CSS file

const Experience = () => {
  return (
    <div className="container mt-5 experience-container">
      <h1 className="text-center mb-4">Trainings</h1>
      <div className="row">

      <div className="col-md-6 mb-4">
          <div className="experience-card">
            <h5>Feb 2025 - Mar 2025</h5>
            <h4>Internshala Trainings, Virtual</h4>

            <p>
              <strong>Prompt Engineering For GenAI</strong>
            </p>
            <p>
              Successfully completed a 6 weeks online certified training on
              Prompt Engineering for GenAI. The training consisted of Getting
              Started with Prompt Engineering, Deep Diving Into the Concept of
              Prompting, Prompt Engineering for Technology, Prompt Engineering
              for Digital Marketing, AI for Human Resource Management, AI tools
              for Design, AI for Professional Growth, Ethical aspects of using
              AI, and Final Project modules. In the final assessment, I scored
              85% marks.
            </p>
            <hr />
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="experience-card">
            <h5>Jan 2022 - Mar 2022</h5>
            <h4>Internshala Trainings, Virtual</h4>
            <p>
              <strong>React</strong>
            </p>
            <p>
              Successfully completed a 6 weeks online certified training on
              React. The training consisted of Introduction, Tic Tac Toe Game,
              Box Office App, Chat Application, Custom Backend, and Assignment &
              Summary modules. In the final assessment, I scored 67% marks.
              Developed Box Office App and chat Application.



              
            </p>
            <hr />
          </div>
        </div>
   
        <div className="col-md-6 mb-4">
          <div className="experience-card">
            <h5>Oct 2022 - Apr 2023</h5>
            <h4>Internshala Trainings, Virtual</h4>

            <p>
              <strong>Web Development</strong>
            </p>
            <p>
              Successfully completed a 8 weeks online certified training on Web
              Development. The training consisted of HTML, CSS, Bootstrap, DBMS,
              PHP, JS, React, and Final Project modules. In the final
              assessment, I scored 66% marks.
            </p>
            <hr />
          </div>
        </div>
        
     
        <div className="col-md-6 mb-4">
          <div className="experience-card">
            <h5>Feb 2024 - Present</h5>
            <h4>IIT ROORKEE, Virtual</h4>

            <p>
              <strong>Full Stack Development Speacialization</strong>
            </p>
            <p>Developing advanced skills in Full Stack Development.</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
