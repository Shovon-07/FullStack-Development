import dynamic from "next/dynamic";

//___ Css ___//
import LoginStyle from "./signup.module.css";

//___ Components ___//
const LoginForm = dynamic(() => import("./SignupForm"), { loading: "" });

export const metadata = {
  title: "Sign up",
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
