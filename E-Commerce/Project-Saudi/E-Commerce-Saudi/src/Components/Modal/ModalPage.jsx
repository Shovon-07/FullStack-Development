import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

//___ Css ___//
import "./Modal.scss";

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

//___ Components ___//

const ModalPage = (props) => {
  const {
    slug,
    id,
    inputFields,
    addUserApi,
    ModalOpenBtnTitle,
    ModalOpenBtnStyle,
  } = props;
  const { http } = AxiosConfig();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputValue, setInputValue] = useState([
    {
      name: "",
      email: "",
      password: "",
    },
  ]);
  const handleInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const data = {
      name: inputValue.name,
      email: inputValue.email,
      password: inputValue.password,
    };
    http.post(addUserApi, data);
    // console.log(data);
  };

  return (
    <>
      <div>
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
                <span>{id}</span>
              </div>
              <div className="modalContent">
                <h3 className="modalTitle">{slug}</h3>
                <form className="d-flex" onSubmit={handleForm}>
                  {inputFields.map((items, index) => {
                    return (
                      <div className="inputBox" key={index}>
                        <input
                          type={items.inputType}
                          name={items.field}
                          placeholder={`${items.placeholder}`}
                          onChange={handleInputValue}
                        />
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
      </div>
    </>
  );
};

export default ModalPage;
