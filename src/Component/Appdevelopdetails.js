import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faCloud, faCogs, faShieldAlt, faPalette } from '@fortawesome/free-solid-svg-icons';
import './Appdevelopdetails.css';
import appdevelop from '../img/mobile-app-development.jpeg';
import appdevelop1 from '../img/mobileappicons.png';

const services = [
  { icon: faCode, title: 'Custom Development', description: 'The same size does not fit all. We develop a custom app to address the demand of your changing business requirements.' },
  { icon: faMobileAlt, title: 'Mobile Apps', description:  'High-quality mobile applications tailored to your business needs. We ensure seamless performance and user engagement across Android and iOS platforms.' },
  { icon: faCloud, title: 'Cloud Integration', description:  'Integrate your mobile apps with scalable cloud solutions for enhanced performance, data security, and accessibility from anywhere.' },
  { icon: faCogs, title: 'Maintenance & Support', description: 'We use several practices to maintain your applications. Such as functionality and technical enhancements, regular code reviews, testing, and design updates.' },
  { icon: faShieldAlt, title: 'Testing & Bugs Fixing', description: 'Thorough testing processes to identify and fix bugs, ensuring your app delivers a flawless user experience and meets quality standards.'},
  { icon: faPalette, title: 'Web To App', description: 'Every business wants to deliver an omnichannel experience to users. We create a mobile app for your existing web application.' },
];

const Appdevelopdetails = () => {
  return (
    <div>
      <div className="banner-container">
        <img src={appdevelop} alt="WD" className="banner-image" />
      </div>
      <Container>
        <div className="text-section">
          <h1>We are a Top-Rated Custom<br /> Mobile App Development Company</h1>
          <p style={{textAlign:'justify'}}>NIMIR uses cutting-edge technologies to develop custom mobile applications for different platforms. Be it native mobile apps or cross-platform apps, we understand your needs and offer a comprehensive range of mobile app development services for Android and iOS platforms. We ensure that all your applications are secured and have a good UI-UX design. Hire our mobile app development engineers.</p>
        </div>
        <div className="text-section">
          <h1>Business-Friendly Mobile App Development Services for Different Platforms</h1>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <Card className="service-card">
                <Card.Body className="text-center">
                  <FontAwesomeIcon icon={service.icon} size="3x" className="mb-3" />
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="tech-stack-container">
        <Container>
          <div className="tech-stack">
            <h1>Mobile App Development Tech Stack at NIMIR</h1>
            <h3>Cross-Platform App Development</h3>
            <p>Front-end: React Native, Flutter</p>
            <p>Back-end: Node, Laravel, Firebase, Python, Java, .Net, PHP, GraphQL</p>
            <h3>iOS App Development</h3>
            <p>Front-end: Swift, Objective-C</p>
            <p>Back-end: Node, Laravel, Firebase, Python, Java, Dot Net, PHP, GraphQL</p>
            <h3>Android App Development</h3>
            <p>Front-end: Java, Kotlin</p>
            <p>Back-end: Node, Laravel, Firebase, Python, Java, .Net, PHP, GraphQL</p>
          </div>
        </Container>
        {/* <div className="image-container">
          <img src={appdevelop1} alt="AD1" className="img-fluid" />
        </div> */}
      </div>
    </div>
  );
};

export default Appdevelopdetails;
