import React, { useEffect } from 'react';
import api from '../../services/api';

const Comics: React.FC = () => {

  useEffect(() => {
    api
      .get('/comics')
      .then(response => console.log(response.data.data))
      .catch(err => console.log(err));
  }, []);

  return <h1>Comics</h1>;
};

export default Comics;