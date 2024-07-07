import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fakeUsers, fakeReviews } from '../Database';
import '../App.css';
import caroOne from '../resources/caroOne.jpg';
import caroTwo from '../resources/caroTwo.jpg'
import caroThree from '../resources/caroThree.jpg'

const Home = () => {
  return (
    <div className="container col-md-10 home-container-main">
      <div className="carousel-container">
        <Carousel className="my-4" style={{ borderRadius: '10px'}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={caroThree}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={caroOne}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={caroTwo}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <header className="jumbotron jumbotron-home">
          <h1 className="display-3">Welcome to Book Haven!</h1>
        </header>
      </div>
      <div className="row text-center mt-5">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Genres</h4>
              <p className="card-text">Explore different book genres such as Fiction, Non-Fiction, Mystery, Romance, Science Fiction, Fantasy, and more.</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Our Promise</h4>
              <p className="card-text" align="left">We promise a vast collection, curated lists, and personalized recommendations to make your reading experience delightful.<br></br>Try using the Website Help task in our Discussions Page</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Find Your Favorite Book</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Latest Reviews</h4>
              {fakeReviews.slice(0, 2).map((review, index) => (
                <div key={index} className="review mb-3">
                  <div className="d-flex justify-content-between">
                    <h5>{fakeUsers.find(user => user.id === review.userId).username}</h5>
                    <span>{review.rating} stars</span>
                  </div>
                  <p align="left">{review.comment}</p>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">More Reviews</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
