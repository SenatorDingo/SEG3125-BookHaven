import React, { useState } from 'react';
import { fakeBooks, fakeReviews, fakeUsers } from '../Database';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedBook, setSelectedBook] = useState('');

  const filteredReviews = fakeReviews.filter((review) =>
    fakeBooks.find((book) => book.id === review.bookId && book.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleReviewSubmit = () => {
    console.log('Review submitted:', { displayName, rating, comment, selectedBook });
  };

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
              />
              <div style={{ maxHeight: '500px', overflowY: 'scroll' }}>
                {filteredReviews.map((review, index) => {
                  const book = fakeBooks.find((book) => book.id === review.bookId);
                  const user = fakeUsers.find((user) => user.id === review.userId);
                  return (
                    <div className="card mb-3" key={index}>
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
                <label>Select a book</label>
                <select className="form-control" value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)}>
                  <option value="">Choose...</option>
                  {fakeBooks.map((book) => (
                    <option key={book.id} value={book.id}>{book.title}</option>
                  ))}
                </select>
              </div>
              <div className="form-group mb-3">
                <label>Display Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a display name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label>Rating</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Rate out of 5"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  max={5}
                  min={0}
                />
              </div>
              <div className="form-group mb-3">
                <label>Your thoughts on this book</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your review here"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <span style={{align: 'center'}}>
                <button className="btn btn-primary" onClick={handleReviewSubmit}>Submit</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
