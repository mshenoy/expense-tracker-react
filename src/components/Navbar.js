import React from 'react';

const Navbar = () => {
  return (
    <nav className="teal">
      <div className="container">
        <div className="nav-wrapper ">
          <a href="#!" className="brand-logo">
            Expense Tracker
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
