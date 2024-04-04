import React, { useEffect, useState } from "react";

//___ Additional utility ___//
import Loader from "../../Components/Loader/Loader";

//___ Css ___//
import "./Home.scss";

//___ Data ___//
// import { categories } from "../../Data";

//___ Components ___//
// import TableData from "../../Components/TableData/TableData";

const Home = () => {
  // const columnsField = [
  //   { name: "Customer name", field: "title" },
  //   { name: "Contact", field: "category" },
  //   { name: "Material", field: "description" },
  //   { name: "Neck type", field: "price" },
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
  // ];

  return (
    <>
      {/* <TableData
        api="https://fakestoreapi.com/products"
        // apiData={apiData}
        columnsField={columnsField}
        tableTitle="purchase History"
        // searchData={searchData}
        // setSearchData={setSearchData}
        // filteredApiData={filteredApiData}
        // setFilteredApiData={setFilteredApiData}
      /> */}
      <h1>Home</h1>
    </>
  );
};

export default Home;
