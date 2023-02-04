import './App.css';
import { React, useState } from 'react';
import moment from 'moment'; 
import useLocalStorageState from 'use-local-storage-state'; 
import { NavBar } from './components/NavBar';
import { GoLogin } from './components/Login'; 
import { AllCardz } from './components/AllCards'; 
import { MyCardz } from './components/MyCards'; 
import { Routes, Route } from 'react-router-dom'; 

function App() {
  const [token, setToken] = useLocalStorageState("token", null)
  const [username, setUsername] = useLocalStorageState("username", '') 

  const setGoLogin = (token, username) => {
    setToken(token)
    setUsername(username)
  }

  const loggedIn = token 

  return (
  <>
  <p className="time">Date: {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    <h1>Sugar Maple Social</h1>

    {loggedIn ? (
       <div className="nav"> 
       <NavBar token={token} setGoLogin={setGoLogin} username={username} />
       <Routes>
         <Route path="/AllCards" element={<AllCardz/>} /> 
         <Route path="/MyCards" element={<MyCardz />} />
         <Route path="/Login" element={<GoLogin />} /> 
       </Routes>
       </div> 
    ) : (
      <div> 
        <GoLogin 
        setGoLogin={setGoLogin} /> 
      </div>)}
  </> 
  );
}
export default App;