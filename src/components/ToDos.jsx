import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

function ToDos() {
  const list = useSelector((state) => state.toDoList);
  return (
    <>
      {list.map((item) => (
        <div key={item.id}>
          <ToDoItem todo={item} />
        </div>
      ))}
    </>
  );
}

export default ToDos;
