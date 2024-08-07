import { lazy, Suspense, useEffect, useState } from "react";
import { UseAuthContext } from "../../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

//___ Css ___//
import "./Gallery.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "react-toastify/dist/ReactToastify.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";
import Loader from "../../Components/Loader/Loader";

//___ Components ___//
const ModalPage = lazy(() => import("../../Components/Modal/ModalPage"));

const Gallery = () => {
  const { setLoader } = UseAuthContext();
  const [relodeData, setRelodeData] = useState(false);

  const [galleryData, setGalleryData] = useState([]);
  // const [numberOfElement, setNumberOfElement] = useState(3);
  // const slicedData = galleryData.slice(0, numberOfElement);
  // const loadMore = () => {
  //   setNumberOfElement((prev) => prev * 2);
  // };

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

  // Get gallery data
  const GetGalleryData = async () => {
    setLoader(true);
    await AxiosClient.get("/gallery-img")
      .then((res) => {
        setGalleryData(res.data.data);
        setLoader(false);
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
        setLoader(false);
      });
  };

  useEffect(() => {
    GetProjectData();
    GetGalleryData();
  }, [relodeData]);

  const onInit = () => {
    // console.log("lightGallery has been initialized");
  };

  const inputFieldsForAddGallery = [
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
    <div className="Gallery">
      <h3 className="pageTitle">Gallery</h3>
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
            slug={"Add Gallery Image"}
            inputFields={inputFieldsForAddGallery}
            ModalOpenBtnTitle="Add Gallery Image"
            ModalOpenBtnStyle={modalOpenBtnStyle}
            api={"/add-gallery-img"}
            setLoader={setLoader}
            setRelodeData={setRelodeData}
            projectData={projectData}
            toast={toast}
          />
        </Suspense>
      </div>

      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {galleryData.map((items, index) => {
          return (
            <a href={`${imgPath}${items.Gallery_img}`} key={items.id}>
              <LazyLoadImage
                alt={items.Gallery_img}
                src={`${imgPath}${items.Gallery_img}`}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
              <div className="overlay"></div>
            </a>
          );
        })}
      </LightGallery>

      {/* <div
        className={galleryData.length > 3 ? "" : "d-none"}
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div> */}

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

export default Gallery;
