import dynamic from "next/dynamic";
import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import toast from "react-hot-toast";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

//___ Icons ___//
import { RxCross2 } from "react-icons/rx";

//___ Css ___//
import "./MyModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

//___ Components ___//
const UserPermissionSwitch = dynamic(
  () => import("@/app/Components/Switch/UserPermissionSwitch"),
  {
    loading: () => "",
  }
);

//___ Additional utility ___//
import ApiConfig from "@/app/assets/js/ApiConfig";
import { GetCookie } from "@/app/Services/GetCookie";

const UserCreateModal = (props) => {
  const {
    id,
    slug,
    inputFields,
    identifier,
    api,
    getSpecificDataApi,
    ModalOpenBtnTitle,
    className,
    toolTip,
    setRelodeTable,
  } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    if (identifier == "userUpdate" || identifier == "abcd") {
      GetSpecificData();
    } else if (identifier == "userStore") {
      setInputValue({ ...inputValue, employee_id: id });
    }
  };
  const handleClose = () => setOpen(false);

  // Create api headers
  var headers = "";
  try {
    headers = {
      Authorization: `Bearer ${GetCookie("AuthToken")}`,
    };
  } catch (error) {
    console.log(error);
  }

  const [inputValue, setInputValue] = useState({
    employee_id: "",
    email: "",
    password: "",
    create: false,
    view: false,
    edit: false,
    deletee: false,
    report: false,
  });
  const handleInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  //___ Get specific data with id ___//
  const GetSpecificData = async () => {
    await ApiConfig.get(getSpecificDataApi + "/" + id, { headers })
      .then((response) => {
        if (response.data.status == true) {
          if (identifier == "userUpdate") {
            setInputValue({
              ...inputValue,
              employee_id: response.data.data.employee_id,
              email: response.data.data.email,
              password: response.data.data.password,
              create:
                response.data.data.permission.create == "true" ? true : false,
              view: response.data.data.permission.view == "true" ? true : false,
              edit: response.data.data.permission.edit == "true" ? true : false,
              deletee:
                response.data.data.permission.delete == "true" ? true : false,
              report:
                response.data.data.permission.report == "true" ? true : false,
            });
          }
          console.clear();
          // console.log(response);
        } else {
          console.log(response);
        }
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
      });
  };

  //___ Submit form data ___//
  const SubmitForm = async (e) => {
    e.preventDefault();
    if (identifier == "userStore" || identifier == "userUpdate") {
      if (inputValue.employee_id == "") {
        toast.error("Employee id not found");
      } else if (inputValue.email == "") {
        toast.error("Please enter email");
      } else if (inputValue.password == "") {
        toast.error("Please enter password");
      } else {
        console.log("Type of create = " + typeof inputValue.create);
        console.log("Type of view = " + typeof inputValue.view);
        console.log("Type of Edit = " + typeof inputValue.edit);
        console.log("Type of Delete = " + typeof inputValue.deletee);
        console.log("Type of Report = " + typeof inputValue.report);

        const payload = new FormData();
        payload.append("employee_id", inputValue.employee_id);
        payload.append("email", inputValue.email);
        payload.append("password", inputValue.password);
        payload.append("create", inputValue.create);
        payload.append("view", inputValue.view);
        payload.append("edit", inputValue.edit);
        payload.append("delete", inputValue.deletee);
        payload.append("report", inputValue.report);

        console.log("/*** Show Payload ***/");
        const formData = Object.fromEntries(payload.entries());
        console.log(formData);

        await ApiConfig.post(api, payload, { headers })
          .then((response) => {
            if (response.data.status == true) {
              setInputValue({
                employee_id: "",
                email: "",
                password: "",
                create: false,
                view: false,
                edit: false,
                deletee: false,
                report: false,
              });
              handleClose();
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
      }
    }
  };

  return (
    <>
      <div>
        <Tooltip title={toolTip}>
          <Button onClick={handleOpen} className={className}>
            {ModalOpenBtnTitle}
          </Button>
        </Tooltip>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className="modalHeader">
                <h3 className="modalTitle">{slug}</h3>
                <RxCross2
                  size={25}
                  className="c-pointer"
                  color="#fff"
                  onClick={handleClose}
                />
              </div>
              <div className="modalContent">
                <form className="d-flex" onSubmit={SubmitForm}>
                  {inputFields.map((items, index) => {
                    return (
                      <div style={{ width: "100%" }} key={index}>
                        <label>{items.label}</label>
                        <div className="inputBox">
                          <input
                            type={items.type}
                            name={items.field}
                            placeholder={`${items.placeholder}`}
                            onChange={handleInputValue}
                            value={inputValue[items.field] || ""}
                            readOnly={items.isEditAble}
                          />
                        </div>
                      </div>
                    );
                  })}

                  <br />
                  <UserPermissionSwitch
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                  />

                  <div>
                    <button type="submit" className="button">
                      next
                    </button>
                  </div>
                </form>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default UserCreateModal;
