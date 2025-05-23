import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";

//___ Css __//
import "../../assets/Css/Card.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";

const HonorableClient = () => {
  const [setLoader] = useOutletContext();

  const [honorableClientData, setHonorableClientData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(4);
  const slicedData = honorableClientData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  const getHonorableClientData = async () => {
    try {
      setLoader(true);
      await AxiosClient.get("/all-honorable-clients").then((res) => {
        if (res.data.status == true) {
          setHonorableClientData(res.data.data);
          setLoader(false);
        } else {
          console.log(res.data.msg);
          setLoader(false);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHonorableClientData();
  }, []);

  return (
    <div className="HonorableClient page content">
      <Helmet>
        <meta name="robots" content="index,follow" />
        <title>Honorable Client</title>
        <meta
          name="description"
          content="এগুলো সব মোল্লা প্রোপারটির ক্লায়েন্ট"
        />
        <meta name="keywords" content="মোল্লা প্রোপারটির ক্লায়েন্ট" />
      </Helmet>

      <div className="d-flex pageTitle">
        <h1>Honorable Client</h1>
      </div>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}
      <div className="cardWrapper d-flex gap-20">
        {slicedData.map((items, index) => {
          return (
            <div className="card" key={index}>
              <LazyLoadImage
                src={`${imgPath}${items.HonorableClient_img}`}
                alt="রাজশাহীতে প্লট আকারে জমি ক্রেতা"
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />

              <div className="txt d-flex">
                <h3 className="title">
                  {items.HonorableClientName.length > 70
                    ? items.HonorableClientName.slice(0, 70) + " ..."
                    : items.HonorableClientName}
                </h3>
                <div style={{ textAlign: "center" }}></div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={honorableClientData.length > 4 ? "" : "d-none"}
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default HonorableClient;
