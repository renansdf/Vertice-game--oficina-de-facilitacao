import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.airtable.com/v0/app6OneChZymFmj2U/Perguntas',
});

export default api;
