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
const UserCreateModal = dynamic(
  () => import("@/app/Components/Modal/UserCreateModal"),
  {
    loading: "",
  }
);

//___ Utilities ___//
import ApiConfig from "@/app/assets/js/ApiConfig";
import { GetCookie } from "@/app/Services/GetCookie";

const UsersTable = (props) => {
  const { relodeTable, setRelodeTable, inputFields } = props;

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
      await ApiConfig.get("/users", { headers }).then((response) => {
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
      name: "Email",
      field: "email",
      width: "300px",
      selector: (row) => row.email,
    },
    {
      name: "Create",
      field: "create",
      selector: (row) => row.permission.create,
    },
    {
      name: "View",
      field: "view",
      selector: (row) => row.permission.view,
    },
    {
      name: "Edit",
      field: "edit",
      selector: (row) => row.permission.edit,
    },
    {
      name: "Deletee",
      field: "deletee",
      selector: (row) => row.permission.delete,
    },
    {
      name: "Report",
      field: "report",
      selector: (row) => row.permission.report,
    },
    {
      name: "Status",
      field: "status",
      selector: (row) => row.status,
    },
    {
      name: "Action",
      // width: "200px",
      cell: (row) => (
        <div className="d-flex" style={{ gap: "20px" }}>
          <UserCreateModal
            id={row.id}
            slug={`Edit user`}
            inputFields={inputFields}
            ModalOpenBtnTitle={<LuFileEdit />}
            className="editBtn"
            identifier="userUpdate"
            api={`/userUpdate/${row.id}`}
            getSpecificDataApi="/userShow"
            setRelodeTable={setRelodeTable}
            toolTip={`Edit ${row.email}`}
            data={row.employee_id}
          />
          <Tooltip title={`Delete ${row.name}`}>
            <IoTrashBinSharp
              className="deleteIcon c-pointer"
              size={20}
              onClick={async () => {
                const confirmation = confirm(
                  "Do you want to delete this user?"
                );
                if (confirmation) {
                  const payload = new FormData();
                  payload.append("id", row.id);

                  await ApiConfig.post(`/userDelete/${row.id}`, payload, {
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
      return filteredApiData.email
        .toLowerCase()
        .match(searchData.toLowerCase());
    });
    setFilteredApiData(result);
  }, [searchData]);

  return (
    <>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search user"
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

export default UsersTable;
