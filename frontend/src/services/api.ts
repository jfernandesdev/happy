import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-happy-jfernandesdev.herokuapp.com'
})

export default api;
