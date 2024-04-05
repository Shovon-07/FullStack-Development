import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

//___ Additional utility ___//
import Loader from "../../Components/Loader/Loader";

//___ Css ___//
import "./Home.scss";

//___ Data ___//
// import { categories } from "../../Data";

//___ Components ___//
import ModalPage from "../../Components/Modal/ModalPage";

const Home = () => {
  // States
  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredApiData, setFilteredApiData] = useState([]);

  const getApiData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setApiData(res.data);
      setFilteredApiData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  let i = 0;
  const columns = [
    {
      name: "Sl No",
      field: "SlNo",
      selector: () => i++,
      width: "70px",
    },
    {
      name: "Material Name",
      field: "MaterialName",
      selector: (row) => row.title,
    },
    {
      name: "Meters Available",
      field: "MetersAvailable",
      selector: (row) => row.category,
    },
    {
      name: "Price Per Meter",
      field: "PricePerMeter",
      selector: (row) => row.category,
    },
    {
      name: "Total Value",
      field: "TotalValue",
      selector: (row) => row.price,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="d-flex" style={{ gap: "10px" }}>
          {/* <img
            src={EditeIcon}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => alert(row.id)}
          /> */}
          {/* <img
            src={DeleteIcon}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => alert(row.id)}
          /> */}
          {/* <button className="button add" onClick={() => alert(row.id)}>
            Add
          </button> */}
          <ModalPage
            id={row.id}
            slug={"Add New Material"}
            inputFields={inputFieldsForAddMaterial}
            ModalOpenBtnTitle="Add"
            ModalOpenBtnStyle={addModalOpenBtnStyle}
          />
          <ModalPage
            id={row.id}
            slug={"Stock Material"}
            inputFields={inputFieldsForDeductMaterial}
            ModalOpenBtnTitle="Deduct"
            ModalOpenBtnStyle={deductModalOpenBtnStyle}
          />
          <ModalPage
            id={row.id}
            slug={"Price"}
            inputFields={inputFieldsForPriceMaterial}
            ModalOpenBtnTitle="Price"
            ModalOpenBtnStyle={priceModalOpenBtnStyle}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    const result = apiData.filter((filteredApiData) => {
      return filteredApiData.title
        .toLowerCase()
        .match(searchData.toLowerCase());
    });
    setFilteredApiData(result);
  }, [searchData]);

  // For modal
  const inputFieldsForAddMaterial = [
    {
      field: "Material Name",
      type: "text",
      placeholder: "Enter material name",
      className: "inputBox",
    },
    {
      field: "Initial Meters",
      type: "text",
      placeholder: "Enter initial meters available",
      className: "inputBox",
    },
    {
      field: "Initial Price",
      type: "text",
      placeholder: "Enter initial price per meter ",
      className: "inputBox",
    },
  ];
  const inputFieldsForDeductMaterial = [
    {
      field: "Deduct Material",
      type: "text",
      placeholder: "Deduct Material",
      className: "inputBox",
    },
  ];
  const inputFieldsForPriceMaterial = [
    {
      field: "Add Stock",
      type: "text",
      placeholder: "Add Stock",
      className: "inputBox",
    },
    {
      field: "New Price",
      type: "text",
      placeholder: "New Price",
      className: "inputBox",
    },
  ];

  // Style for modal
  const addModalOpenBtnStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    width: "10px",
    background: "#069306",
    padding: "5px 0",
  };
  const deductModalOpenBtnStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    width: "80px",
    background: "#6b6bf9",
    padding: "5px 0",
  };
  const priceModalOpenBtnStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    width: "10px",
    background: "#f4703c",
    padding: "5px 0",
  };

  return (
    <div className="Home">
      <DataTable
        columns={columns}
        data={filteredApiData}
        title={"Materials"}
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

export default Home;
