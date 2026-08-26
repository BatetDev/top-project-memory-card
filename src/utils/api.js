// src/utils/api.js

const API_BASE_URL = 'https://api.restcountries.com/countries/v5';

/**
 * Fetches all UN member states from the v5 API using pagination
 * Combines both pages into a single array.
 *
 * @returns {Promise<Array<{id: string, name: string, flag: string}>>}
 */
export async function fetchCountries() {
  const apiKey = import.meta.env.VITE_RESTCOUNTRIES_API_KEY;

  if (!apiKey) {
    console.warn(
      '⚠️ API key not found. Please add VITE_RESTCOUNTRIES_API_KEY to your .env file.',
    );
  }

  try {
    const limit = 100;
    const allCountries = [];

    // Fetch page 1 (offset defaults to 0)
    console.log('📦 Fetching page 1...');
    const response1 = await fetch(
      `${API_BASE_URL}?limit=${limit}&unMembersOnly=true&response_fields=codes.alpha_3,names.common,flag.url_svg`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    if (!response1.ok) {
      throw new Error(`Failed to fetch page 1: ${response1.status}`);
    }

    // Fetch page 2 (offset=100)
    console.log('📦 Fetching page 2...');
    const response2 = await fetch(
      `${API_BASE_URL}?limit=${limit}&offset=${limit}&unMembersOnly=true&response_fields=codes.alpha_3,names.common,flag.url_svg`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    if (!response2.ok) {
      throw new Error(`Failed to fetch page 2: ${response2.status}`);
    }

    const data2 = await response2.json();
    allCountries.push(...data2.data.objects);
    console.log(`📦 Page 2 fetched: ${data2.data.objects.length} countries`);

    console.log(`✅ Total countries fetched: ${allCountries.length}`);

    return allCountries.map((country) => ({
      id: country.codes.alpha_3 || country.uuid,
      name: country.names.common,
      flag: country.flag.url_svg,
    }));
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
}
