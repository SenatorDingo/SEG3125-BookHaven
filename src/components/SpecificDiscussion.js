import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fakeDiscussions } from '../Database';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SpecificDiscussion = () => {
  const { id } = useParams();
  const discussion = fakeDiscussions.find(d => d.id === parseInt(id));
  const [newReply, setNewReply] = useState("");

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
            Please try <Link to='/discussions/23'> Discussion #23 </Link>
          </div>
        </div>
      </div>
    );
  }

  const handlePostReply = () => {
    console.log("New reply posted:", newReply);
    setNewReply("");
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
        {discussion.replies.map(reply => (
          <div key={reply.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{reply.username}</h5>
              <p>{reply.message}</p>
              <p><small className="text-muted">{new Date(reply.timestamp).toLocaleString()}</small></p>
            </div>
          </div>
        ))}
        <div className="card mt-3">
          <div className="card-body">
            <h5>Post a Reply</h5>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificDiscussion;
