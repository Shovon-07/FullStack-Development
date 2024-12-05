"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

//___ Components ___//
const SuppliersTable = dynamic(
  () => import("@/app/(Pages)/suppliers/SuppliersTable"),
  {
    loading: "",
  }
);
const MyModal = dynamic(() => import("@/app/Components/Modal/MyModal"), {
  loading: "",
});

const Suppliers = () => {
  const [relodeTable, setRelodeTable] = useState(false);

  //___ Input For modal ___//
  const inputFields = [
    {
      field: "name",
      type: "text",
      label: "Supplier name",
      placeholder: "Enter supplier name",
    },
    {
      field: "phone",
      type: "text",
      label: "Supplier phone",
      placeholder: "Enter supplier phone number",
    },
    // {
    //   field: "balance",
    //   type: "text",
    //   label: "Balance",
    //   placeholder: "Enter balance",
    // },
    // {
    //   field: "due",
    //   type: "text",
    //   label: "Due",
    //   placeholder: "Enter due",
    // },
  ];

  return (
    <>
      <div style={{ textAlign: "end" }}>
        <MyModal
          slug={`create supplier`}
          inputFields={inputFields}
          ModalOpenBtnTitle="create supplier"
          className="addBtn"
          identifier="supplierStore"
          api="/supplierStore"
          setRelodeTable={setRelodeTable}
        />
      </div>
      <SuppliersTable
        relodeTable={relodeTable}
        setRelodeTable={setRelodeTable}
        inputFields={inputFields}
      />
    </>
  );
};

export default Suppliers;
