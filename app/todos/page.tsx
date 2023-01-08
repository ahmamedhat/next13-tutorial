import BackButton from "../components/BackButton";
import TodosList from "./TodosList";

const Todos = () => {
  return (
    <div>
      <BackButton />
      {/* @ts-ignore */}
      <TodosList />
    </div>
  );
};

export default Todos;
