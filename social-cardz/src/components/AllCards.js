import { requestAllCards } from './Requests'; 
import { useEffect, useState } from 'react'; 
import { CardDetails } from './CardDetails';
import { Follow } from './Follow'; 


export const AllCardz = ({token}) => {
    const [cards, setCards] = useState([])
    
    useEffect(() => {
        requestAllCards(token)
            .then(res =>  {
                setCards(res.data)
            })
    }, [token])

    return (
        <>
        <h2>Wild Maples</h2>
        <div className="card-grid">
            {cards.map(card => (
                <div className="card">
                    <CardDetails card={card} key={card.id}/>
                    <Follow token={token} ownerId={card.owner} />
                </div>
            ))}
        </div>
        </>
    )
};
