import { useEffect, useState } from "react";
import { UseAuthContext } from "../../Context/AuthContext";

//___ Css ___//
import "./Plots.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const Plots = () => {
  const { setLoader } = UseAuthContext();

  // const [inputList, setinputList] = useState([{ plot: "" }]);

  // const handleinputchange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...inputList];
  //   list[index][name] = value;
  //   setinputList(list);
  // };

  // const handleremove = () => {
  //   if (inputList.length == 1) {
  //     return;
  //   } else {
  //     setinputList(inputList.slice(0, -1));
  //   }
  // };

  // const handleaddclick = () => {
  //   setinputList([...inputList, { plot: "" }]);
  // };

  // const HandleSubmit = async (e) => {
  //   e.preventDefault();

  //   const plotData = inputList.map((eachPlot) => eachPlot.plot);

  //   const payload = {
  //     project_id: "1",
  //     plot: plotData,
  //   };
  //   await AxiosClient.post("/add-plot", payload)
  //     .then((res) => {
  //       console.log(res.data.msg);
  //     })
  //     .catch((err) => {
  //       console.log(`Error = ${err}`);
  //     });
  // };

  const [projectId, setProjectId] = useState();

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

    const payload = {
      project_id: projectId,
      plot: data,
    };

    setLoader(true);
    await AxiosClient.post("/add-plot", payload)
      .then((res) => {
        console.log(res.data.msg);
        setProjectId("");
        setInputs([{ value: "" }]);
        setLoader(false);
      })
      .catch((err) => {
        console.log(`Error = ${err}`);
        setLoader(false);
      });
  };

  useEffect(() => {
    GetProjectData();
  }, []);

  return (
    <div className="Plots">
      <h3 className="pageTitle">Add plot</h3>
      {/* <form onSubmit={HandleSubmit}>
        <div className="submitBtnBox">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>

        {inputList.map((x, i) => {
          return (
            <div className="inputWrapper" key={i}>
              <input
                type="text"
                name="plot"
                placeholder={`Plot ${i + 1}`}
                onChange={(e) => handleinputchange(e, i)}
              />
            </div>
          );
        })}
      </form>
      <div className="addRemBtn d-flex gap-30">
        <button
          type="button"
          className="minus"
          style={{ background: "#ec0202", padding: "0 15px" }}
          onClick={handleremove}
        >
          -
        </button>
        <button
          type="button"
          className="plus"
          style={{ background: "#029802", padding: "0 10px" }}
          onClick={handleaddclick}
        >
          +
        </button>
      </div> */}

      <form onSubmit={HandleSubmit}>
        <select
          name="project_id"
          onChange={(e) => {
            setProjectId(e.target.value);
          }}
        >
          <option value="0">Select project</option>
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
