import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

// import "./DataTable.scss";

const ApplicationTable = () => {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 3,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 4,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 5,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 6,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 7,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 8,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 9,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 10,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  // Loader
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  // Search
  const [searchData, setSearchData] = useState("");
  const [filtereddata, setFiltereddata] = useState([]);
  useEffect(() => {
    setFiltereddata(data);
    const result = data.filter((filtereddata) => {
      return filtereddata.title.toLowerCase().match(searchData.toLowerCase());
    });
    setFiltereddata(result);
  }, [searchData]);

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="300px"
        progressPending={pending}
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search here"
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
        }
      />
    </>
  );
};

export default ApplicationTable;
