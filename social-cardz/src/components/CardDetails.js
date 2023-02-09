import { useState } from 'react'; 

export const CardDetails = ({card}) => {
    const [front, setFront] = useState(true)

    const cardFlip = (e) => {
        setFront(!front)
    }

    return (
    <div className="card-container"
        style={{ borderColor: `${card.border_color}`,
        fontFamily: `${card.font}`, 
        color: `${card.text_color}`}}>
        <button className="flipper" onClick={cardFlip}>Toss Leaf</button>
        <br/>
        <br/>

            <h5 className="card-title">{card.title}</h5>

            {front ? ( 
                <div className="front-card">
                    <div className="front-message">{card.front_message}</div>
                </div>
            ) : (
            <div className="card-container-back">
                <div className="back-message">{card.back_message}</div>
            </div>
            )}
        <br/>
        <div>
            <div className="author">{`created by ${card.owner}`}</div>
        </div>
    </div>
    )
}