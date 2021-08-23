import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppContext, AppProvider } from './utils/AppContext';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Character from './pages/Character';
import NoMatch from './pages/NoMatch';
import CharacterSearch from './components/CharacterSearch';




const App = () => {
  const [appState, setAppState] = useState({
    battleTag: "",
    heroes: [],
    heroId: ""
  });

  useEffect(() => {
    // buildAppState();
  }, [])


  return (
    <AppContext.Provider value={{ appState, setAppState }} >
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/character" component={Character} />
          <Route exact path="/characterSearch" component={CharacterSearch} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </AppContext.Provider>
  )
}

export default App;