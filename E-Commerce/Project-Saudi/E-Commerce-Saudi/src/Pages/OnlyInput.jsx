import React, { useRef, useState } from "react";

const OnlyInput = () => {
  // let selectInp = useRef();
  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const handleInpu = (e) => {
    setInpVal({ ...inpVal, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>OnlyInput</h2>
      {/* <input type="text" placeholder="name" ref={selectInp} />
      <input type="text" placeholder="email" ref={selectInp} />
      <input type="text" placeholder="pass" ref={selectInp} /> */}

      <input
        type="text"
        value={inpVal.name}
        onChange={handleInpu}
        placeholder="name"
        name="name"
      />
      <input
        type="text"
        value={inpVal.email}
        onChange={handleInpu}
        placeholder="email"
        name="email"
      />
      <input
        type="text"
        value={inpVal.pass}
        onChange={handleInpu}
        placeholder="pass"
        name="pass"
      />

      <button
        onClick={() => {
          console.log(inpVal);
          setInpVal({
            name: "",
            email: "",
            pass: "",
          });
        }}
      >
        confirm
      </button>
    </div>
  );
};

export default OnlyInput;
