import React, { Suspense, lazy } from "react";

//___ Components ___//
import Loader from "../../Components/Loader/Loader";
const Header = lazy(() => import("../../Components/Header/Header"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));

//___ Pages ___//
const Home = lazy(() => import("../Home/Home"));

const HomeForHideLogin = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Home />
        <Footer />
      </Suspense>
    </>
  );
};

export default HomeForHideLogin;
