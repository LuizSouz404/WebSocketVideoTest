const Axios = require('axios');

export const api = Axios.create({
  baseURL: `http://localhost:5000/`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  }
})