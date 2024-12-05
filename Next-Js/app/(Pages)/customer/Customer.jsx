"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

//___ Additional utilities ___//
import ApiConfig from "@/app/assets/js/ApiConfig";
import { GetCookie } from "@/app/Services/GetCookie";

//___ Components ___//
const CustomerTable = dynamic(
  () => import("@/app/(Pages)/customer/CustomerTable"),
  {
    loading: "",
  }
);
const MyModal = dynamic(() => import("@/app/Components/Modal/MyModal"), {
  loading: "",
});

const Customer = () => {
  const [relodeTable, setRelodeTable] = useState(false);

  // Create api headers
  var headers = "";
  try {
    headers = {
      Authorization: `Bearer ${GetCookie("AuthToken")}`,
    };
  } catch (error) {
    console.log(error);
  }

  const [officersData, setOfficersData] = useState();
  const GetOfficersData = async () => {
    try {
      await ApiConfig.get("/getOfficers", { headers }).then((response) => {
        setOfficersData(response.data.data);
        console.clear();
      });
    } catch (error) {
      console.log(error);
    }
  };

  //___ Input For modal ___//
  const inputFields = [
    {
      field: "name",
      type: "text",
      label: "Name",
      placeholder: "Enter customer name",
    },
    {
      field: "phone",
      type: "text",
      label: "Phone",
      placeholder: "Enter phone number",
    },
    {
      field: "address",
      type: "text",
      label: "Address",
      placeholder: "Enter address",
    },
  ];

  useEffect(() => {
    GetOfficersData();
  }, []);

  return (
    <>
      <div style={{ textAlign: "end" }}>
        <MyModal
          slug={`Create customer`}
          inputFields={inputFields}
          ModalOpenBtnTitle="create customer"
          className="addBtn"
          identifier="customerStore"
          api="/customerStore"
          data={officersData}
          setRelodeTable={setRelodeTable}
        />
      </div>
      <CustomerTable
        relodeTable={relodeTable}
        setRelodeTable={setRelodeTable}
        inputFields={inputFields}
        officersData={officersData}
      />
    </>
  );
};

export default Customer;
