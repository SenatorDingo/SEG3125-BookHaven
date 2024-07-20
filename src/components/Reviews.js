import React, { useState, useEffect, useRef } from 'react';
import { fakeBooks, fakeReviews, fakeUsers } from '../Database';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const StarRating = ({ rating, setRating }) => {
  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : 'empty'}`}
          onClick={() => handleClick(index)}
          role="button"
          aria-label={`${index + 1} star${index + 1 > 1 ? 's' : ''}`}
          tabIndex="0"
          onKeyDown={(e) => e.key === 'Enter' && handleClick(index)}
          style={{ cursor: 'pointer' }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedBook, setSelectedBook] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({});
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const suggestionsRef = useRef(null);

  const filteredBooks = fakeBooks.filter(book => 
    book.title.toLowerCase().includes(selectedBook.toLowerCase())
  );

  useEffect(() => {
    if (showSuggestions && suggestionsRef.current) {
      suggestionsRef.current.scrollTop = 0;
    }
  }, [showSuggestions]);

  const handleReviewSubmit = () => {
    let formErrors = {};
    if (!selectedBook) formErrors.selectedBook = 'Please select a book.';
    else if (!fakeBooks.some(book => book.title === selectedBook)) {
      formErrors.selectedBook = 'The selected book is not in the database.';
    }
    if (!displayName) formErrors.displayName = 'Display name is required.';
    if (!rating) formErrors.rating = 'Please provide a rating.';
    if (!comment) formErrors.comment = 'Comment cannot be empty.';

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('Review submitted:', { displayName, rating, comment, selectedBook });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      setSelectedBook('');
      setDisplayName('');
      setRating(0);
      setComment('');
      setErrors({});
    }
  };

  const handleBookSelect = (title) => {
    setSelectedBook(title);
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex === filteredBooks.length - 1 ? 0 : prevIndex + 1
      );
    } else if (e.key === 'ArrowUp') {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex === 0 ? filteredBooks.length - 1 : prevIndex - 1
      );
    } else if (e.key === 'Enter') {
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < filteredBooks.length) {
        handleBookSelect(filteredBooks[activeSuggestionIndex].title);
      }
    }
  };

  useEffect(() => {
    if (activeSuggestionIndex >= 0 && activeSuggestionIndex < filteredBooks.length) {
      const activeElement = document.getElementById(`suggestion-${activeSuggestionIndex}`);
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [activeSuggestionIndex, filteredBooks]);

  return (
    <div className="container">
      <div className="jumbotron my-4">
        <h1 className="display-3">Reviews</h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Browse by Book</h3>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search for a Book"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search for a Book"
              />
              <div style={{ maxHeight: '500px', overflowY: 'scroll' }} role="region" aria-live="polite">
                {fakeReviews.filter((review) =>
                  fakeBooks.find((book) => book.id === review.bookId && book.title.toLowerCase().includes(searchTerm.toLowerCase()))
                ).map((review, index) => {
                  const book = fakeBooks.find((book) => book.id === review.bookId);
                  const user = fakeUsers.find((user) => user.id === review.userId);
                  return (
                    <div className="card mb-3" key={index} role="article">
                      <div className="card-body">
                        <h4 className="card-title">{book.title}</h4>
                        <h5 className="card-subtitle mb-2 text-muted">{user.username}</h5>
                        <p className="card-text">{review.comment}</p>
                        <p className="card-text"><strong>Rating: {review.rating}</strong></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Submit a Review</h3>
              <div className="form-group mb-3">
                <label htmlFor="selectBook">Select a book</label>
                <input
                  id="selectBook"
                  type="text"
                  className="form-control"
                  placeholder="Type to search for a book"
                  value={selectedBook}
                  onChange={(e) => {
                    setSelectedBook(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onClick={() => setShowSuggestions(true)}
                  onKeyDown={handleKeyDown}
                  aria-label="Select a book"
                />
                {showSuggestions && filteredBooks.length > 0 && (
                  <ul ref={suggestionsRef} className="list-group" style={{ maxHeight: '200px', overflowY: 'scroll', position: 'absolute', zIndex: 1 }}>
                    {filteredBooks.map((book, index) => (
                      <li
                        key={book.id}
                        id={`suggestion-${index}`}
                        className={`list-group-item ${index === activeSuggestionIndex ? 'active' : ''}`}
                        onClick={() => handleBookSelect(book.title)}
                        style={{ cursor: 'pointer' }}
                      >
                        {book.title}
                      </li>
                    ))}
                  </ul>
                )}
                {errors.selectedBook && <div className="text-danger">{errors.selectedBook}</div>}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="displayName">Display Name</label>
                <input
                  id="displayName"
                  type="text"
                  className="form-control"
                  placeholder="Add a display name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  aria-label="Display Name"
                />
                {errors.displayName && <div className="text-danger">{errors.displayName}</div>}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="rating">Rating</label>
                <StarRating rating={rating} setRating={setRating} />
                {errors.rating && <div className="text-danger">{errors.rating}</div>}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="comment">Your thoughts on this book</label>
                <textarea
                  id="comment"
                  className="form-control"
                  rows="5"
                  placeholder="Write your review here"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  aria-label="Your thoughts on this book"
                ></textarea>
                {errors.comment && <div className="text-danger">{errors.comment}</div>}
              </div>
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleReviewSubmit} aria-label="Submit Review">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showToast && (
        <div className="toast show position-fixed bottom-0 end-0 p-3" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <strong className="me-auto">Review Submitted</strong>
            <button type="button" className="btn-close" onClick={() => setShowToast(false)} aria-label="Close"></button>
          </div>
          <div className="toast-body">
            Your review has been submitted successfully.
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
