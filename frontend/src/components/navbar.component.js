import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar sticky-top navbar-light bg-light navbar-expand-sm">
        <Link to="/" className="navbar-brand">X-MEME</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">CREATE MEME</Link>
          </li>
          <li className="navbar-item">
          <Link to="/meme-list" className="nav-link">MEMES LIST</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
