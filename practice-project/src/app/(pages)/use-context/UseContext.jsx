"use client";
import dynamic from "next/dynamic";
import { AuthContextProvider } from "@/app/context/AuthContext";

//==> Components
const Parent = dynamic(() => import("../../components/ContextComp/Parent"));

const UseContext = () => {
  return (
    <AuthContextProvider>
      <Parent />
    </AuthContextProvider>
  );
};

export default UseContext;
