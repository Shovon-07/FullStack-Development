import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { UseAuthContext } from "../../Context/AuthContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import Tooltip from "@mui/material/Tooltip";

//___ Icons ___//
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";

//___ Css ___//
import "./ProjectView.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";

const ProjectView = () => {
  const { id } = useParams();
  const { setLoader } = UseAuthContext();
  const navigate = useNavigate();

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
  const [projectViewData, setProjectViewData] = useState([]);
  const getProjectViewData = async () => {
    setLoader(true);
    await AxiosClient.post("/project-details", { id: id })
      .then((res) => {
        if (res.data.status == true) {
          setProjectViewData(res.data.data);
          setLoader(false);
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
    await AxiosClient.post("/plots", { project_id: id })
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
    await AxiosClient.post("/galleries", { project_id: id })
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

  // Delete Project
  const DeleteProject = async (id) => {
    confirm("Do you want to delete this project ?");
    navigate("/add-project");
    // setLoader(true);
    // await AxiosClient.post("/delete-project", { project_id: id })
    //   .then((res) => {
    //     if (res.data.status == true) {
    //       console.log(res.data.msg);
    //       setLoader(false);
    //       navigate("/add-project");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(`Error ${err}`);
    //     setLoader(false);
    //   });
  };

  useEffect(() => {
    getProjectViewData();
    getPlotData();
    // getGalleryData();
  }, []);

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
      <p className="date">
        {id} Uploaded : {moment(projectViewData.Created_at).fromNow()}
      </p>

      <div className="editOrDelete d-flex gap-30">
        <Tooltip title={`Edit ${id}`}>
          <Link to={`/project-edit/${id}`}>
            <FaEdit
              size={25}
              className="c_pointer"
              style={{ color: "var(--green)" }}
            />
          </Link>
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
              getGalleryData();
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
                src={`${imgPath}${projectViewData.Image}`}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            <div className="right">
              <h2 style={{ marginBottom: "15px", fontSize: "1.8rem" }}>
                Details
              </h2>
              <h4 style={{ margin: "20px 0 15px 0", fontSize: "1.2rem" }}>
                {projectViewData.Title}
              </h4>
              <table>
                <tbody>
                  <tr>
                    <td>Project Name</td>
                    <td>:</td>
                    <td>{projectViewData.Project_name}</td>
                  </tr>
                  <tr>
                    <td>Developer</td>
                    <td>:</td>
                    <td>{projectViewData.Developer}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>:</td>
                    <td>{projectViewData.Location}</td>
                  </tr>
                  <tr>
                    <td>Land area</td>
                    <td>:</td>
                    <td>{projectViewData.Land_area}</td>
                  </tr>
                  <tr>
                    <td>Total plot</td>
                    <td>:</td>
                    <td>{projectViewData.Total_plot}</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>:</td>
                    <td>{projectViewData.Contact_no}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>:</td>
                    <td>{projectViewData.Status}</td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        padding: "50px 0 5px 0",
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
                        <td>Plot</td>
                        <td>:</td>
                        <td>{items.Plot}</td>
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
          </div>
          {/* Map end */}

          {/* Feature start */}
          <div
            className={`contentItems gallery gap-30 ${
              tabVal == 3 ? "active" : ""
            }`}
          >
            <div className="">
              <p>{projectViewData.Features}</p>
            </div>
          </div>
          {/* Feature end */}

          {/* Gallery start */}
          <div
            className={`contentItems gallery gap-30 ${
              tabVal == 4 ? "active" : ""
            }`}
          >
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
                </div>
              );
            })}
          </div>
          {/* Gallery end */}
        </div>
      </div>
    </div>
  );
};

export default ProjectView;