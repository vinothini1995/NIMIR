import React, { useEffect } from 'react';
import './Header.css';
import './Plugin.css';
import Logo from '../img/logo1.jpg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


function Header() {
  useEffect(() => {
    AOS.init({
      
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <>

     <div className="container-fluid bg-light px-0 wow fadeIn" data-aos="fade-down">
      <div className="row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start"></div>
        <div className="col-lg-6 px-5 text-end">
          <small>Follow us:</small>
          <div className="h-100 d-inline-flex align-items-center">
            <a className="btn-square text-primary border-end rounded-0" href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="btn-square text-primary border-end rounded-0" href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="btn-square text-primary border-end rounded-0" href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="btn-square text-primary pe-0" href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" style={{ backgroundColor: '#287FFB' }}>
      <a href="#" className="navbar-brand ms-3 d-lg-none">MENU</a>
      <button type="button" className="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav me-auto p-3 p-lg-0">
          <Link to="/" className="nav-item nav-link">Home</Link>
          <Link to="/about" className="nav-item nav-link">About Us</Link>
          <Link to="/service" className="nav-item nav-link">Service</Link>
          <Link to="/whychoose" className="nav-item nav-link">Why Choose</Link>
          {/* <Link to="/develope" className="nav-item nav-link">Team</Link> */}
          <Link to="/contact" className="nav-item nav-link">Contact</Link>
          
        </div>
        <Link to="/contact" className="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block">Enquiry</Link>
      </div>
    </nav>
      <div className="container-fluid py-4 px-5 wow fadeIn" data-aos="fade-down">
        <div className="row align-items-center top-bar">
          <div className="col-lg-4 col-md-12 text-center text-lg-start">
            <Link to="/" className="navbar-brand m-0 p-0">
              <img src={Logo} alt="Logo" style={{ width: '150px', height: '100px' }} />
            </Link>
          </div>
          <div className="col-lg-8 col-md-7 d-none d-lg-block">
      <div className="row">
        <div className="col-4">
          <div className="d-flex align-items-center justify-content-end">
            <div className="flex-shrink-0 btn-lg-square border rounded-circle">
              <FontAwesomeIcon icon={faClock} className="text-primary" />
            </div>
            <div className="ps-3">
              <p className="mb-2">Opening Hour</p>
              <h6 className="mb-0">Monday - Friday: 9am - 5pm</h6>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex align-items-center justify-content-end">
            <div className="flex-shrink-0 btn-lg-square border rounded-circle">
              <FontAwesomeIcon icon={faPhone} className="text-primary" />
            </div>
            <div className="ps-3">
              <p className="mb-2">Call Us</p>
              <h6 className="mb-0">+1 302-786-5554</h6>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex align-items-center justify-content-end">
            <div className="flex-shrink-0 btn-lg-square border rounded-circle">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
            </div>
            <div className="ps-3">
              <p className="mb-2">Address</p>
              <h6 className="mb-0">Newark, Delaware 19702, US</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
      
    
    </>
  );
}

export default Header;
