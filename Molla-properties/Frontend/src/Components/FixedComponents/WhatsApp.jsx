import { Link } from "react-router-dom";

//___ Icons ___//
import { FaWhatsapp } from "react-icons/fa";

//___ Css ___//
import "./FixedComponents.css";

const WhatsApp = () => {
  return (
    <div className="FixedComponents" style={{ bottom: "110px" }}>
      <Link
        to="https://wa.me/+8801788300918"
        className="d-flex"
        style={{ background: "#0fa802", color: "#ffff" }}
      >
        <FaWhatsapp size={25} />
      </Link>
    </div>
  );
};

export default WhatsApp;
