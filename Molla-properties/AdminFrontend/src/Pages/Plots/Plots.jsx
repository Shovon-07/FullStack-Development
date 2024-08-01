import { useEffect, useState } from "react";
import { UseAuthContext } from "../../Context/AuthContext";

//___ Css ___//
import "./Plots.css";

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
    const values = [...inputs];
    values.splice(index, 1);
    setInputs(values);
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
      alert("Please select a project");
    } else {
      const payload = {
        project_id: projectId,
        plot: data,
      };

      setLoader(true);
      await AxiosClient.post("/add-plot", payload)
        .then((res) => {
          if (res.data.status == true) {
            alert(res.data.msg);
            setProjectId("");
            setInputs([{ value: "" }]);
            setLoader(false);
            console.clear();
          } else {
            setLoader(false);
            console.log(res.data.msg);
            alert("You didn't add plot value");
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
        <select
          name="project_id"
          onChange={(e) => {
            setProjectId(e.target.value);
          }}
        >
          <option value="0"  selected={projectId <= 0 ? "true" : ""}>
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

        {inputs.map((input, index) => (
          <div key={index}>
            <input
              type="text"
              value={input.value}
              onChange={(event) => handleInputChange(index, event)}
            />
            <button type="button" onClick={() => handleRemoveField(index)}>
              -
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddField}>
          Add Field
        </button>
        <div className="submitBtnBox">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Plots;
