/**
 * Card component — displays a single country card with flag and name.
 * Clicking the card triggers the handleCardClick function passed from the parent.
 *
 * @param {Object} props
 * @param {Object} props.country - The country object { id, name, flag }
 * @param {Function} props.onClick - Function to call when the card is clicked
 * @param {boolean} props.isGameOver - Whether the game is over (disables clicking)
 * @param {boolean} props.isLoading - Whether data is still loading
 */
export default function Card({ country, onClick, isGameOver, isLoading }) {
  const { id, name, flag } = country;

  const handleClick = () => {
    if (!isGameOver && !isLoading) {
      onClick(id);
    }
  };

  const isDisabled = isGameOver || isLoading;

  return (
    <div
      className={`
        border-3 border-emerald-300 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col gap-0.5 text-center bg-zinc-900 transition-all duration-200 animate-fadeIn
        ${isDisabled ? 'opacity-70 cursor-default' : 'cursor-pointer hover:scale-101 hover:shadow-lg'}
      `}
      onClick={handleClick}
    >
      <div className='w-full aspect-3/2 overflow-hidden flex items-center justify-center'>
        <div className='w-full h-30 overflow-hidden flex items-center justify-center'>
          <img
            src={flag}
            alt={`Flag of ${name}`}
            className='w-full h-full object-contain rounded-md md:rounded-lg lg:rounded-xl'
            fetchpriority='high'
          />
        </div>
      </div>
      <p className='p-1 font-medium md:text-lg lg:text-xl line-clamp-2 h-10 flex items-center justify-center'>
        {name}
      </p>
    </div>
  );
}
