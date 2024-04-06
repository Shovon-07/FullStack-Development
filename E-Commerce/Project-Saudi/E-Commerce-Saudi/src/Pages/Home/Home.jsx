import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import DataTable from "react-data-table-component";

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";

//___ Css ___//
import "./Home.scss";

//___ Data ___//
// import { categories } from "../../Data";

//___ Components ___//
import ModalPage from "../../Components/Modal/ModalPage";

const Home = () => {
  const [setLoading] = useOutletContext();
  const { http } = AxiosConfig();

  // States
  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredApiData, setFilteredApiData] = useState([]);
  const [relodeTable, setRelodeTable] = useState(false);

  const getApiData = async () => {
    try {
      setLoading(true);
      await http.get("/user-data").then((response) => {
        setApiData(response.data);
        setFilteredApiData(response.data);
        setLoading(false);
        console.log(response.data);
      });
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
      selector: (row) => row.Name,
    },
    {
      name: "Meters Available",
      field: "MetersAvailable",
      selector: (row) => row.Email,
    },
    {
      name: "Price Per Meter",
      field: "PricePerMeter",
      selector: (row) => row.Password,
    },
    {
      name: "Total Value",
      field: "TotalValue",
      selector: (row) => row.Name,
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
            slug={"Stock Material"}
            inputFields={inputFieldsForAddStockMaterial}
            ModalOpenBtnTitle="Stock"
            ModalOpenBtnStyle={stockModalOpenBtnStyle}
            api={"/create-user"}
            setLoading={setLoading}
            setRelodeTable={setRelodeTable}
          />
          <ModalPage
            id={row.id}
            slug={"Deduct Material"}
            inputFields={inputFieldsForDeductMaterial}
            ModalOpenBtnTitle="Deduct"
            ModalOpenBtnStyle={deductModalOpenBtnStyle}
            api={"/create-user"}
            setLoading={setLoading}
            setRelodeTable={setRelodeTable}
          />
          <ModalPage
            id={row.id}
            slug={"Price"}
            inputFields={inputFieldsForPriceMaterial}
            ModalOpenBtnTitle="Price"
            ModalOpenBtnStyle={priceModalOpenBtnStyle}
            api={"/create-user"}
            setLoading={setLoading}
            setRelodeTable={setRelodeTable}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    getApiData();
  }, [relodeTable]);

  useEffect(() => {
    const result = apiData.filter((filteredApiData) => {
      return filteredApiData.Name.toLowerCase().match(searchData.toLowerCase());
    });
    setFilteredApiData(result);
  }, [searchData]);

  // Input For modal
  const inputFieldsForCreateUser = [
    {
      field: "name",
      type: "text",
      placeholder: "Enter user name",
      className: "inputBox",
    },
    {
      field: "email",
      type: "text",
      placeholder: "Enter user email",
      className: "inputBox",
    },
    {
      field: "password",
      type: "text",
      placeholder: "Enter password ",
      className: "inputBox",
    },
  ];
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
  const inputFieldsForAddStockMaterial = [
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
      field: "Update Price",
      type: "text",
      placeholder: "Update Price",
      className: "inputBox",
    },
  ];

  // Style for modal
  const addModalOpenBtnStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    width: "150px",
    background: "#424242",
    paddingBottom: "2px",
  };
  const stockModalOpenBtnStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    width: "10px",
    background: "#069306",
    paddingBottom: "2px",
  };
  const deductModalOpenBtnStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    width: "80px",
    background: "#6b6bf9",
    paddingBottom: "2px",
  };
  const priceModalOpenBtnStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    width: "10px",
    background: "#f4703c",
    paddingBottom: "2px",
  };

  return (
    <div className="Home">
      {/* {loading && <Loader />} */}
      <div className="homeTop">
        <div className="title">
          <h2>Materials</h2>
        </div>
        <div style={{ margin: "20px 0" }}>
          <ModalPage
            slug={"Add New Material"}
            // inputFields={inputFieldsForAddMaterial}
            inputFields={inputFieldsForCreateUser}
            ModalOpenBtnTitle="Add Materials"
            ModalOpenBtnStyle={addModalOpenBtnStyle}
            api={"/create-user"}
            setLoading={setLoading}
            setRelodeTable={setRelodeTable}
          />
        </div>
      </div>
      <DataTable
        columns={columns}
        data={filteredApiData}
        // title={"Materials"}
        pagination
        // fixedHeader
        // fixedHeaderScrollHeight="400px"
        // selectableRows
        // selectableRowsHighlight
        // highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search by material name"
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
