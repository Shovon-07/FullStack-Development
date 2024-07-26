import { useEffect, useState, lazy, Suspense } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css ___//
import "./AddProject.css";
import "../../assets/Css/Card.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";
import Loader from "../../Components/Loader/Loader";

//___ Components ___//
const ModalPage = lazy(() => import("../../Components/Modal/ModalPage"));

const AddProject = () => {
  const [setLoader] = useOutletContext();

  const [completedProjectData, setCompletedProjectData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(2);
  const slicedData = completedProjectData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  // const getCompletedProjectData = async () => {
  //   try {
  //     setLoader(true);
  //     await AxiosClient.get("/completed-project").then((res) => {
  //       if (res.data.status == true) {
  //         setCompletedProjectData(res.data.data);
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
  //   getCompletedProjectData();
  // }, []);

  // Input For modal
  const inputFieldsForAddProjects = [
    {
      field: "name",
      type: "text",
      placeholder: "Enter material name",
      className: "inputBox",
    },
    {
      field: "stock",
      type: "text",
      placeholder: "Enter initial meters available",
      className: "inputBox",
    },
    {
      field: "price",
      type: "text",
      placeholder: "Enter buy price",
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
    <div className="AddProject">
      <h3 className="pageTitle">Add Project</h3>
      {/* <form>
        <div className="formTop d-flex gap-30">
          <div className="inputWrapper">
            <input type="text" placeholder="Title" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Project name" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Developer" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Location" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Land area" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Total plot" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Contact no" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Project map" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Total plot" />
          </div>
          <div className="inputWrapper">
            <select name="" id="">
              <option value="" defaultChecked>
                Project type
              </option>
              <option value="">Ongoing</option>
              <option value="">Completed</option>
              <option value="">Upcoming</option>
            </select>
          </div>
          <div className="inputWrapper">
            <textarea name="" placeholder="Features" rows="5"></textarea>
          </div>
          <div className="inputWrapper" style={{ textAlign: "center" }}>
            <label>Main image</label> <br />
            <input type="file" placeholder="Project image" />
          </div>
          <div className="inputWrapper" style={{ textAlign: "center" }}>
            <label>Gallery image</label> <br />
            <input type="file" placeholder="Project image" />
          </div>
        </div>
      </form> */}
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
            api={"/store"}
            // setLoading={setLoading}
            // setRelodeTable={setRelodeTable}
          />
        </Suspense>
      </div>
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
        className={completedProjectData.length > 2 ? "" : "d-none"}
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default AddProject;
