import { useEffect, useState } from "react";

//___ Icons ___//
import { RxCross2 } from "react-icons/rx";

//___ Css ___//
import "./MyToast.css";

const MyToast = (props) => {
  const { msg, setMsg } = props;
  const [myToast, setMyToast] = useState();

  const CloseMyToast = () => {
    setMyToast(false);
    setMsg("");
  };

  useEffect(() => {
    if (!msg) {
      setMyToast(false);
    } else {
      setMyToast(true);
    }
  });

  return (
    <>
      {myToast && (
        <div className="MyToast">
          <h3>{msg}</h3>
          <RxCross2 className="c_pointer" onClick={CloseMyToast} />
        </div>
      )}
    </>
  );
};

export default MyToast;
