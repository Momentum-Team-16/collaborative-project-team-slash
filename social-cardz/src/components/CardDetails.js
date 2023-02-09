
export const CardDetails = ({card}) => {

    return (
    <div className="card-container"
        style={{ borderColor: `${card.border_color}`,
        fontFamily: `${card.font}`, 
        color: `${card.text_color}`}}>

            <h5 className="card-title">{card.title}</h5>

            <div className="front-card">
                <div className="front-message">{card.front_message}</div>
            </div>
        <div className="card-container-back">
            <div className="back-message">{card.back_message}</div>
        </div>

        <br/>
        <div>
            <div className="author">{`created by ${card.owner}`}</div>
        </div>
    </div>
    )
}