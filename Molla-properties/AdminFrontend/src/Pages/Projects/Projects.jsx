import { useEffect, useState, lazy, Suspense } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css ___//
import "./Projects.css";
import "../../assets/Css/Card.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";
import Loader from "../../Components/Loader/Loader";

//___ Components ___//
const ModalPage = lazy(() => import("../../Components/Modal/ModalPage"));

const Projects = () => {
  const [setLoader] = useOutletContext();
  const [msg, setMsg] = useState();

  const [projectData, setProjectData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(2);
  const slicedData = projectData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  // const getProjectData = async () => {
  //   try {
  //     setLoader(true);
  //     await AxiosClient.get("/completed-project").then((res) => {
  //       if (res.data.status == true) {
  //         setProjectData(res.data.data);
  //         setLoader(false);
  //       } else {
  //         console.log(res.data.msg);
  //         setLoader(false);
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getProjectData();
  // }, []);

  // Input For modal
  const inputFieldsForAddProjects = [
    {
      field: "title",
      type: "text",
      label: "Title",
      placeholder: "Enter project title",
      className: "inputBox",
    },
    {
      field: "project_name",
      type: "text",
      label: "Project name",
      placeholder: "Enter project name",
      className: "inputBox",
    },
    {
      field: "developer",
      type: "text",
      label: "Developer",
      placeholder: "Enter developer name",
      className: "inputBox",
    },
    {
      field: "location",
      type: "text",
      label: "Location",
      placeholder: "Enter location",
      className: "inputBox",
    },
    {
      field: "land_area",
      type: "text",
      label: "Land area",
      placeholder: "Enter land area",
      className: "inputBox",
    },
    {
      field: "total_plot",
      type: "text",
      label: "Total plot",
      placeholder: "Enter total plot",
      className: "inputBox",
    },
    {
      field: "contact_no",
      type: "text",
      label: "Contact no",
      placeholder: "Enter contact no",
      className: "inputBox",
    },
    {
      field: "project_map",
      type: "text",
      label: "Project map",
      placeholder: "Enter project map",
      className: "inputBox",
    },
  ];

  // Style for modal
  const modalOpenBtnStyle = {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#fff",
    width: "200px",
    height: "40px",
    background: "#424242",
    paddingBottom: "3px",
    marginBottom: "50px",
  };

  return (
    <div className="Projects">
      <h3 className="pageTitle">Add Project</h3>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}
      <div className="modalBtn" style={{ textAlign: "end" }}>
        <Suspense fallback={<Loader />}>
          <ModalPage
            slug={"Add New Project"}
            inputFields={inputFieldsForAddProjects}
            ModalOpenBtnTitle="Add New Project"
            ModalOpenBtnStyle={modalOpenBtnStyle}
            api={"/add-project"}
            setLoader={setLoader}
            setMsg={setMsg}
            // setRelodeTable={setRelodeTable}
          />
        </Suspense>
      </div>

      {/* Show message */}
      <p
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "1.5rem",
          color: "var(--green)",
        }}
      >
        {msg}
      </p>

      <div className="cardWrapper d-flex gap-20">
        <div className="card">
          <LazyLoadImage
            src={`${imgPath}`}
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: "1s" },
            }}
          />

          <div className="txt d-flex">
            <h3 className="title">
              A wonderful serenity has taken possession of my entire soul
            </h3>
            <div style={{ textAlign: "center" }}>
              <NavLink
                to={`/project-details/id`}
                className="readMoreBtn btn c_pointer"
              >
                Read more
              </NavLink>
            </div>
          </div>
        </div>
        <div className="card">
          <LazyLoadImage
            src={`${imgPath}`}
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: "1s" },
            }}
          />

          <div className="txt d-flex">
            <h3 className="title">
              A wonderful serenity has taken possession of my entire soul
            </h3>
            <div style={{ textAlign: "center" }}>
              <NavLink
                to={`/project-details/id`}
                className="readMoreBtn btn c_pointer"
              >
                Read more
              </NavLink>
            </div>
          </div>
        </div>
        {/* {slicedData.map((items, index) => {
          return (
            <div className="card" key={index}>
              <LazyLoadImage
                src={`${imgPath}${items.Image}`}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />

              <div className="txt d-flex">
                <h3 className="title">
                  {items.Title.length > 70
                    ? items.Title.slice(0, 70) + "..."
                    : items.Title}
                </h3>
                <div style={{ textAlign: "center" }}>
                  <NavLink
                    to={`/project-details/${items.id}`}
                    className="readMoreBtn btn c_pointer"
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>

      <div
        className={projectData.length > 2 ? "" : "d-none"}
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Projects;
