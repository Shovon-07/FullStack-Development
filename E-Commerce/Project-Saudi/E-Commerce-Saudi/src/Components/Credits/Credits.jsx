import React from "react";

//___ Css ___//
import "./Credits.scss";

//___ Images ___//
import man from "/images/users/web-page.jpg";
import flag from "/images/bd.svg";

const Credits = () => {
  return (
    <div className="Credits d-none">
      <div className="item d-flex gap-10">
        <img src={man} alt="" />
        <div>
          <h2 className="name">Al Jubair Shovon</h2>
          <p>Phone : +88 01767692422</p>
          <address>Rajshahi, Bangladesh</address>
        </div>
      </div>

      <div className="item d-flex gap-10">
        <img src={flag} alt="" />
        <div>
          <h2 className="name">Asikur Rahman</h2>
          <p>Phone : +88 01824580580</p>
          <address>Rajshahi, Bangladesh</address>
        </div>
      </div>
    </div>
  );
};

export default Credits;
