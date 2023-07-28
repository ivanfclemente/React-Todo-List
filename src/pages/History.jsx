/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import toDoContext from "../store";
import classes from "./History.module.css";

import Card from "../components/Card";

const HistoryPage = () => {
  const { checked } = useContext(toDoContext);

  return (
    <>
      <h1>History</h1>
      <Link to="..">Main</Link>
      <Card>
        <div>
          <h2>Completed</h2>
          <ul>
            {checked.map((item, index) => (
              <li key={index} className={classes.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </>
  );
};

export default HistoryPage;
