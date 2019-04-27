import React from 'react';
import { Link } from 'react-router-dom'
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1 className="HomePage-title">Welcome to the Cryptocurrency Price Index</h1>
      <Link to="/" className="HomePage-link">start!!</Link>
    </div>
  );
}

export default HomePage;
