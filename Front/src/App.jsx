import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/index.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
};

export default App;
