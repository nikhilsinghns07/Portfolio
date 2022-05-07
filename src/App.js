import React  from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home'
import Project from './pages/Projects';
import Apk from './pages/Apk';
import Navbar from './components/Navbar';
import Blog from './Blog/Blog'
import Login from './Blog/Login'
import Signup from './Blog/Signup'

function App() {
  
  return (
    <React.Fragment>
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
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path ='*'>
          <Redirect to='/'></Redirect>
        </Route>
      </Switch>
      </React.Fragment>
    

  );
}

export default App;