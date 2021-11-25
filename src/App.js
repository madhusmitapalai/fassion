import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Products from "./components/Products";
import CardContainer from "./components/CardContainer";
import Girl from "./components/Girl";
import Summer from "./components/Summer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import Testimonial from './components/Testimonial';
const App = () => {
  return (
    <div>
      <Home />
      <Header />
      <Products />
      <CardContainer />
      <Girl />
      <Summer />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
