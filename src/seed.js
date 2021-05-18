export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const piece = (Math.random() * 16) | 0;
        const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
        return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Series
    ============================================ */
  // Documentaries
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Tiger King',
    description: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
    genre: 'documentaries',
    maturity: '18',
    slug: 'tiger-king',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Amanda Knox',
    description: 'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
    genre: 'documentaries',
    maturity: '12',
    slug: 'amanda-knox',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Citizenfour',
    description:
      'Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.',
    genre: 'documentaries',
    maturity: '12',
    slug: 'citizenfour',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Super Size Me',
    description:
      "Director Morgan Spurlock's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McDonalds",
    genre: 'documentaries',
    maturity: '12',
    slug: 'super-size-me',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Man on Wire',
    description:
      "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
    genre: 'documentaries',
    maturity: '12',
    slug: 'man-on-wire',
  });

  // Comedies
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Office',
    description:
      'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
    genre: 'comedies',
    maturity: '15',
    slug: 'the-office',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Arrested Development',
    description:
      'The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.',
    genre: 'comedies',
    maturity: '15',
    slug: 'arrested-development',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Curb Your Enthusiasm',
    description:
      'Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.',
    genre: 'comedies',
    maturity: '15',
    slug: 'curb-your-enthusiasm',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Family Guy',
    description:
      'Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.',
    genre: 'comedies',
    maturity: '15',
    slug: 'family-guy',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'South Park',
    description:
      'Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.',
    genre: 'comedies',
    maturity: '15',
    slug: 'south-park',
  });

  // Children
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Peppa Pig',
    description:
      'Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.',
    genre: 'children',
    maturity: '0',
    slug: 'peppa-pig',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Dora The Explorer',
    description:
      'Dora, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.',
    genre: 'children',
    maturity: '0',
    slug: 'dora-the-explorer',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'PAW Patrol',
    description:
      'Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.',
    genre: 'children',
    maturity: '0',
    slug: 'paw-patrol',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Arthur',
    description:
      'Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.',
    genre: 'children',
    maturity: '0',
    slug: 'arthur',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'SpongeBob',
    description:
      'A yellow sea sponge named SpongeBob SquarePants lives in the city of Bikini Bottom deep in the Pacific Ocean. ',
    genre: 'children',
    maturity: '0',
    slug: 'spongebob',
  });

  
 

  /* Films
    ============================================ */
  // Drama
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Prestige',
    description:
      'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',
    genre: 'drama',
    maturity: '15',
    slug: 'the-prestige',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Fight Club',
    description:
      'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
    genre: 'drama',
    maturity: '15',
    slug: 'fight-club',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Kings Speech',
    description:
      'King George VI tries to overcome his stammering problem with the help of speech therapist Lionel Logue and makes himself worthy enough to lead his country through World War II.',
    genre: 'drama',
    maturity: '15',
    slug: 'kings-speech',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Revenant',
    description:
      'Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion, who betrayed him.',
    genre: 'drama',
    maturity: '15',
    slug: 'the-revenant',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Social Network',
    description:
      'Mark Zuckerberg creates a social networking site, Facebook, with the help of his friend Eduardo Saverin. But soon, a string of lies tears their relationship apart even as Facebook connects people.',
    genre: 'drama',
    maturity: '12',
    slug: 'the-social-network',
  });

  
  // Children
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Hotel Transylvania',
    description:
      'Dracula, who owns a high-end resort for monsters, attempts to keep his daughter from falling in love with Jonathan, a human.',
    genre: 'children',
    maturity: '0',
    slug: 'hotel-transylvania',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Despicable Me',
    description:
      'Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.',
    genre: 'children',
    maturity: '0',
    slug: 'despicable-me',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Frozen',
    description:
      'Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.',
    genre: 'children',
    maturity: '0',
    slug: 'frozen',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Spirited Away',
    description:
      'In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.',
    genre: 'children',
    maturity: '0',
    slug: 'spirited-away',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Up',
    description:
      "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
    genre: 'children',
    maturity: '0',
    slug: 'up',
  });

  // Thriller
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Joker',
    description:
      'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.',
    genre: 'thriller',
    maturity: '15',
    slug: 'joker',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'A Quiet Place',
    description:
      'The Abbott family must now face the terrors of the outside world as they fight for survival in silence. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
    genre: 'thriller',
    maturity: '15',
    slug: 'a-quiet-place',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Black Swan',
    description:
      'Nina, a ballerina, gets the chance to play the White Swan, Princess Odette. But she finds herself slipping into madness when Thomas, the artistic director, decides that Lily might fit the role better.',
    genre: 'thriller',
    maturity: '15',
    slug: 'black-swan',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Nightcrawler',
    description:
      'Louis Bloom, a petty thief, realises that he can make money by capturing photographs of criminal activities and starts resorting to extreme tactics to get them.',
    genre: 'thriller',
    maturity: '15',
    slug: 'nightcrawler',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Silence of The Lambs',
    description:
      'Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.',
    genre: 'thriller',
    maturity: '15',
    slug: 'the-silence-of-the-lambs',
  });
}
