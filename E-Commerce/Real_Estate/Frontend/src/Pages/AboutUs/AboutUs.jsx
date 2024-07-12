import React, { useEffect } from "react";
import axios from "axios";

//___ Css ___/
import "./AboutUs.css";

const AboutUs = () => {
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => console.log(res.data[0].name));
  // }, []);

  return (
    <div className="AboutUs page content">
      <h3 className="pageTitle">About us</h3>
    </div>
  );
};

export default AboutUs;
