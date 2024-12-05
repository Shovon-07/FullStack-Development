import dynamic from "next/dynamic";

//___ Components ___//
const Suppliers = dynamic(() => import("@/app/(Pages)/suppliers/Suppliers"), {
  loading: "",
});

export const metadata = {
  title: "Suppliers",
  description: "Agro-vet software",
};

const page = () => {
  return (
    <>
      <h1 className="page-title">Suppliers</h1>
      <Suppliers />
    </>
  );
};

export default page;
