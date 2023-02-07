export const CardDetails = ({card}) => {

    return (
        <div className="card-container">
        <h5 className="card-title">{card.title}</h5>
        <div className="card-info"
            style={{
                border_color: `${card.border_color}`,
                font: card.font,
                text_color: card.font_color,}}>
            <div className="message">{card.front_message}</div>
            <div className="author">{`created by ${card.owner}`}</div>
        </div>
        </div>
    )}
    