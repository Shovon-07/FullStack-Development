import React, { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuthContext } from "../../Context/AuthContext";
// import { ToastContainer, toast } from "react-toastify";

//___ Modals utilities ___//
const Backdrop = lazy(() => import("@mui/material/Backdrop"));
const Box = lazy(() => import("@mui/material/Box"));
const Modal = lazy(() => import("@mui/material/Modal"));
const Fade = lazy(() => import("@mui/material/Fade"));
const Button = lazy(() => import("@mui/material/Button"));

//___ Icons ___//
import { RxCross2 } from "react-icons/rx";

//___ Css ___//
import "./PlotModal.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-toastify/dist/ReactToastify.css";

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

//___ Additional utilities ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import Loader from "../Loader/Loader";

const PlotModal = (plotProps) => {
  const { setLoader } = UseAuthContext();

  const { id, setRelodeData, toast } = plotProps;

  const modalOpenBtnStyle = {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#fff",
    width: "130px",
    height: "40px",
    background: "#424242",
    paddingBottom: "3px",
    marginTop: "60px",
    marginBottom: "30px",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Dynamically add or remove input
  const [inputs, setInputs] = useState([{ value: "" }]);

  const handleInputChange = (index, event) => {
    const values = [...inputs];
    values[index].value = event.target.value;
    setInputs(values);
  };

  const handleAddField = () => {
    const values = [...inputs];
    values.push({ value: "" });
    setInputs(values);
  };

  const handleRemoveField = (index) => {
    if (index <= 0) {
      return;
    } else {
      const values = [...inputs];
      values.splice(index, 1);
      setInputs(values);
    }
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    const data = inputs.map((input) => input.value);

    if (id == "") {
      toast.error("Project not found");
    } else {
      const payload = {
        project_id: id,
        plot: data,
      };

      setLoader(true);
      await AxiosClient.post("/add-plot", payload)
        .then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.msg);
            setInputs([{ value: "" }]);
            setRelodeData(true);
            setLoader(false);

            handleClose();
            console.clear();
          } else {
            setLoader(false);
            console.log(res.data.msg);
            toast.error("You didn't add plot value");
          }
        })
        .catch((err) => {
          console.log(`Error = ${err}`);
          setLoader(false);
        });
    }
  };

  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <Button
            onClick={handleOpen}
            className="addBtn"
            style={modalOpenBtnStyle}
          >
            Add Plots
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
                  <h3 className="modalTitle"> Add New Plots {id}</h3>
                  <input type="text" value={id} className="d-none" readOnly />
                  <form
                    encType="multipart/form-data"
                    className="d-flex"
                    onSubmit={(e) => {
                      HandleSubmit(e);
                    }}
                  >
                    {inputs.map((input, index) => (
                      <div key={index} className="plotInputBox">
                        <input
                          type="text"
                          value={input.value}
                          placeholder={`Enter plot value ${index + 1}`}
                          onChange={(event) => handleInputChange(index, event)}
                        />
                        <button
                          type="button"
                          className="addOrRemoveBtn removeBtn"
                          onClick={() => handleRemoveField(index)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}

                    <div style={{ width: "100%" }}>
                      <button
                        type="button"
                        className="addOrRemoveBtn addBtn"
                        onClick={handleAddField}
                      >
                        Add Field
                      </button>
                    </div>

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

export default PlotModal;
