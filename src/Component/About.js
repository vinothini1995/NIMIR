import React, { useEffect } from 'react';
import "./Header.css";
import './Plugin.css';
import About1 from '../img/AIFRONT.png';
import Aos from 'aos';
import android from '../img/android.webp';
import ios11 from '../img/ios 11.webp';
import flask from '../img/flask.webp';
import git from '../img/git.webp';
import laravel from '../img/laravel.webp';
import python from '../img/python.webp';
import angular from '../img/Angular.webp';
import java from '../img/java.webp';
import mat from '../img/mat.webp';
import plot from '../img/plot.webp';
import scikit from '../img/scikitt.png';
import numpy from '../img/numpyy.png';
import pytorch from '../img/pytorch.png';
import yoyo from '../img/yoloo.png';
import website from '../img/Website.webp';
function About() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      {/* Internal CSS Styles */}
      <style jsx>{`
        .partners-section {
          text-align: center;
          margin-top: 50px;
        }

        .partners-logos {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 100px;
          margin-top: 20px;
        }

        .partners-logos img {
          width: 100px; /* Adjust the size as needed */
          height: auto;
          margin: 10px;
        }

        @media (min-width: 768px) {
          .partners-logos img {
            width: 120px; /* Adjust the size for larger screens */
          }
        }
      `}</style>

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-aos="flip-left">
              <div className="img-border">
                <img className="img-fluid" src={About1} alt="" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-aos="zoom-in-left">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  About Us
                </h6>
                <h1 className="display-6 mb-4">
                  <span className="text-primary" data-aos="zoom-in-left">"NIMIR" </span> MEANS "ARISE" NIMIR IS A TAMIL WORD
                </h1>
                <p data-aos="zoom-in-left" style={{ textAlign: 'justify' }}>
                  We are a team of experienced professionals dedicated to providing comprehensive IT consulting services to businesses of all sizes and industries. With a deep understanding of technology trends and industry best practices, we help our clients leverage the power of IT to achieve their strategic objectives and overcome complex challenges
                </p>
                <p className="mb-4" data-aos="zoom-in-left" style={{ textAlign: 'justify' }}>
                  <h6>Setting the tone, sharing the ambition, changing tomorrow.</h6>
                  If you collaborate with NIMIR then you are working with a team who strive to provide solutions that help you do business faster, better, and smarter than ever before.
                </p>
                <p className="mb-4" data-aos="zoom-in-left" style={{ textAlign: 'justify' }}>
                  <h6>Our Commitment
                  </h6>
                  At NIMIR, We are passionate about the transformative power of AI and dedicated to making it accessible and beneficial for all. We continually invest in research and development to stay ahead of the curve and deliver the most effective AI solutions.
                </p>
                <a className="btn btn-primary rounded-pill py-3 px-5" href="" data-aos="zoom-in-left">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="partners-section mt-5">
          <h3>Leverage Our Alliances With Top Tech Firms To Build Transformative Solutions</h3>
          <h2 style={{color:'blue',marginTop:'9px'}}> Our Partners</h2>
          <div className="partners-logos">
            <img src={android} alt="android" />
            <img src={ios11} alt="ios" />
            <img src={flask} alt="flask" />
            <img src={git} alt="git" />
            <img src={laravel} alt="laravel" />
            <img src={python} alt="python" />
            <img src={angular} alt="angular" />
            <img src={java} alt="java" />
            <img src={mat} alt="mat" />
            <img src={plot} alt="plot" />
            <img src={scikit} alt="scikit" />
            <img src={numpy} alt="numpy" />
            <img src={pytorch} alt="pytorch" />
            <img src={yoyo} alt="yoyo" />
          </div>
        </div>
        <img src={website} alt="web" style={{width:'100%'}} />
      </div>
      {/* About End */}
    </>
  )
}

export default About;
