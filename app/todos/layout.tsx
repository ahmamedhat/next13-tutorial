import { Suspense } from "react";
import BackButton from "../components/BackButton";
import TodosList from "./TodosList";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4">
      <BackButton />
      <div className="flex space-x-2">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default layout;
