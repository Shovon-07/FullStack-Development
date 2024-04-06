import React from "react";

//___ Css ___//
import "./Loader.scss";

const Loader = (props) => {
  const { show } = props;
  return (
    <>
      <div id="loader" className="LoadingOverlay">
        {/* <div className="Line-Progress">
          <div className="indeterminate"></div>
        </div> */}
        <div class="loader"></div>
      </div>
    </>
  );
};

export default Loader;
