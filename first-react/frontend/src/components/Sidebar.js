import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/add-scenario">Add Scenario</Link>
      <Link to="/add-vehicle">Add Vehicle</Link>
    </div>
  );
};

export default Sidebar;
