import React, { Component } from "react";
import { BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from './App';
import Asteroid from './Asteroid';

class Routes extends Component {
render() {
  return (
    <Router>
      <Switch>
      <Route path='/asteroid'>
          <Asteroid />
        </Route>
        <Route path='/'>
          <App />
        </Route>
      </Switch>
    </Router>
  )
}
}

export default Routes