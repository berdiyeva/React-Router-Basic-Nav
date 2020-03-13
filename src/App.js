import React from 'react';
// import ReactDOM from "react-dom";
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, BrowserRouter as Router} from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      </Router>
  </div>
);

export default App;
