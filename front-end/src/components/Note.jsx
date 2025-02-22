import axios from "axios";

function Note(props) {
  async function handleChange(e) {
    const response = await axios.put("https://notes-keeper-backend-sigma.vercel.app/notes/delete", {
      username: props.username,
      note_id: e.target.name,
    });
    props.refreshNotes();
  }

  return (
    <>
      <div className="note-container">
        <div className="title">{props.title}</div>
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
