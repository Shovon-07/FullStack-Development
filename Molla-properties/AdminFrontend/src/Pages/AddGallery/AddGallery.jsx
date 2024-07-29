import { lazy, Suspense, useState } from "react";
import { useOutletContext } from "react-router-dom";

//___ Css ___//
import "./AddGallery.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";
import Loader from "../../Components/Loader/Loader";

//___ Components ___//
const ModalPage = lazy(() => import("../../Components/Modal/ModalPage"));

const AddGallery = () => {
  const [setLoader] = useOutletContext();

  const [galleryData, setGalleryData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(2);
  const slicedData = galleryData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleImageInput = (e) => {
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

  const inputFieldsForAddProjects = [
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
    <div className="AddGallery">
      <h3 className="pageTitle">Gallery</h3>
      <div className="modalBtn" style={{ textAlign: "end" }}>
        <Suspense fallback={<Loader />}>
          <ModalPage
            slug={"Add New Project"}
            inputFields={inputFieldsForAddProjects}
            ModalOpenBtnTitle="Add New Project"
            ModalOpenBtnStyle={modalOpenBtnStyle}
            api={"/add-gallery-img"}
            setLoader={setLoader}
            // setRelodeTable={setRelodeTable}
          />
        </Suspense>
      </div>

      <div
        className={galleryData.length > 2 ? "" : "d-none"}
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default AddGallery;
