import dynamic from "next/dynamic";

//___ Components ___//
const Customer = dynamic(() => import("@/app/(Pages)/customer/Customer"), {
  loading: "",
});

export const metadata = {
  title: "Customers",
  description: "Agro-vet software",
};

const page = () => {
  return (
    <>
      <h1 className="page-title">Customers</h1>
      <Customer />
    </>
  );
};

export default page;
