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
    <div>
      <input
        type="checkbox"
        onChange={(e) => onCheckHandle(todo.id, e)}
        checked={todo.checked ? true : false}
      />
      {todo.checked ? (
        <del>{todo.tas}</del>
      ) : edit ? (
        <input
          type="text"
          value={valEdit}
          onChange={(e) => setValEdit(e.target.value)}
        />
      ) : (
        todo.tas
      )}
      {edit ? (
        <button onClick={() => onClickSave(todo.id)}>✅</button>
      ) : (
        <button onClick={onClickEdit} disabled={todo.checked ? true : false}>
          ✏️
        </button>
      )}
      <button
        disabled={todo.checked ? true : false}
        onClick={() => onClickDelete(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default ToDoItem;
