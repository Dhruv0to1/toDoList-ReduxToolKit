import React, { useEffect, useState } from "react";
import {
  checkTodo,
  removeTodo,
  updateToDo,
} from "../features/slice/todoSlice.js";
import { useDispatch } from "react-redux";
function ToDoItem({ todo }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [valEdit, setValEdit] = useState(todo.tas);

  function onCheckHandle(id, e) {
    const status = e.target.checked;
    dispatch(checkTodo({ id, status }));
  }

  function onClickEdit() {
    setEdit(true);
  }

  function onClickSave(id) {
    dispatch(updateToDo({ id, valEdit }));
    setEdit(false);
  }

  function onClickDelete(id) {
    dispatch(removeTodo(id));
  }
  return (
    <div className="mb-2 bg-lime-400 min-h-10 flex justify-around items-center rounded-lg">
      <input
        type="checkbox"
        onChange={(e) => onCheckHandle(todo.id, e)}
        checked={todo.checked ? true : false}
      />
      {todo.checked ? (
        <div className="w-3/4 mx-1 my-1 bg-green-200 text-center min-h-7 overflow-auto">
          <del>{todo.tas}</del>
        </div>
      ) : edit ? (
        <input
          type="text"
          value={valEdit}
          onChange={(e) => setValEdit(e.target.value)}
          className="w-3/4 mx-1 my-1 min-h-7 text-center border border-solid border-lime-500 bg-orange-100"
        />
      ) : (
        <div className="w-3/4 mx-1 my-1 bg-green-200 text-center min-h-7 overflow-auto">
          {todo.tas}
        </div>
      )}
      {edit ? (
        <button
          onClick={() => onClickSave(todo.id)}
          className="w-[36.49px] mr-1 border border-solid border-green-500 bg-white rounded hover:bg-green-600"
        >
          ✅
        </button>
      ) : (
        <button
          className={`w-[36.49px] mr-1 border border-solid border-blue-600 ${
            todo.checked ? `bg-slate-300 hover:bg-slate-300` : `bg-white`
          } rounded hover:bg-blue-600`}
          onClick={onClickEdit}
          disabled={todo.checked ? true : false}
        >
          ✏️
        </button>
      )}
      <button
        className={`w-[36.49px] border border-solid ${
          todo.checked ? `bg-slate-300 hover:bg-slate-300` : `bg-white`
        } border-red-600 hover:bg-red-300 rounded mr-1`}
        disabled={todo.checked ? true : false}
        onClick={() => onClickDelete(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default ToDoItem;
