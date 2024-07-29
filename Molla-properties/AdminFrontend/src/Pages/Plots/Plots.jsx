import { useState } from "react";

//___ Css ___//
import "./Plots.css";

const Plots = () => {
  const [inputList, setinputList] = useState([{ plot: "" }]);

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleremove = () => {
    if (inputList.length == 1) {
      return;
    } else {
      setinputList(inputList.slice(0, -1));
    }
  };

  const handleaddclick = () => {
    setinputList([...inputList, { plot: "" }]);
  };

  return (
    <div className="Plots">
      <h3 className="pageTitle">Add plot</h3>
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
      </div>
    </div>
  );
};

export default Plots;
