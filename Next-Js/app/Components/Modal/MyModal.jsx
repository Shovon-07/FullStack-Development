import React, { useState } from "react";
import toast from "react-hot-toast";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

//___ Icons ___//
import { RxCross2 } from "react-icons/rx";

//___ Css ___//
import "@/app/assets/css/MyModal.css";

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

const MyModal = (props) => {
  const {
    // id,
    slug,
    inputFields,
    api,
    ModalOpenBtnTitle,
    ModalOpenBtnStyle,
    setRelodeTable,
  } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputValue, setInputValue] = useState({
    title: "",
    project_name: "",
    developer: "",
  });
  const handleInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    if (api == "/add-project") {
      if (inputValue.title == "") {
        toast.error("Please enter title");
      } else if (inputValue.project_name == "") {
        toast.error("Please enter project name");
      } else if (inputValue.developer == "") {
        toast.error("Please enter developer name");
      } else {
        const payload = new FormData();
        payload.append("title", inputValue.title);
        payload.append("project_name", inputValue.project_name);
        payload.append("developer", inputValue.developer);

        setLoader(true);
        await AxiosClient.post(api, payload)
          .then((response) => {
            if (response.data.status == true) {
              setInputValue({
                title: "",
                project_name: "",
                developer: "",
              });
              handleClose();
              setRelodeTable((prev) => !prev);
              console.clear();
              toast.success(response.data.msg);
            } else {
              setLoader(false);
              console.log(response.data.msg);
              alert(response.data.msg.project_image[1]);
            }
          })
          .catch((e) => {
            console.log(`Error = ${e}`);
            setLoader(false);
          });
      }
    }
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
//
