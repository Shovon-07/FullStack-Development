import React from "react";

type AllParams = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const filters = (await searchParams).filters;
  console.log(filters);

  return <div>page</div>;
};

export default page;
