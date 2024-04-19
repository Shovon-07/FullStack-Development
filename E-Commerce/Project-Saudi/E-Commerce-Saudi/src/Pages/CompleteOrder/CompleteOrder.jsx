import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import DataTable from "react-data-table-component";

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";

//___ Css ___//
import "./CompleteOrder.scss";

//___ Components ___//
import ModalPage from "../../Components/Modal/ModalPage";

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
      width: "180px",
      cell: (row) => {
        return (
          <div className="d-flex" style={{ gap: "3px" }}>
            <ModalPage
              id={row.id}
              slug={"Delivery"}
              inputFields={inputFieldsForDelivery}
              ModalOpenBtnTitle="Delivery"
              ModalOpenBtnStyle={confirmBtn}
              api={"/update-completeOrder"}
              setLoading={setLoading}
              setRelodeTable={setRelodeTable}
            />
            <Link to={`/invoice/temporary-invoice/${row.id}`}>
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

  // Input For modal
  const inputFieldsForDelivery = [
    {
      field: "deliveryDate",
      type: "date",
      label: "Delivery date",
      placeholder: "Enter delivery date",
      className: "inputBox",
    },
    {
      field: "collectedAmount",
      type: "text",
      label: "Collection",
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
    paddingBottom: "3px",
    textTransform: "capitalize",
  };

  return (
    <div className="CompleteOrder">
      <div>
        <div>
          <h2>Complete orders</h2>
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
      <DataTable columns={columns} data={filteredApiData} pagination />
    </div>
  );
};

export default CompleteOrder;
