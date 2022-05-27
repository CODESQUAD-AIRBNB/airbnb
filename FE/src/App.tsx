import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Footer from '@components/Footer';
import Header, { HEADER_TYPE } from '@components/Header';
import MainContent from '@components/MainContent';

function App() {
  return (
    <BrowserRouter>
      <Header headerType={HEADER_TYPE.MAIN} />
      <MainContent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
