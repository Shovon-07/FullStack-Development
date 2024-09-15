import Link from "next/link";

//___ Images___//
import AppLogo from "@/assets/us.svg";

//___ Css ___//
import "./Header.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className="drop-shadow-xl">
      <div className="header-top flex items-center justify-between">
        <ul>
          <li>
            <Link href="/become-seller">Become a seller</Link>
          </li>
          <li>
            <Link href="/donates">Donates</Link>
          </li>
          <li>
            <Link href="/help-and-support">Help & support</Link>
          </li>
        </ul>
        <div>
          <Link href="#">
            <Image src={AppLogo} alt="app-logo" width={25} /> Save more on app
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
