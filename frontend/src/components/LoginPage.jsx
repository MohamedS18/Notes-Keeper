import axios from "axios";




function LoginPage(props){
    async function  handleSubmit(e){
        const credential = {
            username: e.target.username.value,
            password:e.target.password.value,
        }
        console.log(credential);
        e.preventDefault();
        const res = await axios.post("http://localhost:3000/check", credential);
        const response = (res.data.status);
        console.log(res.data);
        props.setIsLogged(response);
        props.setUser(credential.username);
    }
    // const [username]
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" defaultValue="sample" />
                <label>password</label>
                <input type="text" name="password" defaultValue="sample"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export {LoginPage}