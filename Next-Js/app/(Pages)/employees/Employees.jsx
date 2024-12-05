"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

//___ Components ___//
const EmployeesTable = dynamic(
  () => import("@/app/(Pages)/employees/EmployeesTable"),
  {
    loading: "",
  }
);
const MyModal = dynamic(() => import("@/app/Components/Modal/MyModal"), {
  loading: "",
});

//___ Additional utility ___//
import ApiConfig from "@/app/assets/js/ApiConfig";
import { GetCookie } from "@/app/Services/GetCookie";

const designation = () => {
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

  //___ Input For create employee (modal) ___//
  const inputFields = [
    {
      field: "generated_employee_id",
      type: "text",
      label: "Employee id",
      placeholder: "Enter employees unique id",
    },
    {
      field: "name",
      type: "text",
      label: "name",
      placeholder: "Enter name",
    },
    {
      field: "phone",
      type: "text",
      label: "phone",
      placeholder: "Enter phone number",
    },
    {
      field: "national_id",
      type: "text",
      label: "national id",
      placeholder: "Enter national id number",
    },
    {
      field: "blood_group",
      type: "text",
      label: "blood group",
      placeholder: "Enter blood group",
    },
    {
      field: "address",
      type: "text",
      label: "address",
      placeholder: "Enter address",
    },
  ];

  //___ Input For create user (modal) ___//
  const inputFieldsForCreateUser = [
    {
      field: "email",
      type: "text",
      label: "Email",
      placeholder: "Enter email",
    },
    {
      field: "password",
      type: "text",
      label: "Password",
      placeholder: "Enter password",
    },
  ];

  const [designationData, setDesignationData] = useState([]);
  const getDesignationData = async () => {
    try {
      await ApiConfig.get("/designations", { headers }).then((response) => {
        setDesignationData(response.data.data);
        sessionStorage.setItem(
          "DesignationData",
          JSON.stringify(response.data.data)
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDesignationData();
    // console.log(JSON.parse(sessionStorage.getItem("DesignationData")));
  }, []);

  return (
    <>
      <div style={{ textAlign: "end" }}>
        <MyModal
          slug={`create employees`}
          inputFields={inputFields}
          ModalOpenBtnTitle="create employees"
          className="addBtn"
          identifier="employeeStore"
          api="/employeeStore"
          data={designationData}
          // setData={designationData}
          setRelodeTable={setRelodeTable}
        />
      </div>

      <EmployeesTable
        relodeTable={relodeTable}
        setRelodeTable={setRelodeTable}
        designationData={designationData}
        inputFields={inputFields}
        inputFieldsForCreateUser={inputFieldsForCreateUser}
      />
    </>
  );
};

export default designation;
