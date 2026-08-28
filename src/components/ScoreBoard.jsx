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
    <div className='flex justify-between items-center p-2 bg-zinc-900 border-3 border-emerald-300 rounded-lg shadow-md mb-6 gap-2'>
      {/* Current Score */}
      <div className='text-center'>
        <p className='text-sm font-medium'>Current Score</p>
        <p className='text-2xl font-bold'>{currentScore}</p>
      </div>

      {/* Progress Indicator */}
      <div className='text-center px-4 sm:border-x sm:'>
        <p className='text-sm font-medium'>Countries Clicked</p>
        <p className='text-xl font-bold'>
          {clickedCount} / {totalCountries}
        </p>
        {isComplete ? (
          <p className='text-xs text-green-600 font-medium'>
            🎉 You've clicked all countries!
          </p>
        ) : (
          <p className='text-sm font-medium'>Click all without repeating!</p>
        )}
      </div>

      {/* Best Score */}
      <div className='text-center'>
        <p className='text-sm font-medium'>Best Score</p>
        <p className='text-2xl font-bold'>{bestScore}</p>
      </div>
    </div>
  );
}
