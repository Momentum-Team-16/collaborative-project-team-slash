import { requestFollowedCards } from './Requests'; 
import { useState, useEffect } from 'react'; 
import { CardDetails } from './CardDetails'; 


export const Friends = ({token}) => {
    const [fwiends, setFwiends] = useState([])

        useEffect(() => {
            requestFollowedCards(token)
                .then(res =>  {
                    setFwiends(res.data)
                })
        }, [token])
 
    return (
        <>
        <h2>Maple Branches</h2>
        <div className="card-grid">
            {fwiends.map(card => (
                <div className="card">
                    <CardDetails token={token} card={card} key={card.id}/>
                </div>
            ))}
        </div>
        </>
    )

} 