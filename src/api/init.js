import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/'

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    maxResults: 50,
  },
  timeout: 5000,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
})

export default instance
