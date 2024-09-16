"use client";

import React, { useEffect, useState } from "react";

//___ Css ___//
import "@/assets/css/Home.css";

//___ Data ___//
import { categories } from "@/assets/js/Data";

//___ Components ___//
import MySlider from "@/app/Components/MySlider/MySlider";
import Cards from "@/app/Components/Cards/Cards";

const Home = (props) => {
  const { color, setColor } = props;

  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   count < 500 ? setCount((prev) => prev + 1) : count;
  // });

  return (
    <>
      <div className="Home container">
        <div className="content">
          <div className="grid">
            <div className="left">
              <div className="categories">
                {categories.map((items) => {
                  return (
                    <li key={items.id}>
                      <span>{items.title}</span>
                    </li>
                  );
                })}
              </div>
            </div>
            <div className="right">
              <MySlider />
            </div>
          </div>
        </div>
        <div className="content">{/* <Cards /> */}</div>
      </div>
    </>
  );
};

export default Home;
