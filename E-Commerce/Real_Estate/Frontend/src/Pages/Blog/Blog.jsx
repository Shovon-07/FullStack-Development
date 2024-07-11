import React, { useState } from "react";

//___ Css ___//
import "./Blog.css";

//___ Additional utilitis ___//
import { Blogs } from "../../assets/Js/Data";

const Blog = () => {
  const [numberOfElement, setNumberOfElement] = useState(8);

  const slicedData = Blogs.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  return (
    <div className="Blog page content">
      <h3 className="pageTitle">Blogs</h3>
      <div className="videos d-flex gap-10">
        {slicedData.map((items, index) => {
          return (
            <iframe
              key={index}
              src={items.link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
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

export default Blog;
