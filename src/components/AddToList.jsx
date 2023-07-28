/* eslint-disable react/prop-types */
import classes from "./AddToList.module.css";
import { useRef } from "react";

const AddToList = (props) => {
  const inputRef = useRef();

  return (
    <>
      <input type="text" className={classes.textBox} ref={inputRef} />
      <button
        className={classes.button}
        onClick={() => props.onAddItem(inputRef.current.value)}
      >
        Add item
      </button>
    </>
  );
};

export default AddToList;
