import React from "react";
import ContactForm from "../ContactFrom/ContactForm";

const ContactArea = (props) => {
  return (
    <section
      className={`wpo-contact-section section-padding ${props.contactClass}`}
      id="contact"
    >
      <div className="container">
        <div className="wpo-contact-section-wrapper">
          <div className="row">
            <div className="col col-xl-5 col-lg-6">
              <div className="contact-info-wrap">
                <div className="contact-info-title">
                  <h3>Contact Info</h3>
                  <p>
                    Here is my latest work. Where you will find my creativity
                    and my working talents.
                  </p>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fi flaticon-house"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>Contact Info</h4>
                    <p>244 Royal Ln. Mesa, New Jersey</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fi flaticon-email"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>Email Address</h4>
                    <p>Gigerlydemo@gmail.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fi flaticon-phone-call"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>Phone</h4>
                    <p>(684) 555-0102</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-7 col-lg-6 col-md-12 col-12">
              <ContactForm btnClass={props.btnClass} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
