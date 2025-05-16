import dynamic from "next/dynamic";
const UseReducer = dynamic(() => import("./UseReducer"));

export const metadata = {
  title: "Use reducer",
  description: "Learn use reducer",
};

const page = () => {
  return (
    <>
      <h1 className="text-[30px] mb-5">Learn use reducer</h1>
      <UseReducer />
    </>
  );
};

export default page;
