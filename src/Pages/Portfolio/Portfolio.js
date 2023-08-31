import React from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterOne';
import Header from '../Header/HeaderOne';
import { pageTitle } from '../PageTitle';

const Portfolio = () => {
    pageTitle('Portfolio');
    return (
        <>
            <Header></Header>
            <div className="portfolio__column section-padding">
                <div className="container">
                    <div className="row"> 
                        <div className="col-xl-12 mb-30">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/text-utils.png" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>ReactJS Web App</span>
                                    <h4><a href="https://textutils56.netlify.app/" target='blank'>Text-Utils</a></h4> 
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-6 col-md-6 mb-30">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/column-2.jpg" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>Web App</span>
                                    <h4><a href="https://weather56.netlify.app/">weather</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 mb-30">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/column-3.jpg" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>Marketing</span>
                                    <h4><Link to="/portfolio-details-two">Global Banking</Link></h4> 
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-12 mb-60">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/weather.png" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>HTML, CSS, JS</span>
                                    <h4><a href="https://weather56.netlify.app/" target='blank'>weather</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 mb-60">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/clock.png" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>HTML, CSS, JS</span>
                                    <h4><a href="https://live-clock56.netlify.app/" target='blank'>Clock</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 mb-60">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/drumkit.png" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>HTML, CSS, JS</span>
                                    <h4><a href="https://drumkit56.netlify.app/" target='blank'>DrumKit</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 mb-60">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/facebook.png" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>Tailwind CSS</span>
                                    <h4><a href="https://facebook56.netlify.app/" target='blank'>Facebook Login Clone</a></h4> 
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-12 t-center">
                            <Link className="theme-btn-1" to="">All Project<i className="fal fa-long-arrow-right"></i></Link>
                        </div> */}
                    </div>
                </div>
            </div>
            <FooterThree></FooterThree>
        </>
    );
};

export default Portfolio;