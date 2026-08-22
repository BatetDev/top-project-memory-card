// src/App.jsx

import { useEffect } from 'react';
import { fetchCountries } from './utils/api';

function App() {
  useEffect(() => {
    async function testFetch() {
      try {
        console.log('🔄 Fetching countries...');
        const countries = await fetchCountries();
        console.log(
          '✅ Success! Number of countries fetched:',
          countries.length,
        );
        console.log(countries);
      } catch (error) {
        console.error('❌ Test failed:', error);
      }
    }

    testFetch();
  }, []);

  return (
    <div>
      <h1>Memory Card Game - API Test</h1>
      <p>Open the browser console (F12) to see the results.</p>
    </div>
  );
}

export default App;
