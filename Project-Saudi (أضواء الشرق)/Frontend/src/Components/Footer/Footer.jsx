//___ Css ___//
import "./Footer.scss";

//___ Components ___//
import Credits from "../Credits/Credits";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="footerContainer">
          <p>
            All right reserved by <span>أضواء الشرق</span>
          </p>
          <Credits />
        </div>
      </div>
    </>
  );
};

export default Footer;
