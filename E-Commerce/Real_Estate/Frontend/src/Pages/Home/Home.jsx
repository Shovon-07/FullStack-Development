import React from "react";

//___ Css __//
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="homeImg d-flex">
        <div className="overlay"></div>
        <div className="txt">
          <h1>No 01 Real estate site</h1>
          <h2>
            Lets work together <span>...</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            asperiores amet aliquam iusto rerum harum itaque placeat veritatis
            earum, tenetur architecto sunt aspernatur laudantium veniam labore
            incidunt provident minus eaque.
          </p>
        </div>
      </div>

      <div className="content">
        <div className="latestProject">
          <h3 className="pageTitle">Our latest projects</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
