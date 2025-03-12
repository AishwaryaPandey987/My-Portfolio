import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <hr />

      
        <div className="col-md-6 mb-4">
          <div className="education-card p-3">
           
            <h3>Bachelor of Technology (B.Tech), Computer Science</h3>
            <p>2019 - 2023</p>
            <p>Dr. A.P.J. Abdul Kalam Technical University, Lucknow, Uttar Pradesh</p>
         
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="education-card p-3">
        
            <h3>Senior Secondary (XII), CBSE Science</h3>
            <p>Passout:2019            </p>
         
            <p>BBS Vidya Mandir Kadilpur Kathgaon Prayagraj
            </p>
          </div>
        </div>
      

       <div className="col-md-6 mb-4">
          <div className="education-card p-3">
        
            <h3>Secondary (X), CBSE </h3>
            <p>Passout:2017  </p>
         
            <p>BBS Vidya Mandir Kadilpur Kathgaon Prayagraj
            </p>
          </div>
        </div>
        

      
    </div>
  );
};

export default Education;