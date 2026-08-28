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
      <div className='bg-zinc-950 border-3 border-emerald-300 rounded-xl p-8 max-w-sm w-full mx-4 shadow-xl'>
        <h2 className='text-3xl font-bold text-center mb-4'>Game Over!</h2>
        <p className='text-center font-medium mb-2'>You scored:</p>
        <p className='text-center text-5xl font-bold mb-6'>{finalScore}</p>
        <button
          onClick={onPlayAgain}
          className='w-full bg-zinc-900 hover:bg-emerald-400 hover:text-zinc-900 hover:border-zinc-800 font-bold py-3 px-4 rounded-lg transition-colors border border-emerald-300 cursor-pointer'
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
