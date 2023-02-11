import axios from "axios";

export const requestLogin = (username, password) => {
  const url = "https://social-cards-wg2j.onrender.com/auth/token/login";

  const response = axios.post(url, {
    username: username,
    password: password,
  });
  return response;
};

export const requestAllCards = (token) => {
  const url = "https://social-cards-wg2j.onrender.com/cards/";

  const response = axios.get(url, {
    headers: { Authorization: `token ${token}` },
  });
  return response;
};

export const requestCreateCard = (token, createCard) => {
  const url = "https://social-cards-wg2j.onrender.com/cards/me/";

  const response = axios.post(url, createCard, {
    headers: { Authorization: `token ${token}` },
  });
  return response;
};

export const requestDeleteCard = (token, cardId) => {
    const url = `https://social-cards-wg2j.onrender.com/cards/${cardId}/`

    const response = axios.delete(url, {
        headers: {Authorization: `token ${token}`}
    })
    return response 
}

export const requestSingleCard = (token, cardId) => {
  const url = `https://social-cards-wg2j.onrender.com/cards/${cardId}/`

  const response = axios.get(url, {
    headers: {Authorization: `token ${token}`}
  })
  return response 
}

export const requestFollowUser = (token, ownerId) => {
    const url = `https://social-cards-wg2j.onrender.com/follower/${ownerId}/`

    const response = axios.post(url, {}, {
        headers: {Authorization: `token ${token}`}
    })
    return response 
}

export const requestFollowedCards = (token) => {
    const url = 'https://social-cards-wg2j.onrender.com/cards/followed/'

    const response = axios.get(url, {
        headers: {Authorization: `token ${token}`}
    })
    return response 
}

export const requestUnfollowUser = (token, ownerId) => {
    const url = `https://social-cards-wg2j.onrender.com/unfollow/${ownerId}/`

    const response = axios.delete(url, {
        headers: {Authorization: `token ${token}`}
    })
    return response 
}

export const requestMyCards = (token) => {
  const url = "https://social-cards-wg2j.onrender.com/cards/me/"

  const response = axios.get(url, {
    headers: { Authorization: `token ${token}` },
  });
  return response;
};