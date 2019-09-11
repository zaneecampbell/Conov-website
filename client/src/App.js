import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Fragment>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <div style={{ background: 'rgb(251, 223, 216)' }}>
          <Footer />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
// rgb(251, 223, 216) pink background
// primary = #007bff
