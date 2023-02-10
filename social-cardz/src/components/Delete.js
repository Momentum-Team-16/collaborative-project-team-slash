import { requestDeleteCard } from "./Requests"

export const Delete = ({ token, cardId}) => {

    const deleteCard = () => {

        requestDeleteCard(token, cardId) 
            .then((res) => res.data === '' && (window.location.reload())) 
    }

    return (
        <button className="erasebutt" onClick={deleteCard}>Burn Leaf</button>
    )
}