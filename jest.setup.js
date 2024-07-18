import "@testing-library/jest-dom/extend-expect";

require('dotenv').config();

// Set up global process.env
global.process.env = { ...process.env };

// Polyfill import.meta.env for Jest
global.import = {
  meta: {
    env: {
      VITE_API_URL: 'https://newsapi.org/v2/',
      VITE_API_KEY: '867e258842f04997baddbea23980163f',
      // Add other environment variables as needed for testing
    },
  },
};