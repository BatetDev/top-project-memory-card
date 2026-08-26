// src/App.jsx

import useCardManager from './hooks/useCardManager';

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

  return (
    <div>
      <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
        Memory Card Game: Countries Edition
      </h1>
      <p>Open the browser console (F12) to test the game logic.</p>
      <p>
        Use <code>handleCardClick('id')</code> to simulate clicks.
      </p>
      <p>
        Use <code>resetGame()</code> to reset the game.
      </p>
      <hr />
      <div>
        <p>
          <strong>Current Score:</strong> {currentScore}
        </p>
        <p>
          <strong>Best Score:</strong> {bestScore}
        </p>
        <p>
          <strong>Game Over:</strong> {isGameOver ? '✅ Yes' : '❌ No'}
        </p>
        <p>
          <strong>Loading:</strong> {isLoading ? '⏳ Loading...' : '✅ Done'}
        </p>
        <p>
          <strong>Cards on Board:</strong> {currentCards.length}
        </p>
        <p>
          <strong>Card IDs:</strong> {currentCards.map((c) => c.id).join(', ')}
        </p>
      </div>
    </div>
  );
}

export default App;
