import React, { useEffect, useState } from "react";
import ApiConfig from "./assets/ApiConfig";
import { Id } from "./assets/Data";

const App = () => {
  const { powerId, ledId } = Id;
  const [apiData, setApiData] = useState({});

  const fetchData = async () => {
    try {
      await ApiConfig.get("/").then((response) => {
        const res = response.data.data;
        setApiData(res);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  });

  const updatePower = async (id) => {
    await ApiConfig.put(`/update/${id}`, {
      status: apiData[0]?.status == 0 ? 1 : 0,
      boolStatus: apiData[0]?.boolStatus == false ? true : false,
    }).then((res) => {
      const data = res.data.data;
      console.log(data.name + " = " + data.status);
    });
  };

  const updateLed = async (id) => {
    await ApiConfig.put(`/update/${id}`, {
      status: apiData[1]?.status == 0 ? 1 : 0,
      boolStatus: apiData[1]?.boolStatus == false ? true : false,
    }).then((res) => {
      const data = res.data.data;
      console.log(data.name + " = " + data.status);
    });
  };

  return (
    <div>
      <h1>Home appliances control</h1>

      <div>
        <div>
          <span>
            {apiData[0]?.name} ({apiData[0]?.status})
          </span>
          <button onClick={(id) => updatePower(apiData[0]?._id)}>
            {apiData[0]?.status == 1 ? "ON" : "OFF"}
          </button>
        </div>
        <div>
          <span>
            {apiData[1]?.name} ({apiData[1]?.status})
          </span>
          <button onClick={(id) => updateLed(apiData[1]?._id)}>
            {apiData[1]?.status == 1 ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
