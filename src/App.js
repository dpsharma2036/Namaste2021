import React from 'react';
import { Route } from 'react-router-dom';


import './App.css';
import Namaste from './components/namaste/Namaste';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route 
      exact path="/" render={(props)=> <Namaste{...props} name="DPAcharya"/>} />
     <Route path="/clock" component={Clock} />
     <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
