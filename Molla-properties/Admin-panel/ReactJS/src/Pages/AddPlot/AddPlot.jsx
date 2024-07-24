import { useState } from "react";

//___ Css ___//
import "./AddPlot.css";

const AddPlot = () => {
  const [sectionCounter, setSectionCounter] = useState([1]);

  const AddPlotInputField = () => {
    setSectionCounter([
      ...sectionCounter,
      sectionCounter.push(1 * Math.random()),
    ]);
  };

  const RemovePlotInputField = () => {
    if (sectionCounter.length == 1) {
      return;
    } else {
      setSectionCounter(sectionCounter.slice(0, -1));
    }
  };

  return (
    <div className="AddPlot">
      <h3 className="pageTitle">Add plot</h3>
      <div className="plotInput">
        {sectionCounter.map((items, index) => {
          return (
            <div className="inputWrapper" key={index}>
              <input type="text" placeholder={`Plot ${index + 1}`} />
            </div>
          );
        })}
        <div className="addRemBtn d-flex gap-30">
          <button
            type="button"
            className="minus"
            style={{ background: "#ec0202", padding: "0 15px" }}
            onClick={RemovePlotInputField}
          >
            -
          </button>
          <button
            type="button"
            className="plus"
            style={{ background: "#029802", padding: "0 10px" }}
            onClick={AddPlotInputField}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPlot;
