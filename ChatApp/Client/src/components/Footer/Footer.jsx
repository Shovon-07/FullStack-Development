import { useLocation } from "react-router-dom";

//___ Css ___//
import "./Footer.css";

const Footer = () => {
  const location = useLocation();

  // if (
  //   Array.isArray(location.pathname.match("/invoice/")) &&
  //   location.pathname.match("/invoice/")[0] == "/invoice/"
  // ) {
  //   // console.log(location.pathname.match("/invoice/")[0]);
  //   return "";
  // }
  return (
    <div className="Footer">
      &#169; Created by{" "}
      <a href="https://www.facebook.com/aljubair.shovon/" target="_blank">
        Al jubair shovon
      </a>
    </div>
  );
};

export default Footer;
