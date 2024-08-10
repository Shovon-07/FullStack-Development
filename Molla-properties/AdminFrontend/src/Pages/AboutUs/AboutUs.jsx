import React, { useState, useRef, lazy, Suspense, useEffect } from "react";
import { UseAuthContext } from "../../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
const JoditEditor = lazy(() => import("jodit-react"));

//___ Css ___//
import "../../assets/Css/TextEditor.css";
import "react-toastify/dist/ReactToastify.css";

//___ Additional utilitis ___//
import Loader from "../../Components/Loader/Loader";
import AxiosClient from "../../assets/Js/AxiosClient";

const AboutUs = () => {
  const { setLoader } = UseAuthContext();
  const [reloadData, setRloadData] = useState(false);

  const editor = useRef(null);
  const [aboutUsTxt, setAboutUsTxt] = useState("");

  const SubmitAboutUsTxt = async (e) => {
    e.preventDefault();

    if (aboutUsTxt == "") {
      toast.error("You don't edit anything");
    } else {
      const payload = new FormData();
      payload.append("aboutus_txt", aboutUsTxt);

      setLoader(true);
      await AxiosClient.post("/update-about-us", payload)
        .then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.msg);
            setRloadData((prev) => !prev);
            setLoader(false);
            console.clear();
          } else {
            setLoader(false);
            console.log(res.data.msg);
          }
        })
        .catch((e) => {
          console.log(`Error = ${e}`);
          setLoader(false);
        });
    }
  };

  //___ Get about us data start ___//
  const GetAboutUsData = async () => {
    setLoader(true);
    await AxiosClient.get("/get-about-us")
      .then((response) => {
        setAboutUsTxt(response.data.data[0].AboutUsTxt);
        setLoader(false);
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
        setLoader(false);
      });
  };
  //___ Get about us data end ___//

  useEffect(() => {
    GetAboutUsData();
  }, [reloadData]);

  return (
    <div className="AboutUs">
      <h3 className="pageTitle">AboutUs</h3>

      <div className="card" style={{ color: "var(--dark-1)" }}>
        <form encType="multipart/form-data" onSubmit={SubmitAboutUsTxt}>
          <h2 className="cardTitle">Vission</h2>
          <Suspense fallback={<Loader />}>
            <JoditEditor
              ref={editor}
              value={aboutUsTxt}
              tabIndex={1}
              onBlur={(newContent) => setAboutUsTxt(newContent)}
              onChange={(newContent) => {}}
            />
          </Suspense>
          <div
            className="inpBox"
            style={{ textAlign: "center", marginTop: "50px" }}
          >
            <button type="submit" className="btn">
              Save
            </button>
          </div>
        </form>
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

export default AboutUs;
