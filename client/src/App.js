import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Jumbotron } from 'reactstrap';
import Navigation from '../components/Navigation';

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
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/d3/:id" component={Character} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}