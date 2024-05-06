//___ Css ___//
import "./Credits.scss";

//___ Images ___//
import Shovon from "/images/users/shovon.jpg";
import Asik from "/images/users/asik.jpeg";
import flag from "/images/bd.svg";

const Credits = () => {
  return (
    <div className="Credits d-none">
      <div className="item d-flex gap-10">
        <img src={Shovon} alt="" />
        <div>
          <h2 className="name">Al Jubair Shovon</h2>
          <p>Phone : +88 01767692422</p>
          <address>Rajshahi, Bangladesh</address>
        </div>
      </div>

      <div className="item d-flex gap-10">
        <img src={Asik} alt="" />
        <div>
          <h2 className="name">Asikur Rahman</h2>
          <p>Phone : +88 01824580580</p>
          <address>Rajshahi, Bangladesh</address>
        </div>
      </div>
    </div>
  );
};

export default Credits;
