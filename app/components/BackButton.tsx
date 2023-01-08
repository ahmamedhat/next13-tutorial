import Link from "next/link";
import Back from "../Icons/Back";

const BackButton = () => {
  return (
    <Link href="/">
      <div className="flex my-4 items-center w-[5rem]">
        <Back />
        <p className="text-white text-sm font-extralight">HOME</p>
      </div>
    </Link>
  );
};

export default BackButton;
