import dynamic from "next/dynamic";

//___ Components ___//
const Brands = dynamic(() => import("@/app/(Pages)/brands/Brands"), {
  loading: "",
});

export const metadata = {
  title: "Brands",
  description: "Agro-vet software",
};

const page = () => {
  return (
    <>
      <h1 className="page-title">Brands</h1>
      <Brands />
    </>
  );
};

export default page;
