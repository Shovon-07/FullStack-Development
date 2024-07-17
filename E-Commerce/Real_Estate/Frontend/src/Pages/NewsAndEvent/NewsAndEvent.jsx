import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router-dom";

//___ Css ___//
import "./NewsAndEvent.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";

const NewsAndEvent = () => {
  const [setLoader] = useOutletContext();

  const [newsData, setNewsData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(4);
  const slicedData = newsData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  const getNewsData = async () => {
    try {
      setLoader(true);
      await AxiosClient.get("/all-news-and-events").then((res) => {
        if (res.data.status == true) {
          setNewsData(res.data.data);
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
    getNewsData();
  }, []);

  return (
    <div className="NewsAndEvent page content">
      <h3 className="pageTitle">News And Events</h3>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}
      <div className="newsBox d-flex-start gap-20">
        {slicedData.map((items, index) => {
          return (
            <div key={index} className="card">
              <LazyLoadImage
                alt={items.img}
                src={`${imgPath}${items.News_img}`}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
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

export default NewsAndEvent;
