import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Orders from './components/Orders';
import Login from './components/Login';
import Empty from './components/Empty';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/empty' element={<Empty/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='*' element={<h4>Not Available</h4>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
