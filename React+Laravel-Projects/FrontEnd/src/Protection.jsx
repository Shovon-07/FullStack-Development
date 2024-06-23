const Protection = (props) => {
  const { Child } = props;
  const token = sessionStorage.getItem("token");
  return <>{token != "" ? Child : ""}</>;
};

export default Protection;
