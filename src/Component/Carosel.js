import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from '../img/logo11.png';
import C1 from '../img/carousel-1.jpg';
import C2 from '../img/carousel-2.jpg';
import C3 from '../img/carousel-3.jpg';

function Carosel() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '10px', backgroundColor: '#FFD700' }} />
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        interval={2000}
      >
        <div data-aos="fade-down">
          <img src={C3} alt="Carousel Image 1" style={{ maxHeight: "600px", width: "100%",  }} />
          <div style={{
             position: "absolute",
             top: "50%",
             left: "50%",
             transform: "translate(-50%, -50%)",
             color: "white",
             padding: "20px",
             textAlign: "center"
          }}>
           
            {/* <h2 style={{ fontSize: 300, color: "		#0080bf",fontWeight:  'bold' ,  }}>NIMIR</h2>
            <div style={{  width: '100%', height: '10px', backgroundColor: '#FFD700' }} />
            <h5 style={{ fontSize: 120 }}>CORPORATION</h5>
            <p style={{ fontSize: 50 }}>IT CONSULTING AND SERVICES</p> */}
          </div>
        </div>
        <div data-aos="fade-down">
          <img src={C2} alt="Carousel Image 2" style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }} />
          <div style={{
             position: "absolute",
             top: "50%",
             left: "50%",
             transform: "translate(-50%, -50%)",
             color: "white",
             padding: "20px",
             textAlign: "center"
          }}>
            {/* <h2>Second Image</h2>
            <p>Some description about the second image.</p> */}
          </div>
        </div>
        <div data-aos="fade-down">
          <img src={C1} alt="Carousel Image 3" style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }} />
          <div style={{
             position: "absolute",
             top: "50%",
             left: "50%",
             transform: "translate(-50%, -50%)",
             color: "white",
             padding: "20px",
             textAlign: "center"
          }}>
            {/* <h2>Third Image</h2>
            <p>Some description about the third image.</p> */}
          </div>
        </div>
      </Carousel>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '10px', backgroundColor: '#FFD700' }} />
    </div>
  );
}

export default Carosel;
