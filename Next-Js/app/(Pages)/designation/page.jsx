import dynamic from "next/dynamic";

//___ Components ___//
const Designation = dynamic(
  () => import("@/app/(Pages)/designation/Designation"),
  {
    loading: "",
  }
);

export const metadata = {
  title: "Designation",
  description: "Agro-vet software",
};

const page = () => {
  return (
    <>
      <h1 className="page-title">Designation</h1>
      <Designation />
    </>
  );
};

export default page;
