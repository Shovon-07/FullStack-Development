import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

//___ Css ___//
import "./TableData.scss";

//___ Images ___//
import EditeIcon from "/images/icons/view.svg";
import DeleteIcon from "/images/icons/delete.svg";

//___ Components ___//
import Loader from "../Loader/Loader";

const TableData = (props) => {
  // Props
  const {
    api,
    tableTitle,
    columnsField,
    // apiData,
    // columns,
    // searchData,
    // setSearchData,
    // filteredApiData,
    // setFilteredApiData,
  } = props;

  // States
  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredApiData, setFilteredApiData] = useState([]);

  const getApiData = async () => {
    try {
      let res = await axios.get(api);
      setApiData(res.data);
      setApiData(res.data);
      setFilteredApiData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const columns = [
  //   { name: "Customer name", sortable: true, selector: (row) => row.title },
  //   { name: "Contact", selector: (row) => row.category },
  //   { name: "Material", selector: (row) => row.price },
  //   { name: "Neck type", selector: (row) => row.price },
  //   { name: "hand type", selector: (row) => row.price },
  //   { name: "button type", selector: (row) => row.price },
  //   { name: "Dress type", selector: (row) => row.price },
  //   { name: "meters bought", selector: (row) => row.price },
  //   { name: "total price", selector: (row) => row.price },
  //   { name: "deadline", selector: (row) => row.rating.count },
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

  let columns = [];
  columnsField.map((columnsItem) => {
    let fields = columnsItem.field;
    // JSON.parse({ field: "title" });
    columns.push({
      name: columnsItem.name,
      selector: (row) => row.title,
    });
  });

  useEffect(() => {
    getApiData();
    // console.log(columnsField[2].field);
  }, []);

  useEffect(() => {
    const result = apiData.filter((filteredApiData) => {
      return filteredApiData.title
        .toLowerCase()
        .match(searchData.toLowerCase());
    });
    setFilteredApiData(result);
  }, [searchData]);

  return (
    <div className="TableData shadow">
      {apiData == "" ? <Loader /> : ""}
      <DataTable
        columns={columns}
        data={filteredApiData}
        title={tableTitle}
        pagination
        // fixedHeader
        // fixedHeaderScrollHeight="400px"
        selectableRows
        selectableRowsHighlight
        // highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search here"
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
        }
      />
    </div>
  );
};

export default TableData;
// { columns, rows, searchData, setSearchData }
