import React from "react";

const MemoBtn = ({ handleClick, children }) => {
  console.log(children);

  return (
    <div>
      <button onClick={handleClick} className="btn">
        {children}
      </button>
    </div>
  );
};

export default MemoBtn;
