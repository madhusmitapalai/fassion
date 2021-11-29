import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Products from "./components/Products";
import CardContainer from "./components/CardContainer";
//import Girl from "./components/Girl";
import Summer from "./components/Summer";
import Contact from "./components/Contact";
//import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Testimonial from "./components/Testimonia/Testimonial";
//import Testimonial from './components/Testimonial';
const App = () => {
  return (
    <>
      {/* <Home />
      <Header />
      <Products />
      <CardContainer />
      <Summer />
      <Contact />
      <Footer /> */}
      <Router>
        <Home />
        <Header/>
        <Switch>
          <Route exact path="/Header" component={Header} />
          <Route exact path="/Products" component={Products} />

          <Route exact path="/CardContainer" component={CardContainer} />
          <Route exact path="/Summer" component={Summer} />
          <Route exact path="/Testimonial" component={Testimonial} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
