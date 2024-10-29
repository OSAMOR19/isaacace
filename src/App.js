import React from 'react';
import MyNav from './Components/Nav';
import Home from './Components/Home';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Contact from './Components/contact';
import Cust from './Components/customernumers';
import Who from "./Components/whowe";
import Ourwork from "./Components/ourwork";
import Transformer from "./Components/Transform";
import Blogs from "./Components/Blog";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <MyNav/>
      <Home/>
      <Cust/>
      <Ourwork/>
      <Portfolio/>
      <Who/>
      <Services/>
      <Transformer/>
      <Blogs/>
      <Contact/>
      <FAQ/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
