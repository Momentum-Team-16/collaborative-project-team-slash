import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react'; 
import { Login } from './Requests'; 

export const GoLogin = ({ goSetLogin }) => {
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 
    const navigate = useNavigate('') 

    const handleSubmit = (event) => {
        event.preventDefault() 
        Login(username, password)
        .then((res) => {
            const token = res.data.auth_token
            goSetLogin(token, username) 
            navigate("/MyCards")
        })
    }

    return(
        <> 
        <h2 className="login-intro">Welcome to Sugar Maple Social!</h2>
        <h3 className="login-add">Please Login</h3>

        <form className="login">
            <div className="userfield">
                <input className="input" type="text" placeholder="username" 
                onChange={(e) => setUsername(e.target.value)}/> 
            </div>
            <div className="passwordfield">
                <input className="input" type="password" placeholder="password" 
                onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button onClick={handleSubmit}>Login</button>
        </form>
        </>
    )
}
