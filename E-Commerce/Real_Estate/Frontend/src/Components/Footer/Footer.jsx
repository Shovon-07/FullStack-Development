import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Icons ___//
import { FaHeadset } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaRegCopyright } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

//___ Images ___//
import Bkash from "../../assets/Images/Icons/bkash.png";
import Nagad from "../../assets/Images/Icons/nagad.png";
import Roket from "../../assets/Images/Icons/rocket.png";
import Visa from "../../assets/Images/Icons/visa.png";

//___ Css ___//
import "./Footer.css";

//___ Additional utilitis ___//
import { Membership } from "../../assets/Js/Data";

//___ Components ___//
import Credits from "../Credits/Credits";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div>
          <div className="brand">
            <h3 className="footer-title">
              Molla <span>Properties</span>
            </h3>
          </div>
          <div className="d-flex-start">
            <FaHeadset
              size={50}
              className="headset"
              style={{ marginRight: "20px" }}
            />
            <div>
              <p style={{ marginBottom: "5px", fontWeight: "500" }}>
                Got Questions? Call us 24/7
              </p>
              <p style={{ fontSize: "0.9rem", marginTop: "2px" }}>
                01788300918 <br /> 01829674216
              </p>
              <p style={{ fontSize: "0.9rem", marginTop: "2px" }}>
                mollaproperties@gmail.com
              </p>
            </div>
          </div>
          <div style={{ marginTop: "15px" }}>
            <p className="bolded">Our location</p>
            <p className="address">Dangipara, Paba, Rajshahi</p>
            <div className="footer-icons" style={{ marginTop: "25px" }}>
              <a
                href="https://www.facebook.com/profile.php?id=100093853449456&mibextid=ZbWKwL"
                target="_blank"
                className="link-hovered"
              >
                <FaFacebook size={25} />
              </a>
              {/* <a href="" className="link-hovered">
                <FaTwitter size={25} />
              </a> */}
              <a href="https://wa.me/01788300918" className="link-hovered">
                <RiWhatsappFill size={27} />
              </a>
              {/* <a href="" className="link-hovered">
                <FaLinkedin size={25} />
              </a> */}
              {/* <a href="" className="link-hovered">
                <FaSquareInstagram size={25} />
              </a> */}
              <a
                href="https://youtube.com/@mollaagroandproperties?si=FdOtJ-jjfgDStOSh"
                target="_blank"
                className="link-hovered"
              >
                <FaYoutube size={27} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Find It Fast</h3>
          <ul>
            <li>
              <NavLink to="" className="link-hovered">
                Molla Foundation
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link-hovered">
                Molla Agro
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="link-hovered">
                Molla Homes
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Membership</h3>
          <ul
            className="d-flex-start gap-10"
            style={{ flexDirection: "column" }}
          >
            {Membership.map((items, index) => {
              return (
                <li key={index} style={{ textAlign: "left" }}>
                  <a
                    href={items.facebook}
                    className="link-hovered"
                    target="_blank"
                  >
                    <LazyLoadImage
                      src={items.img}
                      effect="blur"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                    />
                    <p>
                      {items.name} <br />{" "}
                      <span style={{ fontSize: "0.8rem" }}>- {items.rank}</span>
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-item">
          <div>
            <p className="d-flex gap-10">
              <FaRegCopyright size={20} />
              <span className="bolded"> Molla properties </span>-All Right
              Reserved
            </p>
          </div>
          <div className="payment-img d-flex">
            <LazyLoadImage
              src={Bkash}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
            />
            <LazyLoadImage
              src={Nagad}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
            />
            <LazyLoadImage
              src={Roket}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
            />
            <LazyLoadImage
              src={Visa}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
            />
          </div>
        </div>
      </div>
      <Credits />
    </div>
  );
};

export default Footer;
