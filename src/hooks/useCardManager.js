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
  // Master list of all countries fetched from the API
  const [masterCountries, setMasterCountries] = useState([]);

  // The 6 cards currently displayed on the board
  const [currentCards, setCurrentCards] = useState([]);

  // Set of IDs the player has already clicked in this round
  const [clickedIds, setClickedIds] = useState(new Set());

  // Current score (total successful unique clicks)
  const [currentScore, setCurrentScore] = useState(0);
  // Best score achieved across all rounds
  const [bestScore, setBestScore] = useState(0);

  // Is the game over (player clicked a duplicate)?
  const [isGameOver, setIsGameOver] = useState(false);

  // Are we still loading data from the API?
  const [isLoading, setIsLoading] = useState(true);

  return {
    currentCards,
    currentScore,
    bestScore,
    isGameOver,
    isLoading,
  };
}
