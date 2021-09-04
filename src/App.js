import React from 'react'
import Roulette from './components/Roulette';
import './styles/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Deposit from './components/Deposit';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Roulette} />
          <Route path="/deposit" component={Deposit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;