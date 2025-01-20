//___ Icons ___//
import { LuLogOut } from "react-icons/lu";

//___ Additional utility ___//
import Logout from "../../assets/js/Logout";

const LogoutBtn = (props) => {
  const { headers } = props;

  return (
    <button
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
      onClick={() => Logout(headers)}
    >
      <LuLogOut />
      Logout
    </button>
  );
};

export default LogoutBtn;
