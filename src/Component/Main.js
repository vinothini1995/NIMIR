import React from 'react'
import Carosel from './Carosel'
import Project from './Project'
import About from './About'
import Service from './Service'
import WhyChoose from './WhyChoose'
import Devlope from './Devlope'
import Contact from './Contact'
import Blog from './Blog'
import 'font-awesome/css/font-awesome.min.css';



function Main() {
  return (
    <>
    {/* <Carosel/> */}
    <Project/>
    <About/>
    <Service/>
    <WhyChoose/>
    {/* <Blog/> */}
    {/* <Devlope/> */}
    <Contact/>
    </>
  )
}

export default Main;