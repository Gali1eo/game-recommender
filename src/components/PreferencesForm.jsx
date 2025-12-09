import React, { useState } from 'react';

function PreferencesForm({ onSubmit }) {
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [ratingImportance, setRatingImportance] = useState('');
  const [timeCommitment, setTimeCommitment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInputs = {
      genre,
      platform,
      priceRange,
      releaseYear,
      ratingImportance,
      timeCommitment,
    };
    onSubmit(userInputs);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900/70 rounded-xl p-6 md:p-8 shadow-lg border border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-200 mb-1">
            Genre
          </label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-out"
          >
            <option value="">Select Genre</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="rpg">RPG</option>
            <option value="strategy">Strategy</option>
            <option value="simulation">Simulation</option>
            <option value="sports">Sports</option>
            <option value="puzzle">Puzzle</option>
          </select>
        </div>

        <div>
          <label htmlFor="platform" className="block text-sm font-medium text-gray-200 mb-1">
            Platform
          </label>
          <select
            id="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-out"
          >
            <option value="">Select Platform</option>
            <option value="pc">PC</option>
            <option value="playstation">PlayStation</option>
            <option value="xbox">Xbox</option>
            <option value="nintendo">Nintendo Switch</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>

        <div>
          <label htmlFor="priceRange" className="block text-sm font-medium text-gray-200 mb-1">
            Price Range
          </label>
          <select
            id="priceRange"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-out"
          >
            <option value="">Select Price Range</option>
            <option value="$">$ (Free or under $10)</option>
            <option value="$$">$$ ($10 - $30)</option>
            <option value="$$$">$$$ ($30+)</option>
          </select>
        </div>

        <div>
          <label htmlFor="releaseYear" className="block text-sm font-medium text-gray-200 mb-1">
            Release Year Preference
          </label>
          <select
            id="releaseYear"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select Year</option>
            <option value="2020+">2020+</option>
            <option value="2015-2019">2015-2019</option>
            <option value="2010-2014">2010-2014</option>
            <option value="2000-2009">2000-2009</option>
            <option value="before-2000">Before 2000</option>
          </select>
        </div>

        <div>
          <label htmlFor="ratingImportance" className="block text-sm font-medium text-gray-200 mb-1">
            Rating Importance
          </label>
          <select
            id="ratingImportance"
            value={ratingImportance}
            onChange={(e) => setRatingImportance(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-out"
          >
            <option value="">Select Importance</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <p className="text-xs text-gray-400 mt-1">How much do you care about critic scores? Low: casual, High: must be excellent.</p>
        </div>

        <div>
          <label htmlFor="timeCommitment" className="block text-sm font-medium text-gray-200 mb-1">
            Time Commitment
          </label>
          <select
            id="timeCommitment"
            value={timeCommitment}
            onChange={(e) => setTimeCommitment(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-out"
          >
            <option value="">Select Commitment</option>
            <option value="main">Main story only</option>
            <option value="extra">Main + extra</option>
            <option value="completionist">Completionist</option>
          </select>
          <p className="text-xs text-gray-400 mt-1">Main: 5-10 hours. Extra: 10-20 hours. Completionist: 20+ hours.</p>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full md:w-auto inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold bg-purple-600 hover:bg-purple-500 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-950 transition duration-150 ease-out"
      >
        Recommend Games
      </button>
    </form>
  );
}

export default PreferencesForm;
