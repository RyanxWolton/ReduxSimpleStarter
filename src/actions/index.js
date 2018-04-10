import axios from 'axios';

const API_KEY = 'f9e5e8971c88c00cb9ffe34dae2f644b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},GB`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}