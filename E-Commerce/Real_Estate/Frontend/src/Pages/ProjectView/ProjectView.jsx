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
                    <td>Project Name</td>
                    <td>:</td>
                    <td>মোল্লা আবাসিক-৩</td>
                  </tr>
                  <tr>
                    <td>Developer</td>
                    <td>:</td>
                    <td>Molla properties </td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>:</td>
                    <td>Dangipara, Paba, Rajshahi</td>
                  </tr>
                  <tr>
                    <td>Land area</td>
                    <td>:</td>
                    <td>17 decimal (sotok)</td>
                  </tr>
                  <tr>
                    <td>Total plot</td>
                    <td>:</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>:</td>
                    <td>01788300918</td>
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

          {/* Plot start */}
          <div
            className={`contentItems gallery gap-30 ${
              tabVal == 3 ? "active" : ""
            }`}
          >
            <div className="">
              {/* <img alt={Img} src={Img} /> */}
              <p>
                ১. ৩৬*৫০ = ২.৫ কাঠা ২. ৩০*৫০= ২ কাঠা ৩. ৩২* ৫০= ২.২৫ কাঠা ৪.
                ২৮*৪৮= ১.৮৫ কাঠা ৫. ৩৬* ৪০= ২ কাঠা ৬. ৩০* ৪০= ১.৬৫ কাঠা ৭. ৩০*
                ৪০= ১.৬৫ কাঠা ৮. ৩০*৪২= ১.৭৫ কাঠা ৯. ৩৬* ৪৩= ২.১ কাঠা ১০. ৩৬*৩৩=
                ১.৬৫ কাঠা ১১. ৩৬* ৩৩= ১.৬৫ কাঠা ১২. ৩৬* ৩০= ১.৫ কাঠা ১৩. ৪০*৪৫=
                ২.৫ কাঠা ১৪. ৪০* ৪৫= ২.৫ কাঠা ১৫. ৪০*২৮= ১.৫৫ কাঠা ১৬. ৩৬*৪০= ২
                কাঠা ১৭. ৩৬* ৩৮= ১.৯ কাঠা ১৮. ৫৩*৪০ = ৩ কাঠা ১৯. ৪৯*৩৩= ২.২৫
                কাঠা
              </p>
            </div>
          </div>
          {/* Plot end */}

          {/* Feature start */}
          <div
            className={`contentItems gallery gap-30 ${
              tabVal == 4 ? "active" : ""
            }`}
          >
            <div className="">
              <p>
                🏡🏠মোল্লা হাউজিং 🏠🏡 _____সবুজে শান্তির নীড় 📯📯গ্রীন সিটি
                ক্লিন সিটি খ্যাত, রাজশাহী সিটি কর্পোরেশন ১৭ নং ওয়ার্ডের উত্তর
                পাশে ডাংগীপাড়ায় সবুজঘেরা পরিবেশ প্লট আকারে জমি বিক্রয় চলিতেছে। ★
                আমচত্তর থেকে ২ কি. মি উত্তর-পূর্বে হলিক্রস স্কুল অ্যান্ড কলেজ
                পার হয়ে ডাংগীপাড়ায়, শায়েখ আব্দুর রাজ্জাক বিন ইউসুফের মাদরাসার
                পশ্চিম পাশে ৫০ কাঠা জমির উপরে আমাদের এই প্রজেক্ট টি। ★এখানে ১.৫
                কাঠা থেকে ৩ কাঠা পরিমাণের প্লট ৭ লাখ টাকা কাঠা থেকে শুরু।
                ★প্লটগুলো অধিকাংশ উত্তর এবং দক্ষিণমুখি। ★ অত্র এলাকার মধ্যে
                সবচেয়ে উঁচু যায়গা। ★মটি ভরাট করা হয়নি, প্রয়োজনও হবে না। ★ পিচ
                ঢালাই ৩০ ফিট রাস্তার সাথে প্লটের রাস্তা ১২ ফিট চওড়া। যোগাযোগ
                📞📞 01829674216 01788300918
              </p>
            </div>
          </div>
          {/* Feature end */}

          {/* Gallery start */}
          <div
            className={`contentItems gallery gap-30 ${
              tabVal == 5 ? "active" : ""
            }`}
          >
            <div className="card">
              <LazyLoadImage
                src={Img}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            <div className="card">
              <LazyLoadImage
                src={Img}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            <div className="card">
              <LazyLoadImage
                src={Img}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            <div className="card">
              <LazyLoadImage
                src={Img}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
          </div>
          {/* Gallery end */}
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
