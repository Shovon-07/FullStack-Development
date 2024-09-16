import React, { useEffect, useState } from "react";

//___ Css ___//
import "./Products.scss";

//___ Components ___//
import MySlider from "../../Components/MySlider/MySlider";

const Products = () => {
  return (
    <div className="Products">
      <h1>Products</h1>
      <MySlider />
    </div>
  );
};

export default Products;
