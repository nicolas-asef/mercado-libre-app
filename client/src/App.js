import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewProduct from './pages/NewProduct/NewProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='add' element={ <NewProduct /> } />
      </Routes>
    </div>
  );
}

export default App;
