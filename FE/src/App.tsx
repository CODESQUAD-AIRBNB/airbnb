import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Footer from '@components/Footer';
import GNB, { GNB_TYPE } from '@components/GNB';
import MainContent from '@components/MainContent';

function App() {
  return (
    <BrowserRouter>
      <GNB gnbType={GNB_TYPE.MAIN} />
      <MainContent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
