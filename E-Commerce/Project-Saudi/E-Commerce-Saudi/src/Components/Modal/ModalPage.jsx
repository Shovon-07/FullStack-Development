import React, { useState, lazy, Suspense } from "react";
const Backdrop = lazy(() => import("@mui/material/Backdrop"));
const Box = lazy(() => import("@mui/material/Box"));
const Modal = lazy(() => import("@mui/material/Modal"));
const Fade = lazy(() => import("@mui/material/Fade"));
const Button = lazy(() => import("@mui/material/Button"));

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
import AxiosConfig from "../../assets/AxiosConfig";
import Loader from "../Loader/Loader";

const ModalPage = (props) => {
  const {
    id,
    slug,
    viewPrice,
    inputFields,
    api,
    ModalOpenBtnTitle,
    ModalOpenBtnStyle,
    setLoading,
    setRelodeTable,
  } = props;
  const { http } = AxiosConfig();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputValue, setInputValue] = useState([
    {
      name: "",
      stock: "",
      price: "",
      deduct: "",

      delivery_date: "",
      collection: "",
    },
  ]);
  const handleInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const data = {
      id: id,
      name: inputValue.name,

      stock: inputValue.stock,
      price: inputValue.price,
      deduct: inputValue.deduct,

      delivery_date: inputValue.deliveryDate,
      collection: inputValue.collectedAmount,
    };
    setLoading(true);
    try {
      http.post(api, data).then((response) => {
        handleClose();
        setLoading(false);
        setRelodeTable((prev) => !prev);
      });
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
                  <span onClick={handleClose}>X</span>
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
                            />
                          </div>
                        </div>
                      );
                    })}

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
        </Suspense>
      </div>
    </>
  );
};

export default ModalPage;
