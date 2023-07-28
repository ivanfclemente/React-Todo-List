/* eslint-disable react/prop-types */
import classes from "./List.module.css";

const List = (props) => {
  const isChecked = (item) =>
    props.checked.includes(item) ? "checked" : "not-checked";

  return (
    <div className={classes.list}>
      <h2>To Do List</h2>
      <ul>
        {props.toDoItems.map((item, index) => (
          <li key={index} className={isChecked(item)}>
            {item}{" "}
            <input
              type="checkbox"
              checked={props.checked.includes(item)}
              id={item}
              value={item}
              onChange={props.onCheck}
            ></input>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
