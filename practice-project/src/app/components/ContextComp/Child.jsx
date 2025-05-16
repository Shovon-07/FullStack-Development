import React, { useContext } from "react";
import { AuthContext } from "@/app/context/AuthContext";

const Child = () => {
  const contextVal = useContext(AuthContext);
  React.useEffect(() => console.log(contextVal));
  return (
    <>
      <h1 className="text-[20px] mb-5">Child</h1>
    </>
  );
};

export default Child;
