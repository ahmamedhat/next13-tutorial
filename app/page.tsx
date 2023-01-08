import Link from "next/link";

const Home = () => {
  return (
    <div className="">
      <p className="text-blue-800 font-bold">Pages</p>

      <Link href="/todos" className="font-thin text-sm text-white">
        Todos
      </Link>
    </div>
  );
};

export default Home;
