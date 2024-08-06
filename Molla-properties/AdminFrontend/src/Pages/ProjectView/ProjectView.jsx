import { lazy, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { UseAuthContext } from "../../Context/AuthContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ToastContainer, toast } from "react-toastify";
import Tooltip from "@mui/material/Tooltip";

//___ Icons ___//
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

//___ Css ___//
import "./ProjectView.css";
import "../../assets/Css/Card.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-toastify/dist/ReactToastify.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";

//___ Components ___//
const PlotModal = lazy(() => import("../../Components/PlotModal/PlotModal"));

const ProjectView = () => {
  const { id } = useParams();
  const { setLoader } = UseAuthContext();
  const navigate = useNavigate();
  const [relodeData, setRelodeData] = useState(false);

  // Handle navigation tab
  const [tabVal, setTabVal] = useState(1);
  const handleTab = (e) => {
    setTabVal(e.target.id);
    let tabId = tabVal;
    return tabId;
  };

  const onInit = () => {
    // console.log("lightGallery has been initialized");
  };

  // Get project data
  const [projectViewData, setProjectViewData] = useState([
    {
      project_id: "",
      Title: "",
      Project_name: "",
      Developer: "",
      Location: "",
      Land_area: "",
      Total_plot: "",
      Contact_no: "",
      Project_map: "",
      Features: "",
      // Project_status: "",
    },
  ]);
  const [projectDate, setProjectDate] = useState();
  const [projectImage, setProjectImage] = useState();
  const [projectStatus, setProjectStatus] = useState();

  const getProjectViewData = async () => {
    setLoader(true);
    await AxiosClient.post("/project-details", { id: id })
      .then((res) => {
        if (res.data.status == true) {
          setProjectViewData(res.data.data);
          setProjectDate(res.data.data.Created_at.substr(0, 10));
          setProjectImage(res.data.data.Image);

          // Set Project Status
          setProjectStatus(res.data.data.Status);
          if (projectStatus == "Ongoing") {
            setProjectStatus("1");
          } else if (projectStatus == "Completed") {
            setProjectStatus("2");
          } else if (projectStatus == "Upcoming") {
            setProjectStatus("3");
          }

          setLoader(false);
        } else {
          setLoader(false);
          console.log(response.data.msg);
        }
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  };

  // Get plot data
  const [plotData, setPlotData] = useState([]);
  const getPlotData = async () => {
    setLoader(true);
    await AxiosClient.post("/get-plots", { project_id: id })
      .then((res) => {
        if (res.data.status == true) {
          setPlotData(res.data.data);
          setLoader(false);
        }
      })
      .catch((err) => {
        console.log(`Error ${err}`);
        setLoader(false);
      });
  };

  // Get gallery data
  const [galleryData, setGalleryData] = useState([]);
  const getGalleryData = async () => {
    setLoader(true);
    await AxiosClient.post("/get-project-gallery", { project_id: id })
      .then((res) => {
        if (res.data.status == true) {
          setGalleryData(res.data.data);
          setLoader(false);
        }
      })
      .catch((err) => {
        console.log(`Error ${err}`);
        setLoader(false);
      });
  };

  //___ Delete start ___//
  // Delete Project
  const DeleteProject = async (id) => {
    if (confirm("Do you want to delete this project ?")) {
      setLoader(true);
      await AxiosClient.post("/delete-project", { project_id: id })
        .then((res) => {
          if (res.data.status == true) {
            setLoader(false);
            window.history.back();
            navigate("/add-project");
            toast.success(res.data.msg);
            console.clear();
          } else {
            setLoader(false);
            console.log(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(`Error ${err}`);
          setLoader(false);
        });
    } else {
      toast.error("You cancel this execution");
    }
  };

  // Delete image
  const DeleteImage = async (imgId) => {
    if (confirm("Do you want to delete this image ?")) {
      setLoader(true);
      await AxiosClient.post("/delete-img", { img_id: imgId, project_id: id })
        .then((res) => {
          if (res.data.status == true) {
            console.log(res.data.msg);
            setLoader(false);
            setRelodeData(true);
            toast.success(res.data.msg);
            console.clear();
          } else {
            setLoader(false);
            console.log(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(`Error ${err}`);
          setLoader(false);
        });
    } else {
      toast.error("You cancel this execution");
    }
  };

  // Delete plot
  const DeletePlot = async (plotId) => {
    if (confirm("Do you want to delete this plot ?")) {
      setLoader(true);
      await AxiosClient.post("/delete-plot", {
        plot_id: plotId,
        project_id: id,
      })
        .then((res) => {
          if (res.data.status == true) {
            console.log(res.data.msg);
            setLoader(false);
            setRelodeData(true);
            toast.success(res.data.msg);
            console.clear();
          } else {
            setLoader(false);
            console.log(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(`Error ${err}`);
          setLoader(false);
        });
    } else {
      toast.error("You cancel this execution");
    }
  };
  //___ Delete end ___//

  // Edit section
  const handleInputValue = (e) => {
    setProjectViewData({ ...projectViewData, [e.target.name]: e.target.value });
  };
  const handleProjectImageInput = (e) => {
    setProjectImage(e.target.files[0]);
  };
  const handleProjectStatus = (e) => {
    setProjectStatus(e.target.value);
  };

  const EditProject = async () => {
    if (projectViewData.Title == "") {
      toast.error("Please enter title");
    } else if (projectViewData.Project_name == "") {
      toast.error("Please enter project name");
    } else if (projectViewData.Developer == "") {
      toast.error("Please enter developer name");
    } else if (projectViewData.Location == "") {
      toast.error("Please enter location");
    } else if (projectViewData.Land_area == "") {
      toast.error("Please enter land area");
    } else if (projectViewData.Total_plot == "") {
      toast.error("Please enter total plot");
    } else if (projectViewData.Contact_no == "") {
      toast.error("Please enter contact no");
    } else if (projectViewData.Project_map == "") {
      toast.error("Please enter project map");
    } else if (projectViewData.Features == "") {
      toast.error("Please enter features");
    } else if (projectStatus > "3" || projectStatus < "1") {
      toast.error("Please enter project status");
    } else {
      const payload = new FormData();
      payload.append("project_id", id);
      payload.append("title", projectViewData.Title);
      payload.append("project_name", projectViewData.Project_name);
      payload.append("developer", projectViewData.Developer);
      payload.append("location", projectViewData.Location);
      payload.append("land_area", projectViewData.Land_area);
      payload.append("total_plot", projectViewData.Total_plot);
      payload.append("contact_no", projectViewData.Contact_no);
      payload.append("project_map", projectViewData.Project_map);
      payload.append("features", projectViewData.Features);
      payload.append("project_status", projectStatus);
      payload.append("project_image", projectImage);

      setLoader(true);
      await AxiosClient.post("update-project", payload)
        .then((response) => {
          if (response.data.status == true) {
            setProjectViewData({
              project_id: "",
              Title: "",
              Project_name: "",
              Developer: "",
              Location: "",
              Land_area: "",
              Total_plot: "",
              Contact_no: "",
              Project_map: "",
              Features: "",
            });
            setProjectImage();

            setLoader(false);
            setRelodeData(true);
            // console.clear();
            toast.success(response.data.msg);
            console.log(response.data.msg);
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
  };

  useEffect(() => {
    getProjectViewData();
    getPlotData();
    getGalleryData();

    if (relodeData == true) {
      setInterval(() => {
        setRelodeData(false);
      }, 1000);
    }
  }, [relodeData]);

  return (
    <div className="ProjectView page content">
      <h3 className="pageTitle">Preview project</h3>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}

      <p className="date">Uploaded : {projectDate}</p>

      <div className="editOrDelete d-flex gap-30">
        <Tooltip title={`Update ${id}`}>
          <button onClick={() => EditProject(id)}>
            <FaEdit
              size={25}
              className="c_pointer"
              style={{ color: "var(--green)" }}
            />
          </button>
        </Tooltip>
        <Tooltip title={`Delete ${id}`}>
          <button onClick={() => DeleteProject(id)}>
            <FaRegTrashAlt
              size={23}
              className="c_pointer"
              style={{ color: "var(--red)" }}
            />
          </button>
        </Tooltip>
        <button
          className="btn resetBtn"
          onClick={() => {
            setRelodeData(true);
            // setProjectImage();
          }}
        >
          Clear changes
        </button>
      </div>

      <div className="tab-container">
        <div className="tab-box">
          <button
            onClick={handleTab}
            id="1"
            className={`tab-btn ${tabVal == 1 ? "active" : ""}`}
          >
            Info
          </button>
          <button
            onClick={handleTab}
            id="2"
            className={`tab-btn ${tabVal == 2 ? "active" : ""}`}
          >
            Map
          </button>
          <button
            onClick={handleTab}
            id="3"
            className={`tab-btn ${tabVal == 3 ? "active" : ""}`}
          >
            Features
          </button>
          <button
            onClick={(e) => {
              handleTab(e);
            }}
            id="4"
            className={`tab-btn ${tabVal == 4 ? "active" : ""}`}
          >
            Gallery
          </button>
          <div className="line"></div>
        </div>
        <div className="content-box">
          {/* Brief outline start */}
          <div
            className={`contentItems briefOutlineContent ${
              tabVal == 1 ? "active" : ""
            }`}
          >
            <div className="left">
              <LazyLoadImage
                src={`${imgPath}${projectImage}`}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
              <input
                type="file"
                style={{ marginTop: "50px" }}
                onChange={handleProjectImageInput}
              />
            </div>
            <div className="right">
              <h2 style={{ marginBottom: "15px", fontSize: "1.8rem" }}>
                Details
              </h2>
              <h4 style={{ margin: "20px 0 15px 0", fontSize: "1.2rem" }}>
                <input
                  type="text"
                  name="Title"
                  value={projectViewData.Title}
                  onChange={handleInputValue}
                />
              </h4>
              <table>
                <tbody>
                  <tr>
                    <td>Project Name</td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        name="Project_name"
                        value={projectViewData.Project_name}
                        onChange={handleInputValue}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Developer</td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        name="Developer"
                        value={projectViewData.Developer}
                        onChange={handleInputValue}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        name="Location"
                        value={projectViewData.Location}
                        onChange={handleInputValue}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Land area</td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        name="Land_area"
                        value={projectViewData.Land_area}
                        onChange={handleInputValue}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Total plot</td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        name="Total_plot"
                        value={projectViewData.Total_plot}
                        onChange={handleInputValue}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        name="Contact_no"
                        value={projectViewData.Contact_no}
                        onChange={handleInputValue}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        name="Status"
                        readOnly
                        value={projectStatus} //--
                        onChange={handleProjectStatus}
                      />
                      <select name="Status" onChange={handleProjectStatus}>
                        <option value="0">0. Project status</option>
                        <option value="1">1. Ongoing</option>
                        <option value="2">2. Completed</option>
                        <option value="3">3. Upcoming</option>
                      </select>
                    </td>
                  </tr>
                  <PlotModal
                    id={id}
                    setRelodeData={setRelodeData}
                    toast={toast}
                  />
                  <tr>
                    <td
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        padding: "0 0 5px 0",
                      }}
                    >
                      Plots
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  {plotData.map((items, index) => {
                    return (
                      <tr key={index}>
                        <td>Plot {` - ${index + 1}`}</td>
                        <td>:</td>
                        <td className="d-flex gap-30">
                          {items.Plot}{" "}
                          <Tooltip title={`Delete ${index + 1}`}>
                            <a onClick={() => DeletePlot(items.id)}>
                              <RxCross2 size={20} className="cross" />
                            </a>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* Brief outline end */}

          {/* Map start */}
          <div className={`contentItems map ${tabVal == 2 ? "active" : ""}`}>
            <iframe
              src={projectViewData.Project_map}
              width="100%"
              height="450"
              style={{
                border: "1px solid var(--light-2)",
                outline: "0",
                borderRadius: "12px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <input
              style={{ marginTop: "30px" }}
              type="text"
              name="Project_map"
              value={projectViewData.Project_map}
              onChange={handleInputValue}
            />
          </div>
          {/* Map end */}

          {/* Feature start */}
          <div
            className={`contentItems gallery gap-30 ${
              tabVal == 3 ? "active" : ""
            }`}
          >
            <div style={{ width: "100%" }}>
              <textarea
                name="Features"
                rows={10}
                value={projectViewData.Features}
                onChange={handleInputValue}
              ></textarea>
            </div>
          </div>
          {/* Feature end */}

          {/* Gallery start */}
          <div
            className={`contentItems gallery ${tabVal == 4 ? "active" : ""}`}
          >
            <div className="cardWrapper d-flex gap-20">
              {galleryData.map((items, index) => {
                return (
                  <div className="card" key={index}>
                    <LazyLoadImage
                      src={`${imgPath}${items.Gallery_img}`}
                      effect="blur"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                    />
                    <div className="txt d-flex">
                      <Tooltip title={`Delete ${items.id}`}>
                        <a onClick={() => DeleteImage(items.id)}>
                          <FaRegTrashAlt size={40} className="cross" />
                        </a>
                      </Tooltip>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Gallery end */}
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ProjectView;
