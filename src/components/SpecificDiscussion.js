import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fakeDiscussions } from '../Database';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Toast, ToastContainer } from 'react-bootstrap';
import '../App.css';

const SpecificDiscussion = () => {
  const { id } = useParams();
  const discussion = fakeDiscussions.find(d => d.id === parseInt(id));
  const [newReply, setNewReply] = useState("");
  const [replies, setReplies] = useState(discussion ? discussion.replies : []);
  const [editMode, setEditMode] = useState(null);
  const [editReply, setEditReply] = useState("");
  const [error, setError] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const postReplyRef = useRef(null);

  if (!discussion) {
    return <div>Discussion not found</div>;
  }

  if (!discussion.replies) {
    return (
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h2>{discussion.topic}</h2>
            <p>{discussion.message}</p>
            <p><small className="text-muted">Last Active: {discussion.lastActive}</small></p>
            <p><small className="text-muted">Posts: {discussion.postsCount}</small></p>
          </div>
        </div>
        <div className="mt-4">
          <div className="alert alert-warning" role="alert">
            Uh oh! Our discussions page is currently under construction we cannot display this Discussion. <br></br>
            Please try <Link to='/discussions/9001'> Discussion #9001 </Link>
          </div>
        </div>
      </div>
    );
  }

  const handlePostReply = () => {
    if (newReply.trim() === "") {
      setError("Reply message cannot be empty.");
      return;
    }
    const newReplyObj = {
      id: replies.length + 1,
      username: 'reader1',
      message: newReply,
      timestamp: new Date().toISOString()
    };
    setReplies([...replies, newReplyObj]);
    setNewReply("");
    setError("");
    postReplyRef.current.scrollIntoView({ behavior: 'smooth' });
    setToastMessage("Reply posted successfully!");
    setShowToast(true);
  };

  const handleEditReply = (id) => {
    const reply = replies.find(r => r.id === id);
    setEditMode(id);
    setEditReply(reply.message);
  };

  const handleSaveEdit = (id) => {
    if (editReply.trim() === "") {
      setError("Reply message cannot be empty.");
      return;
    }
    setReplies(replies.map(reply => reply.id === id ? { ...reply, message: editReply, timestamp: new Date().toISOString()} : reply));
    setEditMode(null);
    setEditReply("");
    setError("");
    setToastMessage("Reply edited successfully!");
    setShowToast(true);
  };

  const handleDeleteReply = (id) => {
    setReplies(replies.filter(reply => reply.id !== id));
    setToastMessage("Reply deleted successfully!");
    setShowToast(true);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2>{discussion.topic}</h2>
          <p>{discussion.message}</p>
          <p><small className="text-muted">Last Active: {discussion.lastActive}</small></p>
          <p><small className="text-muted">Posts: {discussion.postsCount}</small></p>
        </div>
      </div>
      <div className="mt-4">
        <h4>Replies</h4>
        {replies.map(reply => (
          <div key={reply.id} className="card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">{reply.username}</h5>
                {reply.username === 'reader1' && (
                  <div>
                    <i 
                      className="bi bi-pencil me-2" 
                      role="button" 
                      onClick={() => handleEditReply(reply.id)}
                      style={{ cursor: 'pointer' }}
                    ></i>
                    <i 
                      className="bi bi-trash" 
                      role="button" 
                      onClick={() => handleDeleteReply(reply.id)}
                      style={{ cursor: 'pointer' }}
                    ></i>
                  </div>
                )}
              </div>
              {editMode === reply.id ? (
                <>
                  <textarea
                    className="form-control mb-3"
                    value={editReply}
                    onChange={e => setEditReply(e.target.value)}
                    rows="3"
                    placeholder="Edit your reply here..."
                  />
                  <button className="btn btn-primary me-2" onClick={() => handleSaveEdit(reply.id)}>
                    Save
                  </button>
                  <button className="btn btn-secondary" onClick={() => setEditMode(null)}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p>{reply.message}</p>
                  <p><small className="text-muted">{new Date(reply.timestamp).toLocaleString()}</small></p>
                </>
              )}
            </div>
          </div>
        ))}
        <div ref={postReplyRef} className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">reader1</h5>
            </div>
            <textarea
              className="form-control mb-3"
              value={newReply}
              onChange={e => setNewReply(e.target.value)}
              rows="3"
              placeholder="Write your reply here..."
            />
            <button className="btn btn-primary" onClick={handlePostReply}>
              Post Reply
            </button>
            {error && <p className="text-danger mt-2">{error}</p>}
            <p><small className="text-muted">{new Date().toLocaleString()}</small></p>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default SpecificDiscussion;
