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
    // Only allow clicks if game is not over and not loading
    if (!isGameOver && !isLoading) {
      onClick(id);
    }
  };

  return <div></div>;
}
