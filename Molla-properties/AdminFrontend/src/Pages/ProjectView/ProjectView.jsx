import { useEffect, useState } from "react";
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
      Project_status: "",
    },
  ]);
  const [projectDate, setProjectDate] = useState();

  const getProjectViewData = async () => {
    setLoader(true);
    await AxiosClient.post("/project-details", { id: id })
      .then((res) => {
        if (res.data.status == true) {
          setProjectViewData(res.data.data);
          setProjectDate(res.data.data.Created_at.substr(0, 10));
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
  // const [plotData, setPlotData] = useState([
  //   {
  //     Plot_1: "",
  //     Plot_2: "",
  //     Plot_3: "",
  //     Plot_4: "",
  //     Plot_5: "",
  //     Plot_6: "",
  //     Plot_7: "",
  //     Plot_8: "",
  //     Plot_9: "",
  //     Plot_10: "",
  //     Plot_11: "",
  //     Plot_12: "",
  //     Plot_13: "",
  //     Plot_14: "",
  //     Plot_15: "",
  //     Plot_16: "",
  //   },
  // ]);
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

  // Delete Project
  const DeleteProject = async (id) => {
    if (confirm("Do you want to delete this project ?")) {
      setLoader(true);
      await AxiosClient.post("/delete-project", { project_id: id })
        .then((res) => {
          if (res.data.status == true) {
            console.log(res.data.msg);
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

  // Edit section
  const handleInputValue = (e) => {
    setProjectViewData({ ...projectViewData, [e.target.name]: e.target.value });
  };
  const handlePlotInput = (index, event) => {
    const newPlot = [...plotData];
    newPlot[index].value = event.target.value;
    setPlotData(newPlot);
    console.log(newPlot);
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
      {/* <p className="date">
        Uploaded : {moment(projectViewData.Created_at).fromNow()}
      </p> */}

      <p className="date">Uploaded : {projectDate}</p>

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
                        value={projectViewData.Status}
                        onChange={handleInputValue}
                      />
                    </td>
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
                        <td>Plot {` - ${index + 1}`}</td>
                        <td>:</td>
                        <td>
                          <input
                            type="text"
                            name={`Plot_${index + 1}`}
                            value={items.Plot}
                            onChange={(event) => handlePlotInput(index, event)}
                          />
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
                name=""
                rows={10}
                value={projectViewData.Features}
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
                          <RxCross2 size={50} className="cross" />
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

/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (index, event) => {
    const newItems = [...items];
    newItems[index].value = event.target.value;
    setItems(newItems);
  };

  return (
    <div>
      <h1>Edit Items</h1>
      {items.map((item, index) => (
        <div key={index}>
          <label>
            {item.name}:
            <input
              type="text"
              value={item.value}
              onChange={(event) => handleChange(index, event)}
            />
          </label>
        </div>
      ))}
    </div>
  );
}

export default App;

*/
