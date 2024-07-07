import React, { useState } from 'react';
import { fakeDiscussions, fakeUsers } from '../Database';
import { Link } from 'react-router-dom';

const Discussions = () => {
  const [title, setTitle] = useState('');
  const [timeRange, setTimeRange] = useState('Any Time');
  const [activity, setActivity] = useState('All threads');
  const [selectedTypes, setSelectedTypes] = useState([]);

  const discussionTypes = ['Website Help', 'Book Club', 'Question', 'General Discussion', 'Convention Planning', 'Critical Review', 'Blog'];

  const handleTypeChange = (type) => {
    setSelectedTypes((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((t) => t !== type)
        : [...prevTypes, type]
    );
  };

  const filteredDiscussions = fakeDiscussions.filter((discussion) => {
    const matchesTitle = title === '' || discussion.topic.toLowerCase().includes(title.toLowerCase());
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(discussion.discussionType);

    return matchesTitle && matchesType;
  });

  return (
    <div className="container">
      <header className="jumbotron my-4">
        <h1 className="display-3">Discussions</h1>
      </header>
      <div className="row">
        <div className="col-lg-3 col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Filter Discussions</h4>
              <div className="form-group">
                <label htmlFor="title">Discussion Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="timeRange">Time Range</label>
                <select
                  className="form-control"
                  id="timeRange"
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                >
                  <option>Any Time</option>
                  <option>Last 24 Hours</option>
                  <option>Last Week</option>
                  <option>Last Month</option>
                </select>
              </div>
              <div className="form-group">
                <label>Activity</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="activity"
                    value="All threads"
                    checked={activity === 'All threads'}
                    onChange={(e) => setActivity(e.target.value)}
                  />
                  <label className="form-check-label">All threads</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="activity"
                    value="Active threads only"
                    checked={activity === 'Active threads only'}
                    onChange={(e) => setActivity(e.target.value)}
                  />
                  <label className="form-check-label">Active threads only</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="activity"
                    value="Your threads only"
                    checked={activity === 'Your threads only'}
                    onChange={(e) => setActivity(e.target.value)}
                  />
                  <label className="form-check-label">Your threads only</label>
                </div>
              </div>
              <div className="form-group">
                <label>Discussion Type</label>
                {discussionTypes.map((type) => (
                  <div key={type} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={type}
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeChange(type)}
                    />
                    <label className="form-check-label">{type}</label>
                  </div>
                ))}
              </div>
              {/*<button className="btn btn-primary mt-2">Search</button>*/}
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 mb-4">
          <div className="card h-100">
            <div className="card-body" style={{ maxHeight: '500px', overflowY: 'auto' }}>
              <h4 className="card-title">Active Threads</h4>
              {filteredDiscussions.map((discussion) => (
                <div key={discussion.id} className="mb-3">
                  <h5 className="card-title">
                    <Link to={`/discussions/${discussion.id}`}>
                      <a href="#" className="text-primary">{discussion.topic}</a>
                    </Link>  
                  </h5>
                  <p>Last Active: {discussion.lastActive} &nbsp; | &nbsp; {discussion.postsCount} Posts &nbsp; | &nbsp; {discussion.discussionType}</p>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussions;
