import React, { useState } from 'react';
import '../App.css';
import { fakeBooks, fakeAuthors } from '../Database';
import { Link } from 'react-router-dom';

const AdvancedSearch = () => {
  const [title, setTitle] = useState('');
  const [authorLastName, setAuthorLastName] = useState('');
  const [rating, setRating] = useState(2.5);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const genres = ['Fiction', 'Mystery', 'Romance', 'Thriller', 'Historical'];
  const languages = ['English', 'French'];

  const getAuthorById = (authorId) => {
    const author = fakeAuthors.find((author) => author.id === authorId);
    return author ? author.name : 'Unknown Author';
  };

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre)
        : [...prevGenres, genre]
    );
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguages((prevLanguages) =>
      prevLanguages.includes(language)
        ? prevLanguages.filter((l) => l !== language)
        : [...prevLanguages, language]
    );
  };

  const filteredBooks = fakeBooks.filter((book) => {
    const bookAuthor = fakeAuthors.find((author) => author.id === book.authorId);
    const matchesTitle = title === '' || book.title.toLowerCase().includes(title.toLowerCase());
    const matchesAuthor =
      authorLastName === '' || bookAuthor.name.toLowerCase().includes(authorLastName.toLowerCase());
    const matchesRating = book.rating >= rating;
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(book.genre);
    const matchesLanguage = selectedLanguages.length === 0 || selectedLanguages.includes(book.language);

    return matchesTitle && matchesAuthor && matchesRating && matchesGenre && matchesLanguage;
  });

  return (
    <div className="container">
      <header className="jumbotron my-4">
        <h1 className="display-3">Advanced Search</h1>
      </header>
      <div className="row">
        <div className="col-lg-3 col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Filters</h4>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="authorLastName">Author Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="authorLastName"
                  value={authorLastName}
                  onChange={(e) => setAuthorLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating</label><br></br>
                <input
                  type="range"
                  className="form-control-range"
                  id="rating"
                  min="1"
                  max="5"
                  step="0.1"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
                <div>Rating: {rating}+</div>
              </div>
              <div className="form-group">
                <label>Genre</label>
                {genres.map((genre) => (
                  <div key={genre} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={genre}
                      checked={selectedGenres.includes(genre)}
                      onChange={() => handleGenreChange(genre)}
                    />
                    <label className="form-check-label">{genre}</label>
                  </div>
                ))}
              </div>
              <div className="form-group">
                <label>Language</label>
                {languages.map((language) => (
                  <div key={language} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={language}
                      checked={selectedLanguages.includes(language)}
                      onChange={() => handleLanguageChange(language)}
                    />
                    <label className="form-check-label">{language}</label>
                  </div>
                ))}
              </div>
              {/* <button className="btn btn-primary mt-2">Search</button> */}
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 mb-4">
          <div className="card h-100">
            <div className="card-body results-container">
              <h4 className="card-title">Results</h4>
              <div className="table-container">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Book</th>
                      <th>Author</th>
                      <th>Rating</th>
                      <th>More</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBooks.map((book, index) => (
                      <tr key={index}>
                        <td>{book.title}</td>
                        <td>{getAuthorById(book.authorId)}</td>
                        <td>{book.rating}</td>
                          <td>
                          <Link to={`/book/${book.id}`}>

                            <button className="btn btn-primary btn-sm">More</button>
                            </Link>

                          </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
