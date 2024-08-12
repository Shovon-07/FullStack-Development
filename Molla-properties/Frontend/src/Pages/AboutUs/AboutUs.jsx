import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";

//___ Css ___//
import "./AboutUs.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const AboutUs = () => {
  const [setLoader] = useOutletContext();

  //___ Get about us data start ___//
  const [aboutUsTxt, setAboutUsTxt] = useState("");
  const GetAboutUsData = async () => {
    setLoader(true);
    await AxiosClient.get("/get-about-us")
      .then((response) => {
        setAboutUsTxt(response.data.data[0].AboutUsTxt);
        setLoader(false);
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
        setLoader(false);
      });
  };
  //___ Get about us data end ___//

  useEffect(() => {
    GetAboutUsData();
  }, []);

  return (
    <div className="AboutUs page content">
      <Helmet>
        <title>About us</title>
        <meta name="description" content="About molla properties" />
        <meta name="keywords" content="About molla properties" />
      </Helmet>

      <div className="d-flex pageTitle">
        <h1>About us</h1>
      </div>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}

      <div dangerouslySetInnerHTML={{ __html: aboutUsTxt }}></div>
    </div>
  );
};

export default AboutUs;
