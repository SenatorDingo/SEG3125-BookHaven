import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import logo from '../resources/logo.png';
import { LanguageContext } from '../context/LanguageContext';
import { fakeBooks, fakeDiscussions } from '../Database';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const { language, toggleLanguage, setLanguage } = useContext(LanguageContext);

  const routes = [
    { path: '/', name: 'Home' },
    { path: '/explore', name: 'Explore' },
    { path: '/reviews', name: 'Reviews' },
    { path: '/discussions', name: 'Discussions' },
    { path: '/profile', name: 'Profile' },
    { path: '/faq', name: 'FAQ' },
    { path: '/AdvancedSearch', name: 'Advanced Search' }
  ];

  const allPages = [
    ...routes,
    ...fakeBooks.map(book => ({ path: `/Book/${book.id}`, name: `BOOK: ${book.title}` })),
    ...fakeDiscussions.map(discussion => ({ path: `/discussions/${discussion.id}`, name: `DISC: ${discussion.topic}` }))
  ];

  useEffect(() => {
    if (location.pathname !== '/discussions' && language !== 'EN') {
      setLanguage('EN');
    }
  }, [location.pathname, language, setLanguage]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      const filteredSuggestions = allPages.filter(page => page.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5);
      setSuggestions(filteredSuggestions);
      setActiveSuggestionIndex(0);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name);
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      if (activeSuggestionIndex < suggestions.length - 1) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    } else if (e.key === 'Enter') {
      if (suggestions.length > 0) {
        handleSuggestionClick(suggestions[activeSuggestionIndex]);
      } else {
        handleSearchSubmit(e);
      }
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      const selectedPage = allPages.find(page => page.name === searchQuery.trim());
      if (selectedPage) {
        navigate(selectedPage.path);
      } else {
        navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      }
      setSearchQuery('');
      setSuggestions([]);
    }
  };

  const handleLanguageClick = () => {
    if (window.location.pathname !== '/discussions') {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } else {
      toggleLanguage();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link className="navbar-brand" to="/"><img src={logo} height="50px" alt="Book Haven Logo" /></Link>
      <li className="nav-item">
        <form className="d-flex" onSubmit={handleSearchSubmit} style={{ position: 'relative' }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          <button className="btn btn-outline-success" type="submit">
            <i className="bi bi-search"></i>
          </button>
          {suggestions.length > 0 && (
            <ul className="list-group position-absolute mt-2" style={{ zIndex: 1000, width: '100%', top: '100%' }}>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className={`list-group-item list-group-item-action ${index === activeSuggestionIndex ? 'active' : ''}`}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </form>
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
            <Link className="nav-link" to="/faq">FAQ</Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-link nav-link" onClick={handleLanguageClick}>
              {language === 'EN' ? 'FR' : 'EN'}
            </button>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              <i className="bi bi-person-circle"></i>
            </Link>
          </li>
        </ul>
      </div>
      {showPopup && (
        <div className="popup">
          Sorry, FR is only available on our discussions page as of right now. We are working on it.
        </div>
      )}
    </nav>
  );
};

export default Navbar;
