import { requestAllCards } from './Requests'; 
import { useEffect, useState } from 'react'; 


export const AllCardz = ({token}) => {
    const [card, setCard] = useState([])
    useEffect(() => {
        requestAllCards(token)
        .then(res => setCard(res.data))
    }, [token])

    return (
        <h2>Wild Maples</h2>
    )
};