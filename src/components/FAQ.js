import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const FAQ = () => {
  return (
    <div className="container mt-4">
      <div className="jumbotron my-4">
        <h1 className="display-3">Frequently Asked Questions</h1>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I enable notifications?</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Navigate to your profile by clicking on your profile icon in the navbar.</li>
              <li>Go to the settings section of your profile.</li>
              <li>Locate the notification settings and toggle the notification switch to "On".</li>
              <li>Ensure that your browser allows notifications from our website.</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How do I submit a review?</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Go to the 'Reviews' section from the navbar.</li>
              <li>Click on the 'Write a Review' button.</li>
              <li>Fill in the required details such as book title, author, and your review.</li>
              <li>Click on the 'Submit' button to post your review.</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How do I use the advanced search?</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Click on the 'Advanced Search' link in the navbar.</li>
              <li>Fill in the search criteria, such as keywords, author, genre, etc.</li>
              <li>Click the 'Search' button to view refined results.</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How do I search for a discussion?</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Use the search bar at the top of the page.</li>
              <li>Type in keywords related to the discussion topic you are looking for.</li>
              <li>Press 'Enter' to see the search results.</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>How do I search for a review?</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Navigate to the 'Reviews' section from the navbar.</li>
              <li>Use the search bar to enter keywords, book titles, or authors.</li>
              <li>Press 'Enter' to view the search results.</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>How do I contribute to a discussion?</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Go to the 'Discussions' section from the navbar.</li>
              <li>Select a discussion topic that interests you.</li>
              <li>Click on the 'Post a Reply' button.</li>
              <li>Write your contribution and click 'Submit'.</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
