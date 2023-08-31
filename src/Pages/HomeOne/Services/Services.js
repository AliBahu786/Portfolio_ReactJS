import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const servicesData = [
    {
        id: 1,
        title: "AI & ML",
        batch: "01",
        description: "Every type of AI and ML solutions for your applications and train models from scratch.",
        imgOne: "assets/img/icon/services-1.png",
        imgTwo: "assets/img/icon/services-11.png",
      },
    {
      id: 2,
      title: "Designing",
      batch: "02",
      description:
        "Create best suitable designs for every type of  business niche.",
      imgOne: "assets/img/icon/services-2.png",
      imgTwo: "assets/img/icon/services-22.png",
    },
    {
      id: 3,
      title: "Development",
      batch: "03",
      description:
        "Create Every type of application from web to mobile and desktop.",
      imgOne: "assets/img/icon/services-3.png",
      imgTwo: "assets/img/icon/services-33.png",
    },
      {
        id: 4,
        title: "Deployment",
        batch: "04",
        description: "Deploy your application according to the best need of your business.",
        imgOne: "assets/img/icon/services-3.png",
        imgTwo: "assets/img/icon/services-33.png",
      },
      {
        id: 5,
        title: "Security",
        batch: "05",
        description:"Provide security to your deployed applications form the latest cyber attacks.",
        imgOne: "assets/img/icon/services-4.png",
        imgTwo: "assets/img/icon/services-44.png",
      },
      {
        id: 6,
        title: "Marketing",
        batch: "06",
        description: "Market your products according to the needs of world.",
        imgOne: "assets/img/icon/services-4.png",
        imgTwo: "assets/img/icon/services-44.png",
      },
  ];
  return (
    <div
      className="services__area section-padding"
      style={{ backgroundImage: `url('assets/img/services.png')` }}
    >
      <div className="container">
        <div className="row mb-30">
          <div className="col-xl-12">
            <div className="services__area-title lg-t-center">
              <span className="subtitle one">My Services</span>
              <h2>My Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {servicesData.map((item, id) => (
            <div className="col-xl-6 col-lg-6 col-md-6" key={id}>
              <div className="services__area-item">
                <span>{item.batch}</span>
                <div className="services__area-item-icon">
                  <img src={item.imgTwo} alt="" />
                  <div className="services__area-item-icon-one">
                    <img src={item.imgOne} alt="" />
                  </div>
                </div>
                <div className="services__area-item-content">
                  <h4>
                    {item.title}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;