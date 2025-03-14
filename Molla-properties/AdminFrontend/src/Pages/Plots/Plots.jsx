import { useEffect, useState } from "react";
import { UseAuthContext } from "../../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

//___ Css ___//
import "./Plots.css";
import "react-toastify/dist/ReactToastify.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const Plots = () => {
  const { setLoader } = UseAuthContext();

  const [projectId, setProjectId] = useState("0");

  // Dynamically add or remove input
  const [inputs, setInputs] = useState([{ value: "" }]);

  const handleInputChange = (index, event) => {
    const values = [...inputs];
    values[index].value = event.target.value;
    setInputs(values);
  };

  const handleAddField = () => {
    const values = [...inputs];
    values.push({ value: "" });
    setInputs(values);
  };

  const handleRemoveField = (index) => {
    if (index <= 0) {
      return;
    } else {
      const values = [...inputs];
      values.splice(index, 1);
      setInputs(values);
    }
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

  const HandleSubmit = async (event) => {
    event.preventDefault();
    const data = inputs.map((input) => input.value);

    if (projectId <= "0") {
      toast.error("Please select a project");
    } else {
      const payload = {
        project_id: projectId,
        plot: data,
      };

      setLoader(true);
      await AxiosClient.post("/add-plot", payload)
        .then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.msg);
            setProjectId("");
            setInputs([{ value: "" }]);
            setLoader(false);
            console.clear();
          } else {
            setLoader(false);
            console.log(res.data.msg);
            toast.error("You didn't add plot value");
          }
        })
        .catch((err) => {
          console.log(`Error = ${err}`);
          setLoader(false);
        });
    }
  };

  useEffect(() => {
    GetProjectData();
  }, []);

  return (
    <div className="Plots">
      <h3 className="pageTitle">Add plot</h3>
      <form onSubmit={HandleSubmit}>
        <div style={{ textAlign: "right" }}>
          <select
            name="project_id"
            onChange={(e) => {
              setProjectId(e.target.value);
            }}
          >
            <option value="0" selected={projectId <= 0 ? "true" : ""}>
              Select project
            </option>
            {projectData.map((items, index) => {
              return (
                <option key={index} value={items.id}>
                  {items.Project_name}
                </option>
              );
            })}
          </select>
        </div>

        {inputs.map((input, index) => (
          <div key={index} className="inpBox d-flex">
            <input
              type="text"
              value={input.value}
              placeholder={`Enter plot value ${index + 1}`}
              onChange={(event) => handleInputChange(index, event)}
            />
            <button
              type="button"
              className="addOrRemoveBtn removeBtn"
              onClick={() => handleRemoveField(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="addOrRemoveBtn addBtn"
          onClick={handleAddField}
        >
          Add Field
        </button>
        <div className="submitBtnBox">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>

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

export default Plots;
