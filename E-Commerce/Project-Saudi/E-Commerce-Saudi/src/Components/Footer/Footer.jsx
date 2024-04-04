import React from "react";

//___ Css ___//
import "./Footer.scss";

//___ Components ___//
import Credits from "../Credits/Credits";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footerContainer">
        <h1>Footer</h1>
        <Credits />
      </div>
    </div>
  );
};

export default Footer;
