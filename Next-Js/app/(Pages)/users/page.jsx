import dynamic from "next/dynamic";

//___ Components ___//
const Users = dynamic(() => import("@/app/(Pages)/users/Users"), {
  loading: "",
});

export const metadata = {
  title: "Users",
  description: "Agro-vet software",
};

const page = () => {
  return (
    <>
      <h1 className="page-title">Users</h1>
      <Users />
    </>
  );
};

export default page;
