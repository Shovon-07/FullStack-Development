import { useEffect, useState, lazy, Suspense } from "react";
import { Link, useOutletContext } from "react-router-dom";
const DataTable = lazy(() => import("react-data-table-component"));

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";
import Loader from "../../Components/Loader/Loader";

//___ Css ___//
import "./History.scss";

const History = () => {
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
      await http.get("/delivery-order").then((response) => {
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
      name: "Customer Name",
      field: "CustomerName",
      selector: (row) => row.customer.name,
    },
    {
      name: "Phone",
      field: "CustomerPhone",
      selector: (row) => row.customer.phone,
    },
    {
      name: "Collection",
      field: "collection",
      selector: (row) => row.collection,
    },
    {
      name: "Net Outstanding",
      field: "netOutstanding",
      selector: (row) => row.net_outstanding,
    },
    // {
    //   name: "Payed",
    //   field: "payed",
    //   selector: (row) => Number(row.advance) + Number(row.collection),
    // },
    {
      name: "Action",
      cell: (row) => {
        return (
          <div className="d-flex" style={{ gap: "10px" }}>
            <Link to={`/invoice/${row.id}`}>
              <button className="button">Invoice</button>
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

  return (
    <div className="CompleteOrder">
      <div>
        <div>
          <h2>History</h2>
        </div>
      </div>

      <div className="searchInput">
        <input
          type="text"
          placeholder="Search by phone number"
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

export default History;
