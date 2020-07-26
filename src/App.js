import React from 'react';

import './style/main.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Showreel from './pages/Showreel';
import Galleries from './pages/Galleries';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin';

import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/showreel' component={Showreel} />
        <Route exact path='/galleries' component={Galleries} />
        <Route exact path='/mylife' component={Gallery} />
        <Route exact path='/media' component={Gallery} />
        <Route exact path='/about' component={About} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
