import React from 'react';
import '../App.css';
import { fakeBooks, fakeAuthors } from '../Database';
import { Link } from 'react-router-dom';

const Explore = () => {
  const getAuthorById = (authorId) => {
    const author = fakeAuthors.find((author) => author.id === authorId);
    return author ? author.name : 'Unknown Author';
  };

  const randInt = Math.floor(Math.random() * (9 - 1 + 1)) + 1

  return (
    <div className="container">
      <header className="jumbotron my-4">
        <h1 className="display-3">Explore Books</h1>
      </header>
      <div className="row">
        {fakeBooks.slice(0, 1).map((book, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{book.title}</h4>
                <h5 className="card-author">By {getAuthorById(book.authorId)}</h5>
                <p className="card-text">Genre: {book.genre}</p>
                <p className="card-text">Rating: {book.rating}</p>
                <p className="card-text">{book.description}</p>
              </div>
              <div className="card-footer">
                <Link to={`/Book/${book.id}`}>
                    <button className="btn btn-primary">More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 special-card-advanced-search">
            <div className="card-body">
              <h4 className="card-title card-header" align="center">Advanced Search</h4>
              <p className="card-text">
                Use our advanced search tool to find books by genre, author, rating, and more.
              </p>
              <p className="card-text">
                With our recommendation engine, you can get personalized suggestions based on your reading preferences and history.
              </p>
            </div>
            <div className="card-footer">
                <Link to='/AdvancedSearch'>
                  <button className="btn btn-primary">
                    <span style={{ color: "#FFFFFF" }}>
                      Advanced Search
                    </span>
                  </button>
                </Link>
            </div>
          </div>
        </div>
        {fakeBooks.slice(1, 5).map((book, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{book.title}</h4>
                <h5 className="card-author">By {getAuthorById(book.authorId)}</h5>
                <p className="card-text">Genre: {book.genre}</p>
                <p className="card-text">Rating: {book.rating}</p>
                <p className="card-text">{book.description}</p>
              </div>
              <div className="card-footer">
                <Link to={`/Book/${book.id}`}>
                  <button className="btn btn-primary">More</button>
                </Link>  
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
