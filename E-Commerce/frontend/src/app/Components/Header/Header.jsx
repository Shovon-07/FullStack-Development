import Link from "next/link";

//___ Icons ___//
import { IoIosMail } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaPinterestP } from "react-icons/fa6";

//___ Css ___//
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="top-header">
        <div className="left d-flex gap-30">
          <p className="d-flex gap-10">
            <IoIosMail size={20} />
            company@gmail.com
          </p>
          <p> Free Shipping for all Order of $99</p>
        </div>
        <div className="right">
          <div className="icons">
            <div>
              <FaFacebookF size={20} />
            </div>
            <div>
              <FaLinkedinIn size={20} />
            </div>
            <div>
              <FaXTwitter size={20} />
            </div>
            <div>
              <FaPinterestP size={20} />
            </div>
          </div>
          <div className="lang"></div>
          <Link href="/login">Login</Link>
        </div>
      </div>
      <div className="bottom-header">bottom head </div>
    </header>
  );
};

export default Header;
