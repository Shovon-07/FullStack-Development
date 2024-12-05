import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import Tooltip from "@mui/material/Tooltip";

const DataTable = dynamic(() => import("react-data-table-component"), {
  loading: "",
});

//___ Css ___//
import "@/app/assets/css/DataTable.css";

//___ Icons ___//
import { LuFileEdit } from "react-icons/lu";
import { IoTrashBinSharp } from "react-icons/io5";

//___ Components ___//
const MyModal = dynamic(() => import("@/app/Components/Modal/MyModal"), {
  loading: "",
});

//___ Additional utilities ___//
import ApiConfig from "@/app/assets/js/ApiConfig";
import { GetCookie } from "@/app/Services/GetCookie";

const CustomerTable = (props) => {
  const { relodeTable, setRelodeTable, inputFields, officersData } = props;

  // Create api headers
  var headers = "";
  try {
    headers = {
      Authorization: `Bearer ${GetCookie("AuthToken")}`,
    };
  } catch (error) {
    console.log(error);
  }

  // States
  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredApiData, setFilteredApiData] = useState([]);

  const getApiData = async () => {
    try {
      await ApiConfig.get("/customers", { headers }).then((response) => {
        setApiData(response.data.data);
        setFilteredApiData(response.data.data);
        console.clear();
        // console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
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
      // width: "80px",
    },
    {
      name: "Name",
      field: "name",
      selector: (row) => row.name,
    },
    {
      name: "Phone",
      field: "phone",
      selector: (row) => row.phone,
    },
    {
      name: "Balance",
      field: "balance",
      selector: (row) => row.balance,
    },
    {
      name: "Due",
      field: "due",
      selector: (row) => row.due,
    },
    {
      name: "Address",
      field: "address",
      selector: (row) => row.address,
    },
    {
      name: "Photo",
      field: "photo",
      selector: (row) => row.photo,
    },
    {
      name: "Action",
      // width: "200px",
      cell: (row) => (
        <div className="d-flex" style={{ gap: "20px" }}>
          <MyModal
            id={row.id}
            slug={`Edit customer`}
            inputFields={inputFields}
            ModalOpenBtnTitle={<LuFileEdit />}
            className="editBtn"
            identifier="customerUpdate"
            api={`/customerUpdate/${row.id}`}
            data={officersData}
            getSpecificDataApi="/customerShow"
            setRelodeTable={setRelodeTable}
            toolTip={`Edit ${row.name}`}
          />
          <Tooltip title={`Delete ${row.name}`}>
            <IoTrashBinSharp
              className="deleteIcon c-pointer"
              size={20}
              onClick={async () => {
                const confirmation = confirm(
                  "Do you want to delete this customer?"
                );
                if (confirmation) {
                  const payload = new FormData();
                  payload.append("id", row.id);

                  await ApiConfig.post(`/customerDelete/${row.id}`, payload, {
                    headers,
                  })
                    .then((response) => {
                      if (response.data.status == true) {
                        setRelodeTable((prev) => !prev);
                        console.clear();
                        toast.success(response.data.message);
                      } else {
                        toast.error(response.data.error);
                      }
                    })
                    .catch((e) => {
                      console.log(`Error = ${e}`);
                    });
                } else {
                  return;
                }
              }}
            />
          </Tooltip>
        </div>
      ),
    },
  ];
  //___ Column for datatable end ____//

  //___ Searching function ___//
  useEffect(() => {
    const result = apiData.filter((filteredApiData) => {
      return (
        filteredApiData.name.toLowerCase().match(searchData.toLowerCase()) ||
        filteredApiData.phone.toLowerCase().match(searchData.toLowerCase())
      );
    });
    setFilteredApiData(result);
  }, [searchData]);

  return (
    <>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search customer"
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

export default CustomerTable;
