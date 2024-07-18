module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  },
  setupFilesAfterEnv: [
    "<rootDir>/node_modules/@testing-library/jest-dom/extend-expect",
  ],
};
