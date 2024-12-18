import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { UseAuthContext } from "../../Context/AuthContext";
const DataTable = lazy(() => import("react-data-table-component"));
import { ToastContainer, toast } from "react-toastify";

//___ Icons ___//
import { FaRegTrashAlt, FaEye } from "react-icons/fa";

//___ Css ___//
import "../../assets/Css/DataTable.css";
import "react-toastify/dist/ReactToastify.css";

//___ Components ___//
import Loader from "../../Components/Loader/Loader";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const Emails = () => {
  const { setLoader, reloadData, setReloadData } = UseAuthContext();

  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredApiData, setFilteredApiData] = useState([]);

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

  // Data table start
  const columns = [
    {
      name: "Sl No",
      field: "SlNo",
      selector: (row, index) => index + 1,
      width: "100px",
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
      selector: (row) =>
        row.Subject.length >= 50
          ? row.Subject.slice(0, 50) + "..."
          : row.Subject,
    },
    {
      name: "Action",
      width: "250px",
      cell: (row) => {
        return (
          <div className="d-flex gap-20">
            <a
              className="btn c_pointer"
              style={{ fontSize: "0.9rem", padding: "5px" }}
              onClick={() => MarkAsUnread(row.id)}
            >
              Mark as unread
            </a>
            <Tooltip title={`View ${row.id}`}>
              <Link
                to={`/view-email/${row.id}`}
                className="c_pointer"
                onClick={() => MarkRead(row.id)}
              >
                <FaEye size={20} style={{ color: "var(--green)" }} />
              </Link>
            </Tooltip>
            <Tooltip title={`Delete ${row.id}`}>
              <a className="c_pointer" onClick={() => DeleteEmail(row.id)}>
                <FaRegTrashAlt size={20} style={{ color: "var(--red)" }} />
              </a>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const conditionalRowStyles = [
    {
      when: (row) => row.Status == 1,
      style: {
        backgroundColor: "var(--dim-light)",
        color: "var(--light-1)",
        fontWidth: "bold",
      },
    },
  ];
  const myStyles = {
    rows: {
      style: {
        backgroundColor: "var(--dark-1)",
        color: "var(--light-1)",
        borderBottom: "var(--border)",
      },
    },
  };
  // Data table end

  // Delete email
  const DeleteEmail = async (emailId) => {
    if (confirm("Do you want to delete this email ?")) {
      const payload = {
        email_id: emailId,
      };
      setLoader(true);
      await AxiosClient.post("/delete-email", payload)
        .then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.msg);
            setLoader(false);
            setReloadData((prev) => !prev);
            console.clear();
          } else {
            setLoader(false);
            console.log(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(`Error ${err}`);
          setLoader(false);
        });
    } else {
      toast.error("You cancel this execution");
    }
  };

  // Mark as unread
  const MarkAsUnread = async (emailId) => {
    const payload = {
      email_id: emailId,
    };
    setLoader(true);
    await AxiosClient.post("/mark-as-unread", payload)
      .then((res) => {
        if (res.data.status == true) {
          setLoader(false);
          setReloadData((prev) => !prev);
          console.clear();
        } else {
          setLoader(false);
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(`Error ${err}`);
        setLoader(false);
      });
  };

  // Mark as read
  const MarkRead = async (emailId) => {
    await AxiosClient.post("/mark-as-read", { email_id: emailId })
      .then((res) => {
        if (res.data.status == true) {
          setLoader(false);
          setReloadData((prev) => !prev);
          console.clear();
        } else {
          setLoader(false);
          console.log(res.data.msg);
        }
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
      });
  };

  useEffect(() => {
    const result = apiData.filter((filteredApiData) => {
      return filteredApiData.Email.toLowerCase().match(
        searchData.toLowerCase()
      );
    });
    setFilteredApiData(result);
  }, [searchData]);

  useEffect(() => {
    getApiData();
  }, [reloadData]);

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
          conditionalRowStyles={conditionalRowStyles}
          customStyles={myStyles}
        />
      </Suspense>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Emails;
