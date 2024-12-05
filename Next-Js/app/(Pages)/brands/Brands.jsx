"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

//___ Components ___//
const BrandsTable = dynamic(() => import("@/app/(Pages)/brands/BrandsTable"), {
  loading: "",
});
const MyModal = dynamic(() => import("@/app/Components/Modal/MyModal"), {
  loading: "",
});

const Brands = () => {
  const [relodeTable, setRelodeTable] = useState(false);

  //___ Input For modal ___//
  const inputFields = [
    {
      field: "brand",
      type: "text",
      label: "Brand",
      placeholder: "Enter brand name",
    },
  ];

  return (
    <>
      <div style={{ textAlign: "end" }}>
        <MyModal
          slug={`create brand`}
          inputFields={inputFields}
          ModalOpenBtnTitle="create brand"
          className="addBtn"
          identifier="brandStore"
          api="/brandStore"
          setRelodeTable={setRelodeTable}
        />
      </div>
      <BrandsTable
        relodeTable={relodeTable}
        setRelodeTable={setRelodeTable}
        inputFields={inputFields}
      />
    </>
  );
};

export default Brands;
