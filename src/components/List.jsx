import classes from "./List.module.css";

const List = (props) => {
  return (
    <div className={classes.list}>
      <h2>To Do List</h2>
      <ul>
        {props.toDoItems.map((item) => (
          <li key={item}>
            {item} <input type="checkbox" id={item}></input>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
