import { useState, useEffect } from 'react';
import { fetchCountries } from '../utils/api';

/**
 * Custom hook that manages all game logic for the Memory Card Game.
 * It handles fetching countries, shuffling cards, tracking scores,
 * and managing game state.
 *
 * @returns {Object} An object containing all game state and functions
 */
export default function useCardManager() {
  // --- State ---
  const [masterCountries, setMasterCountries] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);
  const [clickedIds, setClickedIds] = useState(new Set());
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // --- Helper Functions ---

  /**
   * Picks a random subset of cards from the pool.
   * @param {Array} pool - The array of all available countries.
   * @param {number} count - How Many cards to pick (default: 6).
   * @returns {Array} A new array containing 'count' random countries
   */
  function pickRandomCards(pool, count = 6) {
    // Create a copy of the pool so we don't mutate the original
    const shuffled = [...pool];
    // Shuffle the copy
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Return the first 'count' items
    return shuffled.slice(0, count);
  }

  // --- Fetch countries on mount ---
  useEffect(() => {
    async function loadCountries() {
      try {
        const countries = await fetchCountries();
        setMasterCountries(countries);

        const initialCards = pickRandomCards(countries, 6);
        setCurrentCards(initialCards);

        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load countries', error);
        setIsLoading(false);
      }
    }
    loadCountries();
  }, []);

  // --- Core Game Logic ---

  /**
   * Handles a card click.
   * if the card is new, add it to clickedIds, increase score, and refresh the board
   * If the card is a duplicate, trigger Game Over.
   */
  function handleCardClick(id) {
    // 1. If the game is already over or still loading, do nothing
    if (isGameOver || isLoading) return;

    // 2. Check if this card was already clicked
    if (clickedIds.has(id)) {
      // Duplicate! Game Over.
      setIsGameOver(true);
      return;
    }

    // 3. New card! Add to clicked set
    const newClickedIds = new Set([...clickedIds, id]);
    setClickedIds(newClickedIds);

    // 4. Increase score
    const newScore = currentScore + 1;
    setCurrentScore(newScore);

    // 5. Update best score if needed
    if (newScore > bestScore) {
      setBestScore(newScore);
    }

    // 6. Replace the board with 6 NEW random cards
    const newCards = pickRandomCards(masterCountries, 6);
    setCurrentCards(newCards);
  }

  /**
   * Resets the game to its initial state.
   * Picks a fresh set of 6 cards and resets all scores.
   */
  function resetGame() {
    // Reset state
    setClickedIds(new Set());
    setCurrentScore(0);
    setIsGameOver(false);

    // Pick a fresh set of 6 cards
    const freshCards = pickRandomCards(masterCountries, 6);
    setCurrentCards(freshCards);
  }

  // --- Return everything components need ---
  return {
    currentCards,
    currentScore,
    bestScore,
    isGameOver,
    isLoading,
    handleCardClick,
    resetGame,
  };
}
