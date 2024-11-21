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
    <button
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
      onClick={Logout}
    >
      <LuLogOut />
      Logout
    </button>
  );
};

export default LogoutBtn;
