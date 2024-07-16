import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css ___//
import "./ProjectView.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const ProjectView = () => {
  const { id } = useParams();
  const [setLoader] = useOutletContext();

  const [tabVal, setTabVal] = useState(1);
  const handleTab = (e) => {
    setTabVal(e.target.id);
    let tabId = tabVal;
    return tabId;
  };

  const onInit = () => {
    // console.log("lightGallery has been initialized");
  };

  const [projectViewData, setProjectViewData] = useState([]);
  useEffect(() => {
    try {
      setLoader(true);
      AxiosClient.post("/project-view", { id: id }).then((res) => {
        if (res.data.status == true) {
          // console.log(res.data.data);
          setProjectViewData(res.data.data);
          setLoader(false);
        }
      });
    } catch (err) {
      // toast.error(err);
      console.log(err);
    }
  }, []);

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
                src={`http://localhost:8000/${projectViewData.Image}`}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            <div className="right">
              <h2 style={{ marginBottom: "15px" }}>Details</h2>
              <h4 style={{ margin: "20px 0 15px 0" }}>
                {projectViewData.Title}
              </h4>
              <table>
                <tbody>
                  <tr>
                    <td>Project Name</td>
                    <td>:</td>
                    <td>{projectViewData.Project_name}</td>
                  </tr>
                  <tr>
                    <td>Developer</td>
                    <td>:</td>
                    <td>{projectViewData.Developer}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>:</td>
                    <td>{projectViewData.Location}</td>
                  </tr>
                  <tr>
                    <td>Land area</td>
                    <td>:</td>
                    <td>{projectViewData.Land_area}</td>
                  </tr>
                  <tr>
                    <td>Total plot</td>
                    <td>:</td>
                    <td>{projectViewData.Total_plot}</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>:</td>
                    <td>{projectViewData.Contact_no}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>:</td>
                    <td>{projectViewData.Status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Brief outline end */}

          {/* Map start */}
          <div className={`contentItems map ${tabVal == 2 ? "active" : ""}`}>
            <iframe
              src={projectViewData.Project_map}
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
              {/* <"" alt={""} src={""} /> */}
              <p>{projectViewData.Plot}</p>
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
            {/* {projectViewData.map((items, index) => {
              return (
                <div className="card" key={index}>
                  <LazyLoadImage
                    src={items.Image}
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                  />
                </div>
              );
            })} */}
            {/* <div className="card">
              <LazyLoadImage
                src={""}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            <div className="card">
              <LazyLoadImage
                src={""}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            <div className="card">
              <LazyLoadImage
                src={""}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
            </div> */}
          </div>
          {/* Gallery end */}
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
