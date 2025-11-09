
import React, { useState } from 'react';
import { login } from '../api';

export default function Login({ onLogin }){
  const [u, setU] = useState('admin');
  const [p, setP] = useState('farmadmin');
  const [err, setErr] = useState('');

  async function submit(e){
    e.preventDefault();
    try {
      const res = await login(u, p);
      onLogin(res.data.token);
      localStorage.setItem('sf_token', res.data.token);
    } catch (e){
      setErr('Login failed');
    }
  }

  return (
    <form onSubmit={submit} className="card">
      <h3>Login</h3>
      {err && <div className="error">{err}</div>}
      <label>Username</label>
      <input value={u} onChange={e=>setU(e.target.value)} />
      <label>Password</label>
      <input value={p} onChange={e=>setP(e.target.value)} type="password" />
      <button type="submit">Login</button>
    </form>
  );
}
