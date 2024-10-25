import Link from "next/link";
import Image from "next/image";

//___ Icons ___//
import {
  FaFacebookF,
  FaLinkedinIn,
  FaHeart,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import { FaXTwitter, FaPinterestP } from "react-icons/fa6";

//___ Css ___//
import "./Header.css";

//___ Images ___//
import Logo from "@/assets/images/icons/Company_orrange.png";

//___ Components ___//
import LangSelect from "./LangSelect";
import { GetPathName } from "./GetPath";

const Header = () => {
  const path = GetPathName;
  console.log(path);

  return (
    <>
      <header className="d-flex">
        <div className="top-header container d-flex">
          <div className="left d-flex gap-20">
            <Link href="/">Become a seller</Link>
            <Link href="/">Donate</Link>
            <Link href="/">Help & support</Link>
          </div>
          <div className="search-container d-flex">
            <input type="text" placeholder="Search product" />
            <FaSearch size={15} className="icon" />
          </div>
          <div className="right d-flex gap-30">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF size={18} className="icon c-pointer" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedinIn size={18} className="icon c-pointer" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaXTwitter size={18} className="icon c-pointer" />
            </Link>
            <Link href="https://pint.com" target="_blank">
              <FaPinterestP size={18} className="icon c-pointer" />{" "}
            </Link>
            <LangSelect />
          </div>
        </div>
        <div className="bottom-header container d-flex">
          <div className="logo">
            <Image src={Logo} alt="company name" />
          </div>
          <ul className="d-flex gap-30">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* <div className="d-flex gap-20"></div> */}
          <ul className="d-flex gap-20">
            <li>
              <Link href="/" className="d-flex">
                <FaHeart size={20} />
              </Link>
            </li>
            <li>
              <Link href="/" className="d-flex">
                <FaShoppingCart size={20} />
              </Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
