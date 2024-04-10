import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import DataTable from "react-data-table-component";

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";

//___ Components ___//
import ModalPage from "../../Components/Modal/ModalPage";

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
            <Link to={`/invoice-recipt/${row.id}`}>
              <button className="button">Invoice</button>
            </Link>
            <button
              className="button"
              onClick={() => {
                try {
                  http
                    .post("/complete-pendingOrder", { id: row.id })
                    .then((respone) => {
                      console.log(respone.data);
                    });
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
                    console.log(respone.data);
                  });
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
    <>
      <div className="PendingOrder">
        {/* {loading && <Loader />} */}
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
