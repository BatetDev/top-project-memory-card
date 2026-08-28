/**
 * ScoreBoard component — displays current score, best score, and progress.
 *
 * @param {Object} props
 * @param {number} props.currentScore - The current score achieved this round
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
    <div className='flex justify-evenly items-center p-2 sm:p-3 md:p-4 lg:p-5 bg-zinc-900 border-3 border-emerald-300 rounded-lg shadow-md mb-6 md:mb-8 gap-2'>
      <div className='text-center flex flex-col gap-0.5'>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl font-medium'>
          Current Score
        </p>
        <p className='text-2xl lg:text-3xl font-bold'>{currentScore}</p>
      </div>

      <div className='text-center px-4 md:px-8 sm:border-x flex flex-col gap-0.5'>
        <p className='text-sm md:text-base lg:text-lg font-medium'>
          Countries Clicked
        </p>
        <p className='text-xl font-bold'>
          {clickedCount} / {totalCountries}
        </p>
        {isComplete ? (
          <p className='text-xs md:text-sm lg:text-base text-sky-400 font-medium'>
            🎉 You've clicked all countries!
          </p>
        ) : (
          <p className='text-sm lg:text-base font-medium'>
            Click all without repeating!
          </p>
        )}
      </div>

      <div className='text-center flex flex-col gap-.5'>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl font-medium'>
          Best Score
        </p>
        <p className='text-2xl lg:text-3xl font-bold'>{bestScore}</p>
      </div>
    </div>
  );
}
