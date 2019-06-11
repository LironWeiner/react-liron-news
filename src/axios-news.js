import axios from 'axios';

export const apiKey = "6bc6a53734cd43d39d4ddb49db57cdf7";

export const instance = axios.create({
    baseURL: 'https://newsapi.org/v2'

});

