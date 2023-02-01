import axios from "axios";

export const RequestCards = () => {
    const url = "https://socialcards.com/cards/"

    const response = axios.get(url,{
        headers: {Authorization: "" }
    }).then(res => console.log(res)) 

}