import axios from 'axios'
import { useState } from 'react'


export const Register = ({setLogin}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit=(e) => {
        e.preventDefault()
        axios

        .post('https://social-cards-wg2j.onrender.com/auth/users/',{username, password})
        
        .then((res) => {})
        
        .then(() => axios.post('https://social-cards-wg2j.onrender.com/auth/token/login',{username, password}))
        
        .then((res) => setLogin(username, res.data.auth_token))}

        
    return (
        <div>
            <form className="register">
                <div className="userfield">
                    <input className="input" type="text" placeholder="username" 
                    onChange={(e) => setUsername(e.target.value)}/> 
                </div>
                <div className="passwordfield">
                    <input className="input" type="password" placeholder="password" 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button onClick={handleSubmit}>Register</button>
            </form>
        </div>
)}
