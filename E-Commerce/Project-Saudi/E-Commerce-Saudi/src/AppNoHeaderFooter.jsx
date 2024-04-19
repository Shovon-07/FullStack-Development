import { useState } from "react";
import { Outlet } from "react-router-dom";

//___ Additional utility ___//
import Loader from "./Components/Loader/Loader";

const AppNoHeaderFooter = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="">
        {loading && <Loader />}
        <Outlet context={[setLoading]} />
      </div>
    </>
  );
};

export default AppNoHeaderFooter;
