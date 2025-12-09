import './App.css';
import { useState } from 'react';
import PreferencesForm from './components/PreferencesForm';
import GameResults from './components/GameResults';
import recommendGames from './utils/recommendGames';

function App() {
  const [recommendedGames, setRecommendedGames] = useState([]);

  const handlePreferencesSubmit = (userInputs) => {
    const results = recommendGames(userInputs);
    setRecommendedGames(results);
    console.log('User inputs:', userInputs);
    console.log('Recommendations:', results);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Multi-Gaming Platform Recommender
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Hi! I’m your Game Recommendation Assistant. I’ll help you pick the best game for your device, budget, and play style.
          </p>
          <p className="text-lg text-gray-400">
            Step 1: Tell me your preferences. Step 2: Get your best-fit games.
          </p>
        </div>

        {/* Preferences Form */}
        <PreferencesForm onSubmit={handlePreferencesSubmit} />

        <GameResults games={recommendedGames} />
      </div>
    </div>
  );
}

export default App;
