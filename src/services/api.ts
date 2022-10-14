import axios from 'axios';
import md5 from 'md5';

const publicKey = 'e0a7af9e09930a9a1ea31aded90ee216';
const privateKey = 'c1878a0dd01fa9fdec33141b09818052b87cde30';

const time = Number(new Date());

const hash = publicKey && privateKey ? md5(time + privateKey + publicKey) : '';

export const authKey = `&ts=${time}&apikey=${publicKey}&hash=${hash}`;

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

export default api;
