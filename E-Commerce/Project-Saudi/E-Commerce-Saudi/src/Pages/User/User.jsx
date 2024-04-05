import React, { useEffect, useState } from "react";

//___ Images ___//
import EditeIcon from "/images/icons/view.svg";
import DeleteIcon from "/images/icons/delete.svg";

//___ Css ___//
import "./User.scss";

//___ Additional utility ___//
import Loader from "../../Components/Loader/Loader";
import AxiosConfig from "../../assets/AxiosConfig";

//___ Components ___//
import TableData from "../../Components/TableData/TableData";
import ModalPage from "../../Components/Modal/ModalPage";

const User = () => {
  const [openModal, setOpenModal] = useState(false);
  // const columnsField = [
  //   { name: "Customer name", field: "title" },
  //   { name: "Contact", field: "category" },
  //   { name: "Material", field: "description" },
  //   { name: "Neck type", field: "price" },
  //   { name: "hand type", field: "price" },
  //   { name: "button type", field: "price" },
  //   { name: "Dress type", field: "price" },
  //   { name: "meters bought", field: "price" },
  //   { name: "total price", field: "price" },
  //   { name: "deadline", field: "1 day" },
  //   {
  //     name: "Action",
  //     cell: (row) => (
  //       <div className="d-flex" style={{ gap: "10px" }}>
  //         <img
  //           src={EditeIcon}
  //           alt=""
  //           style={{ cursor: "pointer" }}
  //           onClick={() => alert(row.id)}
  //         />
  //         <img
  //           src={DeleteIcon}
  //           alt=""
  //           style={{ cursor: "pointer" }}
  //           onClick={() => alert(row.id)}
  //         />
  //       </div>
  //     ),
  //   },
  // ];

  const inputFields = [
    {
      field: "name",
      type: "text",
      placeholder: "Enter your name",
      className: "inputBox",
    },
    {
      field: "email",
      type: "email",
      placeholder: "Enter your email",
      className: "inputBox",
    },
    {
      field: "password",
      type: "password",
      placeholder: "Enter a unique password",
      className: "inputBox",
    },
  ];

  return (
    <div className="User">
      <div className="addBtn">
        <ModalPage
          inputFields={inputFields}
          slug="user"
          addUserApi="/create-user"
        />
      </div>

      <TableData
        // api="https://fakestoreapi.com/products"
        api="http://127.0.0.1:8000/api/user-data"
        // apiData={apiData}
        // columnsField={columnsField}
        tableTitle="Users"
        // searchData={searchData}
        // setSearchData={setSearchData}
        // filteredApiData={filteredApiData}
        // setFilteredApiData={setFilteredApiData}
      />
    </div>
  );
};

export default User;
