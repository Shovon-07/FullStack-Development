"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

//___ Components ___//
const DesignationTable = dynamic(
  () => import("@/app/(Pages)/designation/DesignationTable"),
  {
    loading: "",
  }
);
const MyModal = dynamic(() => import("@/app/Components/Modal/MyModal"), {
  loading: "",
});

const designation = () => {
  const [relodeTable, setRelodeTable] = useState(false);

  //___ Input For modal ___//
  const inputFields = [
    {
      field: "designation",
      type: "text",
      label: "Designation",
      placeholder: "Enter designation",
    },
  ];

  return (
    <>
      <div style={{ textAlign: "end" }}>
        <MyModal
          slug={`create designation`}
          inputFields={inputFields}
          ModalOpenBtnTitle="create designation"
          className="addBtn"
          identifier="designationStore"
          api="/designationStore"
          setRelodeTable={setRelodeTable}
        />
      </div>
      <DesignationTable
        relodeTable={relodeTable}
        setRelodeTable={setRelodeTable}
        inputFields={inputFields}
      />
    </>
  );
};

export default designation;
