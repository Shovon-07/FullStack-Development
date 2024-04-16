import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import DataTable from "react-data-table-component";

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";

//___ Css ___//
import "./Statistics.scss";

//___ Components ___//

const Statistics = () => {
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
      cell: (row) => <div className="d-flex" style={{ gap: "10px" }}></div>,
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

  return (
    <div className="Statistics">
      {/* {loading && <Loader />} */}
      <div>
        <div>
          <h2>Statistics</h2>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={filteredApiData}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
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
  );
};

export default Statistics;
