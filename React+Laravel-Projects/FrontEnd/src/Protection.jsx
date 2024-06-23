import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protection = (props) => {
  const { Child } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  });

  return (
    <>
      <Child />
    </>
  );
};

export default Protection;
