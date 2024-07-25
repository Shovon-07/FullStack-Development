import { useState } from "react";

//___ Css ___//
import "./AddGallery.css";

const AddGallery = () => {
  return (
    <div className="AddGallery">
      <h3 className="pageTitle">Gallery</h3>
      <div className="galleryImgInput">
        <div className="inputWrapper">
          <input type="file" placeholder={`Image`} />
        </div>
      </div>
    </div>
  );
};

export default AddGallery;
