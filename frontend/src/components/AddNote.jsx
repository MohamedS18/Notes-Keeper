import React, { useState } from "react";
import axios from "axios";

function AddNote(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(title !== "" && content !== "");
    try {
      if (title !== "" && content !== "") {
        const response = await axios.put("http://localhost:3000/notes/insert", {
          username: props.user,
          title,
          content,
          lastUpdated: new Date(),
        });
        console.log(response.data);
        props.refreshNotes();
        console.log("suma");

        setTitle("");
        setContent("");
      } else {
        alert("Fields are empty !");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescChange(e) {
    setContent(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-note-outer-container">
        <div className="add-note-inner-container">
          <input
            name="title"
            onChange={handleTitleChange}
            placeholder="Title..."
            className="title-input"
            value={title}
            type="text"
          ></input>
          <textarea
            name="content"
            onChange={handleDescChange}
            placeholder="Description..."
            className="content-input"
            value={content}
            type="text"
          ></textarea>
          <button type="submit" className="add-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </button>
        </div>        
      </div>
    </form>
  );
}

export default AddNote;
