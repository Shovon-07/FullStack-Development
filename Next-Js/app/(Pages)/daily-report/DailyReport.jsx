import dynamic from "next/dynamic";
import React from "react";

//___ Components ___//
const DateRangePicker = dynamic(
  () => import("@/app/Components/DatePicker/DateRangePicker"),
  {
    loading: "",
  }
);

const DailyReport = () => {
  return (
    <>
      <DateRangePicker />
    </>
  );
};

export default DailyReport;
