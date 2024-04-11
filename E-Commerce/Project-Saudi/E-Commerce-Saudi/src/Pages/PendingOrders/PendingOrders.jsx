import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import DataTable from "react-data-table-component";

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";

//___ Components ___//

//___ Css ___//
import "./PendingOrders.scss";

const PendingOrders = () => {
  const [setLoading] = useOutletContext();
  const { http } = AxiosConfig();

  // States
  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredApiData, setFilteredApiData] = useState([]);

  const [relodeTableForCompleate, setRelodeTableForCompleate] = useState(false);
  const [relodeTableForCancel, setRelodeTableForCancel] = useState(false);

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

  const columns = [
    {
      name: "Sl No",
      field: "SlNo",
      selector: (row) => row.id,
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
      name: "Pay able",
      field: "PayAble",
      selector: (row) => row.payable,
    },
    {
      name: "Due",
      field: "Due",
      selector: (row) => row.due,
    },
    {
      name: "Action",
      width: "300px",
      cell: (row) => {
        return (
          <div className="d-flex" style={{ gap: "10px" }}>
            <Link to={`/invoice/temporary-invoice/${row.id}`}>
              <button className="button">Invoice</button>
            </Link>
            <button
              className="button"
              onClick={() => {
                try {
                  http
                    .post("/complete-pendingOrder", { id: row.id })
                    .then((respone) => {
                      // console.log(respone.data);
                    });
                  setRelodeTableForCompleate((prev) => !prev);
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              Complete
            </button>
            <button
              className="button"
              onClick={() => {
                try {
                  http.post("/cancel-sell", { id: row.id }).then((respone) => {
                    // console.log(respone.data);
                  });
                  setRelodeTableForCancel((prev) => !prev);
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              Cancel
            </button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getApiData();
  }, [relodeTableForCompleate, relodeTableForCancel]);

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
            <h2>Pending orders</h2>
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
              placeholder="Search by phone number"
              value={searchData}
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
            />
          }
        />
      </div>
    </>
  );
};

export default PendingOrders;
