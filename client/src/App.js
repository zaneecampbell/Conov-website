import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Fragment>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
        <div style={{ background: 'grey' }}>
          <Footer />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
