// src/components/ScoreBoard.jsx

/**
 * ScoreBoard component — displays current score and best score.
 *
 * @param {Object} props
 * @param {number} props.currentScore
 * @param {number} props.bestScore - The best score achieved
 * @param {number} props.clickedCount - Number of unique countries clicked
 * @param {number} props.totalCountries - Total number of countries in the game
 */
export default function ScoreBoard({
  currentScore,
  bestScore,
  clickedCount,
  totalCountries,
}) {
  const isComplete = clickedCount === totalCountries && totalCountries > 0;

  return (
    <div className='flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mb-6 gap-2'>
      {/* Current Score */}
      <div className='text-center'>
        <p className='text-sm text-gray-600 font-medium'>Current Score</p>
        <p className='text-2xl font-bold text-blue-600'>{currentScore}</p>
      </div>

      {/* Progress Indicator */}
      <div className='text-center px-4 sm:border-x sm:border-gray-300'>
        <p className='text-sm text-gray-600 font-medium'>Countries Clicked</p>
        <p className='text-xl font-bold text-purple-600'>
          {clickedCount} / {totalCountries}
        </p>
        {isComplete ? (
          <p className='text-xs text-green-600 font-medium'>
            🎉 You've clicked all countries!
          </p>
        ) : (
          <p className='text-xs text-gray-500'>
            Click all without repeating to win!
          </p>
        )}
      </div>

      {/* Best Score */}
      <div className='text-center'>
        <p className='text-sm text-gray-600 font-medium'>Best Score</p>
        <p className='text-2xl font-bold text-green-600'>{bestScore}</p>
      </div>
    </div>
  );
}
