import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewProduct from './pages/NewProduct/NewProduct';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='add' element={ <NewProduct /> } />
      </Routes>
    </div>
  );
}

export default App;
