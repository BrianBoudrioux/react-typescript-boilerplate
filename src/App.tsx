import React from 'react';
import NavBar from './pages/partials/NavBar';
import Footer from './pages/partials/Footer';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer/>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
