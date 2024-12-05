import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DataTable = dynamic(() => import("react-data-table-component"), {
  loading: "",
});

//___ Css ___//
import "@/app/assets/css/DataTable.css";

//___ Icons ___//
import { LuFileEdit } from "react-icons/lu";
import { IoTrashBinSharp } from "react-icons/io5";

//___ Components ___//
const MyModal = dynamic(() => import("@/app/Components/Modal/MyModal"));

//___ Utilities ___//
import ApiConfig from "@/app/assets/js/ApiConfig";

const HomeTable = (props) => {
  const { relodeTable, setRelodeTable } = props;

  // States
  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredApiData, setFilteredApiData] = useState([]);

  const getApiData = async () => {
    console.log("Data fetched");

    // try {
    //   await ApiConfig.get("/projects").then((response) => {
    //     console.log(response);
    //     setApiData(response.data.data);
    //     setFilteredApiData(response.data.data);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    getApiData();
  }, [relodeTable]);

  //___ Column for datatable start ___//
  const columns = [
    {
      name: "Sl No",
      field: "SlNo",
      selector: (row, index) => index + 1,
      width: "80px",
    },
    {
      name: "Name",
      field: "Title",
      selector: (row) => row.Title,
    },
    {
      name: "Action",
      width: "200px",
      cell: (row) => (
        <div className="d-flex" style={{ gap: "3px" }}>
          <MyModal
            id={row.id}
            slug={`${row.id} = Edit student`}
            inputFields={inputFields}
            ModalOpenBtnTitle={<LuFileEdit />}
            className="editBtn"
            api={"/updateStock"}
            // setRelodeTable={setRelodeTable}
          />
          <IoTrashBinSharp
            className="deleteIcon c-pointer"
            size={20}
            onClick={() => {
              alert(`Id = ${row.id}`);
              setRelodeTable((prev) => !prev);
            }}
          />
        </div>
      ),
    },
  ];
  //___ Column for datatable end ____//

  //___ Searching function ___//
  useEffect(() => {
    const result = apiData.filter((filteredApiData) => {
      return filteredApiData.title
        .toLowerCase()
        .match(searchData.toLowerCase());
    });
    setFilteredApiData(result);
  }, [searchData]);

  // Input For modal
  const inputFields = [
    {
      field: "name",
      type: "text",
      placeholder: "Enter name",
    },
    {
      field: "name",
      type: "text",
      placeholder: "Enter email",
    },
    {
      field: "name",
      type: "text",
      placeholder: "Enter phone",
    },
  ];

  return (
    <>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search by name"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
      </div>

      <DataTable
        columns={columns}
        data={filteredApiData}
        pagination
        // fixedHeader
        // fixedHeaderScrollHeight="400px"
      />
    </>
  );
};

export default HomeTable;
