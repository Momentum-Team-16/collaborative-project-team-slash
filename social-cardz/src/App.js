import './App.css';
import { React, useState } from 'react';
import moment from 'moment'; 
import useLocalStorageState from 'use-local-storage-state'; 

const App = ({ card }) => {
  return (
  <>
  <p className="time">Date: {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    <h1>Social Cardz</h1>
    <div className="card-stack">
      {card.map((card) => (
        <div className="card-cover">
          <h2>{card.title}</h2>
          <h3>{card.author}</h3>
          <p>{card.shortDescription}</p>
          <br/>  
          <p>{card.date}</p>
          <br /> 
          <img src={card.image} className="pics" alt="picz" /> 
        </div> 
      ))}
    </div>
  </> 
  );
}

export default App;
