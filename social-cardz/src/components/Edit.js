import { requestEditCard } from './Requests'; 


export const Edit = ({ token, cardId}) => {

    const editCard = () => {
        requestEditCard(token, cardId) 
        .then(res => res.data)
    }

    return (
        <button className="modbutt" onClick={editCard}>Modify Leaf</button>
 )
}