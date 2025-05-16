import dynamic from "next/dynamic";
const UseMemo = dynamic(() => import("./UseMemo"));

export const metadata = {
  title: "Use memo",
  description: "Learn use memo",
};

const page = () => {
  return (
    <>
      <h1 className="text-[30px] mb-5">Learn use memo</h1>
      <UseMemo />
    </>
  );
};

export default page;
