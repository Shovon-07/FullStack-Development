import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Icons ___//
import { FaHeadset, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaRegCopyright,
} from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

//___ Images ___//
import Bkash from "../../assets/Images/bkash.png";
import Nagad from "../../assets/Images/nagad.png";
import Roket from "../../assets/Images/roket.png";
import Visa from "../../assets/Images/visa.png";
import Faisal from "../../assets/Images/Faisal_mahmud.jpg";

//___ Css ___//
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div>
          <div className="brand">
            <h3 className="footer-title">
              Ready <span>Plot</span>
            </h3>
          </div>
          <div className="d-flex">
            <FaHeadset
              size={50}
              className="headset"
              style={{ marginRight: "20px" }}
            />
            <div>
              <p>Got Questions? Call us 24/7</p>
              <p>01790238340</p>
            </div>
          </div>
          <div style={{ marginTop: "15px" }}>
            <p className="bolded fs-4">Contact Info</p>
            <p className="address">Horogram, Charkhutar mor, Rajshahi</p>
            <div className="footer-icons" style={{ marginTop: "25px" }}>
              <a
                href="https://www.facebook.com/profile.php?id=100093853449456&mibextid=ZbWKwL"
                target="_blank"
                className="link-hovered"
              >
                <FaFacebook size={25} />
              </a>
              <a href="" className="link-hovered">
                <FaTwitter size={25} />
              </a>
              <a href="" className="link-hovered">
                <RiWhatsappFill size={25} />
              </a>
              <a href="" className="link-hovered">
                <FaLinkedin size={25} />
              </a>
              <a href="" className="link-hovered">
                <FaSquareInstagram size={25} />
              </a>
              <a href="" className="link-hovered">
                <FaYoutube size={25} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Find It Fast</h3>
          <ul>
            <li>
              <a href="" className="link-hovered">
                Rajshahi
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Dhaka
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Chittagong
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Kumilla
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Sylhet
              </a>
            </li>
            <li>
              <a href="" className="link-hovered">
                Khulna
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Membership</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/faisal.mahmud.7393264"
                className="link-hovered"
                target="_blank"
              >
                <LazyLoadImage
                  src={Faisal}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
                <p>
                  Faisal Mahmud <br /> Rank: CEO
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/faisal.mahmud.7393264"
                className="link-hovered"
                target="_blank"
              >
                <LazyLoadImage
                  src={Faisal}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
                <p>
                  Faisal Mahmud <br /> Rank: CEO
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/faisal.mahmud.7393264"
                className="link-hovered"
                target="_blank"
              >
                <LazyLoadImage
                  src={Faisal}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
                <p>
                  Faisal Mahmud <br /> Rank: CEO
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-item">
          <div>
            <p className="d-flex gap-10">
              <FaRegCopyright size={20} />
              <span className="bolded">Ready plot</span>-All Right Reserved
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
    </div>
  );
};

export default Footer;
