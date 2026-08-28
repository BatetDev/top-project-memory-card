// src/components/GameOverModal.jsx

import { FaTrophy, FaDizzy } from 'react-icons/fa';

/**
 * GameOverModal component — displays a modal when the game ends.
 * Shows victory or loss state with appropriate icon and message.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the modal should be visible
 * @param {number} props.finalScore - The score achieved in this round
 * @param {number} props.totalCountries - Total number of countries in the game
 * @param {Function} props.onPlayAgain - Function to call when Play Again is clicked
 */
export default function GameOverModal({
  isOpen,
  finalScore,
  totalCountries,
  onPlayAgain,
}) {
  if (!isOpen) return null;

  const isVictory = finalScore === totalCountries;

  return (
    <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fadeInModal'>
      <div className='bg-zinc-900 rounded-lg p-8 max-w-sm w-full mx-4 shadow-xl border border-emerald-700'>
        {isVictory ? (
          <>
            <div className='flex justify-center mb-2'>
              <FaTrophy className='text-6xl text-yellow-400' />
            </div>
            <h2 className='text-3xl font-bold text-center text-emerald-400 mb-2'>
              Congratulations!
            </h2>
            <p className='text-center text-emerald-400 mb-2 font-medium'>
              You clicked all countries!
            </p>
          </>
        ) : (
          <>
            <div className='flex justify-center mb-2'>
              <FaDizzy className='text-6xl text-red-400' />
            </div>
            <h2 className='text-3xl font-bold text-center text-red-400 mb-2'>
              Game Over!
            </h2>
            <p className='font-medium text-center text-emerald-400 mb-2'>
              Better luck next time!
            </p>
          </>
        )}
        <p className='font-medium text-center text-emerald-400 mb-2'>
          You scored:
        </p>
        <p className='text-center text-5xl font-bold text-emerald-400 mb-6'>
          {finalScore}
        </p>
        <button
          onClick={onPlayAgain}
          className='w-full bg-zinc-950 hover:bg-emerald-600 text-emerald-400 hover:text-zinc-900 font-bold py-3 px-4 border border-emerald-400 hover:border-zinc-900 rounded-lg transition-colors cursor-pointer'
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
