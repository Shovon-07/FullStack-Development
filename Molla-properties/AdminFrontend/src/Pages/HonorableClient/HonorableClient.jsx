import React, { useState } from "react";

//___ Css ___//
import "./HonorableClient.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const HonorableClient = () => {
  const [projectImg, setProjectImg] = useState();
  const handleProjectImg = (evt) => {
    setProjectImg(evt.target.files[0]);
    console.log(evt.target.files[0]);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("project_image", projectImg);
    AxiosClient.post("/add-project", formData)
      .then((res) => {
        console.log(res.data.status);
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
      });
    console.log(projectImg);
  };

  // const myHeaders = new Headers();
  // myHeaders.append("API_KEY", "83b6349651735fb8b3c6b20b1bc882ba");

  // const HandleSubmit = (e) => {
  //   e.preventDefault();

  //   const formdata = new FormData();
  //   formdata.append("project_name", "my data");
  //   formdata.append("project_image", projectImg);

  //   const requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   fetch("http://127.0.0.1:8000/api/admin/add-project", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.error(error));
  // };

  return (
    <div className="HonorableClient">
      <h3 className="pageTitle">HonorableClient</h3>

      <form encType="multipart/form-data" onSubmit={(e) => HandleSubmit(e)}>
        <input type="file" onChange={handleProjectImg} />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default HonorableClient;
