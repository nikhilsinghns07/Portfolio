import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home'
import Project from './pages/Projects';
import Apk from './pages/Apk';
import Navbar from './components/Navbar';
import background from './pics/background.jpg'

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`}}>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/projects'>
          <Project />
        </Route>
        <Route path='/apk'>
          <Apk />
        </Route>
        
        <Route path ='*'>
          <Redirect to='/'></Redirect>
        </Route>
      </Switch>
      </div>
    

  );
}

export default App;