import { Suspense, lazy, useState } from "react";
import { Outlet } from "react-router-dom";

//___ Components ___//
import Loader from "../Components/Loader/Loader";
const Header = lazy(() => import("../Components/Header/Header"));
const CallNow = lazy(() => import("../Components/FixedComponents/CallNow"));
const WhatsApp = lazy(() => import("../Components/FixedComponents/WhatsApp"));
const Footer = lazy(() => import("../Components/Footer/Footer"));

const GuestLayout = () => {
  const [toggle, setToggle] = useState(false);
  const [loader, setLoader] = useState(false);

  return (
    <div className={`main`}>
      <Suspense fallback={<Loader />}>
        <Header toggle={toggle} setToggle={setToggle} />
      </Suspense>
      <div className={`container `}>
        <div
          className={toggle == true ? "overlay" : ""}
          style={{ zIndex: "997", position: "fixed", opacity: 1 }}
          onClick={() => {
            setToggle(false);
          }}
        ></div>
        {loader && <Loader />}
        <Outlet context={[setLoader]} />
      </div>
      <Suspense fallback={<Loader />}>
        <WhatsApp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <CallNow />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default GuestLayout;
