import axios from "axios";

export const requestLogin = (username, password) => {
    const url = 'https://social-cards-wg2j.onrender.com/auth/token/login' 

    const response = axios.post(url, {
        username: username, 
        password: password})
    return response 
}

export const requestAllCards = (token) => {
    const url = 'https://social-cards-wg2j.onrender.com/cards/' 

    const response = axios.get(url, {
        headers: {Authorization: `token ${token}`}
    })
    return response 
}

export const requestMyCards = (token) => {
    const url = 'https://social-cards-wg2j.onrender.com/cards/me/' 

    const response = axios.get(url, {
        headers: {Authorization: `token ${token}`}
    })
    return response 
}

export const requestCreateCard = (token) => {
    const url = 'https://social-cards-wg2j.onrender.com/cards/me/'

    const response = axios.post(url, {
        headers: {Authorization: `token ${token}`}
    })
    return response 
}


// export const requestACard = (token, cardId) => {
//     const url = 'https://social-cards-wg2j.onrender.com/cards/${cardId}'

//         const response = axios.get(url,
//     { headers: { Authorization: `token ${token}`}
//     })
//     return response
// } 


