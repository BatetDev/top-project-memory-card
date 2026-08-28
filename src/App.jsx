// src/App.jsx

import useCardManager from './hooks/useCardManager';
import ScoreBoard from './components/ScoreBoard';
import Card from './components/Card';
import GameOverModal from './components/GameOverModal';
import Footer from './components/Footer';
import { FaFlag } from 'react-icons/fa';

function App() {
  const {
    currentCards,
    currentScore,
    bestScore,
    isGameOver,
    isLoading,
    handleCardClick,
    resetGame,
    clickedCount,
    totalCountries,
  } = useCardManager();

  // Show loading state
  if (isLoading) {
    return (
      <div className='max-w-4xl mx-auto p-4 text-center text-emerald-300 bg-zinc-950'>
        <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6'>
          Countries Memory Card Game
        </h1>
        <p>Loading countries...</p>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto px-2 py-3 overflow-hidden bg-zinc-950 text-emerald-300'>
      <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 flex items-center justify-center gap-3'>
        <FaFlag />
        <span>Countries Memory Card Game</span>
      </h1>

      <ScoreBoard
        currentScore={currentScore}
        bestScore={bestScore}
        clickedCount={clickedCount}
        totalCountries={totalCountries}
      />

      {/* Card Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
        {currentCards.map((country) => (
          <Card
            key={country.id}
            country={country}
            onClick={handleCardClick}
            isGameOver={isGameOver}
            isLoading={isLoading}
          />
        ))}
      </div>

      {/* Game Over Modal */}
      <GameOverModal
        isOpen={isGameOver}
        finalScore={currentScore}
        onPlayAgain={resetGame}
      />
      <Footer />
    </div>
  );
}

export default App;
