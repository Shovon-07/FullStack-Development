import { lazy, Suspense } from "react";
const Home = lazy(() => import("@/app/(pages)/home/home"));

export const metadata = {
  title: "Home",
  description: "This is home",
};

function page() {
  return (
    <>
      <Suspense fallback="loading...">
        <Home />
      </Suspense>
    </>
  );
}

export default page;
