import { requestEditCard } from './Requests'; 


export const Edit = ({ token, cardId}) => {

    const editCard = () => {
        requestEditCard(token, cardId) 
    }

    return (
        <button className="modbutt" onClick={editCard}>Modify Leaf</button>
 )
}