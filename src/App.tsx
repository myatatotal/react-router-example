import React from 'react';
import { Header } from './shared/components';
import { BrowserRouter } from 'react-router-dom';
import { AppRoute } from './scenes/app.route';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
