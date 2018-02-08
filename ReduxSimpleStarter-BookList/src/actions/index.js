import axios from 'axios';


const API_KEY = 'ed15174bc80a6636284114fd9a266a34';
const URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${URL}&q=${city},us`;

    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    };


}