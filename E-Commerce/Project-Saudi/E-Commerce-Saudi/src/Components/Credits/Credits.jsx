import React from "react";

//___ Css ___//
import "./Credits.scss";

//___ Images ___//
import flag from "/images/bd.svg";

const Credits = () => {
  return (
    <div className="Credits d-none">
      <div className="item d-flex flex-start gap-10">
        <img src={flag} alt="" />
        <div>
          <h2 className="name">Al Jubair Shovon</h2>
          <p>Phone : 01767692422</p>
          <address>
            Horogram, Munsipara, Court-6201, Kashiadanga, Rajshahi, Bangladesh
          </address>
        </div>
      </div>

      <div className="item d-flex flex-start gap-10">
        <img src={flag} alt="" />
        <div>
          <h2 className="name">Asikur Rahman</h2>
          <p>Phone : 01767692422</p>
          <address>Rajabari, ......, ......, Rajshahi, Bangladesh</address>
        </div>
      </div>
    </div>
  );
};

export default Credits;
