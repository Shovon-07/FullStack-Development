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
import { FaUserEdit } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

//___ Components ___//
const MyModal = dynamic(() => import("@/app/Components/Modal/MyModal"), {
  loading: "",
});
const UserCreateModal = dynamic(
  () => import("@/app/Components/Modal/UserCreateModal"),
  {
    loading: "",
  }
);
const ReletionCreateModal = dynamic(
  () => import("@/app/Components/Modal/ReletionCreateModal"),
  {
    loading: "",
  }
);

//___ Additional utilities ___//
import ApiConfig from "@/app/assets/js/ApiConfig";
import { GetCookie } from "@/app/Services/GetCookie";

const EmployeesTable = (props) => {
  const {
    relodeTable,
    setRelodeTable,
    setRelodeSelect,
    inputFields,
    inputFieldsForCreateUser,
    designationData,
  } = props;

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
      await ApiConfig.get("/employees", { headers }).then((response) => {
        setApiData(response.data.data);
        setFilteredApiData(response.data.data);
        console.clear();
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
      width: "80px",
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
      name: "National id",
      field: "national_id",
      selector: (row) => row.national_id,
    },
    {
      name: "Blood group",
      field: "blood_group",
      selector: (row) => row.blood_group,
    },
    {
      name: "Address",
      field: "address",
      selector: (row) => row.address,
    },
    {
      name: "Role",
      field: "roleee",
      selector: (row) => row.designation.name,
    },
    {
      name: "Image",
      field: "Image",
      selector: (row) => row.image,
    },
    {
      name: "Action",
      width: "250px",
      cell: (row) => (
        <div className="d-flex" style={{ gap: "20px" }}>
          <MyModal
            id={row.id}
            slug={`Edit employees`}
            inputFields={inputFields}
            ModalOpenBtnTitle={<LuFileEdit />}
            className="editBtn"
            identifier="employeeUpdate"
            api={`/employeeUpdate/${row.id}`}
            getSpecificDataApi="/employeeShow"
            setRelodeTable={setRelodeTable}
            setRelodeSelect={setRelodeSelect}
            toolTip={`Edit ${row.name}`}
            data={designationData}
          />
          <Tooltip title={`Delete ${row.name}`}>
            <IoTrashBinSharp
              className="deleteIcon c-pointer"
              size={20}
              onClick={async () => {
                const confirmation = confirm(
                  "Do you want to delete this employee?"
                );
                if (confirmation) {
                  const payload = new FormData();
                  payload.append("id", row.id);

                  await ApiConfig.post(`/employeeDelete/${row.id}`, payload, {
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
          <UserCreateModal
            id={row.id}
            slug={`Create ${row.name} as a user`}
            inputFields={inputFieldsForCreateUser}
            ModalOpenBtnTitle={<FaUserEdit />}
            className="createUserIcon"
            identifier="userStore"
            api={`/userStore`}
            // getSpecificDataApi="/userShow"
            setRelodeTable={setRelodeTable}
            // setRelodeSelect={setRelodeSelect}
            toolTip="Create user"
          />
          <ReletionCreateModal
            id={row.id}
            slug={`Create reletion with ${row.name}(${row.designation.name})`}
            inputFields=""
            ModalOpenBtnTitle={<FaHandsHelping />}
            className="createRelationIcon"
            identifier="relationStore"
            api={`/relationStore`}
            getSpecificDataApi="/getRelatedEmployees"
            data={row}
            setRelodeTable={setRelodeTable}
            toolTip="Create relation"
          />
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
          placeholder="Search employee"
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

export default EmployeesTable;
