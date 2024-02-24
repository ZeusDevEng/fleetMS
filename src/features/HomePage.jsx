import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Our App</h1>
      <p>This is the main page of our React application. From here, you can navigate to various features.</p>
      <div>
        <h2>Features</h2>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/vehicles">Vehicle List</Link></li>
          <li><Link to="/drivers">Driver List</Link></li>
          {/* Add more links to other features as needed */}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
