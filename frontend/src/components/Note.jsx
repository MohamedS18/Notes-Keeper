import React, { useContext } from "react";
import axios from "axios";
// import { dataContext } from "../App";

function Note(props) {
  
  async function handleChange(e) {
    // props.setRender(true);
    // console.log(e.target.name);
    // console.log(props)
    const response = await axios.put("http://localhost:3000/delete", {
      username:props.username,
      note_id: e.target.name,
    });
    props.refreshNotes();



    // const updatedData = data.filter((d) => d.id !== e.target.name);
    // setData(updatedData);
  }

  return (
    <>
      <div className="note-container">
        <p className="title">{props.title}</p>
        <div className="content">{props.content}</div>
        <div className="note-detail">
          <p className="date">{props.created}</p>
          <button
            name={props.id}
            onClick={handleChange}
            className="delete-button"
          >
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}

export default Note;
