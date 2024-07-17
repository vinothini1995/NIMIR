import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import './Plugin.css';
import './ServiceCard.css';
import Service1 from '../img/service-1.png';
import Service2 from '../img/service-2.png';
import Service3 from '../img/service-3.png';
import Service4 from '../img/service-4.png';
import Service5 from '../img/service-5.png';
import Service6 from '../img/geospatial.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Service() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-aos="zoom-in" style={{ maxWidth: 600 }}>
          <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
          <h1 className="display-6 mb-4">We Focus On Making The Best In All Sectors</h1>
        </div>
        <div className="row g-4">
          {[
            { img: Service1, title: 'Web Design',path:'/service/Webdesigndetails' },
            { img: Service2, title: 'App Development',path:'/service/Appdevelopdetails' },
            { img: Service3, title: 'Cloud Service',path:'/service/Clouddetails' },
            { img: Service4, title: 'Artifical Intelligence', path: '/service/AIdetails' },
            { img: Service5, title: 'Machine Learning',path:'/service/MLdetails' },
            { img: Service6, title: 'Geospatial Technology',path:'/service/Geospatial' },
          ].map((service, index) => (
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-up" key={index}>
              <Link to={service.path ? service.path : '#'} className="service-item card text-decoration-none">
                <div className="card-image">
                  <img className="img-fluid rounded mb-4" src={service.img} alt={service.title} />
                </div>
                <div className="card-body">
                  <h5 className="heading">{service.title}</h5>
                  <div className="learn-more-icon">
                    <FontAwesomeIcon icon={faArrowRight} />Learn More
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
