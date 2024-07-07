import React, { useState, useEffect } from 'react';
import { fakeUsers, fakeBooks, fakeDiscussions } from '../Database';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const user = fakeUsers[0];
const userBooks = fakeBooks.slice(0, 3);
const userDiscussions = fakeDiscussions.slice(0, 3);

const Profile = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState('on');
  const [newBookNotifications, setNewBookNotifications] = useState({
    author1: false,
    author2: false,
    author3: false,
  });
  const [discussionNotifications, setDiscussionNotifications] = useState('on');

  const handleNotificationChange = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
  };

  const handleEmailNotificationChange = (e) => {
    setEmailNotifications(e.target.value);
    handleNotificationChange();
  };

  const handleNewBookNotificationChange = (e) => {
    setNewBookNotifications({ ...newBookNotifications, [e.target.id]: e.target.checked });
    handleNotificationChange();
  };

  const handleDiscussionNotificationChange = (e) => {
    setDiscussionNotifications(e.target.value);
    handleNotificationChange();
  };

  return (
    <div className="container mt-4">
      <div className="jumbotron my-4">
        <h1 className="display-3">Profile</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4" style={{ height: '45%' }}>
            <div className="card-body text-center">
              <h3 className="card-title mt-3">{user.username}</h3>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">
                Bio: A passionate reader and book lover who enjoys exploring various genres and participating in discussions.
              </p>
              <p className="card-text">Location: Bookland, Library City</p>
            </div>
          </div>
          <div className="card" style={{ height: '46%', overflowY: 'auto' }}>
            <div className="card-header">
              <h4>Settings & Notifications</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="emailNotifications">Email Notifications</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="emailNotifications"
                      id="emailOn"
                      value="on"
                      checked={emailNotifications === 'on'}
                      onChange={handleEmailNotificationChange}
                    />
                    <label className="form-check-label" htmlFor="emailOn">
                      On
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="emailNotifications"
                      id="emailOff"
                      value="off"
                      checked={emailNotifications === 'off'}
                      onChange={handleEmailNotificationChange}
                    />
                    <label className="form-check-label" htmlFor="emailOff">
                      Off
                    </label>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="newBookNotifications">New Book Notifications</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="author1"
                      checked={newBookNotifications.author1}
                      onChange={handleNewBookNotificationChange}
                    />
                    <label className="form-check-label" htmlFor="author1">
                      Author 1
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="author2"
                      checked={newBookNotifications.author2}
                      onChange={handleNewBookNotificationChange}
                    />
                    <label className="form-check-label" htmlFor="author2">
                      Author 2
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="author3"
                      checked={newBookNotifications.author3}
                      onChange={handleNewBookNotificationChange}
                    />
                    <label className="form-check-label" htmlFor="author3">
                      Author 3
                    </label>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="discussionNotifications">Discussion Notifications</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="discussionNotifications"
                      id="discussionOn"
                      value="on"
                      checked={discussionNotifications === 'on'}
                      onChange={handleDiscussionNotificationChange}
                    />
                    <label className="form-check-label" htmlFor="discussionOn">
                      On
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="discussionNotifications"
                      id="discussionOff"
                      value="off"
                      checked={discussionNotifications === 'off'}
                      onChange={handleDiscussionNotificationChange}
                    />
                    <label className="form-check-label" htmlFor="discussionOff">
                      Off
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card mb-4" style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <div className="card-header">
              <h4>My Shelf</h4>
            </div>
            <div className="card-body">
              <div className="row">
                {userBooks.map(book => (
                  <div className="col-md-4 mb-3" key={book.id}>
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">{book.description}</p>
                        <p className="card-text"><small className="text-muted">Rating: {book.rating}</small></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="card" style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <div className="card-header">
              <h4>My Discussions</h4>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {userDiscussions.map(discussion => (
                  <li className="list-group-item" key={discussion.id}>
                    <h5>{discussion.topic}</h5>
                    <p>{discussion.message}</p>
                    <p><small className="text-muted">Last Active: {discussion.lastActive}</small></p>
                    <p><small className="text-muted">Posts: {discussion.postsCount}</small></p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {alertVisible && (
        <div className="alert alert-success mt-3" role="alert">
          Notification settings updated successfully!
        </div>
      )}
    </div>
  );
};

export default Profile;
