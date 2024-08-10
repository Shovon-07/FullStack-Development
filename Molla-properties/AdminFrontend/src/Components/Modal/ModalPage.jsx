import React, { useState, useRef, lazy, Suspense } from "react";
import { UseAuthContext } from "../../Context/AuthContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
const JoditEditor = lazy(() => import("jodit-react"));

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
import "../../assets/Css/TextEditor.css";
import "react-lazy-load-image-component/src/effects/blur.css";

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
    setRelodeData,
    toast,
    projectData,
  } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editor = useRef(null);
  const [features, setFeatures] = useState("");

  const [inputValue, setInputValue] = useState({
    project_id: "",

    title: "",
    project_name: "",
    developer: "",
    location: "",
    land_area: "",
    total_plot: "",
    contact_no: "",
    project_map: "",
    project_status: "",

    honClient_name: "",

    blog_link: "",
  });
  const handleInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  //___ Project image start ___//
  const [projectImage, setProjectImage] = useState();
  const handleProjectImageInput = (e) => {
    setProjectImage(e.target.files[0]);
  };
  //___ Project image end ___//

  //___ Add Gallery Page Start ___//
  const [files, setFiles] = useState();
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleGalleryImageInput = (e) => {
    setFiles(e.target.files);

    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(fileUrls);
  };
  //___ Add Gallery Page End ___//

  //___ Honorable client image start ___//
  const [honClientImage, setHonClientImage] = useState();
  const handleHonClientImageInput = (e) => {
    setHonClientImage(e.target.files[0]);
  };
  //___ Honorable client image end ___//

  //___ News and event image start ___//
  const [newsEventImage, setNewsEventImage] = useState();
  const handleNewsEventImageInput = (e) => {
    setNewsEventImage(e.target.files[0]);
  };
  //___ News and event image end ___//

  const HandleForm = async (e) => {
    e.preventDefault();
    if (api == "/add-project") {
      if (inputValue.title == "") {
        toast.error("Please enter title");
      } else if (inputValue.project_name == "") {
        toast.error("Please enter project name");
      } else if (inputValue.developer == "") {
        toast.error("Please enter developer name");
      } else if (inputValue.location == "") {
        toast.error("Please enter location");
      } else if (inputValue.land_area == "") {
        toast.error("Please enter land area");
      } else if (inputValue.total_plot == "") {
        toast.error("Please enter total plot");
      } else if (inputValue.contact_no == "") {
        toast.error("Please enter contact no");
      } else if (inputValue.project_map == "") {
        toast.error("Please enter project map");
      } else if (features == "") {
        toast.error("Please enter features");
      } else if (inputValue.projectImage == "") {
        toast.error("Please enter project image");
      } else if (inputValue.project_status == "") {
        toast.error("Please enter project status");
      } else {
        const payload = new FormData();
        payload.append("title", inputValue.title);
        payload.append("project_name", inputValue.project_name);
        payload.append("developer", inputValue.developer);
        payload.append("location", inputValue.location);
        payload.append("land_area", inputValue.land_area);
        payload.append("total_plot", inputValue.total_plot);
        payload.append("contact_no", inputValue.contact_no);
        payload.append("features", features);
        payload.append("project_map", inputValue.project_map);
        payload.append("project_status", inputValue.project_status);
        payload.append("project_image", projectImage);

        setLoader(true);
        await AxiosClient.post(api, payload)
          .then((response) => {
            if (response.data.status == true) {
              setInputValue({
                title: "",
                project_name: "",
                developer: "",
                location: "",
                land_area: "",
                total_plot: "",
                contact_no: "",
                project_map: "",
                project_status: "",
              });
              setFeatures("");
              setProjectImage(null);
              handleClose();

              setLoader(false);
              setRelodeData((prev) => !prev);
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
    } else if (api == "/add-gallery-img") {
      if (inputValue.project_id == "") {
        toast.error("Please select a project");
      } else if (files == null) {
        toast.error("Please select images");
      } else {
        const payload = new FormData();
        payload.append("project_id", inputValue.project_id);
        for (let i = 0; i < files.length; i++) {
          payload.append(`gallery_image[${i}]`, files[i]);
        }

        setLoader(true);
        await AxiosClient.post(api, payload)
          .then((response) => {
            if (response.data.status == true) {
              handleClose();

              setLoader(false);
              setRelodeData((prev) => !prev);

              setFiles();
              setPreviewUrls([]);
              setInputValue({ project_id: "" });

              toast.success(response.data.msg);
              console.clear();
            } else {
              setLoader(false);
              console.log(response.data.msg);
              alert(
                "Please select image file ( jpg, png, jpeg or anything else )"
              );
            }
          })
          .catch((e) => {
            console.log(`Error = ${e}`);
            setLoader(false);
          });
      }
    } else if (api == "/add-hon-client") {
      if (inputValue.project_id == "") {
        toast.error("Please select a project");
      } else if (inputValue.honClient_name == "") {
        toast.error("Please enter client name");
      } else if (honClientImage == null) {
        toast.error("Please select client image");
      } else {
        const payload = new FormData();
        payload.append("project_id", inputValue.project_id);
        payload.append("honClient_name", inputValue.honClient_name);
        payload.append("honClient_image", honClientImage);

        setLoader(true);
        await AxiosClient.post(api, payload)
          .then((response) => {
            if (response.data.status == true) {
              handleClose();

              setLoader(false);
              setRelodeData((prev) => !prev);

              setHonClientImage("");
              setInputValue({ project_id: "", honClient_name: "" });

              toast.success(response.data.msg);
              console.clear();
            } else {
              setLoader(false);
              console.log(response.data.msg);
              alert(
                "Please select image file ( jpg, png, jpeg or anything else )"
              );
            }
          })
          .catch((e) => {
            console.log(`Error = ${e}`);
            setLoader(false);
          });
      }
    } else if (api == "/add-news-event") {
      if (inputValue.project_id == "") {
        toast.error("Please select a project");
      } else if (newsEventImage == null) {
        toast.error("Please select news image");
      } else {
        const payload = new FormData();
        payload.append("project_id", inputValue.project_id);
        payload.append("newsEvent_image", newsEventImage);

        setLoader(true);
        await AxiosClient.post(api, payload)
          .then((response) => {
            if (response.data.status == true) {
              handleClose();

              setLoader(false);
              setRelodeData((prev) => !prev);

              setNewsEventImage("");
              setInputValue({ project_id: "" });

              toast.success(response.data.msg);
              console.clear();
            } else {
              setLoader(false);
              console.log(response.data.msg);
              alert(
                "Please select image file ( jpg, png, jpeg or anything else )"
              );
            }
          })
          .catch((e) => {
            console.log(`Error = ${e}`);
            setLoader(false);
          });
      }
    } else if (api == "/add-blog") {
      if (inputValue.blog_link == "") {
        toast.error("Please enter blog link");
      } else {
        const payload = new FormData();
        payload.append("blog_link", inputValue.blog_link);

        setLoader(true);
        await AxiosClient.post(api, payload)
          .then((response) => {
            if (response.data.status == true) {
              handleClose();

              setLoader(false);
              setRelodeData((prev) => !prev);
              setInputValue({ blog_link: "" });

              toast.success(response.data.msg);
              console.clear();
            } else {
              setLoader(false);
              console.log(response.data.msg);
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
                          <Suspense fallback={<Loader />}>
                            <JoditEditor
                              ref={editor}
                              value={features}
                              // config={config}
                              tabIndex={1} // tabIndex of textarea
                              onBlur={(newContent) => setFeatures(newContent)} // preferred to use only this option to update the content for performance reasons
                              onChange={(newContent) => {}}
                            />
                          </Suspense>
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
                        <select
                          name="project_status"
                          id=""
                          onChange={handleInputValue}
                        >
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
                    {/* Select project */}
                    {api == "/add-gallery-img" ? (
                      <div style={{ width: "100%" }}>
                        <label>Select project</label>
                        <select name="project_id" onChange={handleInputValue}>
                          <option value="1">Select project</option>
                          {projectData.map((items, index) => {
                            return (
                              <option key={index} value={items.id}>
                                {items.Project_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* Gallery image */}
                    {api == "/add-gallery-img" ? (
                      <div style={{ width: "100%" }}>
                        <label>Gallery image</label>
                        <div className="inputBox">
                          <input
                            type="file"
                            name="gallery_image[]"
                            multiple
                            onChange={handleGalleryImageInput}
                          />
                        </div>
                        <div className="showImages">
                          {previewUrls.map((url, index) => (
                            <LazyLoadImage
                              key={index}
                              src={url}
                              alt={`Preview ${index}`}
                              width="100"
                              effect="blur"
                              wrapperProps={{
                                style: { transitionDelay: "1s" },
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {/* ___ Add Gallery Page End  ___ */}

                    {/* ___ Add Honorable Client Page Start  ___ */}
                    {/* Select project */}
                    {api == "/add-hon-client" ? (
                      <div style={{ width: "100%" }}>
                        <label>Select project</label>
                        <select name="project_id" onChange={handleInputValue}>
                          <option value="1">Select project</option>
                          {projectData.map((items, index) => {
                            return (
                              <option key={index} value={items.id}>
                                {items.Project_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* Honorable client name */}
                    {api == "/add-hon-client" ? (
                      <div style={{ width: "100%" }}>
                        <label>Honorable client name</label>
                        <div className="inputBox">
                          <input
                            type="text"
                            name="honClient_name"
                            placeholder="Enter honorable client name"
                            onChange={handleInputValue}
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* Honorable client image */}
                    {api == "/add-hon-client" ? (
                      <div style={{ width: "100%" }}>
                        <label>Honorable client image</label>
                        <div className="inputBox">
                          <input
                            type="file"
                            name="honClient_image"
                            onChange={handleHonClientImageInput}
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {/* ___ Add Honorable Client Page Start  ___ */}

                    {/* ___ Add News and event Page Start  ___ */}
                    {/* Select project */}
                    {api == "/add-news-event" ? (
                      <div style={{ width: "100%" }}>
                        <label>Select project</label>
                        <select name="project_id" onChange={handleInputValue}>
                          <option value="1">Select project</option>
                          {projectData.map((items, index) => {
                            return (
                              <option key={index} value={items.id}>
                                {items.Project_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* News and event image */}
                    {api == "/add-news-event" ? (
                      <div style={{ width: "100%" }}>
                        <label>News and event image</label>
                        <div className="inputBox">
                          <input
                            type="file"
                            name="newsEvent_image"
                            onChange={handleNewsEventImageInput}
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {/* ___ Add News and event Page Start  ___ */}

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
