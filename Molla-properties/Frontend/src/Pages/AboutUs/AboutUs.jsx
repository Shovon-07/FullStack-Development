import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";

import MemoBtn from "./MemoBtn";
import MemoCount from "./MemoCount";
import MemoTitle from "./MemoTitle";

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

  // Use memo
  const [counter_1, setCounter_1] = useState(0);
  const [counter_2, setCounter_2] = useState(0);

  const incByOne = () => {
    setCounter_1((prev) => prev + 1);
  };

  const incByFive = () => {
    setCounter_2((prev) => prev + 5);
  };

  return (
    <div className="AboutUs page content">
      <Helmet>
        <meta name="robots" content="index,follow" />
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

      <br />
      <br />
      <br />
      <br />

      {/* Use memo */}
      <MemoTitle />
      <MemoCount counter={counter_1} title="Increment by one" />
      <MemoBtn handleClick={incByOne}>Increment by one </MemoBtn>

      <br />
      <hr />

      <MemoCount counter={counter_2} title="Increment by five" />
      <MemoBtn handleClick={incByFive}>Increment by five button</MemoBtn>
    </div>
  );
};

export default AboutUs;

/***
 * React এ যখন state/prop change হয় তখন component re-render হয় (সকল state একই component এ অবস্থান করলে)
 * যেহেতুু এখানে state/prop change হচ্ছে সেহেতুু component re-render হছে।
 ***/
