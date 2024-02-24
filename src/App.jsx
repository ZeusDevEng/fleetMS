import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './features/auth/LoginPage';
import HomePage from './features/HomePage'; 

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} exact />
        {/* Add more routes here */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
