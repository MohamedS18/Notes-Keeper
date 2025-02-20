import axios from "axios";
import { useState } from "react";

function LoginPage(props) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("sample");
  const [password, setPassword] = useState("sample");

  async function handleSubmit(e) {
    e.preventDefault();
    const credential = {
      username:username.toLowerCase(),
      password
    };
    console.log(credential);

    if (isSignUp){
      const res = await axios.post("http://localhost:3000/signup", credential);
      // conso
      if (!res.data.status){
        alert("User Already Exist");
         return;
      }
    }
 
      const res = await axios.put("http://localhost:3000/login", credential);
      const response = res.data.status;
      // console.log(res.data);
      props.setIsLogged(response);

    // console.log(response);
    (!response)? alert("wrong credential"):props.setUser(credential.username);
  
  }

  function handleChangeUsername(e){
    setUsername(e.target.value);
  }

  function handleChangePassword(e){
    setPassword(e.target.value);
  }

  function handleChangeIsSignUp(){
    setIsSignUp(!isSignUp);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input onChange={handleChangeUsername} type="text" name="username" defaultValue="sample" />
        <label>password</label>
        <input onChange={handleChangePassword} type="text" name="password" defaultValue="sample" />
        <button type="submit">{(isSignUp) ? "Sign Up" : "Login"}</button>
      </form>
      <button type="button" onClick={handleChangeIsSignUp}>{(!isSignUp) ? "Are You New" : "Already User"}</button>

    </div>
  );
}

export { LoginPage };
