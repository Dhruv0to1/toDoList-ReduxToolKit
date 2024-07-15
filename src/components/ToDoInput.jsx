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
    <div className="flex items-center flex-col">
      <h3 className="text-[3vw] my-4 font-sans bg-teal-600 rounded p-2 text-center w-2/3">
        To Do List with Redux Toolkit
      </h3>
      <div className="flex justify-center w-[50vw] h-10 my-2">
        <input
          type="text"
          placeholder="enter your task"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-3/4 rounded-md mr-2"
        />
        <button
          onClick={onClickHandle}
          className="w-[23%] bg-red-400 rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ToDoInput;
