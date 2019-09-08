import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Landing />
    </div>
  );
}

export default App;
