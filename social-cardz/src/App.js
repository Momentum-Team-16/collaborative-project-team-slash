import './App.css';
import React from 'react';
import moment from 'moment'; 

const App = ({ card }) => {
  return (
  <>
  <p className="time">Date: {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    <h1>Social Cardz</h1>
    <div className="bob">
      {card.map((card) => (
        <div className="card-cover">
          <h2>{card.title}</h2>
          <h3>{card.author}</h3>
          <p>{card.shortDescription}</p>
          <br/>  
          <p>{card.date}</p>
        </div> 
      ))}
    </div>
  </> 
  );
}

export default App;
