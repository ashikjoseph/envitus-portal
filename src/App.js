import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Auth/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/header' element={<Header/>} />
    </Routes>
    </div>
  );
}

export default App;
