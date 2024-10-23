"use client";
import Link from "next/link";
import Image from "next/image";

//___ Icons ___//
import { FaAngleDown } from "react-icons/fa";

//___ Images ___//
import UsFlag from "@/assets/images/us.svg";
import BdFlag from "@/assets/images/bd.svg";
import { useState } from "react";

const LangSelect = () => {
  const [drpVal, setDrpVal] = useState(false);
  const ActiveDropdown = () => {
    setDrpVal((prev) => !prev);
  };

  return (
    <div className="lang c-pointer" onClick={ActiveDropdown}>
      <div className="d-flex gap-10">
        <Image src={UsFlag} alt="usa flag" className="flag" />{" "}
        <p className="d-flex">
          English{" "}
          <FaAngleDown
            size={15}
            className={`icon ${drpVal == true ? "active" : ""}`}
          />
        </p>
      </div>
      <div className={`dropdown ${drpVal == true ? "active" : ""}`}>
        <div className="corner"></div>
        <ul>
          <li>
            <Link href="">
              <Image src={UsFlag} alt="usa flag" className="flag" />{" "}
              <span>English</span>
            </Link>
          </li>
          <li>
            <Link href="">
              {" "}
              <Image src={BdFlag} alt="bd flag" className="flag" />{" "}
              <span>Bengal</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LangSelect;
