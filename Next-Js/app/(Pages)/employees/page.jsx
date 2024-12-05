import dynamic from "next/dynamic";

//___ Components ___//
const Employees = dynamic(() => import("@/app/(Pages)/employees/Employees"), {
  loading: "",
});

export const metadata = {
  title: "Employees",
  description: "Agro-vet software",
};

const page = () => {
  return (
    <>
      <h1 className="page-title">Employees</h1>
      <Employees />
    </>
  );
};

export default page;
