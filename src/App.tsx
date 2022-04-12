import NavBar from './pages/partials/NavBar';
import Footer from './pages/partials/Footer';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router';



const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
