import axios from 'axios';

export const BASE_URI = '';

export const apiInstance = axios.create({
  baseURL: BASE_URI,
  responseType: 'json',
  method: 'GET',
});
