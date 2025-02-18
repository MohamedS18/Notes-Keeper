import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import Note from "./components/Note";
import Footer from "./components/footer";
import AddNote from "./components/AddNote";
// import { createContext } from "react";
import { LoginPage } from "./components/LoginPage";
import axios from "axios";

// export const dataContext = createContext(null);

function App() {
  const [user, setUser] = useState({})
  const [data, setData] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [render, setRender] = useState(true);

  useEffect(() => {
    async function getNotes() {
      try {
        // console.log(user);
        setIsLoading(true);
        const res = await axios.post("http://localhost:3000/", { user });
        console.log(res.data[0]);
        setData(res.data[0].notes);
        setRender(false);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setIsLoading(false); // Ensure this runs regardless of success or failure
      }
    }
    if (isLogged) {
      getNotes(); // Fetch notes only if logged in
    }
  }, [user, isLogged, render]);

  if (isLoading) {
    return (
      <>
        <h1>Loaading folks</h1>
      </>
    );
  }

  if (!isLogged) {
    return <LoginPage setIsLogged={setIsLogged} setUser={setUser} />;

  } else {
    return (
      <>
        {/* <dataContext.Provider value={{ data, setData }}> */}
        <Header />
        <AddNote user={user} setUser={setUser} setRender={setRender}/>
        <div className="board">
          {data.map((section, ind) => {
            // console.log(ind);
            const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };

            const date = new Date(section.lastUpdated).toLocaleString('en-GB', options);
            return (
              <Note
                key={section._id}
                id={section._id}
                title={section.title}
                content={section.content}
                created={date}
              />
            );
          })}
        </div>
        <Footer />
        {/* </dataContext.Provider> */}
      </>
    );
  }
}

export default App;
