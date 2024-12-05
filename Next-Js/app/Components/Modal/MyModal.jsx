import React, { useState } from "react";
import toast from "react-hot-toast";
import Tooltip from "@mui/material/Tooltip";

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

//___ Additional utility ___//
import ApiConfig from "@/app/assets/js/ApiConfig";
import { GetCookie } from "@/app/Services/GetCookie";

const MyModal = (props) => {
  const {
    id,
    slug,
    inputFields,
    identifier,
    api,
    getSpecificDataApi,
    ModalOpenBtnTitle,
    className,
    data,
    setData,
    toolTip,
    setRelodeTable,
    setRelodeSelect,
  } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    // console.log("From modal");
    // console.log(data);

    setOpen(true);
    if (
      identifier == "designationUpdate" ||
      identifier == "employeeUpdate" ||
      identifier == "brandUpdate" ||
      identifier == "categoryUpdate" ||
      identifier == "supplierUpdate" ||
      identifier == "customerUpdate"
    ) {
      GetSpecificData();
    }
  };
  const handleClose = () => setOpen(false);

  // Create api headers
  var headers = "";
  var uid = "";
  try {
    headers = {
      Authorization: `Bearer ${GetCookie("AuthToken")}`,
    };
    uid = GetCookie("Uid");
  } catch (error) {
    console.log(error);
  }

  const [inputValue, setInputValue] = useState({
    generated_employee_id: "",
    employee_id: "0",
    designation_id: "0",
    designation: "",
    name: "",
    phone: "",
    national_id: "",
    blood_group: "",
    address: "",
    brand: "",
    categories: "",
    // balance: "",
    // due: "",
  });
  const handleInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    // console.log(e.target.name + " = " + e.target.value);
  };

  //___ Employee image start ___//
  const [employeeImage, setEmployeeImage] = useState();
  const handleEmployeeImageInput = (e) => {
    setEmployeeImage(e.target.files[0]);
  };
  //___ Employee image end ___//

  //___ Get specific data with id ___//
  const GetSpecificData = async () => {
    await ApiConfig.get(getSpecificDataApi + "/" + id, { headers })
      .then((response) => {
        if (response.data.status == true) {
          if (identifier == "designationUpdate") {
            setInputValue({
              ...inputValue,
              designation: response.data.data.name,
            });
          } else if (identifier == "employeeUpdate") {
            setInputValue({
              ...inputValue,
              generated_employee_id: response.data.data.employee_id,
              designation_id: response.data.data.designation_id,
              name: response.data.data.name,
              phone: response.data.data.phone,
              national_id: response.data.data.national_id,
              blood_group: response.data.data.blood_group,
              address: response.data.data.address,
            });
          } else if (identifier == "brandUpdate") {
            setInputValue({
              ...inputValue,
              brand: response.data.data.name,
            });
          } else if (identifier == "categoryUpdate") {
            setInputValue({
              ...inputValue,
              categories: response.data.data.name,
            });
          } else if (identifier == "supplierUpdate") {
            setInputValue({
              ...inputValue,
              name: response.data.data.name,
              phone: response.data.data.phone,
              balance: response.data.data.balance,
              due: response.data.data.due,
            });
          } else if (identifier == "customerUpdate") {
            setInputValue({
              ...inputValue,
              employee_id: response.data.data.employee_id,
              name: response.data.data.name,
              phone: response.data.data.phone,
              address: response.data.data.address,
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
    if (identifier == "designationStore" || identifier == "designationUpdate") {
      if (inputValue.designation == "") {
        toast.error("Please enter designation");
      } else {
        const payload = new FormData();
        payload.append("name", inputValue.designation);
        await ApiConfig.post(api, payload, { headers })
          .then((response) => {
            if (response.data.status == true) {
              setInputValue({
                designation: "",
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
    } else if (
      identifier == "employeeStore" ||
      identifier == "employeeUpdate"
    ) {
      if (inputValue.designation_id <= 0) {
        toast.error("Please select designation");
      } else if (inputValue.generated_employee_id == "") {
        toast.error("Please enter employees unique id");
      } else if (inputValue.name == "") {
        toast.error("Please enter employee name");
      } else if (inputValue.phone == "") {
        toast.error("Please enter phone number");
      } else if (inputValue.national_id == "") {
        toast.error("Please enter national id number");
      } else if (inputValue.blood_group == "") {
        toast.error("Please enter blood group");
      } else if (inputValue.address == "") {
        toast.error("Please enter address");
      } else {
        const payload = new FormData();
        payload.append("employee_id", inputValue.generated_employee_id);
        payload.append("designation_id", inputValue.designation_id);
        payload.append("name", inputValue.name);
        payload.append("phone", inputValue.phone);
        payload.append("address", inputValue.address);
        payload.append("national_id", inputValue.national_id);
        payload.append("blood_group", inputValue.blood_group);
        payload.append("created_by", uid);
        // payload.append("image", employeeImage);

        await ApiConfig.post(api, payload, { headers })
          .then((response) => {
            if (response.data.status == true) {
              setInputValue({
                employee_id: "",
                designation_id: "0",
                name: "",
                phone: "",
                national_id: "",
                blood_group: "",
                address: "",
              });
              handleClose();
              setEmployeeImage("");
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
    } else if (identifier == "brandStore" || identifier == "brandUpdate") {
      if (inputValue.brand == "") {
        toast.error("Please enter brand name");
      } else {
        const payload = new FormData();
        payload.append("name", inputValue.brand);
        await ApiConfig.post(api, payload, { headers })
          .then((response) => {
            if (response.data.status == true) {
              setInputValue({
                brand: "",
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
    } else if (
      identifier == "categoryStore" ||
      identifier == "categoryUpdate"
    ) {
      if (inputValue.categories == "") {
        toast.error("Please enter category");
      } else {
        const payload = new FormData();
        payload.append("name", inputValue.categories);
        await ApiConfig.post(api, payload, { headers })
          .then((response) => {
            if (response.data.status == true) {
              setInputValue({
                categories: "",
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
    } else if (
      identifier == "supplierStore" ||
      identifier == "supplierUpdate"
    ) {
      if (inputValue.name == "") {
        toast.error("Please enter supplier name");
      } else if (inputValue.phone == "") {
        toast.error("Please enter supplier phone number");
      } else {
        const payload = new FormData();
        payload.append("name", inputValue.name);
        payload.append("phone", inputValue.phone);
        payload.append("balance", inputValue.balance);
        payload.append("due", inputValue.due);
        await ApiConfig.post(api, payload, { headers })
          .then((response) => {
            if (response.data.status == true) {
              setInputValue({
                name: "",
                phone: "",
                balance: "",
                due: "",
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
    } else if (
      identifier == "customerStore" ||
      identifier == "customerUpdate"
    ) {
      if (inputValue.employee_id <= 0) {
        toast.error("Please select employee");
      } else if (inputValue.name == "") {
        toast.error("Please enter customer name");
      } else if (inputValue.phone == "") {
        toast.error("Please enter customer phone number");
      } else if (inputValue.address == "") {
        toast.error("Please enter customer address");
      } else {
        const payload = new FormData();
        payload.append("employee_id", inputValue.employee_id);
        payload.append("name", inputValue.name);
        payload.append("phone", inputValue.phone);
        payload.append("address", inputValue.address);
        await ApiConfig.post(api, payload, { headers })
          .then((response) => {
            if (response.data.status == true) {
              setInputValue({
                employee_id: "",
                name: "",
                phone: "",
                address: "",
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
                  {/* ___ Employee Selection Start  ___ */}
                  {identifier == "employeeStore" ||
                  identifier == "employeeUpdate" ? (
                    <div className="select-from-modal">
                      <select
                        className="select"
                        name="designation_id"
                        value={inputValue.designation_id}
                        onChange={handleInputValue}
                        disabled={identifier == "employeeUpdate" ? true : false}
                      >
                        <option value="0" disabled>
                          Select designation
                        </option>
                        {Array.isArray(data) &&
                          data.map((items, index) => {
                            return (
                              <option value={items.id} key={index}>
                                {items.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* ___ Employee Selection End ___ */}

                  {/* ___ Customer Selection Start  ___ */}
                  {identifier == "customerStore" ||
                  identifier == "customerUpdate" ? (
                    <div className="select-from-modal">
                      <select
                        className="select"
                        name="employee_id"
                        value={inputValue.employee_id}
                        onChange={handleInputValue}
                        disabled={identifier == "customerUpdate" ? true : false}
                      >
                        <option value="0" disabled>
                          Select employee
                        </option>
                        {Array.isArray(data) &&
                          data.map((items, index) => {
                            return (
                              <option value={items.id} key={index}>
                                {items.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* ___ Customer Selection End ___ */}

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
                          />
                        </div>
                      </div>
                    );
                  })}

                  {/* ___ Employee Section Start  ___ */}
                  {identifier == "employeeStore" ||
                  identifier == "employeeUpdate" ? (
                    <div style={{ width: "100%" }}>
                      <label>Employee image</label>
                      <div className="inputBox">
                        <input
                          type="file"
                          name="employeeImage"
                          onChange={handleEmployeeImageInput}
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* ___ Employee Section End  ___ */}

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

export default MyModal;
