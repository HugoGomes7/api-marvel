import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import Creators from './pages/Creators';
import EventsPg from './pages/EventsPg';
import Series from './pages/Series';
import Stories from './pages/Stories';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/comics" element={<Comics />} />
      <Route path="/creators" element={<Creators />} />
      <Route path="/events" element={<EventsPg />} />
      <Route path="/series" element={<Series />} />
      <Route path="/stories" element={<Stories />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
