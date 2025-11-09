
import axios from 'axios';
const BASE = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

export function login(username, password){
  return axios.post(`${BASE}/auth/login`, { username, password });
}

export function getAnimals(token){
  return axios.get(`${BASE}/animals`, { headers: { Authorization: `Bearer ${token}` }});
}

export function createAnimal(token, payload){
  return axios.post(`${BASE}/animals`, payload, { headers: { Authorization: `Bearer ${token}` }});
}

export function getHealthForAnimal(token, animalId){
  return axios.get(`${BASE}/health/animal/${animalId}`, { headers: { Authorization: `Bearer ${token}` }});
}

export function getFeeds(token){
  return axios.get(`${BASE}/feed`, { headers: { Authorization: `Bearer ${token}` }});
}
