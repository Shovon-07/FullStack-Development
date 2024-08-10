import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

//___ Css ___//
import "./AboutUs.css";
import "../../assets/Css/TextEditor.css";

const AboutUs = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  // const config = useMemo(
  //   {
  //     readonly: false, // all options from https://xdsoft.net/jodit/docs/,
  //     placeholder: placeholder || "Start typings...",
  //   },
  //   [placeholder]
  // );

  const Submit = () => {};

  return (
    <div className="AboutUs">
      <h3 className="pageTitle">AboutUs</h3>

      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <button className="btn" onClick={Submit}>
          Submit
        </button>
      </div>
      <JoditEditor
        ref={editor}
        value={content}
        // config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />

      {content}
    </div>
  );
};

export default AboutUs;
