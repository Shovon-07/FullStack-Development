"use client";
import { redirect } from "next/navigation";

//___ Icons ___//
import { LuLogOut } from "react-icons/lu";

const LogoutBtn = () => {
  const Logout = () => {
    document.cookie = "AuthToken=;";
    document.cookie = "Role=;";
    redirect("/login");
  };

  return (
    <button className="button d-flex" onClick={Logout}>
      Logout
      <LuLogOut style={{ marginLeft: "10px" }} />
    </button>
  );
};

export default LogoutBtn;
