import React, { Suspense } from "react";
import { Todo } from "../../../typings";
import SingleTodoView from "./SingleTodoView";

const SingleTodo = async ({ params: { todoID } }: any) => {
  return (
    <div>
      <Suspense fallback={<p>Loading single todo</p>}>
        {/* @ts-ignore */}
        <SingleTodoView todoID={todoID} />
      </Suspense>
    </div>
  );
};

export default SingleTodo;

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/todos/");
  const todos = await res.json();
  return todos.todos.map((todo: Todo) => ({
    todoID: todo.id.toString(),
  }));
}
