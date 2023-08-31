import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Work = () => {
    return (
        <div className="work__area section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="work__area-title lg-t-center"> 
                            <span className="subtitle one">How IT Work</span>
                            <h2>Simple Work Process</h2> 
                        </div>
                    </div>
                </div>
                <div className="row mb-110">
                    <div className="col-xl-4 col-lg-4 col-md-6 pr-110 lg-mb-30">
                        <div className="work__area-item"> <span>01</span>
                            <div className="work__area-item-icon"> <img src="assets/img/icon/work-1.png" alt="" /> </div>
                            <div className="work__area-item-content">
                                <h4>Concept Creation</h4>
                                <p>brainstorm and develop innovative concepts tailored to your project's goals</p>
                            </div>
                            <div className="work__area-item-shape"> <img src="assets/img/icon/shape-1.png" alt="" /> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 pl-55 pr-55 md-mb-30">
                        <div className="work__area-item"> <span>02</span>
                            <div className="work__area-item-icon"> <img src="assets/img/icon/work-2.png" alt="" /> </div>
                            <div className="work__area-item-content">
                                <h4>Sketch Drawing</h4>
                                <p>translate ideas into visual sketches and explore different layouts</p>
                            </div>
                            <div className="work__area-item-shape"> <img src="assets/img/icon/shape-2.png" alt="" /> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 pl-110">
                        <div className="work__area-item"> <span>03</span>
                            <div className="work__area-item-icon"> <img src="assets/img/icon/work-3.png" alt="" /> </div>
                            <div className="work__area-item-content">
                                <h4>Final Design</h4>
                                <p>bring the designing concept to life by creating the final design</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="faq">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" className="faq-item">
                                    <Accordion.Header className="faq-item-card-header">
                                        <h5>What types of projects have you worked on?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body className='faq-item-card-header-content'>
                                        <p>
                                            As a creative professional, I've had the opportunity to work on a diverse range of projects, including web design, AI & ML integration, Branding, and more. Feel free to explore my portfolio to see examples of my work in these areas.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className="faq-item">
                                    <Accordion.Header className="faq-item-card-header">
                                        <h5>Do you collaborate with clients remotely?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body className='faq-item-card-header-content'>
                                        <p>
                                            Absolutely! I have experience collaborating with clients from different parts of the world. Thanks to technology, we can effectively communicate and work together on projects regardless of location.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="faq-item">
                                    <Accordion.Header className="faq-item-card-header">
                                        <h5>How can I contact you for a project inquiry?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body className='faq-item-card-header-content'>
                                        <p>
                                            I'd love to hear about your project! You can reach out to me through the contact form on my website or directly via email. Let's discuss your ideas and how I can help bring them to life.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;