import { useState } from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Images ___//
import Img from "../../assets/Images/lagestProject/Project-2.png";

//___ Css ___//
import "./ProjectView.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectView = () => {
  const { id } = useParams();

  const [tabVal, setTabVal] = useState(1);
  const handleTab = (e) => {
    setTabVal(e.target.id);
    let tabId = tabVal;
    return tabId;
  };

  const onInit = () => {
    // console.log("lightGallery has been initialized");
  };

  return (
    <div className="ProjectView page content">
      <h3 className="pageTitle">Preview project {id}</h3>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}
      <div className="tab-container">
        <div className="tab-box">
          <button
            onClick={handleTab}
            id="1"
            className={`tab-btn ${tabVal == 1 ? "active" : ""}`}
          >
            Info
          </button>
          <button
            onClick={handleTab}
            id="2"
            className={`tab-btn ${tabVal == 2 ? "active" : ""}`}
          >
            Map
          </button>
          <button
            onClick={handleTab}
            id="3"
            className={`tab-btn ${tabVal == 3 ? "active" : ""}`}
          >
            Plot
          </button>
          <button
            onClick={handleTab}
            id="4"
            className={`tab-btn ${tabVal == 4 ? "active" : ""}`}
          >
            Features
          </button>
          <button
            onClick={handleTab}
            id="5"
            className={`tab-btn ${tabVal == 5 ? "active" : ""}`}
          >
            Gallery
          </button>
          <div className="line"></div>
        </div>
        <div className="content-box">
          {/* Brief outline start */}
          <div
            className={`contentItems briefOutlineContent ${
              tabVal == 1 ? "active" : ""
            }`}
          >
            <div className="left">
              <LazyLoadImage
                src={Img}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            <div className="right">
              <h2 style={{ marginBottom: "15px" }}>Details</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Developer</td>
                    <td>:</td>
                    <td>MOLLA PROPERTIES</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>:</td>
                    <td>House : 103, Paradise para, Tangail</td>
                  </tr>
                  <tr>
                    <td>Land area</td>
                    <td>:</td>
                    <td>8.00 ktha</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Brief outline end */}

          {/* Map start */}
          <div className={`contentItems map ${tabVal == 2 ? "active" : ""}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.05586754641!2d88.62525289999999!3d24.414126599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef9a89d36a4f%3A0xa3d190c128125221!2z4Kau4KeL4Kay4KeN4Kay4Ka-IOCmrOCmvuCnnOCmvyAtIE1vbGxhIEJhcmk!5e0!3m2!1sen!2sbd!4v1720317903670!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{
                border: "1px solid var(--light-2)",
                outline: "0",
                borderRadius: "12px",
                // boxShadow: "var(--shadow)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Map end */}

          <div
            className={`contentItems gallery gap-30 ${
              tabVal == 3 ? "active" : ""
            }`}
          >
            <div className="card">
              <img alt={Img} src={Img} />
            </div>
            <div className="card">
              <img alt={Img} src={Img} />
            </div>
            <div className="card">
              <img alt={Img} src={Img} />
            </div>
            <div className="card">
              <img alt={Img} src={Img} />
            </div>
          </div>
          <div
            className={`contentItems gallery gap-30 ${
              tabVal == 4 ? "active" : ""
            }`}
          >
            <div className="card">
              <img alt={Img} src={Img} />
            </div>
            <div className="card">
              <img alt={Img} src={Img} />
            </div>
            <div className="card">
              <img alt={Img} src={Img} />
            </div>
            <div className="card">
              <img alt={Img} src={Img} />
            </div>
          </div>
          {/* Gallery start */}
          <div
            className={`contentItems gallery gap-30 ${
              tabVal == 5 ? "active" : ""
            }`}
          >
            <div className="card">
              <img alt={Img} src={Img} />
            </div>
            <div className="card">
              <img alt={Img} src={Img} />
            </div>
            <div className="card">
              <img alt={Img} src={Img} />
            </div>
            <div className="card">
              <img alt={Img} src={Img} />
            </div>
          </div>
          {/* Gallery end */}
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
