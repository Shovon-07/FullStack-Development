"use client";
import dynamic from "next/dynamic";
// import { useParams } from "next/navigation";
import { useState } from "react";

//___ Components ___//
const UsersTable = dynamic(() => import("@/app/(Pages)/users/UsersTable"), {
  loading: "",
});
// const UserCreateModal = dynamic(
//   () => import("@/app/Components/Modal/UserCreateModal"),
//   {
//     loading: "",
//   }
// );

const Users = () => {
  const [relodeTable, setRelodeTable] = useState(false);

  //___ Input For create user (modal) ___//
  const inputFields = [
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

  return (
    <div className="users">
      {/* <div style={{ textAlign: "end" }}>
        <UserCreateModal
          id={params.employee_id}
          slug={`create user`}
          inputFields={inputFields}
          ModalOpenBtnTitle="create user"
          className="addBtn"
          identifier="userUpdate"
          api="/userUpdate"
          getSpecificDataApi="/employeeShow"
          setRelodeTable={setRelodeTable}
        />
      </div> */}
      <UsersTable
        relodeTable={relodeTable}
        setRelodeTable={setRelodeTable}
        inputFields={inputFields}
      />
    </div>
  );
};

export default Users;
