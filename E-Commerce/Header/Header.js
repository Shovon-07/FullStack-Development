import Link from "next/link";

//___ Images___//
import AppLogo from "@/assets/Images/us.svg";

//___ Css ___//
import "./Header.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="header-top">
        <ul className="flex items-center gap-5">
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
          <Link
            href="https://play.google.com/store/apps/details?id=com.daraz.android&pcampaignid=web_share"
            target="_blank"
            className="flex items-center gap-2 text-[0.9rem] text-white bg-[#164e63] p-[2px] pl-2 pr-2 rounded"
          >
            <Image src={AppLogo} alt="app-logo" width={20} /> Save more on app
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
