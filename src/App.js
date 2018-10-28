import React, { Component } from 'react';
import './App.css';
import {AuthProvider} from './AuthContext';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <AuthProvider>
      <Header />
      <Switch>
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route path="/" exact={true} component={Landing} />
        </Switch>
      </AuthProvider>
      </Router>
      </div>
    );
  }
}

export default App;
