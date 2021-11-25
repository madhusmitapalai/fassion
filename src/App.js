import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Header from './components/Header';
import Products from './components/Products';
import CardContainer  from './components/CardContainer';
import Girl from './components/Girl';
const App = () => {
  return (
    <div>
      <Home/>
      <Header/>
      <Products/>
      <CardContainer/>
      <Girl/>
    </div>
  )
}

export default App
