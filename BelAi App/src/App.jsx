import { RouterProvider } from 'react-router-dom';
import './App.css';
import { primaryRoute } from './routes/PrimaryRouter';

function App() {
  return (
    <RouterProvider router={primaryRoute} />
  );
}

export default App;
