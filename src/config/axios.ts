import axios from 'axios';

export const axiosCall = axios.create({
  baseURL: 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master',
});
