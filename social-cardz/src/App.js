import './App.css';
import React from 'react'; 

const App = ({ card }) => {
  return (
    <div>
      <h1>Social Cardz</h1>
      {card.map((card) => (
        <div className="card-cover">
          <h2>{card.title}</h2>
          <h3>{card.author}</h3>
          <p>{card.shortDescription}</p>
        </div> 
      ))}
    </div>
  );
}

export default App;
