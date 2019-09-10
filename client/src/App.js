import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
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
