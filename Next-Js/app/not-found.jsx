"use client";
// import { redirect } from "next/navigation";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

//___ CSS ___//
import "@/app/assets/css/NotFoundPage.css";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="NotFoundPage">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <button
        className="button"
        onClick={() => {
          // router.back();
          window.history.back();
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default NotFoundPage;
