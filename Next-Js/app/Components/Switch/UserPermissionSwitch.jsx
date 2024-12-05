import * as React from "react";
import Switch from "@mui/material/Switch";

//___ Css ___//
import "./Switch.css";

export default function UserPermissionSwitch(props) {
  const { inputValue, setInputValue } = props;

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.checked });
    console.log("/*** Show checked value ***/");
    console.log(`${e.target.name} = ${e.target.checked}`);

    console.log("/*** Show checked values data type ***/");
    console.log(`${e.target.name} = ${typeof e.target.checked}`);
  };

  return (
    <>
      <h3 className="switch-box-title">Permissions</h3>
      <div className="main-switch-box d-flex gap-20">
        <div className="swith-box">
          <h3 className="label">Create</h3>
          <Switch
            checked={inputValue.create}
            name="create"
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div className="swith-box">
          <h3 className="label">View</h3>
          <Switch
            checked={inputValue.view}
            name="view"
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div className="swith-box">
          <h3 className="label">Edit</h3>
          <Switch
            checked={inputValue.edit}
            name="edit"
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div className="swith-box">
          <h3 className="label">Delete</h3>
          <Switch
            checked={inputValue.deletee}
            name="deletee"
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div className="swith-box">
          <h3 className="label">Report</h3>
          <Switch
            checked={inputValue.report}
            name="report"
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      </div>
    </>
  );
}
