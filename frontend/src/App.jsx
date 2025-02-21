import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import Note from "./components/Note";
import Footer from "./components/footer";
import AddNote from "./components/AddNote";
import { LoginPage } from "./components/LoginPage";
import axios from "axios";
import NotesSection from "./components/NotesSection";
import { Loader } from "./components/Loader";

function App() {
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log(systemPrefersDark);

  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(systemPrefersDark);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      // localStorage.setItem("nk-darkMode", "yes");
    } else {
      document.body.classList.remove("dark");
      // localStorage.setItem("nk-darkMode", "no");
    }
    // console.log("checked");
  }, [darkMode]);

  if (isLoading) {
    return (
      <>
        <Loader/>
      </>
    );
  }

  if (!isLogged) {
    return (
      <LoginPage
        setIsLogged={setIsLogged}
        setUser={setUser}
        setIsLoading={setIsLoading}
      />
    );
  } else {
    return (
      <>
        <Header username={user} darkMode={darkMode} setDarkMode={setDarkMode}/>
        <NotesSection
          isLogged={isLogged}
          setIsLoading={setIsLoading}
          setUser={setUser}
          user={user}
        />
        <Footer />
      </>
    );
  }
}

export default App;
