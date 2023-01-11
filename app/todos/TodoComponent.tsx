"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Todo } from "../../typings";
const TodoComponent = (props: any) => {
  const todo: Todo = props.todo;
  const [isChecked, setIsChecked] = useState(todo.completed);
  const router = useRouter();
  return (
    <div
      key={todo.id + todo.userId}
      onClick={() => {
        router.push("todos/" + todo.id);
        setIsChecked(!isChecked);
      }}
      className="text-white h-14 inline-block cursor-pointer"
    >
      <div className="flex items-center space-x-4 relative cursor-pointer">
        {isChecked && (
          <div className="bg-red-400 w-full h-[1px] rounded-md absolute z-10 top-[50%] left-0 right-0" />
        )}
        <input
          className="w-[0.8rem] h-[1.7rem]"
          type="checkbox"
          onClick={() => setIsChecked(!isChecked)}
          defaultChecked={isChecked}
        />
        <p className="leading-3 cursor-pointer">{todo.todo}</p>
      </div>
    </div>
  );
};

export default TodoComponent;
