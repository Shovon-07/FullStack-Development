import { lazy, Suspense } from "react";

//___ Components ___//
import Loader from "./Components/Loader/Loader";
const SideNav = lazy(() => import("./Components/SideNav/SideNav"));

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <SideNav />
        <h1>layout</h1>
      </Suspense>
    </>
  );
};

export default Layout;
