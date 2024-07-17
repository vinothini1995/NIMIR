import Aos from 'aos';
import React, { useEffect } from 'react'

function Contact() {
    useEffect(() => {
        Aos.init({
         
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
     
  return (
    <>
    {/* Contact Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-aos="zoom-in-up"
          style={{ maxWidth: 600 }}
        >
          <h6 className="section-title bg-white text-center text-primary px-3">
            Contact Us
          </h6>
          <h1 className="display-6 mb-4">
            If You Have Any Query, Please Feel Free To Contact Us
          </h1>
        </div>
        <div className="row g-0 justify-content-center">
          <div className="col-lg-8 wow fadeInUp"data-aos="zoom-out-down">
            <p className="text-center mb-4">
            Let us tailor a service package that meets your needs. Tell us a little about your business, and we will get back to you with some ideas as soon as possible.
             
            </p>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 200 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    className="btn btn-primary rounded-pill py-3 px-5"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Contact End */}
    {/* Google Map Start */}
    <div className="container-xxl pt-5 px-0 wow fadeIn"  data-aos="flip-left">
      <iframe
        className="w-100 mb-n2"
        style={{ height: 450 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49131.3766815375!2d-75.79774045760523!3d39.67871414065983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c77a9ae39789eb%3A0x2ee246f2974c385c!2sNewark%2C%20DE%2C%20USA!5e0!3m2!1sen!2sin!4v1720248946693!5m2!1sen!2sin"
        frameBorder={0}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
    {/* Google Map End */}
  </>
  
  )
}

export default Contact