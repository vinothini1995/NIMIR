import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube, faLinkedinIn, faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Project1 from '../img/project-1.jpg'
import Project2 from '../img/project-2.jpg'
import Project3 from '../img/project-3.jpg'
import Project4 from '../img/project-4.jpg'
import Project5 from '../img/project-5.jpg'
import Project6 from '../img/project-6.jpg'
function Footer() {
  return (
    <div className="container-fluid bg-dark text-white footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Address</h5>
            <p className="mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white me-3" />
              Newark, Delaware 19702, US
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-white me-3" />
              +1 302-786-5554
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-white me-3" />
              info@example.com
            </p>
            {/* <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-secondary rounded-circle me-1" href="">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="btn btn-square btn-outline-secondary rounded-circle me-1" href="">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="btn btn-square btn-outline-secondary rounded-circle me-1" href="">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a className="btn btn-square btn-outline-secondary rounded-circle me-0" href="">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div> */}
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <a className="btn btn-link text-white" href="">
              About Us
            </a>
            <a className="btn btn-link text-white" href="">
              Contact Us
            </a>
            <a className="btn btn-link text-white" href="">
              Our Services
            </a>
            <a className="btn btn-link text-white" href="">
              Terms &amp; Condition
            </a>
            <a className="btn btn-link text-white" href="">
              Support
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Gallery</h5>
            <div className="row g-2">
              <div className="col-4">
                <img className="img-fluid rounded" src={Project1} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src={Project2} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src={Project3} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src={Project4} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src={Project5}alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src={Project6} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Newsletter</h5>
            <p>Let us tailor a service package that meets your needs. Tell us a little about your business, and we will get back to you with some ideas as soon as possible.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
              <input className="form-control bg-transparent border-secondary text-white w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              Copyright © <a href="#">2024 NIMIR CORPORATION</a> - All Rights Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a href="https://kitecareer.com" className="text-white">kitecareer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
