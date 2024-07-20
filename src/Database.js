import bookImage from './logo.png'

export const fakeBooks = [
    { id: 1, title: 'The Enchanted Forest', authorId: 1, genre: 'Fantasy', rating: 4.5, description: 'A magical journey through an enchanted forest.', coverImage:'./logo.png' },
    { id: 2, title: 'Mystery of the Lost City', authorId: 2, genre: 'Mystery', rating: 4.0, description: 'Uncover the secrets of a long-lost city.' },
    { id: 3, title: 'Journey to the Stars', authorId: 3, genre: 'Sci-Fi', rating: 4.8, description: 'An epic voyage across the universe.' },
    { id: 4, title: 'The Love Chronicles', authorId: 4, genre: 'Romance', rating: 4.2, description: 'A heartwarming tale of love and relationships.' },
    { id: 5, title: 'Adventures in Wonderland', authorId: 5, genre: 'Adventure', rating: 4.7, description: 'Join the adventures in a whimsical wonderland.' },
    { id: 6, title: 'Haunted Mansion', authorId: 6, genre: 'Horror', rating: 4.1, description: 'A spine-chilling horror story set in a haunted mansion.' },
    { id: 7, title: 'The Great War', authorId: 7, genre: 'Historical', rating: 3.9, description: 'A detailed account of the events of the Great War.' },
    { id: 8, title: 'Cooking with Love', authorId: 8, genre: 'Cooking', rating: 4.6, description: 'Delicious recipes to cook with love.' },
    { id: 9, title: 'Tech Innovations', authorId: 9, genre: 'Technology', rating: 4.3, description: 'Explore the latest innovations in technology.' },
    { id: 10, title: 'The Art of Zen', authorId: 10, genre: 'Self-help', rating: 4.7, description: 'A guide to achieving inner peace and zen.' },
    { id: 11, title: 'The Secret Garden', authorId: 11, genre: 'Fantasy', rating: 4.4, description: 'A beautiful story set in a secret garden.' },
    { id: 12, title: 'Detective Diaries', authorId: 12, genre: 'Mystery', rating: 4.5, description: 'Follow the thrilling cases of a detective.' },
    { id: 13, title: 'Space Odyssey', authorId: 13, genre: 'Sci-Fi', rating: 4.9, description: 'An epic sci-fi journey through space.' },
    { id: 14, title: 'Heartfelt Poems', authorId: 14, genre: 'Poetry', rating: 4.1, description: 'A collection of heartfelt and touching poems.' },
    { id: 15, title: 'Epic Journeys', authorId: 15, genre: 'Adventure', rating: 4.8, description: 'Embark on epic journeys across the world.' },
];

export const fakeUsers = [
    { id: 1, username: 'reader1', email: 'reader1@example.com' },
    { id: 2, username: 'booklover2', email: 'booklover2@example.com' },
    { id: 3, username: 'storyfan3', email: 'storyfan3@example.com' },
    { id: 4, username: 'novelenthusiast4', email: 'novelenthusiast4@example.com' },
    { id: 5, username: 'bibliophile5', email: 'bibliophile5@example.com' },
    { id: 6, username: 'litlover6', email: 'litlover6@example.com' },
    { id: 7, username: 'pageturner7', email: 'pageturner7@example.com' },
    { id: 8, username: 'fictionfan8', email: 'fictionfan8@example.com' },
    { id: 9, username: 'bookworm9', email: 'bookworm9@example.com' },
    { id: 10, username: 'literaturebuff10', email: 'literaturebuff10@example.com' },
    { id: 11, username: 'readingaddict11', email: 'readingaddict11@example.com' },
    { id: 12, username: 'novelbuff12', email: 'novelbuff12@example.com' },
    { id: 13, username: 'storylover13', email: 'storylover13@example.com' },
    { id: 14, username: 'fictionenthusiast14', email: 'fictionenthusiast14@example.com' },
    { id: 15, username: 'literaturelover15', email: 'literaturelover15@example.com' },
];

export const fakeAuthors = [
    { id: 1, name: 'John Smith', biography: 'John Smith is a fantasy author known for his vivid imagination.' },
    { id: 2, name: 'Jane Doe', biography: 'Jane Doe writes mystery novels that keep readers on the edge of their seats.' },
    { id: 3, name: 'Robert Brown', biography: 'Robert Brown is a sci-fi author who explores the far reaches of space.' },
    { id: 4, name: 'Emily White', biography: 'Emily White writes romance novels that touch the heart.' },
    { id: 5, name: 'Michael Green', biography: 'Michael Green is an adventure author who takes readers on wild journeys.' },
    { id: 6, name: 'Sarah Black', biography: 'Sarah Black writes horror novels that send chills down your spine.' },
    { id: 7, name: 'William Gray', biography: 'William Gray is a historical author who brings the past to life.' },
    { id: 8, name: 'Laura Blue', biography: 'Laura Blue is a cooking author who shares delicious recipes.' },
    { id: 9, name: 'David Red', biography: 'David Red writes about the latest tech innovations.' },
    { id: 10, name: 'Sophia Gold', biography: 'Sophia Gold is a self-help author who helps readers find peace.' },
    { id: 11, name: 'Henry Purple', biography: 'Henry Purple is a fantasy author known for his magical worlds.' },
    { id: 12, name: 'Olivia Orange', biography: 'Olivia Orange writes mystery novels with unexpected twists.' },
    { id: 13, name: 'James Yellow', biography: 'James Yellow is a sci-fi author who explores the unknown.' },
    { id: 14, name: 'Isabella Pink', biography: 'Isabella Pink writes poetry that captures the soul.' },
    { id: 15, name: 'Alexander Blue', biography: 'Alexander Blue is an adventure author who explores new frontiers.' },
];

export const fakeDiscussions = [
  {
    id: 23,
    topic: "How to set up notifications",
    message: "I would like to receive notifications when new books from my favorite authors are available or when there are new replies to my discussions. How can I set this up?",
    lastActive: "2024-07-07",
    postsCount: 5,
    discussionType: "Website Help",
    replies: [
      { id: 1, username: "Admin", message: "To set up notifications, go to your profile settings and use the Setting and Notifications section. Choose the types of notifications you would like to receive. You can choose to receive notifications for new books, discussion replies, and more.", timestamp: "2024-07-07T10:00:00Z" },
      { id: 2, username: "BookLover123", message: "I found it really helpful to enable notifications for discussion replies. Keeps me updated without having to constantly check the site.", timestamp: "2024-07-07T10:30:00Z" },
      { id: 3, username: "JaneDoe", message: "Is there a way to get notifications for new book releases only?", timestamp: "2024-07-07T11:00:00Z" },
      { id: 4, username: "Admin", message: "Yes, you can customize your notification settings to receive alerts for new book releases only. Just go to your profile settings and select 'New Book Releases' under notification preferences.", timestamp: "2024-07-07T11:30:00Z" }
    ]
  },
  { id: 1, topic: 'Favorite Fantasy Books', userId: 1, message: 'Let\'s discuss our favorite fantasy books!', lastActive: '2024/07/06', postsCount: 12, discussionType: 'Book Club', replies: [{ id: 1, username: "Reader1", message: "My favorite is 'The Hobbit'.", timestamp: "2024-07-06T08:00:00Z" }, { id: 2, username: "Bookworm", message: "I love 'Harry Potter' series.", timestamp: "2024-07-06T09:00:00Z" }, { id: 3, username: "FantasyFan", message: "Have you read 'The Name of the Wind'?", timestamp: "2024-07-06T10:00:00Z" }] },
  { id: 2, topic: 'Best Mystery Novels', userId: 2, message: 'What are the best mystery novels you\'ve read?', lastActive: '2024/07/05', postsCount: 8, discussionType: 'General Discussion', replies: [{ id: 1, username: "Detective", message: "I enjoyed 'Gone Girl'.", timestamp: "2024-07-05T08:00:00Z" }, { id: 2, username: "Sleuth", message: "Check out 'The Girl with the Dragon Tattoo'.", timestamp: "2024-07-05T09:00:00Z" }] },
  { id: 3, topic: 'Top Sci-Fi Reads', userId: 3, message: 'Share your top sci-fi reads!', lastActive: '2024/07/04', postsCount: 15, discussionType: 'General Discussion', replies: [{ id: 1, username: "SciFiLover", message: "'Dune' is a classic.", timestamp: "2024-07-04T08:00:00Z" }, { id: 2, username: "FutureGeek", message: "'Neuromancer' is a must-read.", timestamp: "2024-07-04T09:00:00Z" }] },
  { id: 4, topic: 'Romantic Stories', userId: 4, message: 'Discuss the best romantic stories.', lastActive: '2024/07/03', postsCount: 5, discussionType: 'Critical Review', replies: [{ id: 1, username: "RomanticReader", message: "I adore 'Pride and Prejudice'.", timestamp: "2024-07-03T08:00:00Z" }, { id: 2, username: "LoveBooks", message: "'The Notebook' is so touching.", timestamp: "2024-07-03T09:00:00Z" }] },
  { id: 5, topic: 'Adventure Tales', userId: 5, message: 'What are the best adventure tales?', lastActive: '2024/07/02', postsCount: 9, discussionType: 'General Discussion', replies: [{ id: 1, username: "Adventurer", message: "'Treasure Island' is great!", timestamp: "2024-07-02T08:00:00Z" }, { id: 2, username: "Explorer", message: "'Into the Wild' is an incredible story.", timestamp: "2024-07-02T09:00:00Z" }] },
  { id: 6, topic: 'Scariest Horror Books', userId: 6, message: 'Share the scariest horror books you\'ve read.', lastActive: '2024/07/01', postsCount: 11, discussionType: 'General Discussion', replies: [{ id: 1, username: "HorrorFan", message: "'The Shining' gave me chills.", timestamp: "2024-07-01T08:00:00Z" }, { id: 2, username: "SpookyReader", message: "'It' by Stephen King is terrifying.", timestamp: "2024-07-01T09:00:00Z" }] },
  { id: 7, topic: 'Historical Novels', userId: 7, message: 'Discuss the best historical novels.', lastActive: '2024/07/06', postsCount: 6, discussionType: 'Book Club', replies: [{ id: 1, username: "HistoryBuff", message: "'The Book Thief' is beautifully written.", timestamp: "2024-07-06T08:00:00Z" }, { id: 2, username: "PastReader", message: "'All the Light We Cannot See' is amazing.", timestamp: "2024-07-06T09:00:00Z" }] },
  { id: 8, topic: 'Cooking Book Recommendations', userId: 8, message: 'Share your favorite cooking books.', lastActive: '2024/07/05', postsCount: 4, discussionType: 'Blog', replies: [{ id: 1, username: "ChefMaster", message: "'Joy of Cooking' is my go-to.", timestamp: "2024-07-05T08:00:00Z" }, { id: 2, username: "Foodie", message: "'Salt, Fat, Acid, Heat' is fantastic.", timestamp: "2024-07-05T09:00:00Z" }] },
  { id: 9, topic: 'Tech Books', userId: 9, message: 'Discuss the latest tech books.', lastActive: '2024/07/04', postsCount: 7, discussionType: 'General Discussion', replies: [{ id: 1, username: "Techie", message: "'Clean Code' is essential for developers.", timestamp: "2024-07-04T08:00:00Z" }, { id: 2, username: "Coder", message: "'The Pragmatic Programmer' is a classic.", timestamp: "2024-07-04T09:00:00Z" }] },
  { id: 10, topic: 'Self-Help Books', userId: 10, message: 'What are the best self-help books?', lastActive: '2024/07/03', postsCount: 10, discussionType: 'General Discussion', replies: [{ id: 1, username: "Motivated", message: "'Atomic Habits' changed my life.", timestamp: "2024-07-03T08:00:00Z" }, { id: 2, username: "SelfHelper", message: "'The Power of Now' is very enlightening.", timestamp: "2024-07-03T09:00:00Z" }] },
  { id: 11, topic: 'Fantasy World Building', userId: 11, message: 'Discuss fantasy world-building tips.', lastActive: '2024/07/02', postsCount: 8, discussionType: 'Convention Planning', replies: [{ id: 1, username: "WorldBuilder", message: "Start with a map and develop the history.", timestamp: "2024-07-02T08:00:00Z" }, { id: 2, username: "FantasyWriter", message: "Focus on the culture and languages.", timestamp: "2024-07-02T09:00:00Z" }] },
  { id: 12, topic: 'Mystery Plot Twists', userId: 12, message: 'Share the best mystery plot twists.', lastActive: '2024/07/01', postsCount: 9, discussionType: 'General Discussion', replies: [{ id: 1, username: "MysteryFan", message: "'The Silent Patient' has a shocking twist.", timestamp: "2024-07-01T08:00:00Z" }, { id: 2, username: "TwistLover", message: "'Gone Girl' kept me guessing.", timestamp: "2024-07-01T09:00:00Z" }] },
  { id: 13, topic: 'Sci-Fi Future Predictions', userId: 13, message: 'What future predictions do you love in sci-fi?', lastActive: '2024/07/06', postsCount: 13, discussionType: 'General Discussion', replies: [{ id: 1, username: "SciFiSeer", message: "I love the predictions in '1984'.", timestamp: "2024-07-06T08:00:00Z" }, { id: 2, username: "FutureThinker", message: "'Brave New World' has some interesting ideas.", timestamp: "2024-07-06T09:00:00Z" }] },
  { id: 14, topic: 'Poetry Appreciation', userId: 14, message: 'Discuss your favorite poems and poets.', lastActive: '2024/07/05', postsCount: 5, discussionType: 'Blog', replies: [{ id: 1, username: "PoetLover", message: "I adore the works of Rumi.", timestamp: "2024-07-05T08:00:00Z" }, { id: 2, username: "VerseReader", message: "Emily Dickinson's poems are my favorite.", timestamp: "2024-07-05T09:00:00Z" }] },
  { id: 15, topic: 'Adventure Locations', userId: 15, message: 'Share the best adventure book locations.', lastActive: '2024/07/04', postsCount: 6, discussionType: 'General Discussion', replies: [{ id: 1, username: "Explorer", message: "The Amazon rainforest in 'The Lost City of Z'.", timestamp: "2024-07-04T08:00:00Z" }, { id: 2, username: "Traveler", message: "Antarctica in 'Endurance' by Alfred Lansing.", timestamp: "2024-07-04T09:00:00Z" }] },
  { id: 16, topic: 'Fantasy Creatures', userId: 1, message: 'Discuss your favorite fantasy creatures.', lastActive: '2024/07/03', postsCount: 12, discussionType: 'Convention Planning', replies: [{ id: 1, username: "FantasyFan", message: "I love dragons, especially in 'The Hobbit'.", timestamp: "2024-07-03T08:00:00Z" }, { id: 2, username: "CreatureLover", message: "Unicorns are magical and fascinating.", timestamp: "2024-07-03T09:00:00Z" }] },
  { id: 17, topic: 'Mystery Authors', userId: 2, message: 'Who are your favorite mystery authors?', lastActive: '2024/07/02', postsCount: 14, discussionType: 'General Discussion', replies: [{ id: 1, username: "MysteryReader", message: "Agatha Christie is the queen of mystery.", timestamp: "2024-07-02T08:00:00Z" }, { id: 2, username: "SleuthFan", message: "I enjoy the works of Arthur Conan Doyle.", timestamp: "2024-07-02T09:00:00Z" }] },
  { id: 18, topic: 'Sci-Fi Technologies', userId: 3, message: 'What are the coolest sci-fi technologies?', lastActive: '2024/07/01', postsCount: 8, discussionType: 'General Discussion', replies: [{ id: 1, username: "TechLover", message: "I love the concept of the matrix in 'The Matrix'.", timestamp: "2024-07-01T08:00:00Z" }, { id: 2, username: "FutureGadget", message: "Teleportation in 'Star Trek' is amazing.", timestamp: "2024-07-01T09:00:00Z" }] },
  { id: 19, topic: 'Romantic Quotes', userId: 4, message: 'Share your favorite romantic quotes.', lastActive: '2024/07/06', postsCount: 3, discussionType: 'Critical Review', replies: [{ id: 1, username: "RomanticSoul", message: "'You had me at hello.' - Jerry Maguire.", timestamp: "2024-07-06T08:00:00Z" }, { id: 2, username: "LoveQuotes", message: "'I wish I knew how to quit you.' - Brokeback Mountain.", timestamp: "2024-07-06T09:00:00Z" }] },
  { id: 20, topic: 'Adventure Gear', userId: 5, message: 'Discuss the best gear for adventure books.', lastActive: '2024/07/05', postsCount: 10, discussionType: 'General Discussion', replies: [{ id: 1, username: "GearHead", message: "A good backpack is essential.", timestamp: "2024-07-05T08:00:00Z" }, { id: 2, username: "Traveler", message: "Don't forget a reliable pair of hiking boots.", timestamp: "2024-07-05T09:00:00Z" }] },
  { id: 21, topic: "How to Use Book Haven", message: "This discussion covers the basics of how to navigate and use the features of Book Haven.", lastActive: "2024-07-07", postsCount: 15, discussionType: "Website Help", replies: [{ id: 1, username: "Admin", message: "Start with the homepage and explore the various sections.", timestamp: "2024-07-07T08:00:00Z" }, { id: 2, username: "User1", message: "The FAQ section is really helpful.", timestamp: "2024-07-07T09:00:00Z" }] },
  { id: 22, topic: "Troubleshooting Login Issues", message: "Discuss common login issues and how to resolve them.", lastActive: "2024-07-07", postsCount: 8, discussionType: "Website Help", replies: [{ id: 1, username: "Support", message: "Try resetting your password.", timestamp: "2024-07-07T08:00:00Z" }, { id: 2, username: "User2", message: "Clearing your browser cache might help.", timestamp: "2024-07-07T09:00:00Z" }] },
  {
    id: 501,
    topic: "Meilleures pratiques pour la gestion des clubs de lecture",
    message: "Quelles sont les meilleures pratiques pour gérer un club de lecture?",
    lastActive: "2024-07-10",
    postsCount: 12,
    discussionType: "Club de lecture",
    replies: [
      { id: 1, username: "Lecteur1", message: "Planifiez les réunions à l'avance.", timestamp: "2024-07-10T08:00:00Z" },
      { id: 2, username: "Lecteur2", message: "Choisissez des livres intéressants pour tous les membres.", timestamp: "2024-07-10T09:00:00Z" }
    ]
  },
  {
    id: 502,
    topic: "Aide au site Web: Problèmes de connexion",
    message: "Je n'arrive pas à me connecter à mon compte.",
    lastActive: "2024-07-09",
    postsCount: 8,
    discussionType: "Aide au site Web",
    replies: [
      { id: 1, username: "Support", message: "Essayez de réinitialiser votre mot de passe.", timestamp: "2024-07-09T08:00:00Z" },
      { id: 2, username: "Utilisateur1", message: "Assurez-vous que votre email est correct.", timestamp: "2024-07-09T09:00:00Z" }
    ]
  },
  {
    id: 503,
    topic: "Planification de la convention annuelle",
    message: "Discutons de la planification de la convention annuelle.",
    lastActive: "2024-07-08",
    postsCount: 25,
    discussionType: "Planification de la convention",
    replies: [
      { id: 1, username: "Organisateur", message: "Nous devons confirmer les conférenciers.", timestamp: "2024-07-08T08:00:00Z" },
      { id: 2, username: "Participant", message: "Pensez à réserver le lieu à l'avance.", timestamp: "2024-07-08T09:00:00Z" }
    ]
  },
  {
    id: 504,
    topic: "Quelle est votre critique du dernier livre de J.K. Rowling?",
    message: "Partagez vos critiques du dernier livre de J.K. Rowling.",
    lastActive: "2024-07-07",
    postsCount: 30,
    discussionType: "Critique",
    replies: [
      { id: 1, username: "Critique1", message: "J'ai adoré le développement des personnages.", timestamp: "2024-07-07T08:00:00Z" },
      { id: 2, username: "Critique2", message: "L'intrigue était un peu prévisible.", timestamp: "2024-07-07T09:00:00Z" }
    ]
  },
  {
    id: 505,
    topic: "Discussion générale: Vos genres de livres préférés",
    message: "Quels sont vos genres de livres préférés?",
    lastActive: "2024-06-26",
    postsCount: 15,
    discussionType: "Discussion générale",
    replies: [
      { id: 1, username: "Lecteur1", message: "J'adore la science-fiction.", timestamp: "2024-06-26T08:00:00Z" },
      { id: 2, username: "Lecteur2", message: "Les romans policiers sont les meilleurs.", timestamp: "2024-06-26T09:00:00Z" }
    ]
  },
  {
    id: 506,
    topic: "Questions fréquentes sur la gestion des bibliothèques",
    message: "Posez vos questions sur la gestion des bibliothèques.",
    lastActive: "2024-06-10",
    postsCount: 22,
    discussionType: "Question",
    replies: [
      { id: 1, username: "Bibliothécaire", message: "Comment gérez-vous les nouveaux arrivages?", timestamp: "2024-06-10T08:00:00Z" },
      { id: 2, username: "Lecteur", message: "Quel logiciel utilisez-vous pour cataloguer?", timestamp: "2024-06-10T09:00:00Z" }
    ]
  },
  {
    id: 507,
    topic: "Blog: Comment j'ai écrit mon premier roman",
    message: "Partagez votre expérience d'écriture de votre premier roman.",
    lastActive: "2024-04-10",
    postsCount: 10,
    discussionType: "Blog",
    replies: [
      { id: 1, username: "Auteur", message: "J'ai commencé par un plan détaillé.", timestamp: "2024-04-10T08:00:00Z" },
      { id: 2, username: "Écrivain", message: "L'écriture quotidienne est la clé.", timestamp: "2024-04-10T09:00:00Z" }
    ]
  },
  {
    id: 508,
    topic: "Aide au site Web: Comment mettre à jour mon profil?",
    message: "Je ne sais pas comment mettre à jour mon profil.",
    lastActive: "2024-07-06",
    postsCount: 5,
    discussionType: "Aide au site Web",
    replies: [
      { id: 1, username: "Support", message: "Allez dans les paramètres de votre compte.", timestamp: "2024-07-06T08:00:00Z" },
      { id: 2, username: "Utilisateur1", message: "Cliquez sur 'Modifier le profil'.", timestamp: "2024-07-06T09:00:00Z" }
    ]
  },
  {
    id: 509,
    topic: "Club de lecture: Sélection du livre pour le mois prochain",
    message: "Quel livre devrions-nous lire le mois prochain?",
    lastActive: "2024-07-04",
    postsCount: 18,
    discussionType: "Club de lecture",
    replies: [
      { id: 1, username: "Lecteur1", message: "Je propose '1984' de George Orwell.", timestamp: "2024-07-04T08:00:00Z" },
      { id: 2, username: "Lecteur2", message: "Que diriez-vous de 'To Kill a Mockingbird'?", timestamp: "2024-07-04T09:00:00Z" }
    ]
  },
  {
    id: 510,
    topic: "Planification de la convention: Liste des conférenciers",
    message: "Discutons des conférenciers pour la convention.",
    lastActive: "2024-07-08",
    postsCount: 12,
    discussionType: "Planification de la convention",
    replies: [
      { id: 1, username: "Organisateur", message: "Nous avons confirmé les conférenciers suivants:...", timestamp: "2024-07-08T08:00:00Z" },
      { id: 2, username: "Participant", message: "J'ai hâte d'entendre le discours de l'auteur X.", timestamp: "2024-07-08T09:00:00Z" }
    ]
  }
];


export const fakeReviews = [
    { id: 1, bookId: 1, userId: 1, rating: 5, comment: 'Loved this book and the world-building' },
    { id: 2, bookId: 2, userId: 2, rating: 4, comment: 'Great mystery, kept me guessing until the end.' },
    { id: 3, bookId: 3, userId: 3, rating: 5, comment: 'A thrilling journey through space.' },
    { id: 4, bookId: 4, userId: 4, rating: 4, comment: 'A heartwarming romance story.' },
    { id: 5, bookId: 5, userId: 5, rating: 5, comment: 'An adventurous ride from start to finish.' },
    { id: 6, bookId: 6, userId: 6, rating: 3, comment: 'Good horror, but could be scarier.' },
    { id: 7, bookId: 7, userId: 7, rating: 4, comment: 'Informative and well-written.' },
    { id: 8, bookId: 8, userId: 8, rating: 5, comment: 'Great recipes, easy to follow.' },
    { id: 9, bookId: 9, userId: 9, rating: 4, comment: 'Interesting insights into tech.' },
    { id: 10, bookId: 10, userId: 10, rating: 5, comment: 'Very inspiring and motivational.' },
    { id: 11, bookId: 11, userId: 11, rating: 4, comment: 'Magical and captivating story.' },
    { id: 12, bookId: 12, userId: 12, rating: 4.5, comment: 'Kept me on the edge of my seat.' },
    { id: 13, bookId: 13, userId: 13, rating: 5, comment: 'A masterpiece of sci-fi literature.' },
    { id: 14, bookId: 14, userId: 14, rating: 3.5, comment: 'Beautiful poems, some more touching than others.' },
    { id: 15, bookId: 15, userId: 15, rating: 5, comment: 'Epic adventures and memorable characters.' },
    { id: 16, bookId: 1, userId: 2, rating: 4.5, comment: 'A wonderful read with a great plot.' },
    { id: 17, bookId: 2, userId: 3, rating: 4, comment: 'Enjoyed the twists and turns.' },
    { id: 18, bookId: 3, userId: 4, rating: 5, comment: 'Absolutely loved the space exploration theme.' },
    { id: 19, bookId: 4, userId: 5, rating: 4.5, comment: 'A sweet and touching story.' },
    { id: 20, bookId: 5, userId: 6, rating: 5, comment: 'Thrilling adventures that kept me hooked.' },
];

