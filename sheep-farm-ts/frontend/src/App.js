
import React, { useState } from 'react';
import Login from './components/Login';
import AnimalList from './components/AnimalList';

export default function App(){
  const [token, setToken] = useState(localStorage.getItem('sf_token') || null);
  return (
    <div className="container">
      <h1>Sheep & Goat Farm Dashboard</h1>
      {token ? <AnimalList token={token} onLogout={()=>{setToken(null); localStorage.removeItem('sf_token');}} /> : <Login onLogin={t=>setToken(t)} />}
    </div>
  );
}
