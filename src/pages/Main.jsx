import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Card";
import AddToList from "../components/AddToList";
import List from "../components/List";

const MainPage = () => {
  const [toDoItems, setToDoItems] = useState([
    "Learn React",
    "Finish coding sprint",
  ]);

  const addItemHandler = (item) => {
    setToDoItems((prev) => prev.concat(item));
    console.log(toDoItems);
  };

  return (
    <>
      <h1>Main</h1>

      <Link to="history">History</Link>
      <Card>
        <AddToList onAddItem={addItemHandler} />
        <List toDoItems={toDoItems} />
      </Card>
    </>
  );
};

export default MainPage;
