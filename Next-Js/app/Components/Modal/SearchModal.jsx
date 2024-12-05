import dynamic from "next/dynamic";
import React, { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

//___ Icons ___//
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";

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
// import AxiosConfig from "../../assets/AxiosConfig";

const SearchModal = (props) => {
  const {
    id,
    slug,
    viewPrice,
    viewDue,
    inputFields,
    api,
    ModalOpenBtnTitle,
    ModalOpenBtnStyle,
    setLoading,
    setRelodeTable,
  } = props;
  // const { http } = AxiosConfig();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputValue, setInputValue] = useState({
    name: "Shovon",
    phone: "017",
    roll: "520",
  });
  const handleInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {};

  // const handleForm = async (e) => {
  //     e.preventDefault();
  //     const data = {
  //         id: id,
  //         name: inputValue.name,
  //         stock: inputValue.stock,
  //         price: inputValue.price,
  //         deduct: inputValue.deduct,
  //         // priceForStock: 0,
  //         delivery_date: inputValue.deliveryDate,
  //         collection: viewDue,
  //     };
  //     setLoading(true);
  //     try {
  //         http.post(api, data).then((response) => {
  //             if (response.data === "success") {
  //                 handleClose();
  //                 setLoading(false);
  //                 setRelodeTable((prev) => !prev);
  //             } else {
  //                 handleClose();
  //                 setLoading(false);
  //                 alert("You don't add duplicate data !");
  //             }
  //         });
  //     } catch (error) {
  //         console.error(error);
  //     }
  // };

  return (
    <>
      <div>
        <Button onClick={handleOpen} style={{ color: "var(--dark-3)" }}>
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
                <form className="d-flex" onSubmit={handleForm}>
                  <div className="search-box">
                    <div className="inp-box">
                      <input type="text" placeholder="Searh hear" />
                      <IoSearch className="search-icon" />
                    </div>
                    <ul className="search-result">
                      <li>
                        <a href="">Result 1</a>
                      </li>
                      <li>
                        <a href="">Result 2</a>
                      </li>
                      <li>
                        <a href="">Result 3</a>
                      </li>

                      <li>
                        <a href="">Result 4</a>
                      </li>
                      <li>
                        <a href="">Result 5</a>
                      </li>
                      <li>
                        <a href="">Result 6</a>
                      </li>
                      <li>
                        <a href="">Result 7</a>
                      </li>
                      <li>
                        <a href="">Result 8</a>
                      </li>
                      <li>
                        <a href="">Result 9</a>
                      </li>
                    </ul>
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

export default SearchModal;
