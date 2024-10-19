"use client";

const page = ({ params }) => {
  return (
    <>
      <h3>User name = {params.name}</h3>
      <h3>User id = {params.id}</h3>
    </>
  );
};

export default page;
