import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router-dom";

//___ Css __//
import "../../assets/Css/Card.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";

const HonorableClient = () => {
  const [setLoader] = useOutletContext();

  const [honorableClientData, setHonorableClientData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(8);
  const slicedData = honorableClientData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  const getOnGoingData = async () => {
    try {
      setLoader(true);
      await AxiosClient.get("/all-honorable-clients").then((res) => {
        if (res.data.status == true) {
          console.log(res.data.data);
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
    getOnGoingData();
  }, []);

  return (
    <div className="HonorableClient page content">
      <h3 className="pageTitle">Honorable Client</h3>
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
                src={`${imgPath}${items.HonorableClientName_img}`}
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
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default HonorableClient;
