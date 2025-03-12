import React from 'react';
import './Certificates.css';
import Nptel from './Component/NPTEL.png';
import Nsdc from './Component/NSDC.png';
import Prompt from './Component/Prompt.png';
import ReactImg from './Component/React.png';
import Webdev from './Component/Webdev.png';

const Certificates = () => {
  return (
    <div className="certificates-container">
      <h2 className="mb-4">My Certificates</h2>
      <div id="certificatesCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 my-custom-col">
                <div className="instructor-card card">
                  <div className="image-container">
                    <img src={Prompt} class="d-block w-100" alt="Prompt Engineering" />
                  </div>
                  <div className="card-body text-center">
                    <p>Prompt Engineering For GenAI Feb 2025 - Mar 2025 Internshala Trainings, Virtual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="carousel-item ">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 my-custom-col">
                <div className="instructor-card card">
                  <div className="image-container">
                    <img src={Nsdc} class="d-block w-100" alt="NSDC" />
                  </div>
                  <div className="card-body text-center">
                    <p>Prompt Engineering For GenAI Feb 2025 - Mar 2025 Internshala Trainings, Virtual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 my-custom-col">
                <div className="instructor-card card">
                  <div className="image-container">
                    <img src={Webdev} class="d-block w-100" alt="Web Development" />
                  </div>
                  <div className="card-body text-center">
                    <p>Web Development Oct 2022 - Apr 2023 Internshala Trainings, Virtual</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="carousel-item ">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 my-custom-col">
                <div className="instructor-card card">
                  <div className="image-container">
                    <img src={ReactImg} class="d-block w-100" alt="React" />
                  </div>
                  <div className="card-body text-center">
                    <p>React Jan 2022 - Mar 2022 Internshala Trainings, Virtual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="carousel-item ">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 my-custom-col">
                <div className="instructor-card card">
                  <div className="image-container">
                    <img src={Nptel} class="d-block w-100" alt="NPTEL" />
                  </div>
                  <div className="card-body text-center">
                    <p>Introduction to Industry 4.0 and Industrial Internet of Things - mark's 65%</p>
                    <p>[12 week (Jan-Apr)]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#certificatesCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#certificatesCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    
  );
};

export default Certificates;