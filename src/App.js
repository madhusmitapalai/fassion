import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Header from './components/Header';
import Products from './components/Products';
const App = () => {
  return (
    <div>
      <Home/>
      <Header/>
      <Products/>
    </div>
  )
}

export default App
