import { useEffect, useState, lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";
import { UseAuthContext } from "../../Context/AuthContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css ___//
import "../../assets/Css/Card.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";
import Loader from "../../Components/Loader/Loader";

//___ Components ___//
const ModalPage = lazy(() => import("../../Components/Modal/ModalPage"));

const HonorableClient = () => {
  const { setLoader } = UseAuthContext();
  const [relodeData, setRelodeData] = useState(false);

  const [honorableClientData, setHonorableClientData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(2);
  const slicedData = honorableClientData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  // Get project data
  const [projectData, setProjectData] = useState([]);
  const GetProjectData = async () => {
    setLoader(true);
    await AxiosClient.get("/projects-name")
      .then((res) => {
        setProjectData(res.data.data);
        setLoader(false);
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
        setLoader(false);
      });
  };

  const GetHonorableClientData = async () => {
    setLoader(true);
    await AxiosClient.get("/get-hon-client")
      .then((res) => {
        setHonorableClientData(res.data.data);
        setLoader(false);
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
        setLoader(false);
      });
  };

  useEffect(() => {
    GetProjectData();
    GetHonorableClientData();
    if (relodeData == true) {
      setInterval(() => {
        setRelodeData(false);
      }, 1000);
    }
  }, [relodeData]);

  // Input For modal
  const inputFieldsForHonClient = [
    {
      field: "",
      type: "text",
      label: "",
      placeholder: "",
      className: "d-none",
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
    <div className="HonorableClient">
      <h3 className="pageTitle">Honorable Clients</h3>
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
            slug={"Add honorable client"}
            inputFields={inputFieldsForHonClient}
            ModalOpenBtnTitle="Add New Project"
            ModalOpenBtnStyle={modalOpenBtnStyle}
            api={"/add-hon-client"}
            setLoader={setLoader}
            setRelodeData={setRelodeData}
            projectData={projectData}
          />
        </Suspense>
      </div>

      <div className="cardWrapper d-flex gap-20">
        {slicedData.map((items, index) => {
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
        })}
      </div>

      <div
        className={honorableClientData.length > 2 ? "" : "d-none"}
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default HonorableClient;
