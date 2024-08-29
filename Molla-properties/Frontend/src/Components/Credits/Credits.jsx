import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css ___//
import "./Credits.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";

const Credits = () => {
  const [ownersData, setOwnersData] = useState([]);
  const getOwnersData = async () => {
    try {
      await AxiosClient.get("/owners").then((res) => {
        if (res.data.status == true) {
          setOwnersData(res.data.data);
        } else {
          console.log(res.data.msg);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOwnersData();
  }, []);

  return (
    <div className="Credits  page content">
      <div className="d-flex pageTitle">
        <h1>Our honorable members</h1>
      </div>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}

      <div className="credits-wrapper">
        {ownersData.map((items, index) => {
          return (
            <div className="item d-flex gap-10" key={index}>
              <a href={items.Owner_facebook_link} target="__blank">
                <LazyLoadImage
                  src={`${imgPath}${items.Owner_img}`}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </a>
              <div>
                <h3 className="name">
                  <a href={items.Owner_facebook_link}>{items.Owner_name}</a>
                </h3>
                <p>Rajshahi, Bangladesh</p>
                <p>Rank: {items.Owner_rank}</p>
              </div>
            </div>
          );
        })}

        <div className="item d-flex gap-10">
          <a href="https://www.facebook.com/aljubair.shovon/" target="__blank">
            <img src={`${imgPath}Owners/Shovon.jpg`} alt="" />
          </a>
          <div>
            <h3 className="name">
              <a href="https://www.facebook.com/aljubair.shovon/">
                Al Jubair Shovon
              </a>
            </h3>
            <p>
              <Link to="https://wa.me/+8801767692422">
                Call now : +88 01767692422
              </Link>
            </p>
            <p>Rajshahi, Bangladesh</p>
            <p>Credit: Frontend</p>
            <p>Credit: Backend</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
