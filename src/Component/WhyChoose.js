import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service2 from '../img/df.png';
import './Header.css';
import './Plugin.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function WhyChoose() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-aos="zoom-in-right">
            <div className="h-100">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                Why Choose Us
              </h6>
              <h1 className="display-6 mb-4">
                Why People Trust Us? Learn About Us!
              </h1>
              <p className="mb-4" style={{textAlign:'justify'}}>
              Our team consists of seasoned professionals with extensive experience in the software industry. We bring deep technical knowledge and innovative thinking to every project, ensuring the highest quality outcomes.
              </p>
              <div className="row g-4">
                <div className="col-12">
                  <div className="skill">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Web & Mobile Apllication</p>
                      <p className="mb-2">85%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: '85%' }}
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="skill">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Ai & ML Project</p>
                      <p className="mb-2">90%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: '90%' }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="skill">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Cloud &amp; Data Engineering</p>
                      <p className="mb-2">95%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: '95%' }}
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-aos="flip-right">
            <div className="img-border">
              <img className="img-fluid" src={Service2} alt="Service" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
