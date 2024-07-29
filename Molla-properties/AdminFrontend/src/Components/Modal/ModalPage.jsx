import React, { useState, lazy, Suspense } from "react";
import { UseAuthContext } from "../../Context/AuthContext";

//___ Modals utilities ___//
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

//___ Additional utilities ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import Loader from "../Loader/Loader";

const ModalPage = (props) => {
  const { setLoader } = UseAuthContext();

  const {
    id,
    slug,
    inputFields,
    api,
    ModalOpenBtnTitle,
    ModalOpenBtnStyle,
    // setRelodeTable,
  } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputValue, setInputValue] = useState({
    id: "",
    title: "",
    project_name: "",
    developer: "",
    location: "",
    land_area: "",
    total_plot: "",
    contact_no: "",
    project_map: "",
    features: "",
    status: "",
  });
  const handleInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  //___ Project image start ___//
  const [projectImage, setProjectImage] = useState();
  const handleProjectImageInput = (e) => {
    setProjectImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  //___ Project image end ___//

  //___ Add Gallery Page Start ___//
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleGalleryImageInput = (e) => {
    setSelectedFiles([]);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedFiles((prevImg) => prevImg.concat(filesArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return <img src={photo} key={photo}></img>;
    });
  };
  //___ Add Gallery Page End ___//

  const HandleForm = async (e) => {
    e.preventDefault();
    if (api == "/add-project") {
      const payload = new FormData();
      payload.append("title", inputValue.title);
      payload.append("project_name", inputValue.project_name);
      payload.append("developer", inputValue.developer);
      payload.append("location", inputValue.location);
      payload.append("land_area", inputValue.land_area);
      payload.append("total_plot", inputValue.total_plot);
      payload.append("contact_no", inputValue.contact_no);
      payload.append("features", inputValue.features);
      payload.append("project_map", inputValue.project_map);
      payload.append("project_status", inputValue.status);
      payload.append("project_image", projectImage);

      setLoader(true);
      await AxiosClient.post(api, payload)
        .then((response) => {
          if (response.data.status == true) {
            handleClose();
            setLoader(false);
            // setRelodeTable((prev) => !prev);
            console.log(response.data.msg);
          } else {
            handleClose();
            setLoader(false);
            alert("You don't add duplicate data !");
          }
        })
        .catch((e) => {
          console.log(`Error = ${e}`);
        });
    } else if (api == "/add-gallery-img") {
      const payload = new FormData();
      var files = e.target[0].files;
      for (let i = 0; i < files.length; i++) {
        formData.append("gallery_image[]", files[1]);
      }

      setLoader(true);
      await AxiosClient.post(api, payload)
        .then((response) => {
          if (response.data.status == true) {
            handleClose();
            setLoader(false);
            // setRelodeTable((prev) => !prev);
            console.log(response.data.msg);
          } else {
            handleClose();
            setLoader(false);
            alert("You don't add duplicate data !");
          }
        })
        .catch((e) => {
          console.log(`Error = ${e}`);
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
                  <form
                    encType="multipart/form-data"
                    className="d-flex"
                    onSubmit={(e) => {
                      HandleForm(e);
                    }}
                  >
                    {inputFields.map((items, index) => {
                      return (
                        <div style={{ width: "100%" }} key={index}>
                          <label>{items.label}</label>
                          <div className={items.className}>
                            <input
                              type={items.type}
                              name={items.field}
                              // required
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

                    {/* ___ Add Project Page  ___ */}
                    {/* Project features */}
                    {api == "/add-project" ? (
                      <div style={{ width: "100%" }}>
                        <label>Features</label>
                        <div className="inputBox">
                          <textarea
                            name="features"
                            id=""
                            rows={10}
                            onChange={handleInputValue}
                          ></textarea>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* Project image */}
                    {api == "/add-project" ? (
                      <div style={{ width: "100%" }}>
                        <label>Project image</label>
                        <div className="inputBox">
                          <input
                            type="file"
                            name="project_image"
                            onChange={handleProjectImageInput}
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* Project status select */}
                    {api == "/add-project" ? (
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
                          <option value="0">Project type</option>
                          <option value="1">Ongoing</option>
                          <option value="2">Completed</option>
                          <option value="3">Upcoming</option>
                        </select>
                      </div>
                    ) : (
                      ""
                    )}
                    {/* ___ Add Project Page  ___ */}

                    {/* ___ Add Gallery Page Start  ___ */}
                    {/* Gallery image */}
                    {api == "/add-gallery-img" ? (
                      <div style={{ width: "100%" }}>
                        <label>Gallery image</label>
                        <div className="inputBox">
                          <input
                            type="file"
                            name="gallery_image[]" //gallery_image[]
                            multiple
                            onChange={handleGalleryImageInput}
                          />
                        </div>
                        <div className="showImages">
                          {renderPhotos(selectedFiles)}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {/* ___ Add Gallery Page End  ___ */}

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
