"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

//___ Components ___//
const CategoriesTable = dynamic(
  () => import("@/app/(Pages)/categories/CategoriesTable"),
  {
    loading: "",
  }
);
const MyModal = dynamic(() => import("@/app/Components/Modal/MyModal"), {
  loading: "",
});

const Categories = () => {
  const [relodeTable, setRelodeTable] = useState(false);

  //___ Input For modal ___//
  const inputFields = [
    {
      field: "categories",
      type: "text",
      label: "Categories",
      placeholder: "Enter Category",
    },
  ];

  return (
    <>
      <div style={{ textAlign: "end" }}>
        <MyModal
          slug={`create category`}
          inputFields={inputFields}
          ModalOpenBtnTitle="create category"
          className="addBtn"
          identifier="categoryStore"
          api="/categoryStore"
          setRelodeTable={setRelodeTable}
        />
      </div>
      <CategoriesTable
        relodeTable={relodeTable}
        setRelodeTable={setRelodeTable}
        inputFields={inputFields}
      />
    </>
  );
};

export default Categories;
