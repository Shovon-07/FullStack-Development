import { useState } from "react";

//___ Css ___//
import "./AddGallery.css";

const AddGallery = () => {
  const [sectionCounter, setSectionCounter] = useState([1]);

  const AddGalleryInputField = () => {
    setSectionCounter([
      ...sectionCounter,
      sectionCounter.push(1 * Math.random()),
    ]);
  };

  const RemovePlotInputField = () => {
    if (sectionCounter.length == 1) {
      return;
    } else {
      setSectionCounter(sectionCounter.slice(0, -1));
    }
  };

  return (
    <div className="AddGallery">
      <h3 className="pageTitle">Gallery</h3>
      <div className="galleryImgInput">
        {sectionCounter.map((items, index) => {
          return (
            <div className="inputWrapper" key={index}>
              <input type="file" placeholder={`Image ${index + 1}`} />
            </div>
          );
        })}
        <div className="addRemBtn d-flex gap-30">
          <button
            type="button"
            className="minus"
            style={{ background: "#ec0202", padding: "0 15px" }}
            onClick={RemovePlotInputField}
          >
            -
          </button>
          <button
            type="button"
            className="plus"
            style={{ background: "#029802", padding: "0 10px" }}
            onClick={AddGalleryInputField}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGallery;
