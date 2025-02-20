import Note from "./Note";
import AddNote from "./AddNote";
import { useState, useEffect } from "react";
import axios from "axios";

function NotesSection(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getNotes() {
      try {
        
        // props.setIsLoading(true);
        // await setTimeout(()=>{},2000)
        console.log("try");
        const res = await axios.post("http://localhost:3000/", {
          username: props.user,
        });
        setData(res.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        // props.setIsLoading(false);
      }
    }
    getNotes();
    // if (props.isLogged) getNotes();
  }, []);

  const refreshNotes = async () => {
    try {
      // props.setIsLoading(true);
      const res = await axios.post("http://localhost:3000/", {
        username: props.user,
      });
      setData(res.data);
      console.log("inserted");
    } catch (error) {
      console.error("Error refreshing notes:", error);
    } finally {
      // props.setIsLoading(false);
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
            //   setRender={setRender}
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

export default NotesSection;
