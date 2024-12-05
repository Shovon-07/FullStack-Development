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

const ReletionCreateModal = (props) => {
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
    data,
  } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    if (identifier == "relationStore" || identifier == "abcd") {
      GetSpecificData();
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
    employee_id: "0",
    relation_id: "0",
  });
  const handleInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    console.log(`${e.target.name} = ${e.target.value}`);
  };

  //___ Get specific data with id ___//
  const [reletedData, setReletedData] = useState([]);
  const GetSpecificData = async () => {
    await ApiConfig.post(
      getSpecificDataApi,
      { employee_id: data.id },
      { headers }
    )
      .then((response) => {
        if (response.data.status == true) {
          if (identifier == "relationStore") {
            setReletedData(response.data.data);
          }
          console.clear();
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
    if (identifier == "relationStore" || identifier == "userUpdate") {
      if (inputValue.relation_id == "") {
        toast.error("Please select employee");
      } else {
        const payload = new FormData();
        payload.append("employee_id", data.id);
        payload.append("relation_id", inputValue.relation_id);

        await ApiConfig.post(api, payload, { headers })
          .then((response) => {
            if (response.data.status == true) {
              setInputValue({
                employee_id: "",
                relation_id: "",
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
                  <div className="select-from-modal">
                    <select
                      className="select"
                      name="relation_id"
                      value={inputValue.relation_id}
                      onChange={handleInputValue}
                    >
                      <option value="0" disabled>
                        Select employee
                      </option>
                      {Array.isArray(reletedData) &&
                        reletedData.map((items, index) => {
                          return (
                            <option value={items.id} key={index}>
                              {items.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>

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

export default ReletionCreateModal;

// Office and manager can create relation
