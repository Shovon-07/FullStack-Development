import React, { useEffect, useState } from "react";
import axios from "axios";

//___ Additional utility ___//
import Loader from "../../Components/Loader/Loader";
import AxiosConfig from "../../assets/AxiosConfig";

//___ Css ___//
import "./Home.scss";

//___ Data ___//
// import { categories } from "../../Data";

//___ Components ___//
// import TableData from "../../Components/TableData/TableData";

const Home = () => {
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
  const getUserData = () => {
    http.get("/user-data").then((resUserData) => {
      setUserData(resUserData.data);
      console.log(userData);
    });
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
  const getImage = () => {
    http.get("/get-image").then((res) => {
      const response = res.data;
      if (response) {
        // setViewImage([...viewImage, res.data]);
        setViewImages([...viewImages, response]);
      }
    });
  };

  useEffect(() => {
    getUserData();
    getImage();
    console.log(viewImages);
  }, []);

  // const columnsField = [
  //   { name: "Customer name", field: "title" },
  //   { name: "Contact", field: "category" },
  //   { name: "Material", field: "description" },
  //   { name: "Neck type", field: "price" },
  // { name: "hand type", field: "price" },
  // { name: "button type", field: "price" },
  // { name: "Dress type", field: "price" },
  // { name: "meters bought", field: "price" },
  // { name: "total price", field: "price" },
  // { name: "deadline", field: "1 day" },
  // {
  //   name: "Action",
  //   cell: (row) => (
  //     <div className="d-flex" style={{ gap: "10px" }}>
  //       <img
  //         src={EditeIcon}
  //         alt=""
  //         style={{ cursor: "pointer" }}
  //         onClick={() => alert(row.id)}
  //       />
  //       <img
  //         src={DeleteIcon}
  //         alt=""
  //         style={{ cursor: "pointer" }}
  //         onClick={() => alert(row.id)}
  //       />
  //     </div>
  //   ),
  // },
  // ];

  return (
    <>
      {/* <TableData
        api="https://fakestoreapi.com/products"
        // apiData={apiData}
        columnsField={columnsField}
        tableTitle="purchase History"
        // searchData={searchData}
        // setSearchData={setSearchData}
        // filteredApiData={filteredApiData}
        // setFilteredApiData={setFilteredApiData}
      /> */}
      <h1>Home</h1>
      <button className="button" onClick={createUser}>
        Add User
      </button>
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
        {viewImages.map((items, index) => {
          <img
            src={`http://127.0.0.1:8000/images/1712136872.My_cortoon.jpg`}
            style={{ width: "500px", height: "auto" }}
          />;
        })}
        {/* <img
          src={`http://127.0.0.1:8000/images/1712136872.My_cortoon.jpg`}
          style={{ width: "500px", height: "auto" }}
        /> */}
      </div>
    </>
  );
};

export default Home;
