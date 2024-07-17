import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Team1 from '../img/testimonial-1.jpg';
import Team2 from '../img/testimonial-2.jpg';
import Team3 from '../img/testimonial-3.jpg';

function Devlope() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-aos="zoom-in-up"
          style={{ maxWidth: 600 }}
        >
          <h6 className="section-title bg-white text-center text-primary px-3">
            Our Team
          </h6>
          <h1 className="display-6 mb-4">
            We Are A Creative Team For Your Dream Project
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="flip-left">
            <div className="team-item text-center p-4">
              <img
                className="img-fluid border rounded-circle w-75 p-2 mb-4"
                src={Team1}
                alt=""
              />
              <div className="team-text">
                <div className="team-title">
                  <h5>Jeyanthi Krishnan</h5>
                  <span>Talent Acquisition Specialist </span>
                </div>
                <div className="team-social">
                  <a className="btn btn-square btn-primary rounded-circle" href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle" href="https://x.com/twitt_login?lang=en">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle" href="https://www.instagram.com/accounts/login/?hl=en">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="flip-left">
            <div className="team-item text-center p-4">
              <img
                className="img-fluid border rounded-circle w-75 p-2 mb-4"
                src={Team2}
                alt=""
              />
              <div className="team-text">
                <div className="team-title">
                  <h5>Subash Thuraimoni
                  </h5>
                  <span>Talent Acquisition Specialist </span>
                </div>
                <div className="team-social">
                  <a className="btn btn-square btn-primary rounded-circle" href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle" href="https://x.com/twitt_login?lang=en">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle" href="https://www.instagram.com/accounts/login/?hl=en">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="flip-left">
            <div className="team-item text-center p-4">
              <img
                className="img-fluid border rounded-circle w-75 p-2 mb-4"
                src={Team3}
                alt=""
              />
              <div className="team-text">
                <div className="team-title">
                  <h5>Full Name</h5>
                  <span>Designation</span>
                </div>
                <div className="team-social">
                  <a className="btn btn-square btn-primary rounded-circle" href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle" href="https://x.com/twitt_login?lang=en">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle" href="https://www.instagram.com/accounts/login/?hl=en">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Devlope;
