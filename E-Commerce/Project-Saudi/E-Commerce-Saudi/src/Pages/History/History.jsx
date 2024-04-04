import React, { useEffect, useState } from "react";
import axios from "axios";

//___ Css ___//
import "./History.scss";

//___ Additional utility ___//
import Loader from "../../Components/Loader/Loader";
import AxiosConfig from "../../assets/AxiosConfig";

const History = () => {
  const { http } = AxiosConfig();

  const [userData, setUserData] = useState([]);
  const [image, setImage] = useState("");
  const [viewImages, setViewImages] = useState([]);

  const createUser = () => {
    http.post("/create-user", {
      name: "Jubiar",
      email: "jubair@gmail.com",
      password: "jub123",
    });
  };
  const getUserData = async () => {
    try {
      await http.get("/user-data").then((res) => {
        setUserData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageInput = (e) => {
    setImage(e.target.files[0]);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const url = "/create-image";
    const data = new FormData();
    data.append("image", image);
    http.post(url, data).then((res) => console.log(res.data));
  };
  const getImage = async () => {
    await http.get("/get-image").then((response) => {
      setViewImages(response.data);
      console.log(viewImages);
    });
  };

  useEffect(() => {
    getUserData();
    getImage();
  }, []);
  return (
    <div className="History">
      <h1 className="title">History</h1>

      <button className="button" onClick={createUser}>
        Add User
      </button>
      {userData.map((user, index) => {
        return (
          <div key={index} className="d-flex gap-20">
            <span>{user.Name}</span>
            <span>{user.Email}</span>
            <span>{user.Password}</span>
          </div>
        );
      })}
      <br />
      <br />
      <form onSubmit={submitForm}>
        <div>
          <input type="file" onChange={handleImageInput} />
        </div>
        <button className="button" type="submit">
          Create Image
        </button>
      </form>

      <div>
        {viewImages.map((image, index) => {
          return (
            <div key={index} className="d-flex gap-20">
              <span>{image.Image}</span>
              <span>{image.created_at}</span>
              <img
                src={`http://127.0.0.1:8000/images/${image.Image}`}
                style={{ width: "200px", height: "auto" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
