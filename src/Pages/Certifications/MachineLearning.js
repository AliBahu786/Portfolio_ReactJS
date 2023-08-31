import React from "react";
import { Link } from "react-router-dom";
import FooterThree from "../Footer/FooterOne";
import Header from "../Header/HeaderOne";
import { pageTitle } from "../PageTitle";

const MachineLearning = () => {
  pageTitle("MachineLearning");
  return (
    <>
      <Header></Header>
      <div className="portfolio__column section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 mb-30">
              <div className="portfolio__column-item">
                <img
                  className="img__full"
                  src="assets/img/certifications/ML/ML0.png"
                  alt=""
                />
                <div className="portfolio__column-item-content">
                  <span>Introduction To AI</span>
                  <h4>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/X3HD7U6J7NDA"
                      target="blank"
                    >
                      Verify Cert.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-12 mb-30">
              <div className="portfolio__column-item">
                <img
                  className="img__full"
                  src="assets/img/certifications/ML/ML1.png"
                  alt=""
                />
                <div className="portfolio__column-item-content">
                  <span>AI For Everyone</span>
                  <h4>
                    <a href="https://www.coursera.org/account/accomplishments/verify/Z7HPCPFKVR6G" target="blank">
                      Verify Cert.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-12 mb-30">
              <div className="portfolio__column-item">
                <img
                  className="img__full"
                  src="assets/img/certifications/ML/ML2.png"
                  alt=""
                />
                <div className="portfolio__column-item-content">
                  <span>Getting Started With Generative AI API</span>
                  <h4>
                    <a href="https://www.coursera.org/account/accomplishments/verify/4WSFV8B6BX8A" target="blank">
                      Verify Cert.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-12 mb-30">
              <div className="portfolio__column-item">
                <img
                  className="img__full"
                  src="assets/img/certifications/ML/ML3.png"
                  alt=""
                />
                <div className="portfolio__column-item-content">
                  <span>Images With Dall-E</span>
                  <h4>
                    <a href="https://www.coursera.org/account/accomplishments/verify/L9XBHRHLWJLU" target="blank">
                      Verify Cert.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-12 mb-30">
              <div className="portfolio__column-item">
                <img
                  className="img__full"
                  src="assets/img/certifications/ML/ML4.png"
                  alt=""
                />
                <div className="portfolio__column-item-content">
                  <span>Generating Code With Generative AI API</span>
                  <h4>
                    <a href="https://www.coursera.org/account/accomplishments/verify/LC4RUHLKM2C2" target="blank">
                      Verify Cert.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-12 mb-30">
              <div className="portfolio__column-item">
                <img
                  className="img__full"
                  src="assets/img/certifications/ML/ML5.png"
                  alt=""
                />
                <div className="portfolio__column-item-content">
                  <span>Codio Generative AI API specialization</span>
                  <h4>
                    <a href="https://www.coursera.org/account/accomplishments/specialization/UCQZB67LPRMT" target="blank">
                      Verify Cert.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-12 mb-30">
              <div className="portfolio__column-item">
                <img
                  className="img__full"
                  src="assets/img/certifications/ML/ML6.png"
                  alt=""
                />
                <div className="portfolio__column-item-content">
                  <span>Python For AI & ML</span>
                  <h4>
                    <a href="https://www.coursera.org/account/accomplishments/verify/ESRK6JHWPR8J" target="blank">
                      Verify Cert.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterThree></FooterThree>
    </>
  );
};

export default MachineLearning;
