import axios from 'axios';

export const apiKey = "638f1647e1c44058b474cb981cd5c25a";

export const pageSize = 31;

export const maxApiPages = 3;

export const instance = axios.create({
    baseURL: 'https://newsapi.org/v2'
});