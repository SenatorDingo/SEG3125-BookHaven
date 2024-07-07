import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import logo from '../resources/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const routes = [
    { path: '/', name: 'Home' },
    { path: '/explore', name: 'Explore' },
    { path: '/reviews', name: 'Reviews' },
    { path: '/discussions', name: 'Discussions' },
    { path: '/profile', name: 'Profile' },
    { path: '/AdvancedSearch', name: 'Advanced Search'}
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      setSuggestions(routes.filter(route => route.name.toLowerCase().includes(query.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link className="navbar-brand" to="/"><img src={logo} height="50px" alt="Book Haven Logo" /></Link>
      <li className="nav-item">
        <form className="d-flex" onSubmit={handleSearchSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-success" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
        {suggestions.length > 0 && (
          <ul className="list-group position-absolute mt-2" style={{ zIndex: 1000 }}>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-action"
                onClick={() => navigate(suggestion.path)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </li>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/explore">Explore</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reviews">Reviews</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/discussions">Discussions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              <i className="bi bi-person-circle"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
