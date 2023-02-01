import axios from "axios";
import data from './card.json'; 

export const RequestCards = () => {
    const cards = " "

    const response = axios.get(url,{
        headers: {Authorization: "" }
    }).then(res => console.log(res)) 

}