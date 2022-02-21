import axios from 'axios';

export const weather = axios.create({
    baseURL: "https://api.openweathermap.org/data"
})

export const cities = axios.create({
    baseURL: "https://api.openweathermap.org/geo/1.0/"
})


export const backend = axios.create({
    baseURL: "https://61f91b53783c1d0017c44952.mockapi.io/"
})
