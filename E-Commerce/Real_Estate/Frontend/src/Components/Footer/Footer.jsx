//___ Icons ___//
import { FaHeadset } from "react-icons/fa6";

//___ Css ___//
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div>
          <div className="brand">
            <h3 className="footer-title">Ready Plot</h3>
          </div>
          <div className="d-flex">
            <FaHeadset size={50} style={{ marginRight: "20px" }} />
            <div>
              <p>Got Questions? Call us 24/7</p>
              <p>01790238340</p>
            </div>
          </div>
          <div className="mt-5">
            <p className="bolded fs-4">Contact Info</p>
            <p className="address">Horogram, Charkhutar mor, Rajshahi</p>
            <div className="footer-icons mt-4">
              <a href="" className="link-hovered">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="" className="link-hovered">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="" className="link-hovered">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="" className="link-hovered">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="" className="link-hovered">
                <i className="fa-brands fa-pinterest"></i>
              </a>
              <a href="" className="link-hovered">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="" className="link-hovered">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Find It Fast</h3>
          <ul>
            <li>
              <a href="" className="link-hovered">
                Laptop & Computers
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Cameras & Photography
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Smartphones & Tablets
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Video Games & Consoles
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Tv & Audio
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Gadgets
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Customer Care</h3>
          <ul>
            <li>
              <a href="" className="link-hovered">
                About
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Contact
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                My Account
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Track Your Order
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Customer Services
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Returns/Exchenges
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                FAQs
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Product Support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-item">
          <div>
            <p>
              <i className="fa-regular fa-copyright"></i>{" "}
              <span className="bolded">Village Mart</span>-All Right Reserved
            </p>
          </div>
          <div className="payment-img">
            {/* <img src="assets/images/bkash.png">
                    <img src="assets/images/nagad.png">
                    <img src="assets/images/roket.png">
                    <img src="assets/images/visa.png"> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
