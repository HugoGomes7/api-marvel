import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Characters: React.FC = () => {

  const [characters, setCharacters] = useState<ResponseData[]>([]);

  useEffect(() => {
    api
      .get('/characters')
      .then(response => {
        setCharacters(response.data.data.results);
        //console.log('log verification', response.data.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return <h1>Characters</h1>;
};

export default Characters;