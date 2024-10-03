import Link from "next/link";

const notFound = () => {
  return (
    <div>
      <h1>404 page Not Found</h1>
      <Link href="/">Go to home</Link>
    </div>
  );
};

export default notFound;
