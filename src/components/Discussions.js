import React, { useState, useContext } from 'react';
import { fakeDiscussions, fakeUsers } from '../Database';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const Discussions = () => {
  const [title, setTitle] = useState('');
  const [timeRange, setTimeRange] = useState('Any Time');
  const [activity, setActivity] = useState('All threads');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [languageFilter, setLanguageFilter] = useState('All Languages');
  const { language } = useContext(LanguageContext);

  const discussionTypes = [
    { en: 'Website Help', fr: "Aide au site Web" },
    { en: 'Book Club', fr: "Club de lecture" },
    { en: 'General Discussion', fr: "Discussion générale" },
    { en: 'Convention Planning', fr: "Planification de la convention" },
    { en: 'Critical Review', fr: "Critique" },
    { en: 'Blog', fr: "Blog" }
  ];

  const handleTypeChange = (type) => {
    setSelectedTypes((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((t) => t !== type)
        : [...prevTypes, type]
    );
  };

  const getTimeFilteredDiscussions = (discussions) => {
    const now = new Date();
    return discussions.filter((discussion) => {
      const lastActiveDate = new Date(discussion.lastActive);
      switch (timeRange) {
        case 'Last 24 Hours' || "Dernières 24 heures":
          return (now - lastActiveDate) <= 24 * 60 * 60 * 1000;
        case 'Last Week' || "La semaine dernière":
          return (now - lastActiveDate) <= 7 * 24 * 60 * 60 * 1000;
        case 'Last Month' || "Le mois dernier":
          return (now - lastActiveDate) <= 30 * 24 * 60 * 60 * 1000;
        default:
          return true;
      }
    });
  };

  const getLanguageFilteredDiscussions = (discussions) => {
    return discussions.filter((discussion) => {
      if (languageFilter === 'English only') return discussion.id < 500;
      if (languageFilter === 'French only') return discussion.id >= 500;
      return true;
    });
  };

  const sortDiscussionsByLanguage = (discussions) => {
    if (language === 'fr') {
      return discussions.sort((a, b) => {
        if (a.id >= 500 && b.id < 500) return -1;
        if (a.id < 500 && b.id >= 500) return 1;
        return 0;
      });
    }
    return discussions;
  };

  const filteredDiscussions = getTimeFilteredDiscussions(fakeDiscussions)
    .filter((discussion) => {
      const matchesTitle = title === '' || discussion.topic.toLowerCase().includes(title.toLowerCase());
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(discussion.discussionType);

      return matchesTitle && matchesType;
    });

  const displayedDiscussions = sortDiscussionsByLanguage(getLanguageFilteredDiscussions(filteredDiscussions));

  const labels = {
    en: {
      header: "Discussions",
      filterTitle: "Filter Discussions",
      discussionTitle: "Discussion Title",
      timeRange: "Time Range",
      anyTime: "Any Time",
      last24Hours: "Last 24 Hours",
      lastWeek: "Last Week",
      lastMonth: "Last Month",
      activity: "Activity",
      allThreads: "All threads",
      activeThreads: "Active threads only",
      discussionType: "Discussion Type",
      search: "Search",
      activeThreadsTitle: "Active Threads",
      lastActive: "Last Active",
      postsCount: "Posts",
      languageFilter: "Language",
      allLanguages: "All Languages",
      englishOnly: "English only",
      frenchOnly: "French only"
    },
    fr: {
      header: "Discussions",
      filterTitle: "Filtrer les discussions",
      discussionTitle: "Titre de la discussion",
      timeRange: "Période",
      anyTime: "Tout temps",
      last24Hours: "Dernières 24 heures",
      lastWeek: "La semaine dernière",
      lastMonth: "Le mois dernier",
      activity: "Activité",
      allThreads: "Tous les fils",
      activeThreads: "Fils actifs uniquement",
      discussionType: "Type de discussion",
      search: "Rechercher",
      activeThreadsTitle: "Fils actifs",
      lastActive: "Dernière activité",
      postsCount: "Messages",
      languageFilter: "Langue",
      allLanguages: "Toutes les langues",
      englishOnly: "Anglais uniquement",
      frenchOnly: "Français uniquement"
    }
  };

  const lang = language.toLowerCase();

  return (
    <div className="container">
      <header className="jumbotron my-4">
        <h1 className="display-3">{labels[lang].header}</h1>
      </header>
      <div className="row">
        <div className="col-lg-3 col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">{labels[lang].filterTitle}</h4>
              <div className="form-group">
                <label htmlFor="title">{labels[lang].discussionTitle}</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="timeRange">{labels[lang].timeRange}</label>
                <select
                  className="form-control"
                  id="timeRange"
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                >
                  <option>{labels[lang].anyTime}</option>
                  <option>{labels[lang].last24Hours}</option>
                  <option>{labels[lang].lastWeek}</option>
                  <option>{labels[lang].lastMonth}</option>
                </select>
              </div>
              {/*
              <div className="form-group">
                <label>{labels[lang].activity}</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="activity"
                    value="All threads"
                    checked={activity === 'All threads'}
                    onChange={(e) => setActivity(e.target.value)}
                  />
                  <label className="form-check-label">{labels[lang].allThreads}</label>
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
                  <label className="form-check-label">{labels[lang].activeThreads}</label>
                </div>
              </div>
              */}
              <div className="form-group">
                <label>{labels[lang].discussionType}</label>
                {discussionTypes.map((type) => (
                  <div key={type.en} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={type[lang]}
                      checked={selectedTypes.includes(type.en)}
                      onChange={() => handleTypeChange(type.en)}
                    />
                    <label className="form-check-label">{type[lang]}</label>
                  </div>
                ))}
              </div>
              <div className="form-group">
                <label>{labels[lang].languageFilter}</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="languageFilter"
                    value="All Languages"
                    checked={languageFilter === 'All Languages'}
                    onChange={(e) => setLanguageFilter(e.target.value)}
                  />
                  <label className="form-check-label">{labels[lang].allLanguages}</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="languageFilter"
                    value="English only"
                    checked={languageFilter === 'English only'}
                    onChange={(e) => setLanguageFilter(e.target.value)}
                  />
                  <label className="form-check-label">{labels[lang].englishOnly}</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="languageFilter"
                    value="French only"
                    checked={languageFilter === 'French only'}
                    onChange={(e) => setLanguageFilter(e.target.value)}
                  />
                  <label className="form-check-label">{labels[lang].frenchOnly}</label>
                </div>
              </div>
              {/*<button className="btn btn-primary mt-2">{labels[lang].search}</button>*/}
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 mb-4">
          <div className="card h-100">
            <div className="card-body" style={{ maxHeight: '500px', overflowY: 'auto' }}>
              <h4 className="card-title">{labels[lang].activeThreadsTitle}</h4>
              {displayedDiscussions.map((discussion) => (
                <div key={discussion.id} className="mb-3">
                  <h5 className="card-title">
                    <Link to={`/discussions/${discussion.id}`}>
                      <a href="#" className="text-primary">{discussion.topic}</a>
                    </Link>
                  </h5>
                  <p>{labels[lang].lastActive}: {discussion.lastActive} &nbsp; | &nbsp; {discussion.postsCount} {labels[lang].postsCount} &nbsp; | &nbsp; {discussion.discussionType}</p>
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
