import React from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterOne';
import Header from '../Header/HeaderOne';
import { pageTitle } from '../PageTitle';

const CyberSecurity = () => {
    pageTitle('CyberSecurity');
    return (
        <>
            <Header></Header>
            <div className="portfolio__column section-padding">
                <div className="container">
                    <div className="row"> 
                        <div className="col-xl-12 mb-30">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/certifications/CyberSecurity/cyber1.png" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>IBM Cyber Security</span>
                                    <h4><a href="https://www.coursera.org/account/accomplishments/verify/RLWQ2BL89HQN" target='blank'>Verify Cert.</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 mb-60">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/certifications/CyberSecurity/cyber2.png" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>ISC Security Principles</span>
                                    <h4><a href="https://www.coursera.org/account/accomplishments/verify/QX5VER4YQPHY" target='blank'>Verify Cert.</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 mb-60">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/certifications/CyberSecurity/cyber3.png" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>ISC IR, BC, DR</span>
                                    <h4><a href="https://www.coursera.org/account/accomplishments/verify/3QYK7FTZF6TM" target='blank'>Verify Cert.</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 mb-60">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/certifications/CyberSecurity/cyber4.png" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>ISC Access Controls</span>
                                    <h4><a href="https://www.coursera.org/account/accomplishments/verify/33BK2VHVR5PY" target='blank'>Verify Cert.</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 mb-60">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/certifications/CyberSecurity/cyber5.png" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>ISC Network Security</span>
                                    <h4><a href="https://www.coursera.org/account/accomplishments/verify/QP69GST7X8WP" target='blank'>Verify Cert.</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 mb-60">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/certifications/CyberSecurity/cyber6.png" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>ISC Security Operations</span>
                                    <h4><a href="https://www.coursera.org/account/accomplishments/verify/FRFHNRWQCPWL" target='blank'>Verify Cert.</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 mb-60">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/certifications/CyberSecurity/cyber7spec.png" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>Certified In Cybersecurity</span>
                                    <h4><a href="https://www.coursera.org/account/accomplishments/specialization/TYFQY23B8AJZ" target='blank'>Verify Cert.</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 mb-60">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/certifications/CyberSecurity/cyber8.png" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>Cyber Talk</span>
                                    {/* <h4><a href="https://facebook56.netlify.app/" target='blank'>Verify Cert.</a></h4>  */}
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

export default CyberSecurity;