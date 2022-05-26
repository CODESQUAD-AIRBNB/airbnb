import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Footer from '@components/Footer';
import Header, { HEADER_TYPE } from '@components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header headerType={HEADER_TYPE.MAIN} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
