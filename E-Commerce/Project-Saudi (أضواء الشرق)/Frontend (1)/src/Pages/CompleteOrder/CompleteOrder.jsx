import { useEffect, useState, lazy, Suspense } from "react";
import { Link, useOutletContext } from "react-router-dom";
const DataTable = lazy(() => import("react-data-table-component"));

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";
import Loader from "../../Components/Loader/Loader";

//___ Css ___//
import "./CompleteOrder.scss";

//___ Components ___//
const ModalPage = lazy(() => import("../../Components/Modal/ModalPage"));

const CompleteOrder = () => {
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
      await http.get("/complete-order").then((response) => {
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
      name: "اسم العميل",
      field: "CustomerName",
      selector: (row) => row.customer.name,
    },
    {
      name: "رقم الجوال",
      field: "CustomerPhone",
      selector: (row) => row.customer.phone,
    },
    {
      name: "المجموع الكلي",
      field: "PayAble",
      selector: (row) => row.payable,
    },
    {
      name: "الباقي",
      field: "Due",
      selector: (row) => row.due,
    },
    {
      name: "تحديث المخزون",
      width: "200px",
      cell: (row) => {
        return (
          <div className="d-flex" style={{ gap: "3px" }}>
            <ModalPage
              id={row.id}
              slug={"توصيل"}
              viewDue={row.due}
              inputFields={inputFieldsForDelivery}
              ModalOpenBtnTitle="توصيل"
              ModalOpenBtnStyle={confirmBtn}
              api={"/update-completeOrder"}
              setLoading={setLoading}
              setRelodeTable={setRelodeTable}
            />
            <Link to={`/invoice/temporary-invoice/${row.id}`}>
              <button className="button">الفاتورة</button>
            </Link>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getApiData();
  }, [relodeTable]);

  useEffect(() => {
    const result = apiData.filter((filteredApiData) => {
      return filteredApiData.customer.phone
        .toLowerCase()
        .match(searchData.toLowerCase());
    });
    setFilteredApiData(result);
  }, [searchData]);

  // Input For modal
  const inputFieldsForDelivery = [
    {
      field: "deliveryDate",
      type: "date",
      label: "تاريخ التسليم",
      placeholder: "Enter delivery date",
      className: "inputBox",
    },
    {
      field: "collectedAmount",
      type: "text",
      label: "الباقي",
      placeholder: "Enter collected amount",
      className: "inputBox",
    },
  ];
  const confirmBtn = {
    fontSize: "14px",
    fontWeight: "500",
    color: "#fff",
    height: "27px",
    background: "#424242",
    paddingBottom: "4px",
    textTransform: "capitalize",
  };

  return (
    <div className="CompleteOrder">
      <div>
        <div>
          <h2>الطلبات الجاهزة</h2>
        </div>
      </div>

      <div className="searchInput">
        <input
          type="text"
          placeholder="ابحث برقم الجوال"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
      </div>
      <Suspense fallback={<Loader />}>
        <DataTable columns={columns} data={filteredApiData} pagination />
      </Suspense>
    </div>
  );
};

export default CompleteOrder;
