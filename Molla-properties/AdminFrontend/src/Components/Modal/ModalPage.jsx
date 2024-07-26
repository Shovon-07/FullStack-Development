import React, { useState, lazy, Suspense } from "react";
import { useOutletContext } from "react-router-dom";
const Backdrop = lazy(() => import("@mui/material/Backdrop"));
const Box = lazy(() => import("@mui/material/Box"));
const Modal = lazy(() => import("@mui/material/Modal"));
const Fade = lazy(() => import("@mui/material/Fade"));
const Button = lazy(() => import("@mui/material/Button"));

//___ Icons ___//
import { RxCross2 } from "react-icons/rx";

//___ Css ___//
import "./ModalPage.css";

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
import AxiosClient from "../../assets/Js/AxiosClient";
import Loader from "../Loader/Loader";

const ModalPage = (props) => {
  // const [setLoader] = useOutletContext();
  const {
    id,
    slug,
    viewPrice,
    viewDue,
    inputFields,
    api,
    ModalOpenBtnTitle,
    ModalOpenBtnStyle,
    setLoader,
    setRelodeTable,
  } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputValue, setInputValue] = useState({
    title: "",
    project_name: "",
    developer: "",
    location: "",
    land_area: "",
    total_plot: "",
    contact_no: "",
    project_map: "",
    features: "",
    project_image: "",
    gallery_image: "",
    status: "",
  });
  const handleInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const payload = {
      id: id,
      title: inputValue.title,
      project_name: inputValue.project_name,
      developer: inputValue.developer,
      location: inputValue.location,
      land_area: inputValue.land_area,
      total_plot: inputValue.total_plot,
      contact_no: inputValue.contact_no,
      project_map: inputValue.project_map,
      features: inputValue.features,

      project_image: inputValue.project_image,
      gallery_image: inputValue.gallery_image,

      status: inputValue.status,
    };
    try {
      setLoader(true);
      // http.post(api, data).then((response) => {
      //   if (response.data === "success") {
      //     handleClose();
      //     setLoading(false);
      //     setRelodeTable((prev) => !prev);
      //   } else {
      //     handleClose();
      //     setLoading(false);
      //     alert("You don't add duplicate data !");
      //   }
      // });
      console.log(payload);
      setLoader(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <Button
            onClick={handleOpen}
            className="addBtn"
            style={ModalOpenBtnStyle}
          >
            {ModalOpenBtnTitle}
          </Button>
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
                <div className="modalCloseBtn">
                  <RxCross2
                    size={25}
                    className="c_pointer"
                    color="#fff"
                    onClick={handleClose}
                  />
                </div>
                <div className="modalContent">
                  <h3 className="modalTitle">{slug}</h3>
                  <input type="text" value={id} className="d-none" readOnly />
                  <p
                    className={`${
                      viewPrice == null ? "d-none" : "color-light"
                    }`}
                  >{`Current price = ${viewPrice}`}</p>
                  <form className="d-flex" onSubmit={handleForm}>
                    {inputFields.map((items, index) => {
                      return (
                        <div style={{ width: "100%" }} key={index}>
                          <label>{items.label}</label>
                          <div className="inputBox">
                            <input
                              type={items.type}
                              name={items.field}
                              required
                              placeholder={`${items.placeholder}`}
                              onChange={handleInputValue}
                              value={
                                items.field == "collectedAmount"
                                  ? inputValue.collection
                                  : inputValue.field
                              }
                            />
                          </div>
                        </div>
                      );
                    })}

                    {slug == "Add New Project" ? (
                      <div style={{ width: "100%", marginTop: "28px" }}>
                        <p
                          style={{
                            color: "var(--light-1)",
                            fontSize: "1rem",
                            marginBottom: "8px",
                            cursor: "default",
                          }}
                        >
                          Status
                        </p>
                        <select name="status" id="" onChange={handleInputValue}>
                          <option value="0" defaultChecked>
                            Project type
                          </option>
                          <option value="1">Ongoing</option>
                          <option value="2">Completed</option>
                          <option value="3">Upcoming</option>
                        </select>
                      </div>
                    ) : (
                      ""
                    )}

                    <div>
                      <button type="submit" className="button c_pointer">
                        next
                      </button>
                    </div>
                  </form>
                </div>
              </Box>
            </Fade>
          </Modal>
        </Suspense>
      </div>
    </>
  );
};

export default ModalPage;
