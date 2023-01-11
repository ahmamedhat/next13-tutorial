import { Todo } from "../../typings";
import TodoComponent from "./TodoComponent";

const fetchTodos = async () => {
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));
  const res = await fetch("https://dummyjson.com/todos/");
  const todos = await res.json();
  if (!res.ok) {
    throw Error("Error fetching todos");
  }
  return todos.todos;
};

const TodosList = async () => {
  const todos: Todo[] = await fetchTodos();
  return (
    <div className="my-8">
      {todos.map((todo) => {
        return (
          <div key={todo.id + todo.userId}>
            <TodoComponent todo={todo} />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default TodosList;
