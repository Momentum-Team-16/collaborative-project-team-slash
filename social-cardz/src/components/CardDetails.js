export const CardDetails = ({card}) => {

    return (
        <div className="card-container">
            <h5 className="card-title">{card.title}</h5>
            <div className="front-card"
                        style={{
                            border_color: `${card.border_color}`,
                            font: card.font,
                            text_color: card.font_color,}}>
                        <div className="front-message">{card.front_message}</div>
            </div>

        <div className="card-container-back">
            <div className="back-message">{card.back_message}</div>
        </div>



            <div>
            <div className="author">{`created by ${card.owner}`}</div>

        </div>
        </div>
    )}
    