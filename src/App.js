import React from 'react';
import { Route,Switch } from 'react-router-dom';

//import { Route, Switch} from 'react-router';


import './App.css';
import Namaste from './components/namaste/Namaste';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import NoMatch from './components/noMatch/NoMatch';
import Jeopardy from './components/jeopardy/Jeopardy';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
      <Route 
      exact path="/" 
      render={(props)=> <Namaste{...props} name="DPAcharya"/>} 
      />
     <Route path="/clock" component={Clock} />
     <Route path="/contact" component={Contact} />
     <Route path="/namaste/:name" component={Namaste} />
     <Route path="/jeopardy/" component ={Jeopardy} />
     
     <Route>
       <NoMatch/>
     </Route>
      </Switch>
     
    </div>
  );
}

export default App;
