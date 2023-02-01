import axios from 'axios'; 
import { useState } from 'react'; 

export const Login = () => {
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 

    return(
        <> 
        <h2 className="login-intro">Welcome to Sugar Maple Social!</h2>
        <h3 className="login-add">Please Login</h3>

        <form className="login-form">
            <button>Login</button>
        </form>
        
        
        
        
        
        </>
    )
}
