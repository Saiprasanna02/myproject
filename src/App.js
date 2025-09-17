// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navigation from './Component/Navigation/Navigation';
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login';
import Home from './Component/Home/Home';

function App() {
  return (
<div>
    <BrowserRouter>
          <Navigation/>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/signup " element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
          </Routes>
    </BrowserRouter>
</div>
  );
}

export default App;
