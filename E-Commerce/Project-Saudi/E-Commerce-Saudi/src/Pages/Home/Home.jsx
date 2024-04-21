import { useEffect, useState, lazy, Suspense } from "react";
import { useOutletContext } from "react-router-dom";
const DataTable = lazy(() => import("react-data-table-component"));

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";
import Loader from "../../Components/Loader/Loader";

//___ Css ___//
import "./Home.scss";

//___ Components ___//
const ModalPage = lazy(() => import("../../Components/Modal/ModalPage"));

const Home = () => {
  const [setLoading, auth, setAuth] = useOutletContext();
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
      });
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Sl No",
      field: "SlNo",
      selector: (row, index) => index + 1,
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
        <div className="d-flex" style={{ gap: "3px" }}>
          <Suspense fallback={<Loader />}>
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
              viewPrice={row.price}
              slug={"Price"}
              inputFields={inputFieldsForPriceMaterial}
              ModalOpenBtnTitle="Price"
              ModalOpenBtnStyle={priceModalOpenBtnStyle}
              api={"/updatePrice"}
              setLoading={setLoading}
              setRelodeTable={setRelodeTable}
            />
          </Suspense>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getApiData();
  }, [relodeTable]);

  //___ Searching function ___//
  useEffect(() => {
    const result = apiData.filter((filteredApiData) => {
      return filteredApiData.name.toLowerCase().match(searchData.toLowerCase());
    });
    setFilteredApiData(result);
  }, [searchData]);

  // Input For modal
  const inputFieldsForAddMaterial = [
    {
      field: "name",
      type: "text",
      placeholder: "Enter material name",
      className: "inputBox",
    },
    {
      field: "stock",
      type: "text",
      placeholder: "Enter initial meters available",
      className: "inputBox",
    },
    {
      field: "price",
      type: "text",
      placeholder: "Enter initial price per meter",
      className: "inputBox",
    },
  ];
  const inputFieldsForAddStockMaterial = [
    {
      field: "stock",
      type: "text",
      placeholder: "Add Stock",
      className: "inputBox",
    },
    // {
    //   field: "price",
    //   type: "text",
    //   placeholder: "New Price",
    //   className: "inputBox",
    // },
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
    width: "1503x",
    background: "#424242",
    paddingBottom: "3px",
  };
  const stockModalOpenBtnStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    width: "5px",
    background: "#424242",
    paddingBottom: "3px",
  };
  const deductModalOpenBtnStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    width: "70px",
    background: "#424242",
    paddingBottom: "3px",
  };
  const priceModalOpenBtnStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    width: "5px",
    background: "#424242",
    paddingBottom: "3px",
  };

  return (
    <div className="Home">
      <div>
        <div>
          <h2>Materials</h2>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Suspense fallback={<Loader />}>
            <ModalPage
              slug={"Add New Material"}
              inputFields={inputFieldsForAddMaterial}
              ModalOpenBtnTitle="Add Materials"
              ModalOpenBtnStyle={addModalOpenBtnStyle}
              api={"/store"}
              setLoading={setLoading}
              setRelodeTable={setRelodeTable}
            />
          </Suspense>
        </div>
      </div>

      <div className="searchInput">
        <input
          type="text"
          placeholder="Search by material name"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
      </div>
      <Suspense fallback={<Loader />}>
        <DataTable
          columns={columns}
          data={filteredApiData}
          pagination
          // fixedHeader
          // fixedHeaderScrollHeight="400px"
          highlightOnHover
        />
      </Suspense>
    </div>
  );
};

export default Home;
