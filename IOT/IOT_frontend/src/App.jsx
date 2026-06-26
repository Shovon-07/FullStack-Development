import React, { useEffect, useState } from "react";
import ApiConfig from "./assets/ApiConfig";
import { Id } from "./assets/Data";

const App = () => {
  const { powerId, ledId } = Id;
  const [apiData, setApiData] = useState({});
  const [count, setCount] = useState(0);

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
  // useEffect(() => {
  //   // console.log(apiData[0]._id);
  //   // console.log(count);
  // }, [count]);

  const updatePower = async (id) => {
    await ApiConfig.put(`/update/${id}`, { status: 505 }).then((res) => {
      const data = res.data.data;
      console.log(data);
      setCount((prev) => (prev += 1));
    });
  };
  const updateLed = async (id) => {
    await ApiConfig.put(`/update/${id}`, { status: 105 }).then((res) => {
      console.log(res);
      setCount((prev) => (prev += 1));
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
          <button onClick={(id) => updatePower(apiData[0]?._id)}>On/off</button>
        </div>
        <div>
          <span>
            {apiData[1]?.name} ({apiData[1]?.status})
          </span>
          <button onClick={(id) => updateLed(apiData[1]?._id)}>On/off</button>
        </div>
      </div>
    </div>
  );
};

export default App;
