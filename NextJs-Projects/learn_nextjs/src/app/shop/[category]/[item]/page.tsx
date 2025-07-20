import React from "react";

const page = async ({
  params,
}: {
  params: Promise<{ item: string; category: string }>;
}) => {
  const { category, item } = await params;
  return (
    <div>
      {category}
      {" > "}
      {item}
    </div>
  );
};

export default page;
