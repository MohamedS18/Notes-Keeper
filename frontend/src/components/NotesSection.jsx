import Note from "./Note";
import {AddNote} from "./AddNote";
import { useState, useEffect } from "react";
import axios from "axios";

function NotesSection(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getNotes() {
      try {
        const res = await axios.get(`http://localhost:3000/notes/getdata/`, {
          params: { username: props.user },
        });

        setData(res.data);
      } catch (error) {
        alert("Something went wrong");
      }
    }
    getNotes();
  }, []);

  const refreshNotes = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/notes/getdata`, {
        params: { username: props.user },
      });
      setData(res.data);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <AddNote
        user={props.user}
        setUser={props.setUser}
        refreshNotes={refreshNotes}
      />
      <div className="board">
        {data.map((section, ind) => {
          const options = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          };

          const date = new Date(section.lastUpdated).toLocaleString(
            "en-GB",
            options
          );
          return (
            <Note
              refreshNotes={refreshNotes}
              username={props.user}
              key={section._id}
              id={section._id}
              title={section.title}
              content={section.content}
              created={date}
            />
          );
        })}
      </div>
    </>
  );
}

export {NotesSection};
