import { Link } from "react-router-dom";
import { useContext } from "react";

import Card from "../components/Card";
import AddToList from "../components/AddToList";
import List from "../components/List";
import toDoContext from "../store";

const MainPage = () => {
  const { toDoItems, addItemHandler, checked, checkHandler } =
    useContext(toDoContext);

  return (
    <>
      <h1>Main</h1>

      <Link to="history">History</Link>
      <Card>
        <AddToList onAddItem={addItemHandler} />
        <List toDoItems={toDoItems} onCheck={checkHandler} checked={checked} />
      </Card>
    </>
  );
};

export default MainPage;
