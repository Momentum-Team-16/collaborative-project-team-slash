import { requestAllCards, requestMyCards } from './Requests'; 
import { useEffect, useState } from 'react'; 
import { CardDetails } from './CardDetails';


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
        <div className="card-container">
            {cards.map(card => (
                <section>
                    <CardDetails card={card} key={card.id}/>
                </section>
            ))}
        </div>
        </>
    )
};
