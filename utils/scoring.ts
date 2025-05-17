type ResultID = 'cozy' | 'chaos' | 'chill' | 'soulful' | 'hero' | 'main' | 'fairy' | 'meme';

const answerMapping: { [text: string]: ResultID } = {
  // Q1
  "Netflix & snack attack": "cozy",
  "Planning global domination (or laundry)": "main",
  "Taking nature selfies": "soulful",
  "Rewriting your existential crisis playlist": "chill",

  // Q2
  "Panic like it’s the season finale": "fairy",
  "Calmly accept your fate": "cozy",
  "Hunt for a power outlet like Indiana Jones": "hero",
  "Text your mom “I love you” just in case": "chill",

  // Q3
  "Invisibility (no more awkward convos!)": "cozy",
  "Reading minds (👀 tea everywhere)": "meme",
  "Teleportation (Goodbye, traffic)": "hero",
  "Speaking every language (including cat)": "meme",

  // Q4
  "“Is it food?”": "cozy",
  "“I KNEW something was coming!”": "main",
  "“You shouldn’t have… but I’m glad you did.”": "soulful",
  "“What are we running from?”": "fairy",

  // Q5
  "Mute, block, repeat": "cozy",
  "Grab popcorn": "meme",
  "Talk it out calmly": "soulful",
  "Accidentally become the therapist": "chill",

  // Q6
  "Cabin in the woods with zero WiFi": "cozy",
  "Solo trip to Tokyo with 5 cameras": "soulful",
  "Luxury island with 3 besties": "main",
  "Backpacking Europe with strangers": "chaos",

  // Q7
  "I’m not lazy, I’m on energy-saving mode.": "cozy",
  "Don’t be eye candy, be soul food.": "soulful",
  "If not now, when?": "main",
  "Dance like the WiFi’s gone.": "chaos",

  // Q8
  "Comedy of errors": "chaos",
  "Indie coming-of-age": "chill",
  "Heist thriller": "main",
  "Fantasy epic": "fairy",

  // Q9
  "Survive the day.": "cozy",
  "Take over the world, duh.": "main",
  "Going with the flow.": "chill",
  "I’m not even sure where my shoes are.": "fairy",

  // Q10
  "The kind one": "cozy",
  "The bold trailblazer": "main",
  "The quiet genius": "chill",
  "The chaos with a heart": "chaos",
};

export function matchAnswers(answers: string[]): ResultID {
  const tally: { [key in ResultID]: number } = {
    cozy: 0,
    chaos: 0,
    chill: 0,
    soulful: 0,
    hero: 0,
    main: 0,
    fairy: 0,
    meme: 0,
  };

  for (const answer of answers) {
    const type = answerMapping[answer];
    if (type) {
      tally[type]++;
    }
  }

  const sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
  return sorted[0][0] as ResultID;
}
