import React from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterOne';
import Header from '../Header/HeaderOne';
import bannerBg from '../../assets/img/video-1.jpg';
import Video from '../HomeOne/Video/Video';
import { pageTitle } from '../PageTitle';

const ServicesPage = () => {
    pageTitle('Services');
    const servicesData = [
        {
            id: 1,
            title: "AI & ML",
            batch: "01",
            description: "Every type of AI and ML solutions for your applications and train models from scratch.",
            imgOne: "assets/img/icon/services-1.png",
            imgTwo: "assets/img/icon/service-11.png",
            // href: "/services-details",
          },
        {
          id: 2,
          title: "Designing",
          batch: "02",
          description:
            "Create best suitable designs for every type of  business niche.",
          imgOne: "assets/img/icon/services-2.png",
          imgTwo: "assets/img/icon/service-22.png",
        //   href: "/services-details",
        },
        {
          id: 3,
          title: "Development",
          batch: "03",
          description:
            "Create Every type of application from web to mobile and desktop.",
          imgOne: "assets/img/icon/services-3.png",
          imgTwo: "assets/img/icon/service-33.png",
        //   href: "/services-details",
        },
          {
            id: 4,
            title: "Deployment",
            batch: "04",
            description: "Deploy your application according to the best need of your business.",
            imgOne: "assets/img/icon/services-3.png",
            imgTwo: "assets/img/icon/service-33.png",
            // href: "/services-details",
          },
          {
            id: 5,
            title: "Security",
            batch: "05",
            description:"Provide security to your deployed applications form the latest cyber attacks.",
            imgOne: "assets/img/icon/services-4.png",
            imgTwo: "assets/img/icon/service-44.png",
            // href: "/services-details",
          },
          {
            id: 6,
            title: "Marketing",
            batch: "06",
            description: "Market your products according to the needs of world.",
            imgOne: "assets/img/icon/services-4.png",
            imgTwo: "assets/img/icon/service-44.png",
            // href: "/services-details",
          },
      ];
    return (
        <>
        <Header></Header>
            <div className="services__page section-padding">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-xl-6 col-lg-8">
                            <div className="services__page-title lg-t-center">
                                <span className="subtitle">Our Services</span>
                                <h2>Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {servicesData.map((item, id)=>(
                            <div className="col-xl-12" key={id}>
                                <div className="services__page-item">
                                    <div className="services__page-item-left">
                                        <div className="services__page-item-left-icon">
                                            <img src={item.imgOne} alt="" />
                                        <div className="services__area-item-icon-one">
                                            <img src={item.imgTwo} alt="" />
                                        </div>
                                        </div>
                                        <div className="services__area-item-left-content">
                                            {/* <h4><Link to={item.href}>{item.title}</Link></h4> */}
                                            <h4>{item.title}</h4>
                                        </div>
                                    </div>
                                    <div className="services__page-item-center">
                                        <p>{item.description}</p>
                                    </div>
                                    {/* <div className="services__page-item-right">
                                        <Link to={item.href}><i className="fal fa-plus"></i></Link>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Video bannerBg={bannerBg}></Video>
        <FooterThree></FooterThree>         
        </>
    );
};

export default ServicesPage;