import axios from 'axios';
import md5 from 'md5';

const publicKey = 'e0a7af9e09930a9a1ea31aded90ee216';
const privateKey = 'c1878a0dd01fa9fdec33141b09818052b87cde30';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;