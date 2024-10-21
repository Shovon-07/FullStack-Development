import React, { useEffect, useState } from "react";

//___ Css ___//
import "./Home.scss";

//___ Data ___//
import { categories } from "../../Data";

//___ Components ___//
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MySlider from "../../Components/MySlider/MySlider";
import Cards from "../../Components/Cards/Cards";

const Home = (props) => {
  const { color, setColor } = props;

  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   count < 500 ? setCount((prev) => prev + 1) : count;
  // });

  return (
    <>
      <Header />
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
        <div className="content">
          <Cards />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
