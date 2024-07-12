import React, { useState } from "react";

//___ Images ___//
import WhatsApp from "../../assets/Images/whatsApp-qr.png";

//___ Css ___//
import "./ContactUs.css";

const ContactUs = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ContactUs page content">
      <h3 className="pageTitle">Contact us</h3>
      <div className="contactWrapper d-flex-start gap-20">
        <div className="left d-flex">
          <div className="scanNow d-flex">
            <h3>Scann now</h3>
            <img src={WhatsApp} alt="" />
          </div>
          <div className="contactInfo">
            <h1>Dangipara, Paba, Rajshahi</h1>
            <p>Email : mollaproperties@gmail.com</p>
            <p>Phone : 01788300918</p>
            <p>Phone : 01829674216</p>
          </div>
        </div>
        <div className="right d-flex">
          <form className="d-flex gap-30" onSubmit={handleSubmit}>
            <h3>Send message</h3>
            <div className="inputWrapper">
              {/* <label htmlFor="name">Name</label> <br /> */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={handleInput}
              />
            </div>
            <div className="inputWrapper">
              {/* <label htmlFor="email">Email</label> <br /> */}
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleInput}
              />
            </div>
            <div className="inputWrapper">
              {/* <label htmlFor="subject">Subject</label> <br /> */}
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Type subject"
                onChange={handleInput}
              />
            </div>
            <div className="inputWrapper">
              {/* <label htmlFor="message">Message</label> <br /> */}
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                onChange={handleInput}
              ></textarea>
            </div>
            <button type="submit" className="btn">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
