import dynamic from "next/dynamic";
const Child = dynamic(() => import("@/app/components/ContextComp/Child"));

const Parent = () => {
  return (
    <>
      <h1 className="text-[25px] mb-5">Parent</h1>
      <Child />
    </>
  );
};

export default Parent;
