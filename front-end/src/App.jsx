import {Header} from "./components/Header";
import React, { useEffect, useState } from "react";
import {Footer} from "./components/Footer";
import { LoginPage } from "./components/LoginPage";
import { NotesSection} from "./components/NotesSection";
import { Loader } from "./components/Loader";

function App() {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(systemPrefersDark);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  if (isLoading) {
    return (
      <>
        <Loader />
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
        <Header username={user} darkMode={darkMode} setDarkMode={setDarkMode} />
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
