import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
// import ReactDOM from "react-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Router>
          <div className="nav">
            <div className="Nav-link">
              <Link to="/">Home</Link>
            </div>
            <div className="Nav-link">
              <Link to="/about">About</Link>
            </div>
            <div className="Nav-link">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Navigation;
