import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './features/home/Home';
import Users from './features/users/Users';
import Products from './features/products/Products';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/counter' element={<Counter />}/>
      <Route path='/users' element={<Users />}/>
      <Route path='/products' element={<Products />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
