import RAW_GAMES from '../data/games.json';


const ALL_GAMES = RAW_GAMES;


function recommendGames(userInputs) {
  const { genre, platform, priceRange, releaseYear, ratingImportance, timeCommitment } = userInputs;

  const results = ALL_GAMES.map(game => {
    let score = 0;
    let maxScore = 0;

    const selectedGenre = genre?.toLowerCase();
    const selectedPlatform = platform?.toLowerCase();
    const gameGenres = Array.isArray(game.genre)
      ? game.genre.map(g => g.toLowerCase())
      : [String(game.genre).toLowerCase()];
    const gamePlatforms = game.platforms.map(p => p.toLowerCase());

    // Genre match
    maxScore += 1;
    if (selectedGenre && gameGenres.includes(selectedGenre)) {
      score += 1;
    }

    // Platform match
    maxScore += 1;
    if (selectedPlatform && gamePlatforms.includes(selectedPlatform)) {
      score += 1;
    }

   // Price range match
    maxScore += 1;
    if (priceRange && game.priceRange === priceRange) {
      score += 1;
    }



    // Release year match
    maxScore += 1;
    let yearMatch = false;
    if (releaseYear === "2020+" && game.releaseYear >= 2020) yearMatch = true;
    else if (releaseYear === "2015-2019" && game.releaseYear >= 2015 && game.releaseYear <= 2019) yearMatch = true;
    else if (releaseYear === "2010-2014" && game.releaseYear >= 2010 && game.releaseYear <= 2014) yearMatch = true;
    else if (releaseYear === "2000-2009" && game.releaseYear >= 2000 && game.releaseYear <= 2009) yearMatch = true;
    else if (releaseYear === "before-2000" && game.releaseYear < 2000) yearMatch = true;
    if (yearMatch) {
      score += 1;
    }

    // Time commitment match
    maxScore += 1;
    if (game.timeCommitment === timeCommitment) {
      score += 1;
    }

    // Rating weight
    maxScore += 1;
    let ratingWeight = 0;
    if (ratingImportance === "low") ratingWeight = 0.3;
    else if (ratingImportance === "medium") ratingWeight = 0.6;
    else if (ratingImportance === "high") ratingWeight = 1;
    score += (game.rating / 100) * ratingWeight;

    const matchScore = Math.round((score / maxScore) * 100);

    return {
      ...game,
      matchScore
    };
  }).filter(game => game.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 6);

  return results;
}

export default recommendGames;
