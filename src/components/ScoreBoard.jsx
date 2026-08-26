// src/components/ScoreBoard.jsx

/**
 * ScoreBoard component — displays current score and best score.
 *
 * @param {Object} props
 * @param {number} props.currentScore - The current score
 * @param {number} props.bestScore - The best score achieved
 */
export default function ScoreBoard({ currentScore, bestScore }) {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mb-6'>
      <div className='text-center'>
        <p className='text-sm text-gray-600 font-medium'>Current Score</p>
        <p className='text-2xl font-bold text-blue-600'>{currentScore}</p>
      </div>
      <div className='text-center'>
        <p className='text-sm text-gray-600 font-medium'>Best Score</p>
        <p className='text-2xl font-bold text-green-600'>{bestScore}</p>
      </div>
    </div>
  );
}
