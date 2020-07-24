import React from 'react';

import './style/main.css';
import './App.css';
import Home from './pages/Home';
import Showreel from './pages/Showreel';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/showreel' component={Showreel} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/about' component={About} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
