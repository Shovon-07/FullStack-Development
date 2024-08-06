import { useEffect, useState, lazy, Suspense } from "react";
import { UseAuthContext } from "../../Context/AuthContext";
import Tooltip from "@mui/material/Tooltip";
import { ToastContainer, toast } from "react-toastify";

//___ Icons ___//
import { FaRegTrashAlt } from "react-icons/fa";

//___ Css ___//
import "./Blog.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-toastify/dist/ReactToastify.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import Loader from "../../Components/Loader/Loader";

//___ Components ___//
const ModalPage = lazy(() => import("../../Components/Modal/ModalPage"));

const Blog = () => {
  const { setLoader } = UseAuthContext();
  const [relodeData, setRelodeData] = useState(false);

  const [blogData, setBlogData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(2);
  const slicedData = blogData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  const GetBlogData = async () => {
    setLoader(true);
    await AxiosClient.get("/get-blog")
      .then((res) => {
        setBlogData(res.data.data);
        setLoader(false);
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
        setLoader(false);
      });
  };

  // Delete blog
  const DeleteBlog = async (blogId) => {
    if (confirm("Do you want to delete this blog ?")) {
      const payload = {
        blog_id: blogId,
      };
      setLoader(true);
      await AxiosClient.post("/delete-blog", payload)
        .then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.msg);
            setLoader(false);
            setRelodeData(true);
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
    GetBlogData();
    if (relodeData == true) {
      setInterval(() => {
        setRelodeData(false);
      }, 1000);
    }
  }, [relodeData]);

  // Input For modal
  const inputFieldsForBlog = [
    {
      field: "blog_link",
      type: "text",
      label: "Blog link",
      placeholder: "Enter blog link",
      className: "inputBox",
    },
  ];

  // Style for modal
  const modalOpenBtnStyle = {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#fff",
    width: "150px",
    height: "40px",
    background: "#424242",
    paddingBottom: "3px",
    // marginBottom: "50px",
  };

  return (
    <div className="Blog">
      <h3 className="pageTitle">Blog</h3>
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
            slug={"Add New Blog"}
            inputFields={inputFieldsForBlog}
            ModalOpenBtnTitle="Add Blog"
            ModalOpenBtnStyle={modalOpenBtnStyle}
            api={"/add-blog"}
            setLoader={setLoader}
            setRelodeData={setRelodeData}
            toast={toast}
          />
        </Suspense>
      </div>

      <div className="videos d-flex gap-10">
        {slicedData.map((items, index) => {
          return (
            <div className="eachViedo" key={index}>
              <Tooltip title={`Delete ${items.id}`}>
                <a onClick={() => DeleteBlog(items.id)}>
                  <FaRegTrashAlt size={25} className="deleteBlog" />
                </a>
              </Tooltip>
              <iframe
                src={items.Blog_video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>

      <div
        className={blogData.length > 2 ? "" : "d-none"}
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

export default Blog;
