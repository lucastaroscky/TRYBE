// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import About from './About'
import User from './Users'
import Home from './Home'


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
          <Switch>
            <Route path="/users" render={(props) => <User {...props} greetingMessage={'Good Morning'} />} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </>
    );

  }
}

export default App;