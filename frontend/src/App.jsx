import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import Note from "./components/Note";
import Footer from "./components/footer";
import AddNote from "./components/AddNote";
import { LoginPage } from "./components/LoginPage";
import axios from "axios";
import NotesSection from "./components/NotesSection";

function App() {
  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        <Header />
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
