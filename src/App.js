
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import AboutUS from './components/AboutUS/AboutUS';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import NoTFound from './components/NoTFound/NoTFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {
  const [pages, SetPages] = useState({});

  useEffect(() => {
    fetch('./Driver.JSON')
      .then(res => res.json())
      .then(data => SetPages(data))
  }, [])


  return (
    <div>

      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home home={pages.home}></Home>
            <Cart home={pages.home}></Cart>
          </Route>
          <Route exact path="/home">
            <Home home={pages.home}></Home>
            <Cart home={pages.home}></Cart>
          </Route>
          <Route exact path="/aboutUs">
            <AboutUS aboutUs={pages.aboutUs}></AboutUS>
          </Route>
          <Route exact path="/contact">
            <Contact contactUs={pages.contactUs}></Contact>
          </Route>
          <Route exact path="/services">
            <Services ourServices={pages.ourServices}></Services>
          </Route>
          <Route path="*">
            <NoTFound></NoTFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
