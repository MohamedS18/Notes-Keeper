import React, { useContext, useState } from "react";
import axios from "axios";

function AddNote(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const { data, setData } = useContext(dataContext);
  

  async function  handleSubmit(e) {
    e.preventDefault();
    props.setRender(true);
    if (title !== "" && content !== "") {
     
      const response = await axios.put("http://localhost:3000/insert",{
        username:props.user,
        title,
        content,
      });

      setTitle("");
      setContent("");
    } else {
      alert("Fields are empty !");
    }
    // const response = await axios.post('http://localhost:3000/', {
    //   id: title.concat(content.substring(0.2)).replace(" ", ""),
    //   title,
    //   content,
    //   created: new Date().toLocaleDateString(),
    // });
    
    // console.log(response.data);
    // if (!response.ok) {
    //   throw new Error('Failed to add note');
    // }
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#ffbc2b"
            className="bi bi-patch-plus-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default AddNote;
