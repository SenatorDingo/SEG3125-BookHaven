import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Explore from './components/Explore';
import Reviews from './components/Reviews';
import Discussions from './components/Discussions';
import Profile from './components/Profile';
import AdvancedSearch from './components/AdvancedSearch';
import BookDetails from './components/BookDetails';
import SpecificDiscussion from './components/SpecificDiscussion';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/AdvancedSearch" element={<AdvancedSearch />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/discussions/:id" element={<SpecificDiscussion />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
