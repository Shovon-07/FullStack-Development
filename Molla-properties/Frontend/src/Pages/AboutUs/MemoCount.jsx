import React from "react";

const MemoCount = ({ title, counter }) => {
  console.log(`Rendering ${title}`);

  return (
    <div>
      <p>
        {title} : {counter}
      </p>
    </div>
  );
};

export default MemoCount;
