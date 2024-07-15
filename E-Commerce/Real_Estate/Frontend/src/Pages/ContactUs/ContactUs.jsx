import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import AxiosClient from "../../assets/Js/AxiosClient";
import { ToastContainer, toast } from "react-toastify";

//___ Images ___//
import WhatsApp from "../../assets/Images/whatsApp-qr.png";

//___ Css ___//
import "./ContactUs.css";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [setLoader] = useOutletContext();

  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.name == "") {
      toast.error("Please enter your name");
    } else if (input.email == "") {
      toast.error("Please enter your email");
    } else if (input.subject == "") {
      toast.error("Please enter subject");
    } else if (input.message == "") {
      toast.error("Please type some text");
    } else {
      try {
        const payload = {
          name: input.name,
          subject: input.subject,
          email: input.email,
          message: input.message,
        };
        setLoader(true);
        await AxiosClient.post("/send-mail", payload).then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.msg);
            setLoader(false);
          } else {
            toast.error(res.data.msg);
            setLoader(false);
          }
        });
      } catch {
        toast.error(res.data.msg);
      }
    }
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

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ContactUs;
