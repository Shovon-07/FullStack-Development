import { useState, useRef, lazy, Suspense } from "react";
import { useOutletContext } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ToastContainer, toast } from "react-toastify";
const JoditEditor = lazy(() => import("jodit-react"));
import { Helmet } from "react-helmet";

//___ Css ___//
import "./ContactUs.css";
import "../../assets/Css/TextEditor.css";
import "react-toastify/dist/ReactToastify.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";
import Loader from "../../Components/Loader/Loader";

const ContactUs = () => {
  const [setLoader] = useOutletContext();

  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    // message: "",
  });

  const editor = useRef(null);
  const [message, setMessage] = useState("");

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
    } else if (message == "") {
      toast.error("Please type some text message");
    } else {
      const payload = {
        name: input.name,
        email: input.email,
        subject: input.subject,
        message: message,
      };
      setLoader(true);
      await AxiosClient.post("/send-mail", payload)
        .then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.msg);
            setInput({ name: "", email: "", subject: "" });
            setMessage("");
            console.clear();
            setLoader(false);
          } else {
            toast.error(res.data.msg);
            console.log(res.data.msg);
            setLoader(false);
          }
        })
        .catch((err) => {
          console.log(`Error = ${err}`);
        });
    }
  };

  return (
    <div className="ContactUs page content">
      <div className="d-flex pageTitle">
        <h3>Contact us</h3>
      </div>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}
      <div className="contactWrapper d-flex-start">
        <div className="left d-flex">
          <div className="scanNow d-flex">
            <h3>Scann now</h3>
            <LazyLoadImage
              src={`${imgPath}Utility/whatsApp-qr.png`}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
            />
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
            <h3>
              Send <span>message</span>
            </h3>
            <div className="inputWrapper">
              <input
                type="text"
                name="name"
                value={input.name}
                placeholder="Enter your name"
                onChange={handleInput}
              />
            </div>
            <div className="inputWrapper">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={input.email}
                onChange={handleInput}
              />
            </div>
            <div className="inputWrapper">
              <input
                type="text"
                name="subject"
                placeholder="Type subject"
                value={input.subject}
                onChange={handleInput}
              />
            </div>
            <div className="inputWrapper textEditor">
              <Suspense fallback={<Loader />}>
                <JoditEditor
                  ref={editor}
                  value={message}
                  tabIndex={1}
                  onBlur={(newContent) => setMessage(newContent)}
                  onChange={(newContent) => {}}
                />
              </Suspense>
            </div>
            <button type="submit" className="btn">
              send
            </button>
          </form>
        </div>
      </div>

      <ToastContainer
        position="bottom-left"
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
