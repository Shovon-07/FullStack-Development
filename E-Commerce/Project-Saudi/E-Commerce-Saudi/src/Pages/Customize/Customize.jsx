import React, { useEffect, useState } from "react";
// import axios from "axios";

//___ Images ___//
// import EditeIcon from "/images/icons/view.svg";
// import DeleteIcon from "/images/icons/delete.svg";

//___ Css ___//
import "./Customize.scss";

//___ Components ___//
import TableData from "../../Components/TableData/TableData";

const Customize = () => {
  // States
  // const [apiData, setApiData] = useState([]);
  // const [searchData, setSearchData] = useState("");
  // const [filteredApiData, setFilteredApiData] = useState([]);

  // const getApiData = async () => {
  //   try {
  //     let res = await axios.get("https://fakestoreapi.com/products");
  //     setApiData(res.data);
  //     setApiData(res.data);
  //     setFilteredApiData(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);

  const columnsField = [
    { name: "Customer name", field: "title" },
    { name: "Contact", field: "category" },
    { name: "Material", field: "description" },
    { name: "Neck type", field: "price" },
    // { name: "hand type", field: "price" },
    // { name: "button type", field: "price" },
    // { name: "Dress type", field: "price" },
    // { name: "meters bought", field: "price" },
    // { name: "total price", field: "price" },
    // { name: "deadline", field: "1 day" },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <div className="d-flex" style={{ gap: "10px" }}>
    //       <img
    //         src={EditeIcon}
    //         alt=""
    //         style={{ cursor: "pointer" }}
    //         onClick={() => alert(row.id)}
    //       />
    //       <img
    //         src={DeleteIcon}
    //         alt=""
    //         style={{ cursor: "pointer" }}
    //         onClick={() => alert(row.id)}
    //       />
    //     </div>
    //   ),
    // },
  ];

  return (
    <>
      <TableData
        api="https://fakestoreapi.com/products"
        // apiData={apiData}
        columnsField={columnsField}
        tableTitle="purchase History"
        // searchData={searchData}
        // setSearchData={setSearchData}
        // filteredApiData={filteredApiData}
        // setFilteredApiData={setFilteredApiData}
      />
    </>
  );
};

export default Customize;
