import React from 'react';
import { Container } from 'react-bootstrap';
import webdesign from '../img/webdesignonee.jpg';
import webdesign1 from '../img/webdesign1.jpg';
import './webdesign.css';

const Webdesigndetails = () => {
  return (
    <div>
      <div className="banner-container">
        <img src={webdesign} alt="WD" className="banner-image" />
      </div>
      <Container>
        <div>
          <h2>Web Design</h2>
          <p style={{textAlign:'justify'}}>Constant innovation is not just a necessity, but also need of the day. A great website is possible with only proper web designing, which is undoubtedly the very essence of any design. At NIMIR, we are dedicated fully towards offering our clients with top quality, affordable and productive design. We help to realize your imagination!</p>
          <div className="image-container-right">
            <img src={webdesign1} alt="WD1" />
          </div>
          <p  style={{textAlign:'justify'}}>At NIMIR, we are proud to state that we are associated with some of the best, dedicated professionals who can offer top quality web designing solutions. Our expert web designers do keep track to ensure that the web pages are kept at the right place and also are found user friendly.</p>
          <p  style={{textAlign:'justify'}}>Our qualified and talented designing team has excellent grasp over Adobe Products, HTML, JavaScript, CSS, and PHP, all of which do play a crucial role to create an attractive and functional website. The message intended to be delivered to the viewers are clearly depicted by the design created by our professionals. Your business is properly portrayed by the design. Whether it is custom design, static design, website re-design, flash design or dynamic design, our talented designers are sure to fulfill your dreams. We are confident of your customized orders being completed within the stipulated time. Our main motto is to create a functional and user friendly web design that will convert your business into success</p>
          <ul>
            <li>Powerful market study, competitors including their strategy used</li>
            <li>Careful analysis and study of user thoughts and experience, search engine optimization and technical enhancements</li>
            <li>Not just by mere words, but also are achieved through accurate blending of experience, knowledge and creativity</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Webdesigndetails;
