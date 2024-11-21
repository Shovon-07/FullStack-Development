"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

//___ Css ___//
import MenuLinkStyle from "./MenuLinks.module.css";

const MenuLinks = (props) => {
  const { items } = props;
  const pathname = usePathname();

  return (
    <>
      <Link
        href={items.path}
        className={`${MenuLinkStyle.link} ${
          pathname == items.path ? MenuLinkStyle.active : ""
        }`}
      >
        <div className="d-flex">
          {items.icon}
          <p className={MenuLinkStyle.link_title}>{items.title}</p>
        </div>
      </Link>
    </>
  );
};

export default MenuLinks;
