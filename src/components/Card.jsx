// src/components/Card.jsx

/**
 * Card component — displays a single country card with flag and name
 * Clicking the card triggers the handleCardClick function passed from the parent
 *
 * @param {Object} props
 * @param {Object} props.country
 * @param {Function} props.onClick
 * @param {boolean} props.isGameOver
 * @param {boolean} props.isLoading
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
        border-2 border-gray-300 rounded-lg p-2.5 text-center bg-white transition-all duration-200 ${isDisabled ? 'opacity-70 cursor-default' : 'cursor-pointer hover:scale-105 hover:shadow-lg'}
      `}
      onClick={handleClick}
    >
      <div className='w-full aspect-[3/2] mb-0 overflow-hidden flex items-center justify-center'>
        <img
          src={flag}
          alt={`Flag of ${name}`}
          className='w-full h-full object-contain'
        />
      </div>
      <p className='p-1 text-sm font-medium line-clamp-2 h-10'>{name}</p>
    </div>
  );
}
