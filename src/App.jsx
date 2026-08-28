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
      <div className='min-h-screen bg-zinc-950 text-emerald-400 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 flex items-center justify-center gap-3'>
            <FaFlag className='' />
            <span>Countries Memory Card Game</span>
          </h1>
          <p className='font-medium sm:text-lg'>Loading countries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col bg-zinc-950 text-emerald-300 md:p-4'>
      <div className='max-w-4xl mx-auto p-2 sm:p-4 w-full flex-1 flex flex-col'>
        <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-8 flex items-center justify-center gap-3 md:gap-4'>
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
        <div className='grid grid-cols-2 gap-3 md:gap-4'>
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
    </div>
  );
}

export default App;
