import { Suspense } from "react";
import TodosList from "./TodosList";

const Todos = () => {
  return (
    <div className="flex justify-center mt-6 text-white">
      <Suspense fallback={<p>Loading todos</p>}>
        {/* @ts-ignore */}
        <TodosList />
      </Suspense>
    </div>
  );
};

export default Todos;
