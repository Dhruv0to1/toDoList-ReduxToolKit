import React from "react";
import ToDoInput from "./components/ToDoInput";
import ToDos from "./components/ToDos";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ToDoInput />
        <ToDos />
      </Provider>
    </>
  );
}

export default App;
