import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

//___ Css ___//
import "./TableData.scss";

//___ Images ___//
// import EditeIcon from "/images/icons/view.svg";
// import DeleteIcon from "/images/icons/delete.svg";

//___ Components ___//

const TableData = (props) => {
  // Props
  const {
    api,
    tableTitle,
    apiData,
    columns,
    searchData,
    setSearchData,
    filteredApiData,
    setFilteredApiData,
  } = props;

  // State
  // const [apiData, setApiData] = useState([]);
  // const [searchData, setSearchData] = useState("");
  // const [filteredApiData, setFilteredApiData] = useState([]);

  // const getApiData = async () => {
  //   try {
  //     let res = await axios.get(api);
  //     setApiData(res.data);
  //     setFilteredApiData(res.data);
  //     // console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const columns = [
  //   { name: "Title", sortable: true, selector: (row) => row.title },
  //   { name: "Category", selector: (row) => row.category },
  //   { name: "Price", selector: (row) => row.price },
  //   { name: "Rating", selector: (row) => row.rating.count },
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

  // useEffect(() => {
  //   setSearchData(apiData);
  //   setFilteredApiData(apiData);
  // }, []);

  useEffect(() => {
    const result = apiData.filter((filteredApiData) => {
      return filteredApiData.title
        .toLowerCase()
        .match(searchData.toLowerCase());
    });
    setFilteredApiData(result);
  }, [searchData]);

  return (
    <div className="TableData">
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
