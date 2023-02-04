import axios from "axios";

export const Login = (username, password) => {
    const url = 'https://social-cards-wg2j.onrender.com/auth/token/login' 

    const response = axios.post(url, {
        username: username, 
        password: password})
    return response 
}

export const AllCards = (token) => {
    const url = 'https://social-cards-wg2j.onrender.com/cards/' 

    const response = axios.get(url, {
        Header: {Authorization: `Token ${token}`}
    })
    return response 
}

export const MyCards = (token) => {
    const url = 'https://social-cards-wg2j.onrender.com/cards/me' 

    const response = axios.get(url, {
        Header: {Authorization: `Token ${token}`}
    })
    return response 
}

