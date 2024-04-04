import React, { useState } from "react";

//___ Css ___//
import "./DynamicInput.scss";

const DynamicInput = () => {
  const [sectionCounter, setSectionCounter] = useState([1]);

  const handelSectionCounter = () => {
    setSectionCounter([
      ...sectionCounter,
      sectionCounter.push(1 * Math.random()),
    ]);
  };

  let i = "";
  const handelRemoveSection = (deletingSec) => {
    const removed = sectionCounter.filter(
      (secCount) => secCount !== deletingSec
    );
    setSectionCounter(removed);
  };

  return (
    <>
      {sectionCounter.map((item, index) => {
        return (
          <div className="DynamicInput d-flex flex-start gap-20" key={index}>
            <div>
              <p className="title">Item</p>
              <select>
                <option value="" defaultChecked>
                  Bank account
                </option>
                <option value="">Paypal</option>
                <option value="">Credit/Debit Card</option>
                <option value="">UPI Transfer</option>
              </select>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Item information"
              ></textarea>
            </div>
            <div>
              <p className="title">Cost</p>
              <input type="text" placeholder="00" />
              <p>Discount: 0% 0% 0%</p>
            </div>
            <div>
              <p className="title">Qty</p>
              <input type="text" placeholder="1" />
            </div>
            <div>
              <p className="title">Price</p>
              <p>$24.00</p>
            </div>
            <p className="d-none">{(i = item)}</p>
          </div>
        );
      })}

      <div className="d-flex gap-30 controllBtn">
        <div>
          <button className="button" onClick={handelSectionCounter}>
            Add Item
          </button>
        </div>
        <p className="cross cursor" onClick={() => handelRemoveSection(i)}>
          X
        </p>
      </div>
    </>
  );
};

export default DynamicInput;
