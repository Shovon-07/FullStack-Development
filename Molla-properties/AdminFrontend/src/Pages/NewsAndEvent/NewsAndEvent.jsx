import { useEffect, useState, lazy, Suspense } from "react";
import { UseAuthContext } from "../../Context/AuthContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Tooltip from "@mui/material/Tooltip";
import { ToastContainer, toast } from "react-toastify";

//___ Icons ___//
import { FaRegTrashAlt } from "react-icons/fa";

//___ Css ___//
import "../../assets/Css/Card.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-toastify/dist/ReactToastify.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";
import Loader from "../../Components/Loader/Loader";

//___ Components ___//
const ModalPage = lazy(() => import("../../Components/Modal/ModalPage"));

const NewsAndEvent = () => {
  const { setLoader } = UseAuthContext();
  const [relodeData, setRelodeData] = useState(false);

  const [neswEventData, setNeswEventData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(2);
  const slicedData = neswEventData.slice(0, numberOfElement);
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

  // Get news data
  const GetNeswEventData = async () => {
    setLoader(true);
    await AxiosClient.get("/get-news-event")
      .then((res) => {
        setNeswEventData(res.data.data);
        setLoader(false);
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
        setLoader(false);
      });
  };

  // Delete news
  const DeleteNews = async (newsId, projectId) => {
    if (confirm("Do you want to delete this news ?")) {
      const payload = {
        news_id: newsId,
        project_id: projectId,
      };
      setLoader(true);
      await AxiosClient.post("/delete-news", payload)
        .then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.msg);
            setLoader(false);
            setRelodeData((prev) => !prev);
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

  useEffect(() => {
    GetProjectData();
    GetNeswEventData();
  }, [relodeData]);

  // Input For modal
  const inputFieldsForNewsEvent = [
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
    <div className="NewsAndEvent">
      <h3 className="pageTitle">News And Event</h3>
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
            slug={"Add news and event"}
            inputFields={inputFieldsForNewsEvent}
            ModalOpenBtnTitle="Add News and Event"
            ModalOpenBtnStyle={modalOpenBtnStyle}
            api={"/add-news-event"}
            setLoader={setLoader}
            setRelodeData={setRelodeData}
            projectData={projectData}
            toast={toast}
          />
        </Suspense>
      </div>

      <div className="cardWrapper d-flex gap-20">
        {slicedData.map((items, index) => {
          return (
            <div className="card" key={index}>
              <LazyLoadImage
                src={`${imgPath}${items.News_img}`}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />

              <div className="txt d-flex">
                <Tooltip title={`Delete ${items.id}`}>
                  <a onClick={() => DeleteNews(items.id, items.Project_id)}>
                    <FaRegTrashAlt size={40} className="cross" />
                  </a>
                </Tooltip>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={neswEventData.length > 2 ? "" : "d-none"}
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
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

export default NewsAndEvent;
