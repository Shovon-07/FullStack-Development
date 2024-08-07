import Tooltip from "@mui/material/Tooltip";

//___ Icons ___//
import { FaRegTrashAlt } from "react-icons/fa";

//___ Css ___//
import "./Emails.css";

const Emails = () => {
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

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>
              <button>View</button>
              <Tooltip title={`Delete`}>
                <a>
                  <FaRegTrashAlt size={20} className="cross" />
                </a>
              </Tooltip>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Emails;
