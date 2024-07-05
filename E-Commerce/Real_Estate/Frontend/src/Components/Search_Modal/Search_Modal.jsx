import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

//___ Icons __//
import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

//___ Css __//
// import "../Search_Modal/Search_Modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "400px",
  width: "50%",
  bgcolor: "background.paper",
  border: 0,
  outline: 0,
  boxShadow: 24,
  // p: 2,
  padding: "20px 30px 50px 30px",
};

const Search_Modal = (props) => {
  // const { btn } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="Search_Modal">
      <GoSearch size={25} className="c_pointer d-flex" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className="d-flex-start"
            style={{ justifyContent: "space-between" }}
          >
            <h3 className="pageTitle">Search hear</h3>
            <RxCross2 size={30} className="c_pointer" onClick={handleClose} />
          </div>
          <div style={{ marginTop: "10px" }}>
            <input
              type="text"
              placeholder="প্লট অনুসন্ধান করুন"
              style={{
                width: "100%",
                border: "1px solid var(--light-3)",
                outline: "none",
                borderRadius: "4px",
                padding: "5px 15px",
                fontSize: "0.96rem",
              }}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Search_Modal;
