import { useState, useEffect, lazy, Suspense } from "react";
import Tooltip from "@mui/material/Tooltip";
import { UseAuthContext } from "../../Context/AuthContext";
const DataTable = lazy(() => import("react-data-table-component"));

//___ Icons ___//
import { FaRegTrashAlt, FaEye } from "react-icons/fa";

//___ Css ___//
// import "./Emails.css";
import "../../assets/Css/DataTable.css";

//___ Components ___//
import Loader from "../../Components/Loader/Loader";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const Emails = () => {
  const { setLoader } = UseAuthContext();

  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredApiData, setFilteredApiData] = useState([]);
  const [relodeTable, setRelodeTable] = useState(false);

  const getApiData = async () => {
    setLoader(true);
    await AxiosClient.get("/get-mails")
      .then((response) => {
        setApiData(response.data.data);
        setFilteredApiData(response.data.data);
        setLoader(false);
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
        setLoader(false);
      });
  };

  const columns = [
    {
      name: "Sl No",
      field: "SlNo",
      selector: (row, index) => index + 1,
      width: "70px",
    },
    {
      name: "Name",
      field: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Email",
      field: "Email",
      selector: (row) => row.Email,
    },
    {
      name: "Subject",
      field: "Subject",
      selector: (row) => row.Subject,
    },
    {
      name: "Action",
      width: "200px",
      cell: (row) => {
        return (
          <div className="d-flex gap-20">
            <Tooltip title={`View`}>
              <a className="c_pointer">
                <FaEye size={20} style={{ color: "var(--green)" }} />
              </a>
            </Tooltip>
            <Tooltip title={`Delete`}>
              <a className="c_pointer">
                <FaRegTrashAlt size={20} style={{ color: "var(--red)" }} />
              </a>
            </Tooltip>
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
      return filteredApiData.Email.toLowerCase().match(
        searchData.toLowerCase()
      );
    });
    setFilteredApiData(result);
  }, [searchData]);

  return (
    <div className="Emails">
      <h3 className="pageTitle">Emails</h3>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}

      <div className="searchInput">
        <input
          type="text"
          placeholder="Search by email address"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
      </div>
      <Suspense fallback={<Loader />}>
        <DataTable
          columns={columns}
          data={filteredApiData}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="400px"
          highlightOnHover
        />
      </Suspense>

      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>shovon</td>
            <td>shovon@mail</td>
            <td>sub</td>
            <td>
              <Tooltip title={`View`}>
                <a className="c_pointer">
                  <FaEye size={20} />
                </a>
              </Tooltip>
              <Tooltip title={`Delete`}>
                <a className="c_pointer">
                  <FaRegTrashAlt size={20} />
                </a>
              </Tooltip>
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default Emails;
