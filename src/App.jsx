// src/App.jsx

import useCardManager from './hooks/useCardManager';
import ScoreBoard from './components/ScoreBoard';
import Card from './components/Card';

function App() {
  const {
    currentCards,
    currentScore,
    bestScore,
    isGameOver,
    isLoading,
    handleCardClick,
    resetGame,
  } = useCardManager();

  // Log state to console for testing
  console.log('🃏 Current Cards:', currentCards);
  console.log('📊 Current Score:', currentScore);
  console.log('🏆 Best Score:', bestScore);
  console.log('💀 Game Over:', isGameOver);
  console.log('⏳ Loading:', isLoading);

  // Expose functions to window for manual testing
  window.handleCardClick = handleCardClick;
  window.resetGame = resetGame;
  window.currentCards = currentCards;

  // Show loading state
  if (isLoading) {
    return (
      <div className='max-w-4xl mx-auto p-4 text-center'>
        <h1 className='text-2xl font-bold mb-4'>
          Memory Card Game: Countries Edition
        </h1>
        <p className='text-gray-600'>Loading countries...</p>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6'>
        Memory Card Game: Countries Edition
      </h1>

      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />

      {/* Card Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
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

      <div className='mt-4 p-4 bg-gray-50 rounded-lg'>
        <p className='text-sm text-gray-600'>
          <strong>Status:</strong> {isLoading ? '⏳ Loading...' : '✅ Ready'}
        </p>
        <p className='text-sm text-gray-600'>
          <strong>Cards on Board:</strong> {currentCards.length}
        </p>
        <p className='text-sm text-gray-600'>
          <strong>Game Over:</strong> {isGameOver ? '✅ Yes' : '❌ No'}
        </p>
      </div>
    </div>
  );
}

export default App;
