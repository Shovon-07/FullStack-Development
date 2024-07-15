import React, { useState } from "react";

//___ Css ___//
import "./NewsAndEvent.css";

//___ Additional utilitis ___//
import { News } from "../../assets/Js/Data";

const NewsAndEvent = () => {
  const [numberOfElement, setNumberOfElement] = useState(2);

  const slicedData = News.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

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
              <img src={items.img} alt="" />
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
