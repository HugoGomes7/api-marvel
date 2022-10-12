import React, { useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

const publicKey = 'e0a7af9e09930a9a1ea31aded90ee216';
const privateKey = 'c1878a0dd01fa9fdec33141b09818052b87cde30';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const App: React.FunctionComponent = () => {

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`,
      )
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }, [])
  return <div>Marvel API</div>
};

export default App;
