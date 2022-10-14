import React, { Fragment } from 'react';

import Header from './components/Header'
import Characters from './pages/Characters';


import GlobalStyles from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Characters />
    </>
  )
};

export default App;
