import React from "react";

//___ Icons ___//

//___ Css ___//
import "./Settings.scss";

const Settings = () => {
  return (
    <div className="Settings">
      <div>
        <div className="features">
          <h3 className="title">Themes</h3>
          <select>
            <option value="">System default</option>
            <option value="">Dark</option>
            <option value="">Light</option>
          </select>
        </div>
      </div>
      <div>
        <div className="features">
          <h3 className="title">Accessebility</h3>
          <select>
            <option value="">System default</option>
            <option value="">Dark</option>
            <option value="">Light</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
