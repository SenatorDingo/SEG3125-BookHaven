import React from 'react';
import { useParams } from 'react-router-dom';
import { fakeBooks, fakeAuthors, fakeReviews, fakeDiscussions, fakeUsers } from '../Database';
import coverImage from '../logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const book = fakeBooks.find(b => b.id === parseInt(id));
  const author = fakeAuthors.find(a => a.id === book.authorId);
  const bookReviews = fakeReviews.filter(review => review.bookId === book.id);
  const randInt = Math.floor(Math.random() * (18 - 1 + 1)) + 1
  const activeDiscussions = fakeDiscussions.slice(randInt, randInt + 1);

  if (!book) {
    return <div>Book not found</div>;
  }

  const ratingsGraph = (
    <div className="ratings-graph">
      <div className='ratings-details'>
        <span>★★★★★ ({Math.floor(book.rating * 16)}%)</span><br></br>
        <span>★★★★☆ ({Math.floor((5 - book.rating) * 16)}%)</span><br></br>
        <span>★★★☆☆ (10%)</span><br></br>
        <span>★★☆☆☆ (5%)</span><br></br>
        <span>★☆☆☆☆ (5%)</span><br></br>
      </div>
      <div className="rating-bar" style={{ width: `${book.rating * 16}%` }}></div>
      <div className="rating-bar" style={{ width: `${(5 - book.rating) * 16}%` }}></div>
      <div className="rating-bar" style={{ width: '10%' }}></div>
      <div className="rating-bar" style={{ width: '5%' }}></div>
      <div className="rating-bar" style={{ width: '5%' }}></div>
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3 h-50" style={{overflowY: 'scroll', minHeight:'50%'}}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <img src={coverImage} alt={book.title} className="img-fluid" />
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
          <div className="card mb-3 h-50" style={{overflowY: 'scroll', minHeight:'50%'}}>
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
          <div className="card mb-3 h-50" style={{overflowY: 'scroll', minHeight:'50%'}}>
            <div className="card-body">
              <h2>Related Discussions</h2>
              {activeDiscussions.length > 0 ? (
                activeDiscussions.map(discussion => (
                  <div key={discussion.id} className="card mb-3">
                    <div className="card-body">
                      <Link to={`/discussions/${discussion.id}`}>
                        <a href="#" className="text-primary"><h5>{discussion.topic}</h5>
                        </a>
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

          <div className="card mb-3 h-50" style={{overflowY: 'scroll', minHeight:'50%'}}>
            <div className="card-body">
              <h2>Ratings Breakdown</h2>
              {ratingsGraph}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
