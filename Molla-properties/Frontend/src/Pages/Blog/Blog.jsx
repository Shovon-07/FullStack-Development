import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";

//___ Css ___//
import "./Blog.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const Blog = () => {
  const [setLoader] = useOutletContext();

  const [blogData, setBlogData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(2);
  const slicedData = blogData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  const getBlogData = async () => {
    try {
      setLoader(true);
      await AxiosClient.get("/all-blog-video").then((res) => {
        if (res.data.status == true) {
          setBlogData(res.data.data);
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
    getBlogData();
  }, []);

  return (
    <div className="Blog page content">
      <Helmet>
        <title>Our Blogs</title>
      </Helmet>

      <div className="d-flex pageTitle">
        <h3>Our Blogs</h3>
      </div>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}
      <div className="videos d-flex gap-10">
        {slicedData.map((items, index) => {
          return (
            <iframe
              key={index}
              src={items.Blog_video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          );
        })}
      </div>

      <div
        className={blogData.length > 2 ? "" : "d-none"}
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Blog;
