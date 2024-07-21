import React, { useState } from 'react';
import { fakeUsers, fakeBooks, fakeDiscussions } from '../Database';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const user = fakeUsers[0];
const userBooks = fakeBooks.slice(0, 3);
const userDiscussions = fakeDiscussions.slice(0, 3);

const Profile = () => {
  const [showToast, setShowToast] = useState(false);
  const [allNotifications, setAllNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState('on');
  const [newBookNotifications, setNewBookNotifications] = useState({
    author1: false,
    author2: false,
    author3: false,
  });
  const [discussionNotifications, setDiscussionNotifications] = useState('on');

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const handleAllNotificationsToggle = () => {
    setAllNotifications(!allNotifications);
    setEmailNotifications(!allNotifications ? 'off' : 'on');
    setNewBookNotifications({
      author1: !allNotifications ? false : newBookNotifications.author1,
      author2: !allNotifications ? false : newBookNotifications.author2,
      author3: !allNotifications ? false : newBookNotifications.author3,
    });
    setDiscussionNotifications(!allNotifications ? 'off' : 'on');
    handleSave();
  };

  const handleEmailNotificationChange = (e) => {
    setEmailNotifications(e.target.value);
    handleSave();
  };

  const handleNewBookNotificationChange = (e) => {
    setNewBookNotifications({ ...newBookNotifications, [e.target.id]: e.target.checked });
    handleSave();
  };

  const handleDiscussionNotificationChange = (e) => {
    setDiscussionNotifications(e.target.value);
    handleSave();
  };

  return (
    <div className="container mt-4">
      <div className="jumbotron my-4">
        <h1 className="display-3">Profile</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4" style={{ height: '43%' }}>
            <div className="card-body text-center">
              <h3 className="card-title mt-3">{user.username}</h3>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">
                Bio: A passionate reader and book lover who enjoys exploring various genres and participating in discussions.
              </p>
            </div>
          </div>
          <div className="card" style={{ height: '46%' }}>
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4>Settings</h4>
            </div>
            <div className="card-body" style={{ overflowY: 'auto' }}>
              <form>
                <div className="form-group">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="allNotifications"
                    checked={allNotifications}
                    onChange={handleAllNotificationsToggle}
                  />
                  <label htmlFor="allNotifications" className="form-check-label">Turn off all notifications</label>
                </div>
                <div className="form-group mt-3">
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
                      disabled={allNotifications}
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
                      disabled={allNotifications}
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
                      disabled={allNotifications}
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
                      disabled={allNotifications}
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
                      disabled={allNotifications}
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
                      disabled={allNotifications}
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
                      disabled={allNotifications}
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
            <div className="card-header sticky-header">
              <h4>My Shelf</h4>
            </div>
            <div className="card-body">
              <div className="row">
                {userBooks.map(book => (
                  <div className="col-md-4 mb-3" key={book.id}>
                    <div className="card h-100">
                      <div className="card-body">
                        <Link to={`/book/${book.id}`}>
                          <a href="#" className="text-primary">
                            <h5>{book.title}</h5>
                          </a>
                        </Link>
                        <p className="card-text">{book.description}</p>
                        <p className="card-text"><small className="text-muted">Rating: {book.rating}</small></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="card" style={{ maxHeight: '300px' }}>
            <div className="card-header sticky-header">
              <h4>My Discussions</h4>
            </div>
            <div className="card-body" style={{ overflowY: 'auto' }}>
              <ul className="list-group list-group-flush">
                {userDiscussions.map(discussion => (
                  <li className="list-group-item" key={discussion.id}>
                    <Link to={`/discussions/${discussion.id}`}>
                      <a href="#" className="text-primary">
                        <h5>{discussion.topic}</h5>
                      </a>
                    </Link>
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
      <ToastContainer position="bottom-center">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Body>Settings saved successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Profile;
