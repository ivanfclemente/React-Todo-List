/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const toDoContext = createContext();

export function ToDoContextProvider({ children }) {
  const [toDoItems, setToDoItems] = useState([
    "Learn React",
    "Finish coding sprint",
  ]);

  const [checked, setChecked] = useState([]);

  const addItemHandler = (item) => {
    setToDoItems((prev) => prev.concat(item));
  };

  const checkHandler = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    console.log(updatedList);
  };

  return (
    <toDoContext.Provider
      value={{ toDoItems, addItemHandler, checked, checkHandler }}
    >
      {children}
    </toDoContext.Provider>
  );
}

export default toDoContext;
