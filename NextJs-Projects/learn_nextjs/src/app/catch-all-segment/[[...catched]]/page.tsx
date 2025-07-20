import React from "react";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ catched: string[] }> }) => {
  const { catched } = await params;
  if (catched?.length >= 3) {
    return notFound();
  }

  return (
    <div>
      catch-all-segment
      {catched?.length > 0 &&
        catched.map((item): any => {
          return <div>{item}</div>;
        })}
    </div>
  );
};

export default page;
