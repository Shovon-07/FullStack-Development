import React, { useState } from "react";

//___ Css ___//
import "./HonorableClient.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const HonorableClient = () => {
  const [name, setName] = useState();
  const [projectImage, setProjectImage] = useState();

  const HandleSubmitForm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("project_image", projectImage);
    AxiosClient.post("/add-project", formData).then((res) => {
      console.log(res.data.msg);
      // console.log(projectImage);
    });
  };

  return (
    <div className="HonorableClient">
      <h3 className="pageTitle">HonorableClient</h3>

      <form encType="multipart/form-data" onSubmit={HandleSubmitForm}>
        <input
          type="text"
          name="project_name"
          id=""
          onChange={(e) => setName(e.target.value)}
        />
        {/* <input
          type="file"
          name="project_image"
          id=""
          onChange={(e) => setProjectImage(e.target.files[0])}
        /> */}

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default HonorableClient;
