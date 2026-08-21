// src/utils/api.js

const API_BASE_URL = 'https://api.restcountries.com/countries/v5';

/**
 * Fetches countries from the v5 REST Countries API and transforms them
 * into a clean format with only the fields we need for our game.
 *
 * @async
 * @returns {Promise<Array<{id: string, name: string, flag: string}>>}
 *          A promise that resolves to an array of country objects.
 * @throws {Error} Throws an error if the network request fails or the response is not OK.
 */
export async function fetchCountries() {
  const apiKey = import.meta.env.VITE_RESTCOUNTRIES_API_KEY;

  if (!apiKey) {
    console.warn(
      '⚠️ API key not found. Please add VITE_RESTCOUNTRIES_API_KEY to your .env file.',
    );
  }

  try {
    // We use ?limit=10 for testing. We can increase this to 250 later.
    const response = await fetch(`${API_BASE_URL}?limit=10`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `🛑 Failed to fetch countries: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    return data.map((country) => ({
      id: country.cca3,
      name: country.name.common,
      flag: country.flags.svg,
    }));
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
}
