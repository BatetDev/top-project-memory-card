/**
 * Fetches countries from the v5 REST Countries API and transforms them
 * into a clean format with only the fields we need for our game.
 *
 * @async
 * @returns {Promise<Array<{id: string, name: string, flag: string}>>}
 *          A promise that resolves to an array of country objects.
 * @throws {Error} Throws an error if the network request fails or the response is not OK.
 */

const API_BASE_URL = 'https://api.restcountries.com/countries/v5';

export async function fetchCountries() {
  const apiKey = import.meta.env.VITE_RESTCOUNTRIES_API_KEY;

  if (!apiKey) {
    console.warn(
      '⚠️ API key not found. Please add VITE_RESTCOUNTRIES_API_KEY to your .env file.',
    );
  }

  try {
    // Using limit=10 for testing. We'll increase this to 250 later.
    const response = await fetch(`${API_BASE_URL}?limit=10`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch countries: ${response.status} ${response.statusText}`,
      );
    }

    const responseData = await response.json();
    const countries = responseData.data.objects;

    if (!Array.isArray(countries)) {
      console.error('❌ Unexpected response structure:', responseData);
      throw new Error('API response did not contain an array of countries');
    }

    return (
      countries
        // Filter out countries without a flag
        .filter((country) => country.flag && country.flag.url_svg)
        .map((country) => ({
          id: country.codes.alpha_3 || country.uuid,
          name: country.names.common,
          flag: country.flag.url_svg,
        }))
    );
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
}
