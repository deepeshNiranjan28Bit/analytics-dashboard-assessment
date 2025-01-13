import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';
import { FaTachometerAlt, FaChartBar, FaShoppingCart } from 'react-icons/fa';
import { Colors } from 'chart.js';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2><span style={{ color: "#fff" }}>Me</span> Board</h2>
      <nav>
        <NavLink to="/" className="nav-item">
          <FaTachometerAlt className="icon" />
          Dashboard
        </NavLink>
        <NavLink to="/analytics" className="nav-item">
          <FaChartBar className="icon" />
          Analytics
        </NavLink>
        <NavLink to="/orders" className="nav-item">
          <FaShoppingCart className="icon" />
          Orders
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
