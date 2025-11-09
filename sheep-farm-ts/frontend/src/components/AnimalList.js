
import React, { useEffect, useState } from 'react';
import { getAnimals, createAnimal, getHealthForAnimal, getFeeds } from '../api';

export default function AnimalList({ token, onLogout }){
  const [animals, setAnimals] = useState([]);
  const [form, setForm] = useState({ tag:'', species:'sheep', breed:'', dob:'', gender:'female' });
  const [health, setHealth] = useState([]);
  const [feeds, setFeeds] = useState([]);

  async function load(){
    try {
      const res = await getAnimals(token);
      setAnimals(res.data);
      const f = await getFeeds(token);
      setFeeds(f.data);
    } catch (e){
      onLogout();
    }
  }

  useEffect(()=>{ load(); }, []);

  async function add(e){
    e.preventDefault();
    try {
      await createAnimal(token, form);
      setForm({ tag:'', species:'sheep', breed:'', dob:'', gender:'female' });
      load();
    } catch (err){
      alert('Could not add');
    }
  }

  async function showHealth(id){
    const res = await getHealthForAnimal(token, id);
    setHealth(res.data);
  }

  return (
    <div>
      <div className="toolbar">
        <button onClick={onLogout}>Logout</button>
      </div>

      <div className="grid">
        <div>
          <h3>Animals</h3>
          <ul className="list">
            {animals.map(a => (
              <li key={a.id}>
                <div><strong>{a.tag}</strong> — {a.species} / {a.breed || '—'}</div>
                <div className="row">
                  <button onClick={()=>showHealth(a.id)}>Health</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Add Animal</h3>
          <form onSubmit={add} className="card">
            <label>Tag</label>
            <input value={form.tag} onChange={e=>setForm({...form, tag:e.target.value})} required/>
            <label>Species</label>
            <select value={form.species} onChange={e=>setForm({...form, species:e.target.value})}>
              <option value="sheep">Sheep</option>
              <option value="goat">Goat</option>
            </select>
            <label>Breed</label>
            <input value={form.breed} onChange={e=>setForm({...form, breed:e.target.value})}/>
            <label>DOB</label>
            <input type="date" value={form.dob} onChange={e=>setForm({...form, dob:e.target.value})}/>
            <label>Gender</label>
            <select value={form.gender} onChange={e=>setForm({...form, gender:e.target.value})}>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <button type="submit">Add</button>
          </form>
        </div>

        <div>
          <h3>Health Records</h3>
          <ul className="list">
            {health.map(h => (
              <li key={h.id}>
                <div>{h.date} — {h.type}</div>
                <div>{h.description}</div>
              </li>
            ))}
          </ul>

          <h3>Feed Schedules</h3>
          <ul>
            {feeds.map(f => (
              <li key={f.id}>{f.name} — {f.cronExpression} — {f.notes}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
