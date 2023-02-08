import './App.css';
import { React, useState } from 'react';
import moment from 'moment'; 
import useLocalStorageState from 'use-local-storage-state'; 
import { NavBar } from './components/NavBar';
import { Login } from './components/Login'; 
import { Friends } from './components/Friends'; 
import { AllCardz } from './components/AllCards'; 
import { CreateCard } from './components/CreateCard'; 
import { MyCardz } from './components/MyCards'; 
import { Register } from './components/Register';
import { Routes, Route } from 'react-router-dom'; 

function App() {
  const [token, setToken] = useLocalStorageState("token", null)
  const [username, setUsername] = useLocalStorageState("username", '') 

  const setLogin = (token, username) => {
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
      <NavBar token={token} setLogin={setLogin} username={username} />
      <Routes>
        <Route path="/AllCards" element={<AllCardz token={token}/>} /> 
        <Route path="/MyCards" element={<MyCardz token={token} />} />
        <Route path="/Friends" element={<Friends />} /> 
        <Route path="/CreateCard" element={<CreateCard token={token} />} /> 
        <Route path="/Login" element={<Login />} /> 
        <Route path="/register" element={<Register setLogin={setLogin}/>} />
      </Routes>
      </div> 
    ) : (
      <div> 
        <Login 
        setLogin={setLogin} /> 
      </div>)}
  </> 
  );
}
export default App;