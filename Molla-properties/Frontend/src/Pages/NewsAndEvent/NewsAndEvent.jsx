import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";

//___ Css ___//
import "./NewsAndEvent.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";

const NewsAndEvent = () => {
  const [setLoader] = useOutletContext();

  const [newsData, setNewsData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(2);
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
      <Helmet>
        <meta name="robots" content="index,follow" />
        <title>News And Event</title>
        <meta name="description" content="এগুলো সব মোল্লা প্রোপারটির নিউজ" />
        <meta name="keywords" content="মোল্লা প্রোপারটির নিউজ" />
      </Helmet>

      <div className="d-flex pageTitle">
        <h1>News And Event</h1>
      </div>
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

      <div
        className={newsData.length > 2 ? "" : "d-none"}
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default NewsAndEvent;
