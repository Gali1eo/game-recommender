import React from 'react';

function GameResults({ games }) {
  if (games.length === 0) {
    return (
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-400 mb-2">No recommendations yet.</p>
        <p className="text-sm text-gray-500">Adjust your filters above and hit 'Recommend Games' to discover your perfect matches!</p>
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {games.map((game) => (
        <div key={game.id || game.name} className="fade-in-up bg-gray-900/70 border border-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:border-purple-500/50 hover:-translate-y-1 hover:scale-[1.01] transition-transform transition-shadow duration-200">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-white">{game.name}</h3>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-600/20 text-purple-300 border border-purple-500/40">
              Match {game.matchScore}%
            </span>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex flex-wrap gap-1">
              {Array.isArray(game.platforms) ? game.platforms.map(platform => (
                <span key={platform} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-700 text-gray-300">
                  {platform}
                </span>
              )) : (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-700 text-gray-300">
                  {game.platforms}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-1">
              {Array.isArray(game.genre) ? game.genre.map(genre => (
                <span key={genre} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-600/20 text-purple-300">
                  {genre}
                </span>
              )) : (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-600/20 text-purple-300">
                  {game.genre}
                </span>
              )}
            </div>
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-600/20 text-green-300">
              Rating: {game.rating}/100
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">{game.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default GameResults;
