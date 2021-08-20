import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import Navigation from './components/Navigation';
// import Homepage from './pages/Homepage';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Character from './pages/Character';
// import NoMatch from './pages/NoMatch';

export default function App() {
  return (
    <Router>
      <header>
        <Jumbotron>
          <h1 className="display-3">Diablo Source</h1>
          <p className="lead">Hello, you like Diablo.</p>
        </Jumbotron>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/character" component={Character} />
          {/* <Route exact path="/d3/:id" component={Login} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </header>
    </Router>
  )
}