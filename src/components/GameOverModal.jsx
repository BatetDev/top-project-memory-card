// src/components/GameOverModal.jsx

/**
 * GameOverModal component — displays a modal when the game ends.
 * Shows the final score and provides a button to restart.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {number} props.finalScore
 * @param {Function} props.onPlayAgain
 */

export default function GameOverModal({ isOpen, finalScore, onPlayAgain }) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeInModal'>
      <div className='bg-white rounded-lg p-8 max-w-sm w-full mx-4 shadow-xl'>
        <h2 className='text-3xl font-bold text-center text-red-600 mb-4'>
          Game Over!
        </h2>
        <p className='text-center text-gray-700 mb-2'>You scored:</p>
        <p className='text-center text-5xl font-bold text-blue-600 mb-6'>
          {finalScore}
        </p>
        <button
          onClick={onPlayAgain}
          className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors'
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
