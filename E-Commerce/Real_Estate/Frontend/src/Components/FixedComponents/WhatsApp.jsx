import { NavLink } from "react-router-dom";

//___ Icons ___//
import { FaWhatsapp } from "react-icons/fa";

//___ Css ___//
import "./FixedComponents.css";

const WhatsApp = () => {
  return (
    <div className="FixedComponents" style={{ bottom: "110px" }}>
      <NavLink
        to="tel:01767692422"
        className="d-flex"
        style={{ background: "var(--green)", color: "var(--light-1)" }}
      >
        <FaWhatsapp size={25} />
      </NavLink>
    </div>
  );
};

export default WhatsApp;
