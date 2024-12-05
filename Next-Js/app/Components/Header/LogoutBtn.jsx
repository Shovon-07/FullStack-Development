"use client";
import { redirect } from "next/navigation";

//___ Icons ___//
import { LuLogOut } from "react-icons/lu";

//___ Additional utility ___//
import ApiConfig from "@/app/assets/js/ApiConfig";

const LogoutBtn = (props) => {
  const { headers } = props;

  const Logout = async () => {
    document.cookie = "AuthToken=;";
    document.cookie = "UserRole=;";
    localStorage.clear();
    sessionStorage.clear();
    console.log("From Header");
    console.log(headers);
    redirect("/login");

    // await ApiConfig.post("/logout", { headers })
    //   .then((response) => {
    //     console.log(response);
    //     // if (response.data.status == true) {
    //     //   // console.clear();
    //     //   document.cookie = "AuthToken=;";
    //     //   localStorage.clear();
    //     //   sessionStorage.clear();
    //     //   redirect("/login");
    //     //   // toast.success(response.data.message);
    //     // } else {
    //     //   toast.error(response.data.error);
    //     // }
    //   })
    //   .catch((e) => {
    //     console.log(`Error = ${e}`);
    //   });
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
