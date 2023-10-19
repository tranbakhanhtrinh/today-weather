import axios from 'axios'

const baseURL = 'https://api.openweathermap.org/data/2.5'
export const api = axios.create({
  baseURL,
  params: {
    appid: process.env.NEXT_PUBLIC_WEATHER_APPID,
    units: 'metric'
  }
})
