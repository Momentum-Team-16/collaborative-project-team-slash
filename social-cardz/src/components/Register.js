import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { requestLogin } from 'Requests'; 


export const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate() 
    

}