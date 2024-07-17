import React from 'react';
import { HashRouter , Route, Routes} from 'react-router-dom';
import About from './Component/About';
import Carosel from './Component/Carosel';
import Contact from './Component/Contact';
import Devlope from './Component/Devlope';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Project from './Component/Project';
import Service from './Component/Service';
import WhyChoose from './Component/WhyChoose';
import Main from './Component/Main';
import ChatBot from './Component/ChatBot'
import AIdetails from './Component/AIdetails';
import 'font-awesome/css/font-awesome.min.css';
import Webdesigndetails from './Component/Webdesigndetails';
import Appdevelopdetails from './Component/Appdevelopdetails';
import Geospatial from './Component/Geospatial';
import ScrollToTop from './Component/ScrollToTop';
import MLdetails from './Component/MLdetails';
import Clouddetails from './Component/Clouddetails';


function App() {
  return (
    
    <>
     
  <HashRouter>
<ScrollToTop />
  <Header/>
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/contact" element={<Contact/>}/>
    {/* <Route path="/develope" element={<Devlope/>}/> */}
    <Route path="/whychoose" element={<WhyChoose/>}/>
    <Route path="/carosel" element={<Carosel/>}/>
    <Route path="/service/AIdetails" element={<AIdetails />}/>
    <Route path="service/Webdesigndetails" element={<Webdesigndetails />}/>
    <Route path="service/Appdevelopdetails" element={<Appdevelopdetails/>}/>
    <Route path="service/Geospatial" element={<Geospatial />}/>
    <Route path="service/MLdetails" element={<MLdetails/>}/>
    <Route path="service/Clouddetails" element={<Clouddetails />}/>
  </Routes>

  <Footer/>
  {/* <ChatBot/> */}
  </HashRouter>
    </>
  );
}

export default App;
