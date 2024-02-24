import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/index.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <main className='container'>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
};

export default App;
