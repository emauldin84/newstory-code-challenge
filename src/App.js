import React from 'react';
                                            // should be 'react-router-dom'
import { Route, Redirect, withRouter } from 'react-router'
import './app.css'

// import Nav, Home and Search from components files


function App() {
  return (
    <div>
      <Nav />
                {/* add exact */}
      <Route path='/' component={Home}/>
      <Route path='/search' component={Search}/>
      <Redirect to='/' />

    </div>
  );
}

export default withRouter(App);
