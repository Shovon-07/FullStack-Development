import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const page = ({ data }) => {
  return (
    <div>
      <h2>Users</h2>
      <ol>
        <li>
          <Link href="/users/1">user 1</Link>
        </li>
        <li>
          <Link href="/users/2">user 2</Link>
        </li>
        <li>
          <Link href="/users/3">user 3</Link>
        </li>
        <li>
          <Link href="/users/4">user 4</Link>
        </li>
        <li>
          <Link href="/users/5">user 5</Link>
        </li>
        <li>
          <Link href="/user/6">user 6</Link>
        </li>
      </ol>

      {/* {da} */}
    </div>
  );
};

export default page;
