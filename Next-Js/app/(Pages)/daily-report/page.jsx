import dynamic from "next/dynamic";
import React from "react";

//___ Components ___//
const DailyReport = dynamic(
  () => import("@/app/(Pages)/daily-report/DailyReport"),
  {
    loading: "",
  }
);

const page = () => {
  return (
    <>
      <h1 className="page-title">Daily report</h1>
      <DailyReport />
    </>
  );
};

export default page;
