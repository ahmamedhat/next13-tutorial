import React from "react";

const fetchTodo = async (id: string) => {
  const res = await fetch("https://dummyjson.com/todos/" + id);
  const todo = await res.json();
  if (!res.ok) {
    throw Error("Error fetching todo");
  }
  return todo;
};

const SingleTodoView = async ({ todoID }: any) => {
  const todo = await fetchTodo(todoID);
  return (
    <div className="w-full p-2 my-4 text-white bg-blue-800 rounded-lg">
      <p>#{todo.id}</p>
      <p className="">{todo.todo}</p>
    </div>
  );
};

export default SingleTodoView;
