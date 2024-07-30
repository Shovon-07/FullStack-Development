import React, { useState } from "react";
import axios from 'axios';

//___ Css ___//
import "./HonorableClient.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const HonorableClient = () => {
  const [name, setName] = useState();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);

    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(fileUrls);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name",name);

    selectedFiles.forEach((file) => {
      formData.append('images', file);
    });

    try {
      const response = await AxiosClient.post('http://127.0.0.1:8000/api/admin/add-gallery-img', formData);
      console.log('Upload successful', response.data);
      console.log(selectedFiles);
    } catch (error) {
      console.error('Error uploading files', error);
    }
  };

  return (
    <div className="HonorableClient">
      <h3 className="pageTitle">HonorableClient</h3>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}} />
        <input type="file" name="images[]" multiple onChange={handleFileSelect} />
        <button type="submit">Upload</button>
      </form>
      <div>
        {previewUrls.map((url, index) => (
          <img key={index} src={url} alt={`Preview ${index}`} width="100" />
        ))}
      </div>
    </div>
  );
};

export default HonorableClient;
