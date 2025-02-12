import React, { useContext, useState } from "react";
import { dataContext } from "./App";

function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { data, setData } = useContext(dataContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (title !== "" && content !== "") {
      setData([
        {
          id: title.concat(content.substring(0.2)).replace(" ", ""),
          title,
          content,
          created: new Date().toLocaleDateString(),
        },
        ...data
        
      ]);

      setTitle("");
      setContent("");
    } else {
      alert("Fields are empty !");
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
            placeholder="title..."
            className="title-input"
            value={title}
            type="text"
          ></input>
          <textarea
            name="content"
            onChange={handleDescChange}
            placeholder="description..."
            className="content-input"
            value={content}
            type="text"
          ></textarea>
        </div>
        <button type="submit" className="add-button">
          +
        </button>
      </div>
    </form>
  );
}

export default AddNote;
