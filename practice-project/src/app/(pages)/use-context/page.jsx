import dynamic from "next/dynamic";
const UseContext = dynamic(() => import("./UseContext"));

export const metadata = {
  title: "Use context",
  description: "Learn use context",
};

const page = () => {
  return (
    <>
      <h1 className="text-[30px] mb-5">Learn use context</h1>
      <UseContext />
    </>
  );
};

export default page;
