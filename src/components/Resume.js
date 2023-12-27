import React, { Fragment } from "react";

function Resume() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Abineshwaran</h2>
            </div>
          </div>
          <hr></hr> 
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EXPERIENCE</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">Internship</h4>
                  <h6 className="blue-label px-2 py-1">
                    March 2023 - jun 2023
                  </h6>
                  <p className="m-0">
                    XYLOINC. IT Services and IT Consulting, Coimbatore
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EDUCATION</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    BSC - Computer Technology
                  </h4>
                  <h6 className="blue-label px-2 py-1">2021 - 2024</h6>
                  <p className="m-0">Dr.N.G.P Arts and Science College, Coimbatore</p>
                  <p>Grade: 68 %</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    Higher Secondary School
                  </h4>
                  <h6 className="blue-label px-2 py-1">2019 - 2021</h6>
                  <p className="m-0">
                    St. Joseph's Higher Secondary School, Ooty{" "}
                  </p>
                  <p>Grade: 77 %</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Secondary School</h4>
                  <h6 className="blue-label px-2 py-1">2018 - 2019</h6>
                  <p className="m-0">
                    St. Joseph's Higher Secondary School, Ooty{" "}
                  </p>
                  <p>Grade: 61 %</p>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;
