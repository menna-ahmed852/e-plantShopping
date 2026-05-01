import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 1000,
  Navbars: {
    'Content-Type': 'application/json',
  },
});

export default client;