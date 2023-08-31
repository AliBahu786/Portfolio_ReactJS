import React from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterOne';
import Header from '../Header/HeaderOne';
import { pageTitle } from '../PageTitle';
import Form from './Form';

const Contact = () => {
    pageTitle('Contact Us');
    return (
        <>
        <Header></Header>
        <div className="contact__area section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-5 col-lg-6">
                        <div className="contact__area-title">
                            <span className="subtitle">Contact Us</span>
                            <h2>You Need any help Contact with Us</h2> 
                        </div>
                        <div className="contact__area-info">
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="far fa-phone-alt"></i>
                                    <span>Phone :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <a href="tel:+123(458)896895">+92 3166172520</a>
                                </div>
                            </div>
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="fal fa-envelope"></i>
                                    <span>Email :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <a href="mailto:support@gamil.com">azeemmuhammad0150@gamil.com</a>
                                </div>
                            </div>
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="far fa-map-marker-alt"></i>
                                    <span>Location :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <a href='https://goo.gl/maps/qLNb43nkuL9qqQG57'>Chandrami, Sadiqabad, Punjab, Pakistan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact__area-bottom">
                            <div className="contact__area-bottom-form page">
                                <Form></Form>
                            </div>
                            <div className="contact__area-bottom-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14047.816819807473!2d70.16212544820095!3d28.32998755109142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3937424120b1be11%3A0x1dc82cef48988f7b!2sChandrami%2C%20Rahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693248993230!5m2!1sen!2s" loading="lazy"></iframe>
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

export default Contact;