import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner__area" style={{backgroundImage: `url('assets/img/banner.png')`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__area-content">
                            <h1>Hi! <span>MUHAMMAD AZEEM</span></h1> 
                            <Link className="theme-btn" to="/portfolio">My Projects <i className="fal fa-long-arrow-right"></i></Link> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner__area-bottom">
                <div className="banner__area-bottom-icon">
                    <ul>
                        <li><a href="https://www.facebook.com/profile.php?id=100088591172188"><i className="fab fa-facebook"></i></a></li>
                        {/* <li><Link to=""><i className="fab fa-behance"></i></Link></li> */}
                        <li><a href="https://twitter.com/AZEEM561"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/muhammad-azeem-035996202/"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://www.instagram.com/azeemmuhammad0150/"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;