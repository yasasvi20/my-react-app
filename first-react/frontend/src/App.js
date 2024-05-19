import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import ScenarioForm from './components/ScenarioForm';
import VehicleForm from './components/VehicleForm';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path="/add-scenario" component={ScenarioForm} />
          <Route path="/add-vehicle" component={VehicleForm} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
