import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/slice/todoSlice";

function ToDoInput() {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  function onClickHandle() {
    dispatch(addTodo(val));
    setVal("");
  }
  return (
    <div>
      <h3>To Do List with Redux Toolkit</h3>
      <input
        type="text"
        placeholder="enter your task"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={onClickHandle}>Add</button>
    </div>
  );
}

export default ToDoInput;
