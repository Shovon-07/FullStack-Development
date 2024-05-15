import { useEffect, useState, lazy, Suspense } from "react";
import { Link, useOutletContext } from "react-router-dom";
const DataTable = lazy(() => import("react-data-table-component"));

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";
import Loader from "../../Components/Loader/Loader";

//___ Css ___//
import "./PendingOrders.scss";

const PendingOrders = () => {
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
      await http.get("/pending-order").then((response) => {
        setApiData(response.data);
        setFilteredApiData(response.data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  let i = 0;
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
      width: "300px",
      cell: (row) => {
        return (
          <div className="d-flex" style={{ gap: "3px" }}>
            <Link to={`/invoice/temporary-invoice/${row.id}`}>
              <button className="button">الفاتورة</button>
            </Link>
            <Link to={`/invoice/temporary-production-invoice/${row.id}`}>
              <button className="button">المقاسات</button>
            </Link>
            <button
              className="button"
              onClick={async () => {
                try {
                  await http
                    .post("/complete-pendingOrder", { id: row.id })
                    .then((respone) => {});
                  // Reload table
                  getApiData();
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              جاهز
            </button>
            <button
              className="button"
              onClick={async () => {
                try {
                  await http
                    .post("/cancel-sell", { id: row.id })
                    .then((respone) => {});
                  // Reload table
                  getApiData();
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              الغاء
            </button>
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

  return (
    <>
      <div className="PendingOrder">
        <div>
          <div>
            <h2>الطلبات المعلقة</h2>
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
          <DataTable
            columns={columns}
            data={filteredApiData}
            pagination
            highlightOnHover
          />
        </Suspense>
      </div>
    </>
  );
};

export default PendingOrders;
