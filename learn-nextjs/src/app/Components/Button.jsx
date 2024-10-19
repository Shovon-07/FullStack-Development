"use client";

const Button = (props) => {
  const { slug } = props;

  const EventFunc = () => {
    alert(slug);
  };
  return <button onClick={EventFunc}>{slug}</button>;
};

export default Button;
