import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

function ToDos() {
  const list = useSelector((state) => state.toDoList);
  return (
    <div className="w-[65vw] flex flex-col mx-auto">
      {list.map((item) => (
        <div key={item.id}>
          <ToDoItem todo={item} />
        </div>
      ))}
    </div>
  );
}

export default ToDos;
