import Header from "./Header";
import React, { useState } from "react";
import Note from "./Note";
import Footer from "./footer";
import AddNote from "./AddNote";
import { notes } from "../notes";
import { createContext } from "react";

export const dataContext = createContext(null);

function App() {
  const [data, setData] = useState(notes);

  return (
    <>
      <dataContext.Provider value={{ data, setData }}>
        <Header />
        <AddNote />
        <div className="board">
          {data.map((section) => {
            return (
              <Note
                key={section.id}
                id={section.id}
                title={section.title}
                content={section.content}
                created={section.created}
              />
            );
          })}
        </div>
        <Footer />
      </dataContext.Provider>
    </>
  );
}

export default App;
