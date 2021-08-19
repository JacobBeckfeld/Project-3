import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
// import Homepage from './pages/Homepage';
// import Dashboard from './pages/Dashboard';
import Character from './pages/Character';
import LoginForm from './components/LoginForm';
// import NoMatch from './pages/NoMatch';
import Navigation from './components/Navigation';
import Search from './pages/Search';

export default function App() {
  return (
    <Router>
      <div>
        <Jumbotron>
          <h1 className="display-3">Diablo Source</h1>
          <p className="lead">Hello, you like Diablo.</p>
        </Jumbotron>
        <Navigation />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/dashboard" component={LoginForm} />
          <Route exact path="/d3/:id" component={LoginForm} />
          <Route exact path="/character" component={Character} />
          <Route exact path="/search" component={Search} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  )
}