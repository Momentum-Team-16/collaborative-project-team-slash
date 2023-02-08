import { useEffect, useState } from 'react'; 
import { requestMyCards } from './Requests';
import { CardDetails } from './CardDetails'; 
import { Delete } from './Delete'; 

export const MyCardz = ({token, username}) => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        requestMyCards(token)
        .then(res => setCards(res.data))
    }, [token])


    return (
        <>
        <h2>Domestic Maples</h2>
        <div className="card-grid">
            {cards.map(card => (
                <div className="card">
                    <CardDetails card={card} key={card.id} />
                    <div className="burn">
                    <Delete card={card} token={token} cardId={card.id} />
                    </div> 
                </div>
            ))}
        </div>
        </>
    )
};