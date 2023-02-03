import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import data from './card.json'; 
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App card={data.card}/>
    </BrowserRouter>
  </React.StrictMode>
);