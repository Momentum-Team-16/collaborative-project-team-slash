import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import data from './card.json'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App card={data.card}/>
  </React.StrictMode>
);