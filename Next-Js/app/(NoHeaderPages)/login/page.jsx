import dynamic from "next/dynamic";

//___ Css ___//
import LoginStyle from "./login.module.css";

//___ Components ___//
const LoginForm = dynamic(() => import("./LoginForm"), { loading: "" });

export const metadata = {
  title: "Login",
  description: "Agro-vet software",
};

const page = () => {
  return (
    <div className={`d-flex ${LoginStyle.login}`}>
      <LoginForm />
    </div>
  );
};

export default page;
