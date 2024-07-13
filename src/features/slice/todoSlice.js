import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  toDoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const task = {
        id: nanoid(),
        tas: action.payload,
        checked: false,
      };
      state.toDoList.push(task);
    },
    removeTodo: (state, action) => {
      state.toDoList = state.toDoList.filter(
        (item) => item.id !== action.payload
      );
    },

    // checkTodo is not working as we are passing two parameters, so don't know how to access more than two values in function
    checkTodo: (state, action) => {
      state.toDoList = state.toDoList.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.status) {
            return { ...item, checked: true };
          }
          return { ...item, checked: false };
        }
        return item;
      });
    },
    // updateTodo is not working as we are passing two parameters, so don't know how to access more than two values in function
    updateToDo: (state, action) => {
      state.toDoList = state.toDoList.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, tas: action.payload.valEdit };
        }
        return item;
      });
    },
  },
});

export const { addTodo, removeTodo, checkTodo, updateToDo } = todoSlice.actions; // explicitly exporting all the functions as we will be using them in other component.

export default todoSlice.reducer; // as now we are exporting the reducer because the store is restrictive it won't update state with any function, it will be updated with only those actions or reducer which are registered.
