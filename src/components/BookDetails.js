import React from 'react';
import { useParams } from 'react-router-dom';
import { fakeBooks, fakeAuthors, fakeReviews, fakeDiscussions, fakeUsers } from '../Database';
import coverImage from '../logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const BookDetails = () => {
  const { id } = useParams();
  const book = fakeBooks.find(b => b.id === parseInt(id));
  const author = fakeAuthors.find(a => a.id === book.authorId);
  const bookReviews = fakeReviews.filter(review => review.bookId === book.id);
  const randInt = Math.floor(Math.random() * (18 - 1 + 1)) + 1;
  const activeDiscussions = fakeDiscussions.slice(randInt, randInt + 1);

  if (!book) {
    return <div>Book not found</div>;
  }

  const ratingsBreakdown = [
    { percentage: Math.floor(book.rating * 16), color: 'success', label: '★★★★★' },
    { percentage: Math.floor((5 - book.rating) * 16), color: 'info', label: '★★★★☆' },
    { percentage: 10, color: 'warning', label: '★★★☆☆' },
    { percentage: 5, color: 'danger', label: '★★☆☆☆' },
    { percentage: 5, color: 'danger', label: '★☆☆☆☆' },
  ];

  const ratingsGraph = (
    <div className="ratings-graph">
      {ratingsBreakdown.map((rating, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={<Tooltip id={`tooltip-${index}`}>{rating.label} ({rating.percentage}%)</Tooltip>}
        >
          <ProgressBar
            variant={rating.color}
            now={rating.percentage}
            className="mb-2"
            style={{ cursor: 'pointer' }}
            aria-label={`${rating.label} with ${rating.percentage}%`}
          />
        </OverlayTrigger>
      ))}
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3 h-50" style={{ overflowY: 'scroll', minHeight: '50%' }}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <img src={coverImage} alt={book.title} className="img-fluid" aria-label={`Cover image of ${book.title}`} />
                </div>
                <div className="col-md-8">
                  <h1>{book.title}</h1>
                  <h3>by {author.name}</h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <p align='center'><strong>Genre:</strong> {book.genre}</p>
                  <p align='center'><strong>Rating:</strong> {book.rating}</p>
                  <p>{book.description}</p>
                  <p><strong>About the Author:</strong> {author.biography}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 h-50" style={{ overflowY: 'scroll', minHeight: '50%' }}>
            <div className="card-body">
              <h2>Reviews</h2>
              {bookReviews.length > 0 ? (
                bookReviews.map(review => (
                  <div key={review.id} className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">{fakeUsers.find(user => user.id === review.userId).username}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{review.rating} stars</h6>
                      <p className="card-text">{review.comment}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No reviews yet</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-3 h-50" style={{ overflowY: 'scroll', minHeight: '50%' }}>
            <div className="card-body">
              <h2>
                Ratings Breakdown{' '}
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-ratings">Hover over the bars to see more details.</Tooltip>}
                >
                  <i className="bi bi-info-circle" style={{ cursor: 'pointer' }} aria-label="Information about the ratings breakdown"></i>
                </OverlayTrigger>
              </h2>
              {ratingsGraph}
              <div className="additional-info mt-4">
                <p><strong>Total Ratings:</strong> 500</p>
                <p><strong>Average Rating:</strong> {book.rating}</p>
                
              </div>
            </div>
          </div>

          <div className="card mb-3 h-50" style={{ overflowY: 'scroll', minHeight: '50%' }}>
            <div className="card-body">
              <h2>Related Discussions</h2>
              {activeDiscussions.length > 0 ? (
                activeDiscussions.map(discussion => (
                  <div key={discussion.id} className="card mb-3">
                    <div className="card-body">
                      <Link to={`/discussions/${discussion.id}`}>
                        <h5 className="text-primary">{discussion.topic}</h5>
                      </Link>
                      <p className="card-text">{discussion.message}</p>
                      <p className="card-text"><small className="text-muted">Last active: {discussion.lastActive}</small></p>
                      <p className="card-text"><small className="text-muted">Posts: {discussion.postsCount}</small></p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No related discussions</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
