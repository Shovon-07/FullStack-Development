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
      });
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "الرقم المرجعي",
      field: "SlNo",
      selector: (row, index) => index + 1,
      width: "140px",
    },
    {
      name: "اسم القماش",
      field: "MaterialName",
      selector: (row) => row.name,
    },
    {
      name: "المخزون الموجود",
      field: "MetersAvailable",
      selector: (row) => Number(row.stock).toFixed(2),
    },
    {
      name: "سعر الشراء بالمتر",
      field: "PricePerMeter",
      selector: (row) => Number(row.price).toFixed(2),
    },
    {
      name: "المجموع الكلي",
      field: "TotalValue",
      selector: (row) => (Number(row.stock) * Number(row.price)).toFixed(2),
    },
    {
      name: "تحديث المخزون",
      width: "280px",
      cell: (row) => (
        <div className="d-flex" style={{ gap: "3px" }}>
          <Suspense fallback={<Loader />}>
            <ModalPage
              id={row.id}
              slug={"قماش جديد"}
              inputFields={inputFieldsForAddStockMaterial}
              ModalOpenBtnTitle="زيادة مخزون"
              ModalOpenBtnStyle={stockModalOpenBtnStyle}
              api={"/updateStock"}
              setLoading={setLoading}
              setRelodeTable={setRelodeTable}
            />
            <ModalPage
              id={row.id}
              slug={"نقص قماش"}
              inputFields={inputFieldsForDeductMaterial}
              ModalOpenBtnTitle="نقص مخزون"
              ModalOpenBtnStyle={deductModalOpenBtnStyle}
              api={"/updateDeduct"}
              setLoading={setLoading}
              setRelodeTable={setRelodeTable}
            />
            <ModalPage
              id={row.id}
              viewPrice={row.price}
              slug={"تغيير السعر"}
              inputFields={inputFieldsForPriceMaterial}
              ModalOpenBtnTitle="تغيير السعر"
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
      placeholder: "أدخل أسم القماش",
      className: "inputBox",
    },
    {
      field: "stock",
      type: "text",
      placeholder: "ادخل الكمية الموجودة بالمتر",
      className: "inputBox",
    },
    {
      field: "price",
      type: "text",
      placeholder: "أدخل سعر الشراء للمتر",
      className: "inputBox",
    },
  ];
  const inputFieldsForAddStockMaterial = [
    {
      field: "stock",
      type: "text",
      placeholder: "اضف مخزون",
      className: "inputBox",
    },
    {
      field: "price",
      type: "text",
      placeholder: "سعر جديد",
      className: "inputBox",
    },
  ];
  const inputFieldsForDeductMaterial = [
    {
      field: "deduct",
      type: "text",
      placeholder: "نقص قماش",
      className: "inputBox",
    },
  ];
  const inputFieldsForPriceMaterial = [
    {
      field: "price",
      type: "text",
      placeholder: "حدث السعر",
      className: "inputBox",
    },
  ];

  // Style for modal
  const addModalOpenBtnStyle = {
    fontSize: "15px",
    fontWeight: "600",
    color: "#fff",
    width: "130px",
    background: "#424242",
    paddingBottom: "3px",
  };
  const stockModalOpenBtnStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    width: "85px",
    background: "#424242",
    paddingBottom: "3px",
  };
  const deductModalOpenBtnStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    width: "85px",
    background: "#424242",
    paddingBottom: "3px",
  };
  const priceModalOpenBtnStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    width: "85px",
    background: "#424242",
    paddingBottom: "3px",
  };

  return (
    <div className="Home">
      <div>
        <div>
          <h2>اقمشة</h2>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Suspense fallback={<Loader />}>
            <ModalPage
              slug={"أضف قماش جديد"}
              inputFields={inputFieldsForAddMaterial}
              ModalOpenBtnTitle="قماش جديد"
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
          placeholder="ابحث بأسم القماش"
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
