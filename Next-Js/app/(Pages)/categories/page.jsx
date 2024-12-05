import dynamic from "next/dynamic";

//___ Components ___//
const Categories = dynamic(
  () => import("@/app/(Pages)/categories/Categories"),
  {
    loading: "",
  }
);

export const metadata = {
  title: "Categories",
  description: "Agro-vet software",
};

const page = () => {
  return (
    <>
      <h1 className="page-title">Categories</h1>
      <Categories />
    </>
  );
};

export default page;
