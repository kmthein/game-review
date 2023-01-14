import axios from "axios";

export const api = axios.create({
    baseURL: "https://opencritic-api.p.rapidapi.com",
    headers: {
        'X-RapidAPI-Key': '2aa9f3290bmsh892e52f642bf32ep1b2933jsn5309c1d34b86',
        'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
      }
})