import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'
import './app.css'

import Nav from './components/Nav'
import Home from './components/Home'
import Search from './components/Search'


function App() {
  return (
    <div>
      <Nav />
      <Route path='/' exact component={Home}/>
      <Route path='/search' component={Search}/>
      <Redirect to='/' />

    </div>
  );
}

export default withRouter(App);
