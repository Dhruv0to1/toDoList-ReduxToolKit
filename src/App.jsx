import React from "react";
import ToDoInput from "./components/ToDoInput";
import ToDos from "./components/ToDos";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <section className="min-h-full flex justify-center">
          <div className="bg-slate-400 w-[88%] my-4 rounded-lg">
            <ToDoInput />
            <ToDos />
          </div>
        </section>
      </Provider>
    </>
  );
}

export default App;
