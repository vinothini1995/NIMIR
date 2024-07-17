import React, { useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Ensure you have Font Awesome installed
import WOW from 'wowjs';
import AI from '../img/AIFRONT.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap installed
import Home from '../img/forhome1.png';
import styled from 'styled-components';
import Home1 from '../img/AI-Chatbots.jpg';

function Project() {
  useEffect(() => {
    new WOW.WOW().init(); // Initialize WOW.js
  }, []);

  const Image = styled.img`
    width: 100%; /* Adjust width as needed */
    margin-top: 20px; /* Example margin adjustment */
    object-fit: cover;
  `;

  return (
    <div className="container-xxl py-5" style={{ background: 'linear-gradient(to right, #000000, #434349)' }}>
      <div className="container">
        <h1 style={{ color:'#987070' }}>Transformative AI Solutions for Today's Enterprises</h1>
        <p style={{ color: 'white',textAlign:'justify', }}>
        We partner with our clients to revolutionize their solutions with cutting-edge AI technologies, delivering pioneering products that captivate users and accelerate business growth.

        </p>
        <Image src={Home} alt='home' className="img-fluid" />
        <div className="row g-4 text-white mt-4">
          <div className="col-md-8">
            <h3  style={{ color:'#987070' }}>Harnessing the Potential of Artificial Intelligence:</h3>
            <p style={{ textAlign: 'justify',alignItems:'justify' }}>          NIMIR'S leadership has been at the forefront of machine learning. We work side-by-side with our clients, delivering expert advice and deploying AI and machine learning solutions. Together, we reveal new insights, streamline processes, and transform industries.

            </p>
            { <Image src={Home1} alt='home' className="img-fluid" /> }
            <h3  style={{ color:'#987070'}}>Pioneering Chatbot Technology</h3>
            <p style={{textAlign:'justify'}}>Craft advanced Conversational AI and Chatbot solutions tailored to your varied business needs. As Artificial Intelligence reshapes business landscapes, our extensive expertise in AI/ML across numerous industries ensures we deliver the most innovative solutions for your company</p>
             <h3  style={{ color:'#987070'}}>A Variety Of Services To Choose From</h3>
             <p style={{textAlign:'justify'}}>A Variety Of Services To Choose From
             As an organization built to assist businesses in every sector, we are bound with all the Chatbots And Conversational AI services and solutions at your disposal.</p>
         <ul>
          <li>Custom Chatbot Development</li>
          <li>Chatbot Integration</li>
          <li>Custom AI Voice Assistant</li>
          <li>Custom CRM/ERP Bots</li>
         </ul>
         
          </div>
          <div className="col-md-4">
            <h3  style={{color:'#987070'
   }}>Unlocking infinite horizons:</h3>
            <p style={{ textAlign: 'justify' }}>
              Welcome to the transformative world of AI! At NIMIR, we believe that Generative AI holds the key to revolutionizing industries and reshaping the way we interact with technology. Our innovative Generative AI services harness the power of cutting-edge AI and natural language processing (NLP) to create intelligent systems that can comprehend and respond to human language in ways previously unimaginable.
            </p>
            <p style={{ textAlign: 'justify' }}>
             <h5  style={{ color:'#987070' }}>Content creation and marketing:</h5>  With our advanced Generative AI solutions, businesses can automate content generation, from blog posts and articles to social media updates. This not only saves time but also ensures consistent, high-quality content that resonates with target audiences, leading to improved engagement and brand loyalty.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Our Generative AI offerings are built on state-of-the-art AI frameworks and tools, including sophisticated NLP models, LLMs, neural networks, and deep learning algorithms. These cutting-edge technologies empower businesses to automate repetitive tasks, gain valuable customer insights, and optimize decision-making processes, transforming their operations and fostering innovation at scale.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Join us in embracing the future of AI innovation with NIMIR'S Generative AI services. Together, we'll unlock endless possibilities for your business's growth and success, as we explore new frontiers in AI-driven transformation.
            </p>
          </div>
        </div>
        <div className="row g-4 mt-4" >
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s"  >
            <div className="fact-item bg-light rounded text-center h-100 p-5" style={{ background: 'linear-gradient(to right, #C0C0C0, #DCDCDC)', borderRadius: '10px' }}>
              <i className="fa fa-certificate fa-4x text-primary mb-4"  />
              <h5 className="mb-3">FOUNDED</h5>
              <h1 className="display-5 mb-0" data-toggle="counter-up">2022</h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="fact-item bg-light rounded text-center h-100 p-5" style={{ background: 'linear-gradient(to right, #C0C0C0, #DCDCDC)', borderRadius: '10px' }}>
              <i className="fa fa-users fa-4x text-primary mb-4" />
              <h5 className="mb-3">Team Members</h5>
              <h1 className="display-5 mb-0" data-toggle="counter-up">2-10</h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="fact-item bg-light rounded text-center h-100 p-5" style={{ background: 'linear-gradient(to right, #C0C0C0, #DCDCDC)', borderRadius: '10px' }}>
              <i className="fa fa-smile-o fa-4x text-primary mb-4" />
              <h5 className="mb-3">Satisfied Clients</h5>
              <h1 className="display-5 mb-0" data-toggle="counter-up">1234</h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="fact-item bg-light rounded text-center h-100 p-5" style={{ background: 'linear-gradient(to right, #C0C0C0, #DCDCDC)', borderRadius: '10px' }}>
              <i className="fa fa-check fa-4x text-primary mb-4" />
              <h5 className="mb-3">Projects Done</h5>
              <h1 className="display-5 mb-0" data-toggle="counter-up">1234</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
