import { NavLink } from "react-router-dom";

//___ Icons ___//
import { PiPhoneCall } from "react-icons/pi";
// import { FaWhatsapp } from "react-icons/fa";

//___ Css ___//
import "./FixedComponents.css";

const CallNow = () => {
  return (
    <div className="FixedComponents" style={{ bottom: "50px" }}>
      <NavLink
        to="tel:01829674216"
        className="d-flex"
        style={{ background: "var(--dark-2)", color: "var(--light-1)" }}
      >
        <PiPhoneCall size={25} />
      </NavLink>
    </div>
  );
};

export default CallNow;
