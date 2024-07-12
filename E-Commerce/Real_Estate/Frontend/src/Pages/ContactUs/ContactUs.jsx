import React from "react";

//___ Css ___/
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="ContactUs page content">
      <h3 className="pageTitle">Contact us</h3>
      <div className="contactWrapper d-flex gap-20">
        <div className="left">1</div>
        <div className="right">
          <form>
            <h3>Send message</h3>
            <div className="inputWrapper">
              <label htmlFor="name">Name</label> <br />
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="inputWrapper">
              <label htmlFor="email">Email</label> <br />
              <input type="text" id="email" placeholder="Enter your email" />
            </div>
            <div className="inputWrapper">
              <label htmlFor="subject">Subject</label> <br />
              <input type="text" id="subject" placeholder="Type subject" />
            </div>
            <div className="inputWrapper">
              <label htmlFor="message">Message</label> <br />
              <textarea name="" id="message" placeholder="Message"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
