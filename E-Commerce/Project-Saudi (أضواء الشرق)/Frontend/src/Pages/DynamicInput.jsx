import React, { useState } from "react";

const DynamicInput = () => {
  const [inp, setInp] = useState({
    name: "",
    email: "",
  });
  const [count, setCount] = useState([1]);

  const handleDynaimInputVal = () => {};

  const addInput = () => {
    setCount((prev) => (prev += 1));
  };

  return (
    <>
      {mesurmentInput.map((x, i) => {
        return (
          <div className="measurmentSelection d-flex flex-start" key={i}>
            <div className="left d-flex gap-20">
              <select
                name="material_id"
                onChange={(e, i) => handleMesurmentInputValue(e, i)}
              >
                <option value="">Select Material</option>
                {materials.map((materialItems, materialIndex) => {
                  return (
                    <option key={materialIndex} value={materialItems.id}>
                      {materialItems.name}
                    </option>
                  );
                })}
              </select>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Material"
                  name="material"
                  required
                  value={mesurmentInput.material}
                  onChange={(e) => handleMesurmentInputValue(e, i)}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Chest length"
                  name="chest_length"
                  required
                  value={mesurmentInput.chest_length}
                  onChange={(e) => handleMesurmentInputValue(e, i)}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Neck length"
                  name="neck_length"
                  required
                  value={mesurmentInput.neck_length}
                  onChange={(e) => handleMesurmentInputValue(e, i)}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Hand length"
                  name="hand_length"
                  required
                  value={mesurmentInput.hand_length}
                  onChange={(e) => handleMesurmentInputValue(e, i)}
                />
              </div>
            </div>
            <div className="right d-flex gap-20">
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Dress length"
                  name="dress_length"
                  required
                  value={mesurmentInput.dress_length}
                  onChange={(e) => handleMesurmentInputValue(e, i)}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Sleeve length"
                  name="sleeve_length"
                  required
                  value={mesurmentInput.sleeve_length}
                  onChange={(e) => handleMesurmentInputValue(e, i)}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Cuff length"
                  name="cuff_length"
                  required
                  value={mesurmentInput.cuff_length}
                  onChange={(e) => handleMesurmentInputValue(e, i)}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Shoulder"
                  name="shoulder_length"
                  required
                  value={mesurmentInput.shoulder_length}
                  onChange={(e) => handleMesurmentInputValue(e, i)}
                />
              </div>
              {/* <button onClick={handleAddInputSection}>+</button> */}
              {mesurmentInput.length !== 1 && (
                <button
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                    background: "red",
                    // padding: "10px",
                    border: "none",
                    outline: "none",
                    color: "#fff",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={() => handleRemoveInputSection(i)}
                >
                  -
                </button>
              )}
              {mesurmentInput.length - 1 === i && (
                <button
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                    background: "green",
                    // padding: "10px",
                    border: "none",
                    outline: "none",
                    color: "#fff",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={handleAddInputSection}
                >
                  +
                </button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DynamicInput;
