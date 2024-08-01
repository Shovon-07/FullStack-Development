import { useState } from "react";

//___ Css ___//
import "./Plots.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const Plots = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = inputs.map((input) => input.value);

    const payload = {
      project_id: "27",
      plot: data,
    };

    try {
      const response = await AxiosClient.post("/add-plot", payload);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

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

      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Plots;
