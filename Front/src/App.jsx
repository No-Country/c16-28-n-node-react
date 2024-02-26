import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/index.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <main className='container'>
        <header>
        <NavBar />
        </header>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
};

export default App;
