import React, { useContext } from "react";
import { dataContext } from "./App";

function Note(props) {
  const { data, setData } = useContext(dataContext);
  function handleChange(e){
    const updatedData = data.filter((d) => d.id !== e.target.name);
    setData(updatedData);
  }

  return (
    <>
      <div  className="note-container">
        <p className="title">{props.title}</p>
        <div className="content">{props.content}</div>
        <div className="note-detail">
          <p className="date">created {props.created}</p>
          <button name={props.id} onClick={handleChange}  className="delete-button">
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}

export default Note;
