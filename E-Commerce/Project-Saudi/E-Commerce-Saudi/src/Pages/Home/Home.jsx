import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
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
      await http.get("/home").then((response) => {
        setApiData(response.data);
        setFilteredApiData(response.data);
        setLoading(false);
        console.log(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Sl No",
      field: "SlNo",
      selector: (row) => row.id,
      width: "70px",
    },
    {
      name: "Material Name",
      field: "MaterialName",
      selector: (row) => row.name,
    },
    {
      name: "Meters Available",
      field: "MetersAvailable",
      selector: (row) => row.stock,
    },
    {
      name: "Price Per Meter",
      field: "PricePerMeter",
      selector: (row) => row.price,
    },
    {
      name: "Total Value",
      field: "TotalValue",
      selector: (row) => Number(row.stock) * Number(row.price),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="d-flex" style={{ gap: "10px" }}>
          <ModalPage
            id={row.id}
            slug={"Stock Material"}
            inputFields={inputFieldsForAddStockMaterial}
            ModalOpenBtnTitle="Stock"
            ModalOpenBtnStyle={stockModalOpenBtnStyle}
            api={"/updateStock"}
            setLoading={setLoading}
            setRelodeTable={setRelodeTable}
          />
          <ModalPage
            id={row.id}
            slug={"Deduct Material"}
            inputFields={inputFieldsForDeductMaterial}
            ModalOpenBtnTitle="Deduct"
            ModalOpenBtnStyle={deductModalOpenBtnStyle}
            api={"/updateDeduct"}
            setLoading={setLoading}
            setRelodeTable={setRelodeTable}
          />
          <ModalPage
            id={row.id}
            price={row.price}
            slug={"Price"}
            inputFields={inputFieldsForPriceMaterial}
            ModalOpenBtnTitle="Price"
            ModalOpenBtnStyle={priceModalOpenBtnStyle}
            api={"/updatePrice"}
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
      return filteredApiData.name.toLowerCase().match(searchData.toLowerCase());
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
      field: "name",
      type: "text",
      placeholder: "Enter material name",
      className: "inputBox",
    },
    {
      field: "price",
      type: "text",
      placeholder: "Enter initial meters available",
      className: "inputBox",
    },
    {
      field: "stock",
      type: "text",
      placeholder: "Enter initial price per meter ",
      className: "inputBox",
    },
  ];
  const inputFieldsForAddStockMaterial = [
    {
      field: "price",
      type: "text",
      placeholder: "New Price",
      className: "inputBox",
    },
    {
      field: "stock",
      type: "text",
      placeholder: "Add Stock",
      className: "inputBox",
    },
  ];
  const inputFieldsForDeductMaterial = [
    {
      field: "deduct",
      type: "text",
      placeholder: "Deduct Material",
      className: "inputBox",
    },
  ];
  const inputFieldsForPriceMaterial = [
    {
      field: "price",
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
            inputFields={inputFieldsForAddMaterial}
            ModalOpenBtnTitle="Add Materials"
            ModalOpenBtnStyle={addModalOpenBtnStyle}
            api={"/store"}
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
