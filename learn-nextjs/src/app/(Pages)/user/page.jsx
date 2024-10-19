import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>User page</h1>
      <ul>
        <li>
          <Link href="/user/1/shovon">Shovon</Link>
        </li>
        <li>
          <Link href="/user/2/asik">Asik</Link>
        </li>
        <li>
          <Link href="/user/3/jony">Jony</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
