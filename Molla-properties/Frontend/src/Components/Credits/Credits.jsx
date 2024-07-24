import { Link } from "react-router-dom";

//___ Css ___//
import "./Credits.css";

//___ Additional utilitis ___//
import { imgPath } from "../../assets/Js/Data";

const Credits = () => {
  return (
    <div className="Credits d-none">
      <div className="credits-wrapper">
        <div className="item d-flex gap-10">
          <a href="https://www.facebook.com/aljubair.shovon/">
            <img src={`${imgPath}Owners/Shovon.jpg`} alt="" />
          </a>
          <div>
            <h2 className="name">
              <a href="https://www.facebook.com/aljubair.shovon/">
                Al Jubair Shovon
              </a>
            </h2>
            <p>
              <Link to="https://wa.me/+8801767692422">
                Call now : +88 01767692422
              </Link>
            </p>
            <p>Rajshahi, Bangladesh</p>
            <p>Credit: Frontend</p>
          </div>
        </div>

        <div className="item d-flex gap-10">
          <a href="https://www.facebook.com/aljubair.shovon/">
            <img src={`${imgPath}Owners/Shovon.jpg`} alt="" />
          </a>
          <div>
            <h2 className="name">
              <a href="https://www.facebook.com/aljubair.shovon/">
                Al Jubair Shovon
              </a>
            </h2>
            <p>
              <Link to="https://wa.me/+8801767692422">
                Call now : +88 01767692422
              </Link>
            </p>
            <p>Rajshahi, Bangladesh</p>
            <p>Credit: Backend</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
